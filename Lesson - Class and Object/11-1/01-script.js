class ItsMePrince{
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
    enterDetails(name,subscribernumber){
        this.name = name
        this.subscribernumber = subscribernumber
    }
}

const Sam = new ItsMePrince()
const James = new ItsMePrince()
Sam.enterDetails("Sam", 10)
James.enterDetails("James", 29)
Sam.Subscriber()
James.Subscriber()
Sam.info()

