let prom = new Promise(resolve =>
    {
        setTimeout( () => resolve("OK")  ,1000)
    })

prom.then(x=> console.log(x));

//Running code...
console.log("End")