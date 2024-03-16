const multiply = (para,para2) => para*para2;
console.log(multiply(2,3));
console.log(multiply(7,10));

//.forEach();
const array=[1,,4,6,6,-2,-5,2,0,0,23,-23,4,-2];
const countPositive = value => {
    let PositiveNumberCount = 0;
    value.forEach(element => {
        if (element >= 0)
        {
            PositiveNumberCount+=1;
        }
    });
    return PositiveNumberCount;
};
console.log(`Positive Numbers in this array are: ${countPositive(array)}`);

const addNum = (array,num) => {
    array.forEach((value, index) => {
        array[index] = value+num;
    });
    return array;
};

const array2=[1,2,3];
console.log(addNum(array2,2));
console.log(addNum([-2,-1,0,99],2));
//using .map();
let num= 2;
const array3=[4,5,6,7].map( (value) => value+num);
console.log(array3);
//.filter();
const foods=['apple','egg'];
console.log(foods.filter(value => value!=='egg'));
let count=0;
const foods2=['apple','egg','egg','egg','orange'];
console.log(foods2.filter(value => 
{
    if ( value==='egg' && count===2)
    {
        console.log(value);
        return value;
    } else if (value ==='egg' && count <=2)
    {
        count+=1;
    } else if( value!=='egg')
    {
        return value;
    }
})
);