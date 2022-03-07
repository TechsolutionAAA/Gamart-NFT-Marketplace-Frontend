import React, {useRef, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import Popup from 'reactjs-popup';
import { useWeb3Context  } from '../../hooks';
import { shorten } from '../../helpers';
import { creatProfile, getAccountDetails, setProfilePic } from '../../hooks/action'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePicture from "@dsalvagni/react-profile-picture"
import "@dsalvagni/react-profile-picture/dist/ProfilePicture.css"
const HeroProfile = () => {
  const profilePictureRef = React.createRef();
  const accountDetails = useSelector(state=>state.account.account);
  const dispatch = useDispatch()
  const ref = useRef();
  const [isActive, setActive] = useState(false);
  const [username, setUsername] = useState(getAccountDetails.name);
  const [aboutMe, setAboutMe] = useState(getAccountDetails.aboutMe)
  const [instagram, setInstagram] = useState(getAccountDetails.instagram);
  const [telegram, setTelegram] = useState(getAccountDetails.telegram);
  const [twitter, setTwitter] = useState(getAccountDetails.twitter);
  const [url, setUrl]=  useState(getAccountDetails.picUrl);
  const { address } = useWeb3Context()
  const toggleFollow = () => {
    setActive(!isActive);
  };
  const [isShare, setShare] = useState(false);

  const toggleShare = () => {
    setShare(!isShare);
  };
  const [isMore, setMore] = useState(false);

  const toggleMore = () => {
    setMore(!isMore);
  };
  const onCreateProfile = () => {
    console.log("create profile!", username, aboutMe);
    creatProfile(address,username, aboutMe, instagram, telegram, twitter, dispatch);
    closeTooltip();

  }

  useEffect (()=>{
    setUrl(accountDetails.picUrl)
  },[accountDetails])
  const closeTooltip = () => ref.current.close();
  const handleUpload = async () => {
    const PP = profilePictureRef.current;
    const imageData = PP.getData();
    const file = imageData.file;
    console.log("file-->>",file)
    const imageAsDataURL = PP.getImageAsDataUrl();
    const uploadPic = await setProfilePic(address, imageAsDataURL,dispatch);
    if(uploadPic){
      setUrl(imageAsDataURL)
    }
   
    ref.current.close()
  }
  return (
    <div className="mb-100">
      <div className="hero__profile">
        <div className="cover">
          <img src="img/bg/prrofile.png" alt="ImgPreview" />
        </div>
        
        <div className="infos">
          <div className="container">
            <div className="row flex-wrap align-items-center justify-content-between sm:space-y-50">
              <div className="col-md-auto mr-20">
                <div className="avatars d-flex space-x-20 align-items-center">
                  <div className="avatar_wrap">
                    <Popup
                    className='custom'
                    ref={ref}
                    trigger={
                      <img
                      className="avatar avatar-lg"
                      src={url?url:"img/avatars/avatar_4.png"}
                      alt="avatar"
                    />
                    }
                    position="bottom center">
 <div>
                      <div
                        className="popup"
                        id="popup_bid"
                        tabIndex={-1}
                        role="dialog"
                        aria-hidden="true">
                        <div>
                          <button
                            type="button"
                            className="button close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={closeTooltip}>
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className=" space-y-10">
                            
                              <ProfilePicture
                                ref={profilePictureRef}
                                useHelper={true}
                                debug={true}
                                frameFormat="circle"
                              />
                                  <button className="btn btn-sm btn-primary btn_auction" onClick={handleUpload}>
                                    <i className="ri-camera-line color_white mr-5px" />
                                    Upload
                                  </button>               
                          </div>
                        </div>
                      </div>
                    </div>
                    </Popup>
                   
                  </div>
                  {
                    accountDetails.name? <h5>{accountDetails.name}</h5>
                    : <h5>Undfined</h5>
                  }
                </div>
              </div>
              <div className="col-md-auto">
                <div className="d-sm-flex flex-wrap align-items-center space-x-20 mb-20_reset d-sm-block">
                  <div className="mb-20">
                    <div className="copy">
                      <span className="color_text"> {shorten(address)} </span>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap align-items-center space-x-20">
                    <div className="mb-20">
                      <div
                        className={`btn btn-dark btn-sm ${
                          isActive ? 'btn-prim' : null
                        } `}
                        onClick={toggleFollow}>
                        Follow{isActive ? 'ing' : null}
                      </div>
                    </div>
                    <div className="mb-20">
                      <div className="share">
                        <div className="icon" onClick={toggleShare}>
                          <i className="ri-share-line"></i>
                        </div>
                        <div
                          className={`dropdown__popup ${
                            isShare ? 'visible' : null
                          } `}>
                          <ul className="space-y-10">
                            <li>
                            <a href="https://www.facebook.com/" rel="noreferrer"  target="_blank">
                                <i className="ri-facebook-line"></i>
                              </a>
                            </li>
                            <li>
                            <a href="https://www.messenger.com/" rel="noreferrer"  target="_blank">
                                <i className="ri-messenger-line"></i>
                              </a>
                            </li>
                            <li>
                            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" >
                                <i className="ri-whatsapp-line"></i>
                              </a>
                            </li>
                            <li>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" >
                                <i className="ri-youtube-line"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mb-20">
                      <div className="more">
                        <div className="icon" onClick={toggleMore}>
                          <i className="ri-more-fill"></i>
                        </div>
                        <div
                          className={`dropdown__popup ${
                            isMore ? 'visible' : null
                          } `}>
                          <ul className="space-y-10">
                            <li>
                              <Popup
                                className="custom"
                                ref={ref}
                                trigger={
                                  <Link
                                    to="#"
                                    className="content space-x-10 d-flex">
                                    <i className="ri-flag-line" />
                                    <span> Report </span>
                                  </Link>
                                }
                                position="bottom center">
                                <div>
                                  <div
                                    className="popup"
                                    id="popup_bid"
                                    tabIndex={-1}
                                    role="dialog"
                                    aria-hidden="true">
                                    <div>
                                      <div className="space-y-20">
                                        <h3>
                                          Thank you, we've received your report
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popup>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mb-20 action">
                  <Popup
                    className="custom"
                    ref={ref}
                    trigger={
                      <button className="btn btn-sm btn-primary btn_auction">
                        <i className="ri-auction-line color_white mr-5px" />
                        {accountDetails.name?"Edit Profile": "Create Profile"}
                      </button>
                    }
                    position="bottom center">
                    <div>
                      <div
                        className="popup"
                        id="popup_bid"
                        tabIndex={-1}
                        role="dialog"
                        aria-hidden="true">
                        <div>
                          <button
                            type="button"
                            className="button close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={closeTooltip}>
                            <span aria-hidden="true">×</span>
                          </button>
                          <div className=" space-y-10">
                            <h3>{accountDetails.name?"Edit Profile": "Create Profile"}</h3>
                            <p>
                              Your name
                            </p>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="James"
                              defaultValue={accountDetails.name}
                              onChange={(e)=>{setUsername(e.target.value)}}
                            />
                            <p>
                              About me
                            </p>
                            <textarea  
                              className="form-control" 
                              name="Text1" rows="3" 
                              placeholder='I am a investor!' 
                              defaultValue={accountDetails.aboutMe}
                              onChange={(e)=>{setAboutMe(e.target.value)}}>

                            </textarea>
                            <div style={{display:'flex'}}>
                              <i className="ri-instagram-fill" style={{fontSize:'40px'}} />
                              <input
                                type="text"
                                className="form-control"
                                placeholder="instagram"
                                defaultValue={accountDetails.instagram}
                                onChange={(e)=>{setInstagram(e.target.value)}}
                              />
                            </div>
                            <div style={{display:'flex'}}>
                              <i className="ri-telegram-fill" style={{fontSize:'40px'}} />
                              <input
                                type="text"
                                className="form-control"
                                placeholder="telegram"
                                defaultValue={accountDetails.telegram}
                                onChange={(e)=>{setTelegram(e.target.value)}}
                              />
                            </div>
                           
                            <div style={{display:'flex'}}>
                              <i className="ri-twitter-fill" style={{fontSize:'40px'}} />  
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Twitter"
                                defaultValue={accountDetails.twitter}
                                onChange={(e)=>{setTwitter(e.target.value)}}
                              />
                            </div>
                            
                            <div className="hr" />
                            <button className="btn btn-primary w-full" onClick={onCreateProfile}>
                            {accountDetails.name?"Update profile": "Create Profile"}

                            </button>
                            {/* <Popup
                              className="custom"
                              ref={ref}
                              trigger={
                                <button className="btn btn-primary w-full">
                                  Create  profile
                                </button>
                              }
                              position="bottom center">
                              <div>
                                <div
                                  className="popup"
                                  id="popup_bid"
                                  tabIndex={-1}
                                  role="dialog"
                                  aria-hidden="true">
                                  <div>
                                    <button
                                      type="button"
                                      className="button close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                      onClick={closeTooltip}>
                                      <span aria-hidden="true">×</span>
                                    </button>
                                    <div className="space-y-20">
                                      <h3 className="text-center">
                                        Your Bidding Successfuly Added
                                      </h3>
                                      <p className="text-center">
                                        your bid
                                        <span
                                          className="color_text txt
      _bold">
                                          (16BNB)
                                        </span>
                                        has been listing to our database
                                      </p>
                                      <Link
                                        to="#"
                                        className="btn btn-dark w-full">
                                        Watch the listings
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popup> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;
