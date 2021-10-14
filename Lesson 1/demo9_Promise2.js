// Rule 1 - An async function is a function with ANY async coperation
// Rule 2 - Async function CAN NOT returns a value !

function GetMul(num)
{
    return new Promise(resolve =>
    {          
        setTimeout(() => resolve(num*2) ,2000);
    })
}

GetMul(2).then(x => console.log(x));

console.log("End of file")

