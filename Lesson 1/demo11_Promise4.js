const { concat } = require("lodash");

function GetMul(num)
{
    return new Promise(resolve =>
    {          
        setTimeout(() => resolve(num*2) ,2000);
    })
}

// Option 1 - with "then"
function GetSomeData1()
{
    return new Promise(resolve =>
        {
            GetMul(4).then(x => resolve(x))
        })
}

// Option 2 - with "async-await"
async function GetSomeData2()
{
    let x = await GetMul(4);
    
    return x;
}



GetSomeData2().then(x => console.log(x))
//running code....

