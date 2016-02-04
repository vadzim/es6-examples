function* seq( s ) {
	for (;;) {
		yield s++
	}
}

let x = seq( 10 )
console.log( x.next() )
console.log( x.next() )
console.log( x.next() )
console.log( x.next() )
console.log( x.next() )
console.log( x.next() )
