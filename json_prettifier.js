function temp(arr){
    if(Array.isArray(arr)){
        arr.forEach(element =>{
            temp(element)
        })
    }else{
        arrayOfIP += (arr.slice(7)).slice(0, -1)
        arrayOfIP += '\n'
    }
}

const fs = require('fs')

var ips = JSON.parse(fs.readFileSync("aaa.json"))

var keys = Object.keys(ips)

var arrayOfIP = ""

keys.forEach(key =>{
    temp(ips[key])
})

console.table(arrayOfIP)

fs.writeFileSync("ip.txt", arrayOfIP)