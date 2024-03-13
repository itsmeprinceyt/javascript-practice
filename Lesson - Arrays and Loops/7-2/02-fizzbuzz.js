console.log(`Fizz Buzz`);
FizzBuzz();
function FizzBuzz(){
    console.log(`Rules: If the number is divisible by 3 then it'll show 'Fizz', if the number is divisible by 5 then it'll show 'Buzz'. If both then it'll show 'Fizz Buzz' !`);
    let i = 1;
    while ( i <= 20)
    {
        if (i === 21)
        {
            break;
        }
        if( (i % 3  === 0) && (i % 5 === 0))
        {
            console.log(`${i} : Fizz Buzz`);
        }else if (i % 3 === 0)
        {
            console.log(`${i}: Fizz`);
        }else if (i% 5 === 0)
        {
            console.log(`${i}: Buzz`);
        } else{
            console.log(`${i}`);
        }
        i++;
    }
}