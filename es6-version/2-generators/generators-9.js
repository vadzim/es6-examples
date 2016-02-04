let p = {
	*a( s ) {
		yield 3
		if ( s > 20 )
			yield s + s
		else
			yield s * s
	},

	*seq( s ) {
		yield s
		yield* this.a( s )
		yield s * s
	},
}

for ( let x of p.seq( 15 ) )
	console.log( x )
