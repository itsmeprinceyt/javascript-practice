class ItsMePrince{
    Subscriber()
    {
        console.log(`Hello and I'm ${this.name} and I've subscribed to your channel!`);
    }
    info()
    {
        console.log(`My name is Prince and I have a YouTube Channel known as ItsMe Prince, you can check the link in the page!`);
        this.showingYouTubeChannelLink();
    }
    showingYouTubeChannelLink(){
        document.querySelector('.channelLink').innerHTML = `<a href="https://www.youtube.com/channel/UCcT79p6kqC_OvQgYh7YHkkw/" target="_blank">ItsMe Prince 0 YouTube Channel</a>`;
    }
    enterDetails(name){
        this.name = name
    }
}

const Sam = new ItsMePrince()
Sam.enterDetails("Sam")
Sam.Subscriber()
Sam.info()

