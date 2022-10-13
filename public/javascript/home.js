const yearDropDown = document.getElementById('year-toggle');


{/* <li><a class="dropdown-item" href="#">Action</a></li>
<li><a class="dropdown-item" href="#">Same here~!!!</a></li>
<li><a class="dropdown-item" href="#">Something else here</a></li> */}

const yearUrl = String(location.href + 'api/cars/year');
const makeUrl = String(location.href + 'api/cars/makes')
// const  url =  api.replace('/#/', '')

async function getYearData(){
    const res = await fetch(yearUrl,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    const years = await res.json();
    
    //create options from the list of years
    createYearsOptions(years)
    

}
async function getMakeData(){
    const res = await fetch(yearUrl,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    const years = await res.json();
    console.log(years)
    //create options from the list of years
    createMakesOptions(years)
    

}

function createMakesOptions(makes){
    const makeList = document.querySelector('[aria-labelledby="model-toggle"]');

    //To Clear all previous makes
    makeList.textContent = ''

    for(const [key,value] of Object.entries(makes)){
        const li = document.createElement('li');
       
        li.innerHTML = `<a class="dropdown-item" href="/cars/${value.id}">${value.car_year}(${value.quantity})</a>`
         yearList.append(li)
    }
}

function createYearsOptions(years){
    const yearList = document.querySelector('[aria-labelledby="year-toggle"]');
    
    //To clear all previous years
    yearList.textContent = ''

    for(const [key,value] of Object.entries(years)){
         const li = document.createElement('li');
         li.innerHTML = `<a class="dropdown-item" href="">${value.car_year}(${value.quantity})</a>`
          yearList.append(li)
        
    }
}

yearDropDown.addEventListener('click' , getYearData)