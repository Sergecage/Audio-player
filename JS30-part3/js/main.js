const container = document.querySelector('.container');
const newGame = document.querySelector('.of-game');
const endGame = document.querySelector('#end-game');
const info = document.querySelector('.game-info');
const flips = document.querySelector('#flips');
let gameResults = [];
localStorage.setItem("results", JSON.stringify(true));


class SaveGame {
    constructor() {
        this.container = container;
        this.cards = Array.from(this.container.children);
        this.flips = flips;
        this.delay = 1000;
        this.cardMatched = [];
        this.totalFlips = 0;
    }
    //mix card's order
    mixCards() {
        this.cards.forEach(el => {
            const randomOrder = Math.floor(Math.random() * this.cards.length) + 1;
            el.classList.remove('matched');
    
            setTimeout(() => {
                el.style.order = `${randomOrder}`;
            }, 400);
        })
    }
    //check if the cards are matched
    checkCard() {
        const [firstCard, secondCard] = this.cardMatched;

        this.container.classList.add('clear');
        if(firstCard.dataset.emoji === secondCard.dataset.emoji) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');

            this.cardMatched = [];

            setTimeout(() => {
                const perfectMatch = this.cards.every(el => (
                    el.classList.contains('matched')
                ));

                this.container.classList.remove('clear');

                //end of game
                if(perfectMatch) {
                    this.cards.forEach(el => {
                        el.classList.remove('visible');
                    })
                    endGame.classList.add('visible');
                    this.totalFlips = 0;
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
    //flip the card
    flipCard(card){
        card.classList.add('visible');
        this.cardMatched.push(card);
        this.totalFlips++;
        this.flips.innerHTML =this.totalFlips;
        if (this.cardMatched.length === 2) {
            this.checkCard();
        }

    }

};

const game = new SaveGame;

game.cards.forEach(el => {
    el.addEventListener('click', game.flipCard.bind(game, el));
});

//onload page
const onLoad = () => {    
        newGame.addEventListener('click', () => {
        newGame.classList.remove('visible');
     });
};

if(document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", onLoad());
} else {
    onLoad();
};

endGame.addEventListener('click', () => {
    endGame.classList.remove('visible');
 });