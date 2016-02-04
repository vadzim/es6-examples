function* a( s ) {
	yield 3
	if ( s > 20 )
		yield s + s
	else
		yield s * s
}

function* seq( s ) {
	yield s
	yield* a( s )
	yield s * s
}

for ( let x of seq( 15 ) )
	console.log( x )
