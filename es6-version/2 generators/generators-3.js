function* seq( s ) {
	try {
		for (;;) {
			yield s++
		}
	}
	finally {
		console.log( `Niedasiažny kod?` )
	}
}

for ( let x of seq( 15 ) ) {
	console.log( x )
	if ( x > 20 )
		break
}
