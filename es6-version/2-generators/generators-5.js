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

let x = seq( 10 )
console.log( x.next() )
console.log( x.next() )
console.log( x.next() )
console.log( x.next() )
console.log( x.next() )
console.log( x.next() )
