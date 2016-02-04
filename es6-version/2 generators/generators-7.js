const a = [ 3, 4, 5 ]

function* seq( s ) {
	yield s
	yield* a
	yield s * s
}

for ( let x of seq( 15 ) )
	console.log( x )
