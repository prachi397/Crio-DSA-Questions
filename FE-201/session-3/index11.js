// You are given a watchList array which holds objects with information on movies. Use reduce 
// on watchList to find the average IMDB rating of the movies directed by Christopher Nolan. 
// Return the average rating from getRating function.
// Note that the rating values are saved as strings in the object and need to be converted into 
// numbers before they are used in any mathematical operations.

// Sample Input --->
// const users = [
// { name: 'John', age: 34 },
// { name: 'Amy', age: 20 },
// { name: 'camperCat', age: 10 }
// ];
// Sample Output --->
// 64

function reduceMethodExtractData(watchList) {
    // You only need to implement this function.
    let filteredMovies = watchList.filter((ele) => ele.Director === "Christopher Nolan");
     // Return 0 if there are no Christopher Nolan movies
     if (filteredMovies.length === 0) {
        return 0;
    }
    let sum = filteredMovies.reduce((acc, ele) => acc + parseFloat(ele.imdbRating), 0);
    let avgRating = sum/filteredMovies.length;
    return avgRating;
}

const watchList = [
    {
        Title: "Inception",
        imdbRating: "8.8",
        Director: "Christopher Nolan",
    },
    {
        Title: "Interstellar",
        imdbRating: "8.6",
        Director: "Christopher Nolan",
    },
    {
        Title: "The Dark Knight",
        imdbRating: "9.0",
        Director: "Christopher Nolan",
    },
    {
        Title: "Batman Begins",
        imdbRating: "8.3",
        Director: "Christopher Nolan",
    },
    {
        Title: "Avatar",
        imdbRating: "7.9",
        Director: "James Cameron",
    },
];
var res = reduceMethodExtractData(watchList);
console.log(res);

  if (JSON.stringify(res) == 8.675)
    console.log("Sample test case for input passed!");
  else console.log("Test failed");  