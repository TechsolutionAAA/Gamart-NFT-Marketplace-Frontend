import React from 'react';
import {Link} from 'react-router-dom';
function Call2action() {
  return (
    <div>
      <div className="call2action">
        <div className="container">
          <div
            className="row justify-content-between align-items-center
                        sm:space-y-20">
            <div className="col-md-6">
              <div className="space-y-20">
                <h1 className="text-white">Start Creating your collection today & earn</h1>
                <p className="color_light section__text">
                Gamart gives an opportunity to play with Gamart & Altcoins with our marketplace.
                </p>
                <Link
                  to="upload"
                  className="btn btn-primary">
                  Create NFT
                </Link>
              </div>
            </div>
            <div className="col-md-auto">
              <img
                className="img-fluid img__logo"
                alt="rr"
                src={`img/logos/Logo_illustrstion.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Call2action;
