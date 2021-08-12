import SHA256 from 'crypto-js/sha256'
export default class Block
{
	constructor( timestamp, data, previousHash = `` )
	{
		this.timestamp = timestamp;
		this.transactions = data;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
		this.nonce = 0;
	}

	calculateHash() 
	{
		return SHA256( this.previousHash + this.timestamp + JSON.stringify( this.transactions ) + this.nonce ).toString();
	}

	mine( difficulty )
	{
		while ( this.hash.substring( 0, difficulty ) !== Array( difficulty + 1 ).join( `0` ) )
		{
			this.nonce++;
			this.hash = this.calculateHash();
			console.log( `Tried hash: ${this.hash}` )	
		}
		console.log( `Block mined: ${this.hash}` )
		return this.previousHash
	}

	hasValidTransactions()
	{
		let isValid = true;
		this.transactions.forEach( transaction =>
		{
			if ( !transaction.isValid() ) isValid = false
		})
		return isValid
	}
}