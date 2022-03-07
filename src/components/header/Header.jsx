import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import MobileMenu from './Menu/MobileMenu';
import MegaMenu from './Menu/MegaMenu';
import { useWeb3Context } from "../../hooks/web3Context";

const PagesMenu = [
  {
    title: 'Marketplace',
    link: '/marketplace',
  },
  {
    title: 'Collections',
    link: '/collections',
  },
  {
    title: ' Profile',
    link: '/profile',
  },
  {
    title: 'Creators',
    link: '/creators',
  },
];

const Header = () => {
  const [isActive, setActive] = useState(false);
  const { connect, disconnect, connected } = useWeb3Context();
  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(()=>{
    
  },[connected])

  return (
    <div>

      <header className="header__1">
        <div className="container">
          <div className="wrapper js-header-wrapper">
            <div className="header__logo">
              <Link to="/">
                <img
                  className="header__logo"
                  id="logo_js"
                  src="img/logos/Logo.svg"
                  alt="logo"
                />
              </Link>
            </div>
            {/* ==================  */}
            <div className="header__menu">
              <ul className="d-flex space-x-20">
                <li className="has_popup">
                  <Link className="color_black is_new" to="/">
                    Home 
                    {/* <i className="ri-more-2-fill" /> */}
                  </Link>
                  {/* <ul className="menu__popup space-y-20">
                    {HomesMenu.map((val, i) => (
                      <li key={i}>
                        <Link to={val.link}>
                          <i className={`ri-${val.icon}-line`} />
                          {val.title}
                        </Link>
                      </li>
                    ))}
                  </ul> */}
                </li>
                {PagesMenu.map((val, i) => (
                  <li key={i}>
                    <Link className="color_black" to={val.link}>
                      {val.title}
                    </Link>
                  </li>
                ))}

                {/* <li className="has_popup2">
                  <Link className="color_black is_new hovered" to="/">
                    Pages <i className="ri-more-2-fill" />
                  </Link>
                  <ul className="menu__popup2 space-y-20">
                    <MegaMenu />
                  </ul>
                </li> */}
              </ul>
            </div>
            {/* ================= */}
            <div className="header__search">
              <input type="text" placeholder="Search" />
              <Link to="no-results" className="header__result">
                <i className="ri-search-line" />
              </Link>
            </div>
            <div className="header__btns">
              {connected?
                <div className="btn btn-grad btn-sm" onClick={disconnect}>
                  <i className="ri-wallet-3-line" />
                  Disconnect wallet
                </div>
                :
                <div className="btn btn-grad btn-sm" onClick={connect}>
                  <i className="ri-wallet-3-line" />
                   Connect wallet
                </div>
              }
              
            </div>
            <div className="header__burger js-header-burger" onClick={toggleClass}/>
            <div className={` header__mobile js-header-mobile  ${isActive ? 'visible': null} `}>
            <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
