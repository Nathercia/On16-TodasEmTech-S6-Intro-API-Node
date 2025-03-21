const objetos = [
    {
        "Title":"10 Things I Hate About You",
        "Year":"1999",
        "Rated":"PG-13",
        "Released":"31 Mar 1999",
        "Runtime":"97 min",
        "Genre":"Comedy, Drama, Romance",
        "Director":"Gil Junger",
        "Writer":"Karen McCullah, Kirsten Smith",
        "Actors":"Heath Ledger, Julia Stiles, Joseph Gordon-Levitt, Larisa Oleynik",
        "Plot":"A pretty, popular teenager can't go out on a date until her ill-tempered older sister does.",
        "Language":"English, French",
        "Country":"USA",
        "Awards":"2 wins & 13 nominations."
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy, Sci-Fi",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA",
        "Awards": "Won 3 Oscars. Another 86 wins & 129 nominations."
    },
    {
        "Title":"Inception",
        "Year":"2010",
        "Rated":"PG-13",
        "Released":"16 Jul 2010",
        "Runtime":"148 min",
        "Genre":"Action, Adventure, Sci-Fi, Thriller",
        "Director":"Christopher Nolan",
        "Writer":"Christopher Nolan",
        "Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "Language":"English, Japanese, French",
        "Country":"USA, UK",
        "Awards":"Won 4 Oscars. Another 152 wins & 217 nominations."
    },
    {
        "Title":"Doctor Strange",
        "Year":"2016",
        "Rated":"PG-13",
        "Released":"04 Nov 2016",
        "Runtime":"115 min",
        "Genre":"Action, Adventure, Fantasy, Sci-Fi",
        "Director":"Scott Derrickson",
        "Writer":"Jon Spaihts, Scott Derrickson, C. Robert Cargill, Stan Lee (based on the Marvel comics by), Steve Ditko (based on the Marvel comics by)",
        "Actors":"Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong",
        "Plot":"While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 1 Oscar. Another 20 wins & 65 nominations."
    },
    {
        "Title":"The Truman Show",
        "Year":"1998",
        "Rated":"PG",
        "Released":"05 Jun 1998",
        "Runtime":"103 min",
        "Genre":"Comedy, Drama, Sci-Fi",
        "Director":"Peter Weir",
        "Writer":"Andrew Niccol",
        "Actors":"Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
        "Plot":"An insurance salesman discovers his whole life is actually a reality TV show.",
        "Language":"English",
        "Country":"USA",
        "Awards":"Nominated for 3 Oscars. Another 40 wins & 66 nominations."
    }
]

for (let index = 0; index < objetos.length; index++) {
    const filme = objetos[index]

    console.log("--------------------------Filme nº" + (index + 1) + "--------------------------")
    //console.log("Filme n." + (index + 1))
    console.log(`
    Título é:  ${filme.Title}
    O Plot é: ${filme.Plot}
    O Gênero é: ${filme.Genre}
    A linguagem é: ${filme.Language}`
    )}