export default class Timestamp
{
	constructor()
	{
		this.Unix = Math.round( ( new Date() ).getTime() / 1000 )
	}
}