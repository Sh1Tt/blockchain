import React, { Component } from 'react'

class SettingsForm extends Component {
	initialState = { 
		difficulty: 1,
		reward: 0.15,
	}

	state = this.initialState

	handleReset = () => {
 		this.setState( () => this.initialState )
 	}
 	updateDifficulty = e =>
 	{
 		const d = e.target.value
 		const r = this.state.reward
 		this.setState( () => { return { difficulty: d, reward: r } } )
 	}
 	updateReward = e =>
 	{
 		const d = this.state.difficulty
 		const r = e.target.value
 		this.setState( () => { return { difficulty: d, reward: r } } )
 	}
 	handleSubmit = e =>
 	{
 		e.preventDefault()
 		if ( typeof ( window ) !== 'undefined' )
 		{
 			window.$NMT.difficulty = this.state.difficulty
 			window.$NMT.miningReward = this.state.reward
 			// const { difficulty, miningReward } = window.$NMT
 			// console.log( difficulty, miningReward)
 		}

 	}

 	render(){
 		return (
 			<form onReset={this.handleReset} onSubmit={this.handleSubmit.bind( this )}>
 				<div>
		            <label 
		            	htmlFor="difficulty">
		            	Set the difficulty for the hashes to find. 
		            </label>
		            <input
			            type="text"
			            name="difficulty"
			            value={this.state.difficulty}
			            onChange={this.updateDifficulty.bind(this)}
		            />
		        </div>
		        <div>
		            <label 
		            	htmlFor="reward">
		            	Set the reward for the mining of a block.
		            </label>
		            <input
			            type="text"
			            name="reward"
			            value={this.state.reward}
			            onChange={this.updateReward.bind(this)}
		            />
		        </div>
		        <div>
		          	<input
			            type="submit"
			            value="Submit"
		          	/>
		          	<input
			            type="reset"
			            value="Reset"
		          	/>
		        </div>

 			</form>
 		)
 	}
}

export default SettingsForm