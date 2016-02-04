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

let [ ,,,,,, x, y, z ] = seq( 20 )
console.log( x, y, z )
