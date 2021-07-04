const fs = require('fs')
const archivo = './datos.json'
var data =[]
data = JSON.parse(fs.readFileSync(archivo))
console.log(data)
data.push('nuevo valor')
let jsonData=JSON.stringify(data)
console.log(jsonData)
console.log(typeof(jsonData))
fs.writeFileSync(archivo,jsonData, (err)=>{
    if (err){
        console.log("y llorar, llorar, tan lejos tun turun")
    }else{
        console.log("y reir, reir sufriendo tun turun")
    }
})