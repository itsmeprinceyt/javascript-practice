// first
const myArray = [10,20,30];
function rendering(){
    let HTML_code = '';
    for(let i =0;i < myArray.length ; i++)
    {
        HTML_code += myArray[i] + ' ';
    }
    document.querySelector('.js-div').innerHTML = `<p>${HTML_code}</p>`;
}
myArray[2]= 99;

// second
const myArray2 = [1,20,22,24,5];
function rendering2(){
    const lastElement = myArray2[myArray2.length-1];
    document.querySelector('.js-div2').innerHTML = `<p>${lastElement}</p>`
}

// third
const myArray3 = ['hi','hello','good morning'];
function rendering3(){
    const lastElement = myArray3[myArray3.length-1];
    document.querySelector('.js-div3').innerHTML = `<p>${lastElement}</p>`
}

// fourth
const myArray4 = [5,20,22,24,1];
function rendering4(){
    let HTML_code = '';
    for(let i =0;i < myArray4.length ; i++)
    {
        HTML_code += myArray4[i] + ' ';
    }
    document.querySelector('.js-div4').innerHTML = `<p>Before Swapping: ${HTML_code}</p>`;
    swap();
}
function swap(){
    let HTML_code = '';
    let emptyArray = [];
    for(let i=myArray4.length-1 ; i>=0; i--)
    {
        emptyArray.push(myArray4[i]);
    }
    for(let i=0;i<emptyArray.length ;i ++)
    {
        HTML_code += emptyArray[i] + ' ';
    }
    let HTML_EXISTING_CODE = document.querySelector('.js-div4');
    DATA = HTML_EXISTING_CODE.innerHTML;
    document.querySelector('.js-div4').innerHTML = `${DATA}<p>After Swapping: ${HTML_code}</p>`;
}

//fifth
const ArrayOld = [1,2,3];
//const ArrayOld = [-2,-1,0,99];
const ArrayNew = [];
addd(ArrayOld,2);
function addd(arr,num){
    for (let i = 0 ; i< arr.length ; i++ ){
        ArrayNew.push(arr[i]+num);
    }
    console.log(ArrayNew);
}

const Array1 = [-2,-1,0,99,2,5];
const Array2 = [2,3,2,1,2,3];
const ArrayThird = [];
addd2(Array1,Array2);
function addd2(arr,arr2){
    if ( arr.length !== arr2.length)
    {
        console.log(`The array which you have provided is not of the same length.`);
        return;
    }
    for (let i = 0 ; i< arr.length ; i++ ){
        ArrayThird.push(arr[i] + arr2[i]);
    }
    console.log(ArrayThird);
}
const array5 = [2,3,4,1,2,-2,-1,-6,-4,-99,0,12,34,90,0,3,-2];
CountPositive(array5);
minMax(array5);
minMin(array5);
function CountPositive(arr) {
    let pos_integer = 0;
    let pos_negative = 0;
    let pos_null = 0;
    for ( let i = 0 ; i < arr.length ; i++ )
    {
        if(arr[i] < 0)
        {
            pos_negative +=1;
        } else if (arr[i] > 0)
        {
            pos_integer +=1;
        } else if (arr[i] === 0)
        {
            pos_null +=1;
        }
    }
    console.log(`Positive Numbers: ${pos_integer} Negative Numbers: ${pos_negative} Zeros: ${pos_null}`);
}

function minMax(arr){
    if (arr.length === 0)
    {
        console.log(`Max: null`);
        return;
    }
    let MaxNumber = '';
    let first_number = arr[0];
    for (let i = 0 ;i < arr.length ; i++)
    {
        if ( first_number > arr[i])
        {
            MaxNumber = String(first_number);
        } else if ( first_number < arr[i])
        {
            MaxNumber = String(arr[i]);
            first_number = arr[i];
        }
    }
    console.log(`Max Number: ${MaxNumber}`);
}
function minMin(arr){
    if (arr.length ===  0 )
    {
        console.log(`Max: null`);
        return;
    }
    let MinNumber = '';
    let first_number = arr[0];
    for ( let i = 0 ; i < arr.length ; i++)
    {
        if ( first_number > arr[i])
        {
            first_number = arr[i];
            MinNumber = first_number;
        }
    }
    console.log(`Min Number: ${MinNumber}`);
}

const fruits = ['apple', 'mango', 'grapes', 'banana'];
console.log(countWords(fruits));
function countWords(arr){
    const result = {};
    for ( let i = 0 ; i< arr.length ; i++)
    {
        const word = arr[i];

        if (!result[word])
        {
            result[word] = 1;
        } else{
            result[word]++;
        }
    }
    return result;
}