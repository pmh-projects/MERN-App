import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="primary-color-dark" className="font-small pt-4 mt-5" style={{ 
      position: 'relative',
      bottom: '0',
      left: '0',
      right: '0',
      width: '100%'
      }}>
      <MDBContainer fluid className="text-center text-md-left" style={{}}>
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Baza Cyfrowa</h5>
            <h6>Kontakty</h6>
            <p>
              Admin: 555 777 999
              <br/>
              Dział zakupów: 777 888 999
            </p>
          </MDBCol>
          <MDBCol md="6">
          <br/><br/>
          
          <img width="45px" height="45px" className="img-responsive" src='https://emojipedia-us.s3.amazonaws.com/source/skype/289/fire_1f525.png' alt="logo" />
          <p><i>EqOnFire - Best Solutions for IT</i></p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/pmh-projects"> pmh </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;