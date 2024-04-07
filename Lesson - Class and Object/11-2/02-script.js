class ItsMePrince{
    constructor(name,subscribernumber){
        this.name = name
        this.subscribernumber = subscribernumber
    }
    Subscriber()
    {
        console.log(`Hello and I'm ${this.name} and I've subscribed to your channel!, I'm your ${this.subscribernumber} subscriber! :)`);
    }
    info()
    {
        console.log(`My name is Prince and I have a YouTube Channel known as ItsMe Prince, you can check the link in the page!`);
        this.showingYouTubeChannelLink();
    }
    showingYouTubeChannelLink(){
        document.querySelector('.channelLink').innerHTML = `<a href="https://www.youtube.com/channel/UCcT79p6kqC_OvQgYh7YHkkw/" target="_blank">ItsMe Prince 0 YouTube Channel</a>`;
    }
}

const Sam = new ItsMePrince("Sam", 10)
const James = new ItsMePrince("James", 29)
Sam.Subscriber()
James.Subscriber()
Sam.info()

