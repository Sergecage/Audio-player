const container = document.querySelector('.container');
const newGame = document.querySelector('.of-game');
//const cards = Array.from(document.querySelector('.card'));
const info = document.querySelector('.game-info');
const flips = document.querySelector('#flips');

//mix card's order
class SaveGame {
    constructor() {
        this.container = container;
        this.cards = Array.from(this.container.children);
        this.flips = flips;
        this.delay = 1000;
        this.cardMatched = [];
    }
    mixCards() {
        this.cards.forEach(el => {
            const randomOrder = Math.floor(Math.random() * cards.length) + 1;
            el.classList.remove('matched');
    
            setTimeout(() => {
                el.style.order = `${randomOrder}`;
            }, 400);
        });
    }

    checkCard() {
        const [firstCard, secondCard] = this.cardMatched;

        this.container.classList.add('clear');
        if(firstCard.dataset.emoji === secondCard.dataset.emoji) {
            firstCard.classList.replace('visible', 'matched');
            secondCard.classList.replace('visible', 'matched');

            this.cardMatched = [];

            setTimeout(() => {
                const perfectMatch = this.cards.every(ele => (
                    ele.classList.contains('matched')
                ));

                this.container.classList.remove('clear');

                if(perfectMatch) {
                    this.mixCards();
                }
            }, this.delay);
        }
        else {
            setTimeout(() => {
                firstCard.classList.remove('visible');
                secondCard.classList.remove('visible');

                this.cardMatched = [];

                this.container.classList.remove('clear');
            }, this.delay);
        }
    }
    flipCard(card){
        card.classList.add('visible');
        this.cardMatched.push(card);

        if (this.cardMatched.length === 2) {
            this.checkCard();
        }
        /*this.checkCard(card)
            this.totalFlips++;
            this.flips.innerText =this.totalFlips;*/

    }
    /*startGame()  {
        this.cardCheck = null;
        this.totalFlips = 0;
        this.cardMatched = [];
        this.busy = true;
        //this.flipTimes = ;
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
    }*/

};

const game = new SaveGame;

game.cards.forEach(el => {
    el.addEventListener('click', game.flipCard.bind(game, el));
});

//onload page
const onLoad = () => {    
    //let game = new SaveGame(100, cards);
    
    
    //newGame.forEach(ele => {
        newGame.addEventListener('click', () => {
        newGame.classList.remove('visible');
        // game.startGame();
     });
   // });
    /*cards.forEach(el => {
        el.addEventListener('click', () => {
            game.flipCard(card);
        });
    });*/
};

if(document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", onLoad());
} else {
    onLoad();
};