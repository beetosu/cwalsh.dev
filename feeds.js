const reviewTranslation = [
    "the worst.", // 1
    "horrendous.", // 2
    "bad.", // 3
    "mediocre.", // 4
    "ok.", // 5 
    "alright.", // 6
    "good.", // 7
    "great!", // 8
    "amazing!", // 9
    "life-changing." // 10 
]

function translate_film_score(stars) {
    let score = 0;
    for (let char of stars) {
        if (char === '★') score += 2;
        else if (char == '½') score++;
    }
    console.log(score);
    return reviewTranslation[score-1];
}

function get_media(obj) {
    fetch(`https://damp-island-47820.herokuapp.com/${obj.url}`, {
    mode: 'cors',
    })
    .then(res => {
        if (res.status !== 200) return;
        res.text()
        .then(str => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(str, "text/xml");
            obj.callback(xml);
        })
    })
}

function parse_book(xml){
    let book = {
        title: xml.querySelector('item title').innerHTML,
        author: xml.querySelector('item author_name').innerHTML,
    }

    document.getElementById('book').innerHTML= `📕 Lately I've been reading ${book.title} by ${book.author}`;
    twemoji.parse(document.getElementById('book'), { folder: 'svg', ext: '.svg' });
}

function parse_film(xml){
    let film = {};
    const latestMovie = xml.querySelector('item title').innerHTML;
    
    film.link = xml.querySelector('item link').innerHTML;
    film.title = latestMovie.split(',')[0];
    film.year = latestMovie.split(' - ')[0].split(', ')[1];

    document.getElementById('film').innerHTML= `🎞️ The last movie I saw was ${film.title} (${film.year})`;

    twemoji.parse(document.getElementById('film'), { folder: 'svg', ext: '.svg' });
    
    if (latestMovie.includes(' - ')) {
        document.getElementById('film').innerHTML += `, <a href="${film.link}">it was ${translate_film_score(latestMovie.split(' - ')[1])}</a>`;
    }
}

rss_feeds = [
    {
        type: 'film',
        url: 'https://letterboxd.com/beetosu/rss/',
        callback: parse_film
    },
    {
        type: 'book',
        url: 'https://www.goodreads.com/review/list_rss/112527048?shelf=currently-reading',
        callback: parse_book
    }
]

for (let feed of rss_feeds) {
    get_media(feed);
}