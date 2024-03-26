export const DATA = dayjs();

function isWeekend(){
    const todayDay = DATA.format('dddd');
    if (todayDay === 'Sunday')
    {
        console.log(`Today is Sunday`);
    } else if(todayDay === 'Saturday')
    {
        console.log(`Today is Saturday`);
    }
    else{
        console.log(`Today is not weekend`);
}
}

export default isWeekend;