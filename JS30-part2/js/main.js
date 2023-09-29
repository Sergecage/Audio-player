const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
};

getData();