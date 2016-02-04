function* seq( s ) {
	for (;;) {
		yield s++
	}
}

let [ ,,,,,, x, y, z ] = seq( 20 )
console.log( x, y, z )
