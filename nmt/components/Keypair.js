import { randomBytes } from 'crypto'
import secp256k1 from 'secp256k1'
export default class Keypair
{
	constructor( privateKey = '' )
	{
		this.__private = privateKey
		if ( this.__private !== '' )
		{
			this.__public = secp256k1.publicKeyCreate( this.__private )
		}
	}

	generatePrivateKey()
	{
		let k
		do {
			k = randomBytes(32)
		}
		while ( !secp256k1.privateKeyVerify( k ) )
		return k
	}

}