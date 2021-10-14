function funcA(arr)
{
    return new Promise(resolve =>
        {
            setTimeout( () =>
            {
                let total =  arr.reduce((x,y) => x+y);
                resolve(total);
            },2000)
        })
}


async function funcB(arr)
{
    let total = await funcA(arr);
    return total*2;
}

funcB([1,2,3,4]).then(x => console.log(x))