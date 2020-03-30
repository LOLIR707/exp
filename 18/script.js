let input = document.getElementById('input')

function http() {
	console.log(/^http:|^https:/.test(input.value))
}

function jpg() {
	console.log(/\.jpg$|\.jpeg$/.test(input.value))
}

function number() {
	console.log(/\d{12}/.test(input.value))
}

function date() {
	console.log(/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(input.value))
}

function mail() {
	console.log(/.+@.+\.[a-z]+$/.test(input.value))
}