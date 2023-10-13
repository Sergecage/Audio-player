const container = document.querySelector('.container');
const newGame = document.querySelector('.of-game');
const cards = Array.from(document.querySelector('.card'));
const info = document.querySelector('.game-info');
const flips = document.querySelector('#flips');

//mix card's order
class SaveGame {
    constructor(cards) {
        this.cardArray = cards;
        this.flips = flips;
    }
    /*mixCards() {
        card.forEach(el => {
            const randomOrder = Math.floor(Math.random() * card.length) + 1;
    
            el.classList.remove('visible');
            setTimeout(() => {
                el.style.order = `${randomOrder}`;
            }, 400);
        });
    }*/
    startGame()  {
        this.cardCheck = null;
        this.totalFlips = 0;
        this.cardMatched = [];
        this.busy = true;
        this.flips = document.querySelector('#flips');
    }
    flipCard(card) {
        if(this.checkFlip(card)){
            this.totalFlips++;
            this.flips.innerText =this.totalFlips;
            card.classList.add('visible');
        }
    }
    checkFlip(card) {
        return true;
        //return !this.busy && !this.cardMatched.includes(card) && card !==this.cardCheck;
    }
    
}


//onload page
const onLoad = () => {    
    //let newGame = Array.from(document.querySelector('.of-game'));
    let game = new SaveGame(100, cards);
    
    
    //newGame.forEach(ele => {
        newGame.addEventListener('click', () => {
        newGame.classList.remove('visible');
         game.startGame();
     });
   // });
    cards.forEach(el => {
        el.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
};

if(document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", onLoad());
} else {
    onLoad();
};