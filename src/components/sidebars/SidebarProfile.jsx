import React from 'react';
import { useSelector } from 'react-redux';
const SidebarProfile = () => {
  const accountDetails = useSelector(state=>state.account.account)
  return (
    <div className="profile__sidebar">
      <div className="space-y-40">
        <div className="space-y-10">
          <h5>About me</h5>
          <div className="box space-y-20">
            <p>
              {accountDetails.aboutMe}
            </p>
          </div>
        </div>
        <div className="space-y-10">
          <h5>Follow me</h5>
          <div className="box">
            <ul className="social_profile space-y-10 overflow-hidden">
              <li>
              <a href={`https://www.instagram.com/${accountDetails.instagram}`} rel="noreferrer"  target="_blank">
                  <i className="ri-instagram-fill" />
                  <span className="color_text">Instagram/</span>
                  @{accountDetails.instagram}
                </a>
              </li>
              <li>
              <a href={`https://t.me/${accountDetails.telegram}`} rel="noreferrer"  target="_blank">
                  <i className="ri-telegram-fill" />
                  <span className="color_text"> Telegram/</span>
                  @{accountDetails.telegram}
                </a>
              </li>
              <li>
              <a href={`https://twitter.com/${accountDetails.twitter}`} target="_blank" rel="noreferrer" >
                  <i className="ri-twitter-fill" />
                  <span className="color_text"> Twitter/</span>
                  @{accountDetails.twitter}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center txt_sm mt-20 color_text">Since 2021</p>
    </div>
  );
};

export default SidebarProfile;
