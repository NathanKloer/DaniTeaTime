import React from "react";
import {
  // MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem,  
  MDBContainer, MDBView, MDBRow, MDBCol, MDBMask
} from "mdbreact";
import { Bead, Library, Tinfoil, Letsplay } from "../Images/index.js"
import "./index.css"

const DaniPage = () => {

  return (
    <MDBContainer id="top">
      <div className="roomcontainer-rage">
        <div className="bg-rage mt-5">
          <a href="#rage">
            <MDBView hover waves>
              <Library />
              <div className="fluid mask rgba-black-light d-flex justify-content-center align-items-center">
                <div className="hdrdetails text-center white-text mx-5 wow fadeIn">
                  <h1 className="mb-4">
                    <strong>Rage's Library of Well Reading</strong>
                  </h1>
                  <p>
                    <strong>Hello and Welcome to my library.</strong>
                  </p>
                </div>
              </div>
            </MDBView>
          </a>
        </div>
        <MDBContainer id="rage" style={{ marginTop: 2000 }}>
          <h2 className="ml-2 text-center">hey how did you get down here? This isn't ready yet
            <a href="#top">
              <button className="m-2">Click Here to Go Back</button></a>
          </h2>
        </MDBContainer>
        <div className="rage-extras">
          <MDBRow>
            <MDBCol>
              <MDBView hover waves>
                <Tinfoil />
                <MDBMask overlay="black-strong" className="flex-center rounded">
                  <h1 className="white-text text-center">TinFoil Hat Section</h1>
                </MDBMask>
              </MDBView>
              <MDBView hover waves>
                <Letsplay />
                <MDBMask overlay="black-strong" className="flex-center rounded">
                  <h1 className="white-text text-center">Fox and Bear Lets Play?</h1>
                </MDBMask>
              </MDBView>
            </MDBCol>
            <MDBCol>
              <MDBView hover waves>
                <Bead />
                <MDBMask overlay="black-strong" className="flex-center rounded">
                  <h1 className="white-text text-center">Bead Curtain Shelf</h1>
                </MDBMask>
                {/* <div className="fluid mask rgba-black-light d-flex justify-content-center align-items-center">
                  <div className="text-center white-text fadeIn">
                    <h1 className="mb-4">
                      <strong>Bead Curtain Shelf</strong>
                    </h1>
                  </div>
                </div> */}
              </MDBView>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </MDBContainer>
  );
}

export default DaniPage;
