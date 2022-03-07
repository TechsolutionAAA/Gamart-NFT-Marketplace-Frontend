import React from 'react';
import {Link} from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import CardMarketArt from '../../../components/cards/CardMarketArt';
import CardMarketCards from '../../../components/cards/CardMarketCards';
import CardMarketCollectibles from '../../../components/cards/CardMarketCollectibles';
import CardMarketDomain from '../../../components/cards/CardMarketDomain';
import CardMarketMemes from '../../../components/cards/CardMarketMemes';
import CardMarketMusic from '../../../components/cards/CardMarketMusic';
import CardMarketplace from '../../../components/cards/CardMarketplace';
import CardMarketplaceGame from '../../../components/cards/CardMarketplaceGame';
import CardsCrerators from '../../../components/cards/filterscards/CardsCreators';
import CardsOffer from '../../../components/cards/filterscards/CardsOffer';
import CardsPrice from '../../../components/cards/filterscards/CardsPrice';
import CardsSold from '../../../components/cards/filterscards/CardsSold';
import Collection2 from '../../../components/collection/Collection2';

function MenuCategoriesMarket() {
  return (
    <div className="w-100">
      <Tabs className=" border-b">
        <TabList className="menu_categories  bg_white py-20 px-15 w-100">
          <Tab>
            <Link className="color_brand" to="/marketplace">
              <span> All </span>
            </Link>
          </Tab>
          <Tab>
            <Link to="/marketplace">
              <i className="ri-gamepad-line" />
              <span> Games</span>
            </Link>
          </Tab>
          <Tab>
            <Link to="/marketplace">
              <i className="ri-brush-line" />
              <span> Art</span>
            </Link>
          </Tab>
          <Tab>
            <Link to="/marketplace">
              <i className="ri-stock-line" />
              <span> Trading Cards</span>
            </Link>
          </Tab>
          <Tab>
            <Link to="/marketplace">
              <i className="ri-music-line" />
              <span> Music</span>
            </Link>
          </Tab>
          <Tab>
            <Link to="/marketplace">
              <i className="ri-global-line" />
              <span> Domain Names</span>
            </Link>
          </Tab>
          <Tab>
            <Link to="/marketplace">
              <i className="ri-emotion-laugh-line" />
              <span> Memes</span>
            </Link>
          </Tab>
          <Tab>
            <Link to="/marketplace">
              <i className="ri-layout-4-line" />
              <span> Collectibles</span>
            </Link>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="container">
            <div className="section mt-100">
              <div>
                <h2 className="section__title mb-20"> All Categories</h2>
                <div>
                  <div>
                    <div className="d-flex align-items-center">
                      <Tabs>
                        <div className="row justify-content-between align-items-center section__head">
                          <div className="col-lg-auto">
                            <TabList className="menu_categories menu_start">
                              <Tab className="switch_item">
                                <span className="btn btn-white btn-sm">
                                  All items
                                </span>
                              </Tab>
                              {/* <Tab className="switch_item">
                                <span className="btn btn-white btn-sm">
                                  Has list price
                                </span>
                              </Tab>
                              <Tab className="switch_item">
                                <span className="btn btn-white btn-sm">
                                  Has open offer
                                </span>
                              </Tab>
                              <Tab className="switch_item">
                                <span className="btn btn-white btn-sm">
                                  Owned by creator
                                </span>
                              </Tab>
                              <Tab className="switch_item">
                                <span className="btn btn-white btn-sm">
                                  Has sold
                                </span>
                              </Tab> */}
                            </TabList>
                          </div>
                        </div>

                        <TabPanel>
                          <CardMarketplace />
                        </TabPanel>
                        {/* <TabPanel>
                          <CardsPrice />
                        </TabPanel>
                        <TabPanel>
                          <CardsOffer />
                        </TabPanel>
                        <TabPanel>
                          <CardsCrerators />
                        </TabPanel>
                        <TabPanel>
                          <CardsSold />
                        </TabPanel> */}
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section mt-100">
              <div className="section__head">
                <h2 className="section__title mb-20"> Collections</h2>
              </div>
              <Collection2 />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="section mt-100">
              <div className="section__head">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="section__title"> Games</h2>

                </div>
              </div>
              <CardMarketplaceGame />
            </div>
            <div className="section mt-100">
              <div className="section__head">
                <h2 className="section__title mb-20"> Collections</h2>
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-auto">
                    <div className="d-flex align-items-center">
                      <span
                        className="color_text txt_sm d-none d-sm-block mr-10"
                        style={{minWidth: 'max-content'}}>
                        FILTER BY:
                      </span>
                      <ul className="menu_categories space-x-20">
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch7" />
                          <label htmlFor="switch7" className="ml-0">
                            Toggle
                          </label>
                          <span> Has list price </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch8" defaultChecked />
                          <label htmlFor="switch8" className="ml-0">
                            Toggle
                          </label>
                          <span> Has open offer </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch9" />
                          <label htmlFor="switch9" className="ml-0">
                            Toggle
                          </label>
                          <span> Owned by creator </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch10" />
                          <label htmlFor="switch10" className="ml-0">
                            Toggle
                          </label>
                          <span> Has sold </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <Collection2 />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="section mt-100">
              <div className="section__head">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="section__title"> Artworks</h2>

                </div>
              </div>
              <CardMarketArt />
            </div>
            <div className="section mt-100">
              <div className="section__head">
                <h2 className="section__title mb-20"> Collections</h2>
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-auto">
                    <div className="d-flex align-items-center">
                      <span
                        className="color_text txt_sm d-none d-sm-block mr-10"
                        style={{minWidth: 'max-content'}}>
                        FILTER BY:
                      </span>
                      <ul className="menu_categories space-x-20">
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch7" />
                          <label htmlFor="switch7" className="ml-0">
                            Toggle
                          </label>
                          <span> Has list price </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch8" defaultChecked />
                          <label htmlFor="switch8" className="ml-0">
                            Toggle
                          </label>
                          <span> Has open offer </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch9" />
                          <label htmlFor="switch9" className="ml-0">
                            Toggle
                          </label>
                          <span> Owned by creator </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch10" />
                          <label htmlFor="switch10" className="ml-0">
                            Toggle
                          </label>
                          <span> Has sold </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <Collection2 />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="section mt-100">
              <div className="section__head">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="section__title"> Trading Cards</h2>

                </div>
              </div>
              <CardMarketCards />
            </div>
            <div className="section mt-100">
              <div className="section__head">
                <h2 className="section__title mb-20"> Collections</h2>
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-auto">
                    <div className="d-flex align-items-center">
                      <span
                        className="color_text txt_sm d-none d-sm-block mr-10"
                        style={{minWidth: 'max-content'}}>
                        FILTER BY:
                      </span>
                      <ul className="menu_categories space-x-20">
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch7" />
                          <label htmlFor="switch7" className="ml-0">
                            Toggle
                          </label>
                          <span> Has list price </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch8" defaultChecked />
                          <label htmlFor="switch8" className="ml-0">
                            Toggle
                          </label>
                          <span> Has open offer </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch9" />
                          <label htmlFor="switch9" className="ml-0">
                            Toggle
                          </label>
                          <span> Owned by creator </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch10" />
                          <label htmlFor="switch10" className="ml-0">
                            Toggle
                          </label>
                          <span> Has sold </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <Collection2 />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="section mt-100">
              <div className="section__head">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="section__title"> Music</h2>

                </div>
              </div>
              <CardMarketMusic />
            </div>
            <div className="section mt-100">
              <div className="section__head">
                <h2 className="section__title mb-20"> Collections</h2>
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-auto">
                    <div className="d-flex align-items-center">
                      <span
                        className="color_text txt_sm d-none d-sm-block mr-10"
                        style={{minWidth: 'max-content'}}>
                        FILTER BY:
                      </span>
                      <ul className="menu_categories space-x-20">
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch7" />
                          <label htmlFor="switch7" className="ml-0">
                            Toggle
                          </label>
                          <span> Has list price </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch8" defaultChecked />
                          <label htmlFor="switch8" className="ml-0">
                            Toggle
                          </label>
                          <span> Has open offer </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch9" />
                          <label htmlFor="switch9" className="ml-0">
                            Toggle
                          </label>
                          <span> Owned by creator </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch10" />
                          <label htmlFor="switch10" className="ml-0">
                            Toggle
                          </label>
                          <span> Has sold </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <Collection2 />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="section mt-100">
              <div className="section__head">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="section__title"> Domain Names</h2>

                </div>
              </div>
              <CardMarketDomain />
            </div>
            <div className="section mt-100">
              <div className="section__head">
                <h2 className="section__title mb-20"> Collections</h2>
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-auto">
                    <div className="d-flex align-items-center">
                      <span
                        className="color_text txt_sm d-none d-sm-block mr-10"
                        style={{minWidth: 'max-content'}}>
                        FILTER BY:
                      </span>
                      <ul className="menu_categories space-x-20">
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch7" />
                          <label htmlFor="switch7" className="ml-0">
                            Toggle
                          </label>
                          <span> Has list price </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch8" defaultChecked />
                          <label htmlFor="switch8" className="ml-0">
                            Toggle
                          </label>
                          <span> Has open offer </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch9" />
                          <label htmlFor="switch9" className="ml-0">
                            Toggle
                          </label>
                          <span> Owned by creator </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch10" />
                          <label htmlFor="switch10" className="ml-0">
                            Toggle
                          </label>
                          <span> Has sold </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <Collection2 />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="section mt-100">
              <div className="section__head">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="section__title">Memes</h2>

                </div>
              </div>
              <CardMarketMemes />
            </div>
            <div className="section mt-100">
              <div className="section__head">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="section__title">Collections</h2>

                </div>
              </div>
              <Collection2 />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="section mt-100">
              <div className="section__head">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="section__title">Collectibles</h2>

                </div>
              </div>
              <CardMarketCollectibles />
            </div>
            <div className="section mt-100">
              <div className="section__head">
                <h2 className="section__title mb-20"> Collections</h2>
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-auto">
                    <div className="d-flex align-items-center">
                      <span
                        className="color_text txt_sm d-none d-sm-block mr-10"
                        style={{minWidth: 'max-content'}}>
                        FILTER BY:
                      </span>
                      <ul className="menu_categories space-x-20">
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch7" />
                          <label htmlFor="switch7" className="ml-0">
                            Toggle
                          </label>
                          <span> Has list price </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch8" defaultChecked />
                          <label htmlFor="switch8" className="ml-0">
                            Toggle
                          </label>
                          <span> Has open offer </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch9" />
                          <label htmlFor="switch9" className="ml-0">
                            Toggle
                          </label>
                          <span> Owned by creator </span>
                        </li>
                        <li className="d-flex space-x-10 switch_item">
                          <input type="checkbox" id="switch10" />
                          <label htmlFor="switch10" className="ml-0">
                            Toggle
                          </label>
                          <span> Has sold </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <Collection2 />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MenuCategoriesMarket;
