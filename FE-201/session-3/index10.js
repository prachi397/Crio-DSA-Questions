// You are given a watchList array which holds objects with information on several movies. 
// Use filter on watchList to assign a new array of objects to the ratings variable. 
// Each movie in the new array should have only a Title key with the name of the film, 
// and a imdbRating key with the IMDB rating greater than or equal to 8.

function filterExtractData(watchList) {
    // You only need to implement this function.
    return watchList.filter((ele) => {
        if (ele.imdbRating >= 8) {
            return { Title: ele.Title, imdbRating: ele.imdbRating }
        }
    })
}

const watchList = [
    {
        Title: "Inception",
        imdbRating: "8.8",
    },
    {
        Title: "Interstellar",
        imdbRating: "8.6",
    },
    {
        Title: "The Dark Knight",
        imdbRating: "9.0",
    },
    {
        Title: "Batman Begins",
        imdbRating: "8.3",
    },
    {
        Title: "Avatar",
        imdbRating: "7.9",
    },
];
var res = filterExtractData(watchList);

if (
    JSON.stringify(res) ==
    JSON.stringify([
        { Title: "Inception", imdbRating: "8.8" },
        { Title: "Interstellar", imdbRating: "8.6" },
        { Title: "The Dark Knight", imdbRating: "9.0" },
        { Title: "Batman Begins", imdbRating: "8.3" },
    ])
)
    console.log("Sample test case for input passed!");
else console.log("Test failed");
