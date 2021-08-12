import base58 from 'base58encoder'
import secp256k1 from 'secp256k1'
import { randomBytes } from 'crypto'
import SHA256 from 'crypto-js/sha256'
import Blockchain from './Blockchain'
import TS from './Timestamp'

import Wallet from './Wallet'

export default class Transaction
{
	constructor( fromAddress, toAddress, amount )
	{
		const ts =  new TS().Unix
		this.fromAddress = fromAddress;
		this.toAddress = toAddress;
		this.amount = amount;
		this.timestamp = ts
	}

	calculateHash()
	{
		return SHA256(  SHA256( this.fromAddress + this.toAddress + this.amount + this.timestamp ) ).toString()
	}

	hashTx()
	{
		return Uint8Array.from( this.calculateHash().toString().slice( 0, 32 ) )
	}

	signTransaction( signingKey )
	{
		const k = {
			__public: signingKey.pub,
			__private: signingKey.priv,
		}
		const w = new Wallet( k )
		if ( w.address !== this.fromAddress )
		{
			throw new Error( `You can not sign transactions from other wallets then your own!` )
		}
		
		const sig = secp256k1.ecdsaSign( this.hashTx(), w.keys.priv )
		this.signature = sig
		this.ack = w.keys.pub
	}

	isValid()
	{
		if ( this.fromAddress === new Blockchain().address.mines ) return true

		if ( !this.signature || typeof( signature ) === undefined )
		{
			throw new Error( `Transaction must have a signature!` )
		}

		return secp256k1.ecdsaVerify( this.signature.signature, this.hashTx(), this.ack )
	}
}