const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=89eb2fb6';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData();
};

getData();

async function showData(data) {
    return data;
};

const container = document.querySelector('.container');
const card = document.createElement('div');
card.classList.add('.card');
container.append(card);
const image = document.createElement('img');
image.classList.add('.card-image');
image.alt = 'cover_image';
image.src = 'images/pictures/Demeter.png';
card.append(image);