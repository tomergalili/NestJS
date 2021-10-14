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
    GetMul(4).then(x => console.log(x))
}

// Option 2 - with "async-await"
async function GetSomeData2()
{
    let x = await GetMul(4)
    console.log(x);
}



GetSomeData2();
//running code....

