import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow navbar-fixed-bottom row-fluid">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            <p className="d-flex align-items-center p-0 ">
              <span className="ml-3 h5 font-weight-bold">TourKG</span>
            </p>
            <CDBBox className="mt-5" display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              TourKG
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <a href="/">Resources</a>
              <a href="/">About Us</a>
              <a href="/">Contact</a>
              <a href="/">Blog</a>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Info
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <a href="/">Windframe</a>
              <a href="/">Loop</a>
              <a href="/">Contrast</a>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <a href="/">Support</a>
              <a href="/">Sign Up</a>
              <a href="/">Sign In</a>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">Made by Elina </small>
      </CDBBox>
    </CDBFooter>
  );
};