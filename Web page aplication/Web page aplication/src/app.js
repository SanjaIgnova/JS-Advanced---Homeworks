console.log('We are live and ready to make a great app')



let navBar = document.getElementsByClassName('nav-link');
let pages = document.getElementsByClassName('page')
let button = document.getElementById('btn')
let city = document.getElementById('city')
let headerItems = ['Icon of weather', 'Description of weather', 'Date and time', 'Temperature', 'Humidity', 'Wind Speed'];
let table = document.getElementById('table');
let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let text = document.getElementById('text');
let div = document.getElementById('hourlyPage1');

// Navbar activate 

function activeateNavBar(){
    for(let i=0; i<pages.length; i++){
       
        pages[i].style.display = 'none';

       navBar[i].addEventListener('click', function(){
        
         if (i === 0){
                navBar[0].classList.add('active'); 
                navBar[1].classList.remove('active');
                navBar[2].classList.remove('active');
                pages[0].style.display = 'block';
                pages[1].style.display = 'none';
                pages[2].style.display = 'none';
               
            }else if (i=== 1){
                navBar[0].classList.remove('active'); 
                navBar[1].classList.add('active');
                navBar[2].classList.remove('active');
                pages[0].style.display = 'none';
                pages[1].style.display = 'block';
                pages[2].style.display = 'none';
             }  else if(i === 2){
                navBar[0].classList.remove('active'); 
                navBar[1].classList.remove('active');
                navBar[2].classList.add('active')
                pages[0].style.display = 'none';
                pages[1].style.display = 'none';
                pages[2].style.display = 'block';
                          
            }
                        
        })        
    }
    

}

activeateNavBar();

// Hourly weather 

button.addEventListener('click', function(){
   pages[0].style.display = 'block';
    if(city.value === ""){
        table.style.display = ""
    } 
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&units=metric&APPID=5ef511110503f628bdbe0864efe00a83`)
    .then(function(response){

        return response.json();
        
    })
    .then(function(data){
        makeHeaders(headerItems,table)
        createTable(data)
        statisticWeather(data)  
        aboutWeather(city.value)
        hourlyWeather(city.value)
       
    })
    .catch(error=>console.log(error))
    
    table.innerHTML = ""
    list1.innerHTML = ""
    list2.innerHTML = ""
    text.innerHTML = ""
    div.innerHTML = ""
})



function makeHeaders(array, table){
    if(city.value === ""){
        table.style.display = none
    } 
    let thead = document.createElement('thead');
    let trow = document.createElement('tr');
     array.forEach(element => {
        let tcolumn = document.createElement('th');
        tcolumn.innerHTML = element;
        tcolumn.style.border = '3px solid black'
        tcolumn.style.textAlign = 'center'
        tcolumn.style.backgroundColor = 'lightblue';
        trow.appendChild(tcolumn);
        thead.appendChild(trow);
        table.appendChild(thead);
     })
}

function createTable(data){
   
        let tbody = document.createElement('tbody');
       
        let city = data;
      for (let i = 0; i < city.list.length; i++){
        let rows = document.createElement('tr');
        let iconOfWeather = document.createElement('td');
        iconOfWeather.innerHTML =`<img src=https://openweathermap.org/img/w/${city.list[i].weather[0].icon}.png></img>`
        iconOfWeather.style.border = '3px solid black';
        iconOfWeather.style.textAlign = 'center';
        rows.appendChild(iconOfWeather)
    
        let descriptionOfWeather = document.createElement('td');
        descriptionOfWeather.innerHTML = city.list[i].weather[0].description;
        descriptionOfWeather.style.border = '3px solid black';
        descriptionOfWeather.style.textAlign = 'center';
        rows.appendChild(descriptionOfWeather)
    
        let dataAndTime = document.createElement('td');
        dataAndTime.innerHTML = city.list[i].dt_txt;
        dataAndTime.style.border = '3px solid black';
        dataAndTime.style.textAlign = 'center';
        rows.appendChild(dataAndTime)
    
        let temperature = document.createElement('td');
        temperature.innerHTML = city.list[i].main.temp + "°C";
        temperature.style.border = '3px solid black';
        temperature.style.textAlign = 'center';
        rows.appendChild(temperature)
    
        let humidity = document.createElement('td');
        humidity.innerHTML = city.list[i].main.humidity + "%";
        humidity.style.border = '3px solid black';
        humidity.style.textAlign = 'center'
        rows.appendChild(humidity)
    
        let windSpeed = document.createElement('td');
        windSpeed.innerHTML = city.list[i].wind.speed +"m/s N";
        windSpeed.style.border = '3px solid black';
        windSpeed.style.textAlign = 'center';
        rows.appendChild(windSpeed)
        tbody.appendChild(rows)
        table.appendChild(tbody);
    }
}

// Statistics weather

function statisticWeather(data){
    // pages[0].style.display = 'block'
    
    let minTemp = data.list[0].main.temp;
    let maxTemp = data.list[0].main.temp;
    let sumTemp = 0;
    let minHum = data.list[0].main.humidity;
    let maxHum = data.list[0].main.humidity;
    let sumHum = 0;
    let dateAndTimeTempMin = data.list[0].dt_txt
    let dateAndTimeTempMax = data.list[0].dt_txt
    data.list.forEach(element => {
        if(element.main.temp < minTemp){
            minTemp = element.main.temp;
            dateAndTimeTempMin = element.dt_txt
        }
        if(element.main.temp > maxTemp){
            maxTemp = element.main.temp;
            dateAndTimeTempMax = element.dt_txt
        }
        if(element.main.humidity < minHum){
            minHum = element.main.humidity;
        }
        if(element.main.humidity > maxHum){
            maxHum = element.main.humidity;
        }
      
        sumTemp += element.main.temp;
        sumHum += element.main.humidity;
      
     
    })
    let tempAverage = sumTemp/data.list.length;
    let humAverage = sumHum/data.list.length;


    let minTemperature = document.createElement('li')
    minTemperature.innerHTML = `Minimum Temperature for city of ${city.value} is: \n ${minTemp} °C measured in ${dateAndTimeTempMin}`
    let maxTemperature = document.createElement('li')
    maxTemperature.innerHTML = `Maximum temperature for city of ${city.value} is: \n ${maxTemp} °C measured in ${dateAndTimeTempMax}` 
    let minHumidity = document.createElement('li')
    minHumidity.innerHTML = `Minimum humidity for  city of ${city.value} is: \n ${minHum} %`
    let maxHumidity = document.createElement('li')
    maxHumidity.innerHTML = `Maximum humidity for city of ${city.value} is: \n ${maxHum} %`
    let sumTemperature = document.createElement('li')
    sumTemperature.innerHTML = `Sum of all temperature for city of ${city.value} is: \n ${sumTemp}`
    let sumHumidity = document.createElement('li')
    sumHumidity.innerHTML = `Sum of all humidity for city of ${city.value} is: \n ${sumHum}`
    let averageTemp = document.createElement('li')
    averageTemp.innerHTML = `Average temperature  for city of ${city.value} is: \n ${tempAverage}`
    let averageHumidity = document.createElement('li')
    averageHumidity.innerHTML = `Average humidity for city of ${city.value} is: \n ${humAverage}`
    list1.appendChild(minTemperature);
    list1.appendChild(maxTemperature);
    list2.appendChild(minHumidity);
    list2.appendChild(maxHumidity);
    list1.appendChild(sumTemperature);
    list2.appendChild(sumHumidity);
    list1.appendChild(averageTemp);
    list2.appendChild(averageHumidity);

}




function aboutWeather(input){
  
    input = city.value
    let text1 = document.createElement('p');
    text1.innerText = `This is the weather forecast for the city of ${input}.`
    let text2 = document.createElement('p');
    text2.innerHTML = '<img src=src/img/weather.png weight = 250px height = 250px></img>'
    text.appendChild(text1)
    text.appendChild(text2);
}


function hourlyWeather(input){
   
    input = city.value
    let text3 = document.createElement('p')
    text3.innerHTML = `This is the weather forecast for the city of ${input}.`
    div.appendChild(text3)
    
}
