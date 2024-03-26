import hello from './01-script2.js';
import {hello2} from './01-script2.js';

const HTML = `
In modules there are two types of Exporting:<br>
1. Named Export<br>
2. Default Export<br><br>

The text u see below is from Default Export:<br>
<p class="one">${hello()}</p>
The text u see below is from Named Export:<br>
<p class="two">${hello2()}</p>
`;
document.body.innerHTML = HTML;