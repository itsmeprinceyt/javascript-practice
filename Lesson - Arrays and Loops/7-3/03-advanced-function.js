const add = function(){
    console.log(3+2);
}
function runTwice(param,en)
{
    let i =0;
    while (true)
    {
        i++;
        param();
        if ( i=== en)
        {
            return;
        }
    }
}
runTwice(add,2);
runTwice(function(){
    console.log(`Hello`);
},8);

function suck(){
    document.querySelector('.suck-button').innerHTML= 'I dont suck';
    setTimeout(function(){
        document.querySelector('.suck-button').innerHTML = 'You suck lol';
    },2000);
}

function loading(){
    document.querySelector('.loading-button').innerHTML = 'Loading...';
    setTimeout(function(){
        document.querySelector('.loading-button').innerHTML = 'Finished';
    },3000);
}
let timeOutId;
function addToCart(){
    document.querySelector('.add-to-cart').innerHTML = 'Adding to the cart';
    clearTimeout(timeOutId);
    timeOutId = setTimeout(function(){
        document.querySelector('.add-to-cart-update').innerHTML = 'Successfully Added!';
        document.querySelector('.add-to-cart').innerHTML = 'Add to cart';
    },4000);
    setTimeout(function(){
        document.querySelector('.add-to-cart-update').innerHTML = '';
    },5000);
}
let notification_value = 1;
let timeOutId2;
let timeOutId3;
ChangingNoti(notification_value);
function ChangingNoti(){
    timeOutId2 = setInterval(function(){
        if (notification_value === 0 )
        {
            clearTimeout(timeOutId2);
        }
        document.title = `(${notification_value}) New message`;
    },1000);
    timeOutId3 = setInterval(function(){
        if ( notification_value === 0 )
        {
            clearTimeout(timeOutId3);
        }
        document.title = 'Advanced Functions';
    },2000);
}

function changeNotiP(){
    if (notification_value >= 1)
    {
        ChangingNoti(notification_value);
    }
    notification_value +=1;
}
function changeNotiN(){
    if (notification_value === 0 )
    {
        clearTimeout(timeOutId2);
    } else{
        notification_value -=1;
    }
}