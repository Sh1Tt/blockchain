export default class Cookies
{
	constructor(){}

	Name ( name, value ) 
	{ 
		return `${name}=${value};`
	}
	Expires ( expiry )
	{
		const _e = string => `expires=${string};`;
        if( typeof expiry === 'string' || expiry instanceof String ) return _e( expiry )
        let d = new Date();
        d.setTime(d.getTime() + (expiry*24*60*60*1000));
  		return _e( d.toUTCString() )
	}
	Secure ( secure = false )
	{
		return ( secure ? `secure` : `` )
	}
	SameSite ( policy )
	{
		return `SameSite=${policy};`
	}
	
	getByName ( name, source )
	{
		const n = `${name}=`;
        const s = decodeURIComponent( source );
        const ca = s.split( `; ` );
    	const f = ca.filter( c => c.substring( 0, n.length ) === n );
    	return ( f.length > 0 ? f[0].toString().substring( n.length ) : 0 );
	}
	isSet ( name, source )
	{
		return this.getByName( name, source ) !== 0
	}
    
	Parse( name, value, expiry, samesite, secure )
	{
        return `${this.Name( name, value )}${this.Expires( expiry )}${this.SameSite( samesite )}${this.Secure( secure )}path=/`
	}

    Set ( name, value, expiry, samesite, secure )
	{
	    document.cookie = this.Parse( name, value, expiry, samesite, secure );
	}
	Burn ( name, value, expiry, samesite, secure )
	{
	    document.cookie = this.Parse( name, value, new Date().toUTCString(), samesite, secure );
	}
}