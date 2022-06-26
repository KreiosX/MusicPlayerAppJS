class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Still", "DR Dre","1.jpeg","1.mp3"),    
    new Music("DMX", "Let's go","2.jpeg","2.mp3"),    
    new Music("Shady", "RU","3.jpeg","3.mp3")    
];
