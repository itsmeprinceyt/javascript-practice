function keyDOWN(event){
    if ( event.key === 'Enter'){
        calculatePrice();
    }
}
function calculatePrice(){
    let price = document.querySelector('.js-input');
    if (Number(price.value) === 0 || Number(price.value) < 0) {
        document.querySelector('.js-price').innerHTML = '';
        document.querySelector('.js-error').innerHTML = `Error: Cost cannot be less than or equal to $0`;
        return;
    }
    let cost = Number(price.value) * 100;
    if (cost < 4000 ){
        cost +=1000;
    } else {
        cost = cost;
    }
    document.querySelector('.js-error').innerHTML ='';
    document.querySelector('.js-price').innerHTML = `$${cost / 100}`;
}