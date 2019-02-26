import React from "react";
import { Route } from 'react-router-dom'
import {
  // MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, 
  MDBContainer
} from "mdbreact";
import { RoomPage } from "../index.js";
import "./index.css"

const HuntressPage = () => {
  return (
    <MDBContainer>
      <div className="roomcontainer">
        <div className="bg-huntress">
          <div className="mask rgba-black-light d-flex justify-content-center align-items-end">
            <div className="hdrdetails text-center white-text mx-5 wow fadeIn">
              <h1 className="mb-4">
                <strong>Huntress's Scratching Post</strong>
              </h1>
              <p>
                <strong>You might be wondering where it is. <br />
                Well it's regular size</strong>
              </p>
            </div>
          </div>
        </div>
        <p>hello world</p>
        <Route path="/library" component={RoomPage}/>
      </div>
    </MDBContainer>
  );
}

export default HuntressPage;