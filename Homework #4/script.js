console.log('Conected');

let table = document.getElementById('table');
let button = document.getElementById('btn');
let nextBtn = document.getElementById('next10')
let prevBtn = document.getElementById('previos');
nextBtn.style.display = 'none';
prevBtn.style.display = 'none';

button.addEventListener('click',function(){
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody');
    let row = document.createElement('tr');
        let col = document.createElement('td');
        col.innerHTML = "Name:"
        row.appendChild(col);

        col = document.createElement('td');
        col.innerHTML = "Climate:"
        row.appendChild(col);

        col = document.createElement('td');
        col.innerHTML = "Gravity:"
        row.appendChild(col);

        col = document.createElement('td');
        col.innerHTML = "Population:"
        row.appendChild(col)
        thead.appendChild(row);
    table.appendChild(thead);
    table.appendChild(tbody);
    button.style.display = 'none'
    nextBtn.style.display = 'inline';

    fetch("https://swapi.dev/api/planets/?page=1")
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        let results = data.results
        for(let planet of results){
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
        }
       
    })
    .catch(function(err){
        console.log('Error:',err)
    })


})



nextBtn.addEventListener('click', function(){
    table.innerHTML = ""
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody');
    let row = document.createElement('tr');
        let col = document.createElement('td');
        col.innerHTML = "Name:"
        row.appendChild(col);

        col = document.createElement('td');
        col.innerHTML = "Climate:"
        row.appendChild(col);

        col = document.createElement('td');
        col.innerHTML = "Gravity:"
        row.appendChild(col);

        col = document.createElement('td');
        col.innerHTML = "Population:"
        row.appendChild(col)
        thead.appendChild(row);
    table.appendChild(thead);
    table.appendChild(tbody);
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'inline';

    fetch("https://swapi.dev/api/planets/?page=2")
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        let results = data.results
        for(let planet of results){
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
        }
       
    })
    .catch(function(err){
        console.log('Error:',err)
    })


})


prevBtn.addEventListener('click', function(){
    table.innerHTML = ""
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody');
    let row = document.createElement('tr');
        let col = document.createElement('td');
        col.innerHTML = "Name:"
        row.appendChild(col);

        col = document.createElement('td');
        col.innerHTML = "Climate:"
        row.appendChild(col);

        col = document.createElement('td');
        col.innerHTML = "Gravity:"
        row.appendChild(col);

        col = document.createElement('td');
        col.innerHTML = "Population:"
        row.appendChild(col)
        thead.appendChild(row);
    table.appendChild(thead);
    table.appendChild(tbody);
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'inline';


    fetch("https://swapi.dev/api/planets/?page=1")
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        let results = data.results
        for(let planet of results){
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
        }
       
    })
    .catch(function(err){
        console.log('Error:',err)
    })


})
