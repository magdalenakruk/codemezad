function funkcja(min, max) {
	let suma = 0;
    for (min, max; min<= max; min += 1) {
		suma += min;
        if (min % 2 == 0) {
            console.log(min);	
        }
    }
    return suma;
}