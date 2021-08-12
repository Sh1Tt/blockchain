import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import { useState } from 'react'

import UserContext from '../components/context/User';
import Layout from '../components/Layout'

import TS from '../components/Timestamp'
import Block from '../components/Block'
import Blockchain from '../components/Blockchain'
import Transaction from '../components/Transaction'
import Keypair from '../components/Keypair'
import Wallet from '../components/Wallet'

import '../styles/globals.css'

// -----------------------------------------------------------------------
// function MyApp({ Component, pageProps }) {
//   const [ data, setData ] = useState(``)

//   const appToLayout = () =>
//   {
//     setData( "From the app to the layout" )
//     console.log( pageProps )
//   }
//   setTimeout( () => { appToLayout() }, 0 )
//   return (
//     <Layout appToLayout={data}>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }

// // MyApp.getInitialProps = async (appContext) => {
// //   // calls page's `getInitialProps` and fills `appProps.pageProps`
// //   const appProps = await App.getInitialProps(appContext);

// //   return { ...appProps }
// // }
// export default MyApp
// -----------------------------------------------------------------------

const storageName = 'coolapp-user'
if ( !( typeof ( window ) === 'undefined' ) )
{
  // window.$myKey = new Keypair( Uint8Array.from( ( JSON.parse( JSON.stringify( new Keypair().generatePrivateKey() ) ) ).data ) )
  // window.$myWallet = new Wallet( window.$myKey )
  
  // const oKey = new Keypair( Uint8Array.from( ( JSON.parse( JSON.stringify( new Keypair().generatePrivateKey() ) ) ).data ) )
  // const oWallet = new Wallet( oKey )

  // const andAnoKp = JSON.stringify( new Keypair().generatePrivateKey() )
  // const andAnoKey = new Keypair( Uint8Array.from( ( JSON.parse( andAnoKp ) ).data ) )

  // const andAnoWallet = new Wallet( andAnoKey )    


  window.$NMT = new Blockchain()

  // const tx = new Transaction( window.$myWallet.address, oWallet.address, 0.00001025 )
  // tx.signTransaction( window.$myWallet.keys )
  // window.$NMT.addTransaction( tx )
  
  // window.$NMT.minePendingTransactions( window.$myWallet.address )

  // const tx1 = new Transaction( oWallet.address, andAnoWallet.address, 17.00456001 )
  // tx1.signTransaction( oWallet.keys )
  // window.$NMT.addTransaction( tx1 )

  // const tx2 = new Transaction( window.$myWallet.address, andAnoWallet.address, 4.20000000 )
  // tx2.signTransaction( window.$myWallet.keys )
  // window.$NMT.addTransaction( tx2 )

  // const tx3 = new Transaction( andAnoWallet.address, window.$myWallet.address, 100.00000000 )
  // tx3.signTransaction( andAnoWallet.keys )
  // window.$NMT.addTransaction( tx3 )

  // const tx4 = new Transaction( oWallet.address, andAnoWallet.address, 17.00456001 )
  // tx4.signTransaction( oWallet.keys )
  // window.$NMT.addTransaction( tx4 )

  // window.$NMT.minePendingTransactions( window.$myWallet.address )
  // const tx5 = new Transaction( window.$myWallet.address, oWallet.address, 40.00000000 )
  // tx5.signTransaction( window.$myWallet.keys )
  // window.$NMT.addTransaction( tx5 )

  // const tx6 = new Transaction( andAnoWallet.address, oWallet.address, 3.01754000 )
  // tx6.signTransaction( andAnoWallet.keys )
  // window.$NMT.addTransaction( tx6 )

  // window.$NMT.minePendingTransactions( window.$myWallet.address )
}
    
export default class MyApp extends App {
  state = {
    user: null,
  };


  componentDidMount = () => {
    const user = localStorage.getItem( storageName );
    if ( !( typeof ( window ) === 'undefined' ) )
    {
      
    }
    if ( user ) {
      this.setState({
        user
      });
    } else {
      Router.push('/signin');
    }
  };

  signIn = ( username, password, PK ) => 
  {
    localStorage.setItem( storageName, username );
    localStorage.setItem( 'pk', PK )
    
    this.setState(
      {
        user: username
      },
      () => {
        Router.push('/');
      }
    );
  };

  signOut = () => {
    localStorage.removeItem( storageName );
    localStorage.removeItem( 'pk' );
    this.setState({
      user: null
    });
    Router.push('/signin');
  };


  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider value={{ user: this.state.user, signIn: this.signIn, signOut: this.signOut }}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    );
  }
}
