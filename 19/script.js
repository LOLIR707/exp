let str = 'a1b c34d x567z'
let reg = str.match(/\-?\d+/g)
let sum = 0

for (var i = reg.length - 1; i >= 0; i--) {
	sum += +reg[i]
}

console.log(sum)