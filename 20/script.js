let str = '31.12.2025'

let res = str.match(/(\d+)\.(\d+)\.(\d+)/);

for (let elem of res) {
    console.log(elem)
}