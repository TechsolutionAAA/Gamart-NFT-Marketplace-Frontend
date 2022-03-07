import axios from 'axios';
import { ethers, BigNumber, BigNumberish } from "ethers";
import { JsonRpcSigner } from "@ethersproject/providers";
import { addresses } from '../constants';
import { abi as nftContractABI } from "../abi/nftContract.json";
import { abi as marketContractABI } from "../abi/marketContract.json";
import { SERVER_URL } from "../constants"
import { Description } from '@ethersproject/properties';
import { error, info} from '../slices/MessagesSlice'
// import { loadAccountDetails } from '../slices/AccountSlice'
function getNftContract(networkID, provider) {
    const nftAddress = addresses[networkID].NFT_ADDRESS;
    return new ethers.Contract(nftAddress, nftContractABI, provider)
}

function getMargetContract(networkID, provider) {
    const marketAddress = addresses[networkID].MARKET_ADDRESS;
    return new ethers.Contract(marketAddress, marketContractABI, provider)

}
export default function createItem (formData, provider, networkId) {
    const signer = provider.getSigner();
    const royalty = 0;
    const nftContract = getNftContract(networkId, signer)
    
    axios.post(`${SERVER_URL}/upload`, formData)
    .then(async (res) => {
        const data = res.data;
        await nftContract.createNFT (data.Hash, 2)
    })
    .catch(err => {
        console.log(err)
    })
}

export const getCollections = async(address, provider, networkID) => {
    return new Promise(async (resolve, reject) => {
        const signer = provider.getSigner();
        const nftContract = getNftContract(networkID, signer);
        const token_ids = await nftContract.getTokenIds(address);
        let collections = [];
        for (let id of token_ids) {
           const token_uri= await nftContract.tokenURI(Number(id.toString()));
           let res = await axios.get(token_uri)
           let data_ = res.data;
           try{
            data_["tokenID"] = Number(id.toString());
            data_["tokenURI"] = token_uri;
            collections.push(data_);
           } catch(e){
               console.log(e);
           }
           
        };
        resolve(collections)
    })
   
}

export const getTokenStatus = async (tokenID, provider, networkID) => {
    return new Promise(async (resolve, reject) => {
        const signer = provider.getSigner();
        const marketContract = getMargetContract(networkID, signer);
        const tokenStatus = await marketContract.saleItems(tokenID);
        resolve(tokenStatus)
    })
}

export const saleFunc = async (price,tokenID,address, provider, networkID) => {
    return new Promise(async (resolve, reject) => {
        const signer = provider.getSigner();
        const marketContract = getMargetContract(networkID, signer);
        const nftContract = getNftContract(networkID, signer );
        const from_ = address;
        const to_ = addresses[networkID].MARKET_ADDRESS;
        const isApproved = await nftContract.isApprovedForAll(from_, to_);
        if (!isApproved){
            await nftContract.setApprovalForAll(to_, true);
        }   
        await marketContract.putTokenOnSale(tokenID,ethers.utils.parseEther(price.toString()),false);

        resolve(true)
    })
}
 
export const removeSaleFunc = async (tokenID, provider, networkID) => {
    return new Promise(async (resolve, reject) => {
        const signer = provider.getSigner();
        const marketContract = getMargetContract(networkID, signer);
        await marketContract.removeTokenFromSale(tokenID);

        resolve(false)
    })
}

export const byNowFunc = async( price, tokenID, address, provider, networkID) => {
    return new Promise(async (resolve, reject) => {
        try{
            const signer = provider.getSigner();
            const marketContract = getMargetContract(networkID, signer);
            try{
                await marketContract.buyNFTWithBNB(tokenID, address, {value:ethers.utils.parseEther(price.toString)})

            }catch{
                await marketContract.buyNFTWithBNB(tokenID, address, {value:ethers.utils.parseEther('0.000000000000000001')})
            }
            // .send(ethers.utils.parseEther(price),address);
            resolve(false)
        } catch(e){
            reject(e)
        }
        
    })
}

export const getMarketingItems = async( provider, networkID) => {
    return new Promise(async (resolve, reject) => {
        const signer = provider.getSigner();
        const nftContract = getNftContract(networkID, signer);
        const marketContract = getMargetContract(networkID, signer);
        const itemCounts = await marketContract.saleItemsCount()
        let marketingItems = [];
        for(let i=1;i<Number(itemCounts.toString())+1;i++){
            const tokenID_ = await marketContract.tokensOnSale(i);
            const token_uri= await nftContract.tokenURI(Number(tokenID_.toString()));
            let res = await axios.get(token_uri)
            let data_ = res.data;
            try{
                data_["tokenID"] = Number(tokenID_.toString());
                data_["tokenURI"] = token_uri;
                data_["owner"] = await nftContract.ownerOf(Number(tokenID_.toString()))
                marketingItems.push(data_);
            } catch(e){
                console.log(e);
            }
            
        }


        marketingItems.length > 0 ? resolve(marketingItems) :reject('Error');
    })
   
}


export const setProfilePic = async(address,img, dispatch) => {
    return new Promise((resolve, reject) => {
        axios.post(`${SERVER_URL}/profilepic`,{address:address, picUrl:img})
        .then(async(res) => {
            const data = {res};
            if(data.success){
                dispatch(info("Successed!"))
                resolve(true)
            }else{
                dispatch(error("Failed!"))
                resolve(false)
            }
        })
        .catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export const getAccountDetails = async (address) => {
    return new Promise((resolve, reject)=>{
        axios.post(`${SERVER_URL}/check`, {address:address})
        .then(async (res) => {
            const {data} = res.data;
            console.log('checkData-->>', data)
            resolve(data)
        })
        .catch(err => {
            console.log(err)
            reject(err)
        })
    })
}

export const creatProfile = async (address,username, description, instagram, telegram, twitter, dispatch) => {
    axios.post(`${SERVER_URL}/add`, {address:address,name:username,description:description, instagram:instagram, telegram:telegram, twitter:twitter})
        .then(async (res) => {
            const {data} = res;
          
            if(data.success){
                console.log('checkData-->>', data);
                dispatch(info("Successed!"))
                // dispatch(loadAccountDetails({address:address}))
            }
        })
        .catch(err => {
            console.log(err)
            dispatch(error(err))
        })
}