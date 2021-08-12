import SHA256 from 'crypto-js/sha256'
import TS from './Timestamp'
import Block from './Block'
import Keypair from './Keypair'
import Wallet from './Wallet'
import Transaction from './Transaction'
export default class Blockchain
{
	constructor()
	{
		this.chain = [ this.createGenesisBlock() ];
		this.difficulty = 1;
		this.pendingTransactions = [];
		this.miningReward = 0.15;
		this.address = 
		{
			public: this.publicWalletAddress(),
			mines: this.publicWalletAddress(),
		}
	}

	createGenesisBlock()
	{		
		return new Block( 
			new TS().Unix, 
			[ 
				{ 
					fromAddress: this.publicWalletAddress(),
					toAddress: this.publicWalletAddress(),
					amount: 100000000000.00000000 
				} 
			], 
			'0' 
		);
	}

	publicWalletAddress()
	{
		const key = new Keypair( Uint8Array.from( ( JSON.parse( JSON.stringify( new Keypair().generatePrivateKey() ) ) ).data ) )
		return new Wallet( key ).address
	}


	isChainValid()
	{
		const validHash = block => !( block.hash === block.calculateHash() )
		const validPointerHash = ( block, index ) => !( block.previousHash === this.chain[ index - 1 ].hash )
		const validTransactions = block => !( block.hasValidTransactions() )
		let isValid = true
		this.chain.forEach( ( block, index ) =>
		{
			if ( index > 0 )
			{
				if ( ( validPointerHash( block, index ) ) || ( validHash( block ) ) || ( validTransactions( block ) ) ) isValid = false;
			}
		});
		console.log( `Chain valid: ${isValid}` )
		return isValid
	}

	minePendingTransactions( miningRewardAddress )
	{
		const block = new Block( new TS().Unix, this.pendingTransactions )
		if ( this.addBlock( block ) )
		{
			this.pendingTransactions = [
				new Transaction( this.genesisAddress, miningRewardAddress, this.miningReward )
			]
			return true
		}
		return false
	}

	addTransaction( transaction )
	{
		if ( !transaction.fromAddress || !transaction.toAddress )
		{
			throw new Error( `A 'from' and a 'to' address must be provided!` )
		}
		if ( !transaction.isValid() )
		{
			throw new Error( `Can not add invalid transactions!` )
		}
		this.pendingTransactions.push( transaction )
	}

	getBalance( address )
	{
		let balance = 0;
		this.chain.forEach( block =>
		{
			block.transactions.forEach( transaction =>
			{
				if( transaction.fromAddress === address ) balance -= transaction.amount
				if( transaction.toAddress === address ) balance += transaction.amount

			})	
		})
		return balance
	}

	getLatestBlock()
	{
		return this.chain[ this.chain.length - 1 ]
	}

	addBlock( newBlock )
	{
		newBlock.previousHash = this.getLatestBlock().hash;
		const buffered = newBlock.mine( this.difficulty );
		if ( buffered === this.getLatestBlock().hash ) 
		{
			this.chain.push( newBlock );
			return true
		}
		return false
	}

}