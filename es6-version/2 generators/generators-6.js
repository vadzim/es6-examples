function* seq( s ) {
	yield s
	yield s + s
	yield s * s
}

for ( let x of seq( 15 ) )
	console.log( x )
