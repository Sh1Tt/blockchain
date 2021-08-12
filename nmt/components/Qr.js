import React, { Component } from 'react'
import Head from 'next'

class Qr extends React.Component {
  constructor(props) {
    super(props);
    // QRCode DOM
    this.qrcodeDOM = React.createRef();
    // QRCode
    this.qrcode=null;
  }
  
  //QRCode generator
  generate(color){
      if(this.qrcode){
          this.qrcode.clear();
      }
      var options = {
      			// "https://github.com/ushelp/EasyQRCodeJS"
          text: "MyWalletAddress (QRCode)",
          colorDark : color?color:'#000000'
      };
      this.qrcode=new QRCode(this.qrcodeDOM.current, options);
  }
  
  // Gerenate QRCode on mount
  componentDidMount() { 
       this.generate()
  }
  
  render() {
    return (
      	<>
          	<div ref={this.qrcodeDOM}></div>
    		
    		{/* Gerenate QRCode on click */}
      		<button onClick={this.generate.bind(this, '#ff0000')}>QRCode Generate</button>
      		
      		{/* Include EasyQRCodeJS library*/}
      		<Head>
       				<script type="text/javascript" src="/public/easy.qrcode.min.js"></script>
     		</Head>
           		
      	</>
    );
  }
}

export default Qr;