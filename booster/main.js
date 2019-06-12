class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
    }
    toString() {
        return `movie title: ${this.title}, director: ${this.director}.`;
    }
}

const movie1 = new Movie('Godzilla', ' Gareth Edwards');
const movie2 = new Movie('men in black', ' Barry Sonnenfeld');
movie1.toString();
movie2.toString();
