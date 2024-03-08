let calculation = localStorage.getItem('result') || '';
            window.onload=(showResult());
            function updateCalculation(input){
                calculation +=input
                showResult();
            }
            function Calculate(){
                calculation = eval(calculation);
                showResult();
                localStorage.setItem('result',calculation);
            }
            function resetTab() {
                calculation='';
                localStorage.removeItem('result');
                showResult();
            }
            function showResult() {
                document.querySelector(".js-result").innerHTML = `${calculation}`;
            }