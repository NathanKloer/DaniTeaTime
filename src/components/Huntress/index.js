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
              <h1 className="header1">
               Huntress's Scratching Post
              </h1>
              
              <p>
                <strong>There will be lots and lots of cats and hairballs.</strong>
              </p>
            </div>
          </div>
        </div>
        <p class="testStyle">Mom's spaghetti
        <a href="https://www.google.com">HELLOOOOOOO</a>
        </p>

        <Route path="/library" component={RoomPage}/>
      </div>
    </MDBContainer>
  );
}

export default HuntressPage;