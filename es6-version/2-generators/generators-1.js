function* seq( s ) {
	for (;;) {
		yield s++
	}
}

for ( let x of seq( 15 ) ) {
	console.log( x )
	if ( x > 20 )
		break
}
