import React, {Component} from 'react';
import {FooterWrapper,Img,Logo} from './style';
import LogoPic from '../../statics/logo1.jpeg';
import iOSPic from '../../statics/ios_qr.png';
import SaraQR from '../../statics/sara_qr.jpeg';

class Footer extends Component {
  render() {
    return (
      <>
        <Logo src={LogoPic} />
        <FooterWrapper>
          <Img src={SaraQR} />
          <Img src={iOSPic} />
        </FooterWrapper>
      </>
    )
  }
}

export default Footer;