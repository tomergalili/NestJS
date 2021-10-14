function GetAvg(arr)
{
    return new Promise(resolve =>
        {
            setTimeout( () =>
            {
                let avg = arr.reduce((x,y) => x+y) / arr.length;
                resolve(avg);
            },1000)
        })
}

GetAvg([1,2,3,4,5]).then(x => console.log(x));

