import base58 from 'base58encoder'
import sha256 from 'crypto-js/sha256'
import ripemd160 from 'crypto-js/ripemd160'
export default class Wallet
{
	constructor( keyPair )
	{
		this.keys = {
			priv: keyPair.__private,
			pub: keyPair.__public,
		}
		this.address = this.base58Address()
	}

	base58Address()
	{
		const bit1 = `0`
		const keyHash = ripemd160( sha256( ( this.keys.pub ).toString() ) )
		const checksum = sha256( sha256( keyHash ) ).toString().slice( 0, 4 )
		const rawAddress = `${keyHash}${checksum}`
		const res = bit1 + base58.encode( rawAddress )
		// console.log( res )
		return res
	}
}