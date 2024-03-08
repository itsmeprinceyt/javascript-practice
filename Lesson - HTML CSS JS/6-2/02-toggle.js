function change(ButtonName)
{
    const buttonElement1 = document.querySelector(`.${ButtonName}`);
    if (!buttonElement1.classList.contains('off-button'))
    {
        //1: before adding off-button css we first check if other three of them have this css or not so we call this function
        removeExisting();

        //4: then we run the code 
        buttonElement1.classList.add('off-button');
    }
    else{
        buttonElement1.classList.remove('off-button');
    }
    removeExisting(global_button);
}
function removeExisting() {
    //2: here we are selecting that button which has this css
    const PB = document.querySelector('.off-button');
    if (PB){
        //3: we remove this css
        PB.classList.remove('off-button');
    }
}

