let table = document.getElementById('table');
let thead = document.getElementById('thead'); 
let tbody = document.createElement('tbody');
table.appendChild(tbody);

let button = document.getElementById('btn');
let nextBtn = document.getElementById('next10')
let prevBtn = document.getElementById('previos');

nextBtn.style.display = 'none';
prevBtn.style.display = 'none';



function getPlanet(url){
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
   
    let results = data.results
        for(let planet of results ){
            let rows = document.createElement('tr');

            let cell = document.createElement('td');
            cell.innerHTML = planet.name;
            rows.appendChild(cell);

            cell = document.createElement('td');
            cell.innerHTML = planet.climate;
            rows.appendChild(cell);

            cell = document.createElement('td');
            cell.innerHTML = planet.gravity;
            rows.appendChild(cell);

            cell = document.createElement('td');
            cell.innerHTML = planet.population;
            rows.appendChild(cell)

            tbody.appendChild(rows)
        }})
        .catch(function(err){
        console.log('Error:',err)
    })
}

button.addEventListener('click', function(){
    getPlanet("https://swapi.dev/api/planets/?page=1");
    button.style.display = 'none'
    nextBtn.style.display = 'inline';
})


nextBtn.addEventListener('click', function(){
    tbody.innerHTML = ""
    getPlanet("https://swapi.dev/api/planets/?page=2");
    nextBtn.style.display = 'none'
    prevBtn.style.display = 'inline';
})


prevBtn.addEventListener('click', function(){
    tbody.innerHTML = ""
    getPlanet("https://swapi.dev/api/planets/?page=1");
    prevBtn.style.display = 'none'
    nextBtn.style.display = 'inline';
})