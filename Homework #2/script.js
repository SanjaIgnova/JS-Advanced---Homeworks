// Vezba 2
console.log('Vezba 2');
// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:
// Height
// Birth year
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1

let starWarsBtn = document.getElementById('starWarsBtn')
let container = document.getElementById('starWars')
let tableStarWars = document.getElementById('tableStarWars')
tableStarWars.style.border = '2px solid black'

starWarsBtn.addEventListener('click', function(){
      let person1 = document.createElement('h1')
      container.appendChild(person1)
      let table1 = document.createElement('tr')
      let table2 = document.createElement('tr')
      let table3 = document.createElement('tr')
      let table4 = document.createElement('tr')
      table1.innerText = "Height:"
      table2.innerText = "Birth Year:" 
      table3.innerText = "Eye Color:"  
      table4.innerText = "Hair Color:"
      tableStarWars.appendChild(table1)
      tableStarWars.appendChild(table2)
      tableStarWars.appendChild(table3)
      tableStarWars.appendChild(table4)
    fetch('https://swapi.dev/api/people/1')
      .then(function(res){
        return res.json();
      })
      .then(function(data){
        console.log(data)
        person1.innerText = data.name;
        let tableStarWars1 = document.createElement('td')
        let tableStarWars2 = document.createElement('td')
        let tableStarWars3 = document.createElement('td')
        let tableStarWars4 = document.createElement('td')
        tableStarWars1.innerText = data.height 
        tableStarWars2.innerText = data.birth_year 
        tableStarWars3.innerText = data.eye_color 
        tableStarWars4.innerText = data.hair_color
        table1.appendChild(tableStarWars1)
        table2.appendChild(tableStarWars2)
        table3.appendChild(tableStarWars3)
        table4.appendChild(tableStarWars4)
        tableStarWars1.style.border = "2px solid black"
        tableStarWars2.style.border = "2px solid black"
        tableStarWars3.style.border = "2px solid black"
        tableStarWars4.style.border = "2px solid black"


      })
      .catch(function(err){
        console.log(err)
      })
})

