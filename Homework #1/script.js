console.log('Testing ');


// Movies renting 
// App Create a movie renting app There should be an array of movie names 
// There should be an input and a search button When the person enters a name of a movie it should search the array
//  If the name exists it should show an H1 element that says: "The movie can be rented" in green text
//  If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
//  The input should not be case sensitive ( it should find the movie regardless of capital or small letters )
let movieList = ['Harry Potter', 'Avatar', 'The Lord of the Rings', 'The Conjuring', 'Anabele', 'Life of Pi', 'The tourist', 'Mission inposible', 'Home alone', 'Daddy Day Care'];

let movieName = document.getElementById('movieName');
let searchBtn = document.getElementById('findMovie');
let result = document.getElementById('result');

searchBtn.addEventListener('click',function (){
    result.innerText = ""
    if(!movieName){
        result.innerText = "Please enter a movie name"
    }
    else{
    let movie = selectMovie();
        if(movie){
            result.innerText = "The movie can be rented"
            result.style.color = "green";
        }
        else{
            result.innerText = "The movie cant be rented"
            result.style.color = "red"
        }
      }
    
    movieName.value = ""
} );

function selectMovie(){
    for(let movie of movieList){
        if (movie.toLowerCase().includes(movieName.value.toLowerCase())){
            return movie
        }
}
}

