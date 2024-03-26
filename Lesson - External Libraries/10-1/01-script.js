import {DATA} from './01-isweeknd.js';
import isWeekend from './01-isweeknd.js';

const newDATA = DATA.add(7, 'day');
let formattedDate = newDATA.format('MMMM D');
console.log(`After 7 Days The Date will be: ${formattedDate}`);

const newMONTH = DATA.add(1,'month');
formattedDate = newMONTH.format('MMMM D');
console.log(`After a month, the date will be: ${formattedDate}`);

const oldMONTH = DATA.subtract(1,'month');
formattedDate = oldMONTH.format('MMMM D');
console.log(`Before a month, the date was: ${formattedDate}`);

isWeekend();