
let arr = [[1,6,3,9],[6,12,5,21],[4,11,23,1]]

let arr2 = arr.map(x =>
    {
        let maxNum = 0;
        x.forEach(num => {
         if(num > maxNum)
         {
             maxNum = num;
         }
        });
        return maxNum
    })

let arr3 = arr2.filter(x => x>=10 && x <=23);

console.log(arr3);