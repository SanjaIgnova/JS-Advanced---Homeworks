console.log('We are live and ready to make a great app')



let navBar = document.getElementsByClassName('nav-link');
let pages = document.getElementsByClassName('page')
let button = document.getElementsByClassName('btn btn-outline-success ')
let city = document.getElementsByClassName('form-control me-2')
let headerItems = ['Icon of weather', 'Description of weather', 'Date and time', 'Temperature', 'Humidity', 'Wind Speed'];
let result = document.getElementsByClassName('result')
let table = document.getElementById('table');
table.style.border = '2px solid black'
table.style.margin = '10px auto';


function activeateNavBar(){

    for(let i=0; i<pages.length; i++){
       
        pages[i].style.display = 'none';
       
        
       navBar[i].addEventListener('click', function(){
        
         if (i === 0){
                navBar[i].classList.add('active'); 
                navBar[i+1].classList.remove('active');
                navBar[i+2].classList.remove('active');
                pages[i].style.display = 'block';
                pages[i+1].style.display = 'none';
                pages[i+2].style.display = 'none';
               
            }else if (i=== 1){
                navBar[i].classList.add('active'); 
                navBar[i-1].classList.remove('active');
                navBar[i+1].classList.remove('active');
                pages[i].style.display = 'block';
                pages[i+1].style.display = 'none';
                pages[i-1].style.display = 'none';
             }  else if(i === 2){
                navBar[i].classList.add('active'); 
                navBar[i-1].classList.remove('active');
                pages[i].style.display = 'block';
                pages[i-1].style.display = 'none';
                pages[i-2].style.display = 'none';
                          
            }
                        
        })        

    }

}

activeateNavBar();




function createTable(){
    if (city.value === ''){

        table.style.display = 'none';
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&units=metric&APPID=5ef511110503f628bdbe0864efe00a83`)
    .then(function(response){

        return response.json();
        
    })
    .then(function(data){

        makeHeaders(headerItems);
        makeTableBody(data);
    })
    .catch(error=>console.log(error))

}

// button.addEventListener('click', function(){
//     createTable()
//     makeHeaders(headerItems);
//     makeTableBody(data)
// })



function makeHeaders(array, table){
    let thead = document.createElement('thead');
    let trow = document.createElement('tr');
     array.forEach(element => {
        let tcolumn = document.createElement('th');
        tcolumn.innerText = element;
        tcolumn.style.border = '2px solid black'
        tcolumn.style.textAlign = 'center'
        tcolumn.style.backgroundColor = 'lightblue';
        tcolumn.style.padding = '10px'
        trow.appendChild(tcolumn);
     });
     thead.appendChild(trow);
     table.appendChild(thead);
        
    }


function makeTableBody(data) {
    let tbody = document.createElement('tbody');
    let city = data;

    let iconOfWeather = document.createElement('tr');
    iconOfWeather.innerHTML = city.weather[0].icon;
    iconOfWeather.style.border = '2px solid blue';
    iconOfWeather.style.textAlign = 'center';
    tbody.appendChild(tr)

    let descriptionOfWeather = document.createElement('tr');
    descriptionOfWeather.innerHTML = city.weather[0].description;
    descriptionOfWeather.style.border = '2px solid blue';
    descriptionOfWeather.style.textAlign = 'center';
    tbody.appendChild(tr)

    let dataAndTime = document.createElement('tr');
    dataAndTime.innerHTML = city.dt_tx;
    dataAndTime.style.border = '2px solid blue';
    dataAndTime.style.textAlign = 'center';
    tbody.appendChild(tr)

    let temperature = document.createElement('tr');
    temperature.innerHTML = city.main.temp;
    temperature.style.border = '2px solid blue';
    temperature.style.textAlign = 'center';
    tbody.appendChild(tr)

    let humidity = document.createElement('tr');
    humidity.innerHTML = city.main.humidity;
    humidity.style.border = '2px solid blue';
    humidity.style.textAlign = 'center'
    tbody.appendChild(tr)

    let windSpeed = document.createElement('tr');
    windSpeed.innerHTML = city.wind.speed;
    windSpeed.style.border = '2px solid blue';
    windSpeed.style.textAlign = 'center';
    tbody.appendChild(tr)
   
    table.appendChild(tbody);
}


