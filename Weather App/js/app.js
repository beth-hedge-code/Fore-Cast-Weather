//EDIT LINE 268 for DEMO if sunny!

const strWeatherAPIURL = 'https://api.open-meteo.com/v1/forecast?latitude=36.1693184&longitude=-85.508096&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&hourly=temperature_2m,relative_humidity_2m,precipitation,precipitation_probability,weather_code,cloud_cover,soil_temperature_0cm,wind_speed_10m,wind_speed_80m,wind_direction_10m,wind_direction_80m,wind_gusts_10m,soil_moisture_0_to_1cm,visibility,uv_index,is_day&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code,cloud_cover&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch'

const images=["imgs\\morning-putt.webp","imgs\\early-tee-time.webp", "imgs\\Rainy-Grass.jpg", "imgs\\Rainy Golf.webp", "imgs\\winter-golf.webp", "imgs\\lightning.webp" ]

let myDate = new Date();
        let myDay = myDate.getDay();

        // Array of days. 
        let weekday = ['Sun', 'Mon', 'Tues',
            'Wed', 'Thur', 'Fri', 'Sat','Sun', 'Mon', 'Tues',
            'Wed', 'Thur', 'Fri', 'Sat'
        ];
        console.log("Today is : " + weekday[myDay+1]);

        
        document.querySelector("#day2").innerHTML = weekday[myDay+1];
        document.querySelector("#day3").innerHTML = weekday[myDay+2];
        document.querySelector("#day4").innerHTML = weekday[myDay+3];
        document.querySelector("#day5").innerHTML = weekday[myDay+4];
        document.querySelector("#day6").innerHTML = weekday[myDay+5];
        document.querySelector("#day7").innerHTML = weekday[myDay+6];  

        
        


//Gets the Data from API
getWeatherData();
async function getWeatherData(){
    const objResponse = await fetch(strWeatherAPIURL,
        {
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }
    )

    //Alerts User to fail in data gathering
    if (!objResponse.ok){
        alert('Error getting data')
    }

    //Preforms on Error free data gathering
    else{
        //Stores Data from API
        const objData = await objResponse.json()
        
        //grabs Current Temp and sends to html
        document.querySelector('#lblCurrentTemp').innerHTML = objData.current.temperature_2m + '°'
        
        //grabs minimum and maximum temperature for the day
        let strMaxTemp = objData.daily.temperature_2m_max[0]
        let strMinTemp = objData.daily.temperature_2m_min[0]
        console.log(strMaxTemp) //Tests
        //Sends to Html
        document.querySelector('#lblLow').innerHTML = strMinTemp + '°'
        document.querySelector('#lblHigh').innerHTML = strMaxTemp + '°'

        //Assigns a weather code for the present
        let strCurrentWeatherCode = objData.current.weather_code
        let strDailyWeatherCode = objData.daily.weather_code
        

        //Weekly weather forcasts (max)
        let Day1Max = objData.daily.temperature_2m_max[0]
        console.log(Day1Max)
        document.querySelector('#todayMax').innerHTML = Day1Max + '°'
        let Day2Max = objData.daily.temperature_2m_max[1]
        document.querySelector('#day2Max').innerHTML = Day2Max + '°'
        let Day3Max = objData.daily.temperature_2m_max[2]
        document.querySelector('#day3Max').innerHTML = Day3Max + '°'
        let Day4Max = objData.daily.temperature_2m_max[3]
        document.querySelector('#day4Max').innerHTML = Day4Max + '°'
        let Day5Max = objData.daily.temperature_2m_max[4]
        document.querySelector('#day5Max').innerHTML = Day5Max + '°'
        let Day6Max = objData.daily.temperature_2m_max[5]
        document.querySelector('#day6Max').innerHTML = Day6Max + '°'
        let Day7Max = objData.daily.temperature_2m_max[6]
        document.querySelector('#day7Max').innerHTML = Day7Max + '°'
 
        //weekly weather forcasts (min)
        let Day1Min = objData.daily.temperature_2m_min[0]
        console.log(Day1Min)
        document.querySelector('#todayMin').innerHTML = Day1Min + '°'
        let Day2Min = objData.daily.temperature_2m_min[1]
        document.querySelector('#day2Min').innerHTML = Day2Min + '°'
        let Day3Min = objData.daily.temperature_2m_min[2]
        document.querySelector('#day3Min').innerHTML = Day3Min + '°'
        let Day4Min = objData.daily.temperature_2m_min[3]
        document.querySelector('#day4Min').innerHTML = Day4Min + '°'
        let Day5Min = objData.daily.temperature_2m_min[4]
        document.querySelector('#day5Min').innerHTML = Day5Min + '°'
        let Day6Min = objData.daily.temperature_2m_min[5]
        document.querySelector('#day6Min').innerHTML = Day6Min + '°'
        let Day7Min = objData.daily.temperature_2m_min[6]
        document.querySelector('#day7Min').innerHTML = Day7Min + '°'

        //weekly weather icons
        let Day1Icon = strDailyWeatherCode[0]
        console.log(Day1Icon)
        document.querySelector('#todayIcon').innerHTML = Day1Icon
        let Day2Icon = strDailyWeatherCode[1]
        console.log(Day2Icon)
        document.querySelector('#day2Icon').innerHTML = Day2Icon 
        let Day3Icon = strDailyWeatherCode[2]
        console.log(Day3Icon)
        document.querySelector('#day3Icon').innerHTML = Day3Icon
        let Day4Icon = strDailyWeatherCode[3]
        console.log(Day4Icon)
        document.querySelector('#day4Icon').innerHTML = Day4Icon
        let Day5Icon = strDailyWeatherCode[4]
        console.log(Day5Icon)
        document.querySelector('#day5Icon').innerHTML = Day5Icon
        let Day6Icon = strDailyWeatherCode[5]
        console.log(Day6Icon)
        document.querySelector('#day6Icon').innerHTML = Day6Icon 
        let Day7Icon = strDailyWeatherCode[6]
        console.log(Day7Icon)
        document.querySelector('#day7Icon').innerHTML = Day7Icon
 
        //icon tests (TODAY)
        if([0,1,2,3].includes(strDailyWeatherCode[0])){ // more flexible
            document.querySelector('#todayIcon').innerHTML = '<i class="bi bi-brightness-high"></i>'
        }
        if([45,48].includes(strDailyWeatherCode[0])){ // more flexible
            document.querySelector('#todayIcon').innerHTML = '<i class="bi bi-cloud-fog"></i>'
        }
        if([51,53,55,56,57].includes(strDailyWeatherCode[0])){ // more flexible
            document.querySelector('#todayIcon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
        }
        if([61,63,65,66,67,80,81,82].includes(strDailyWeatherCode[0])){ // more flexible
            document.querySelector('#todayIcon').innerHTML = '<i class="bi bi-cloud-rain"></i>'
        }
        if([71,73,75,77,85,86].includes(strDailyWeatherCode[0])){ // more flexible
            document.querySelector('#todayIcon').innerHTML = '<i class="bi bi-cloud-snow"></i>'
        }
        if([95,96,99].includes(strDailyWeatherCode[0])){ // more flexible
            document.querySelector('#todayIcon').innerHTML = '<i class="bi bi-cloud-lighting-rain"></i>'
        }

        //icon tests (DAY 2)
        if([0,1,2,3].includes(strDailyWeatherCode[1])){ // more flexible
            document.querySelector('#day2Icon').innerHTML = '<i class="bi bi-brightness-high"></i>'
        }
        if([45,48].includes(strDailyWeatherCode[1])){ // more flexible
            document.querySelector('#day2Icon').innerHTML = '<i class="bi bi-cloud-fog"></i>'
        }
        if([51,53,55,56,57].includes(strDailyWeatherCode[1])){ // more flexible
            document.querySelector('#day2Icon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
        }
        if([61,63,65,66,67,80,81,82].includes(strDailyWeatherCode[1])){ // more flexible
            document.querySelector('#day2Icon').innerHTML = '<i class="bi bi-cloud-rain"></i>'
        }
        if([71,73,75,77,85,86].includes(strDailyWeatherCode[1])){ // more flexible
            document.querySelector('#day2Icon').innerHTML = '<i class="bi bi-cloud-snow"></i>'
        }
        if([95,96,99].includes(strDailyWeatherCode[1])){ // more flexible
            document.querySelector('#day2Icon').innerHTML = '<i class="bi bi-cloud-lighting-rain"></i>'
        }

        //icon tests (DAY 3)
        if([0,1,2,3].includes(strDailyWeatherCode[2])){ // more flexible
            document.querySelector('#day3Icon').innerHTML = '<i class="bi bi-brightness-high"></i>'
        }
        if([45,48].includes(strDailyWeatherCode[2])){ // more flexible
            document.querySelector('#day3Icon').innerHTML = '<i class="bi bi-cloud-fog"></i>'
        }
        if([51,53,55,56,57].includes(strDailyWeatherCode[2])){ // more flexible
            document.querySelector('#day3Icon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
        }
        if([61,63,65,66,67,80,81,82].includes(strDailyWeatherCode[2])){ // more flexible
            document.querySelector('#day3Icon').innerHTML = '<i class="bi bi-cloud-rain"></i>'
        }
        if([71,73,75,77,85,86].includes(strDailyWeatherCode[2])){ // more flexible
            document.querySelector('#day3Icon').innerHTML = '<i class="bi bi-cloud-snow"></i>'
        }
        if([95,96,99].includes(strDailyWeatherCode[2])){ // more flexible
            document.querySelector('#day3Icon').innerHTML = '<i class="bi bi-cloud-lighting-rain"></i>'
        }

        //icon tests (DAY 4)
        if([0,1,2,3].includes(strDailyWeatherCode[3])){ // more flexible
            document.querySelector('#day4Icon').innerHTML = '<i class="bi bi-brightness-high"></i>'
        }
        if([45,48].includes(strDailyWeatherCode[3])){ // more flexible
            document.querySelector('#day4Icon').innerHTML = '<i class="bi bi-cloud-fog"></i>'
        }
        if([51,53,55,56,57].includes(strDailyWeatherCode[3])){ // more flexible
            document.querySelector('#day4Icon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
        }
        if([61,63,65,66,67,80,81,82].includes(strDailyWeatherCode[3])){ // more flexible
            document.querySelector('#day4Icon').innerHTML = '<i class="bi bi-cloud-rain"></i>'
        }
        if([71,73,75,77,85,86].includes(strDailyWeatherCode[3])){ // more flexible
            document.querySelector('#day4Icon').innerHTML = '<i class="bi bi-cloud-snow"></i>'
        }
        if([95,96,99].includes(strDailyWeatherCode[3])){ // more flexible
            document.querySelector('#day4Icon').innerHTML = '<i class="bi bi-cloud-lighting-rain"></i>'
        }

        //icon tests (DAY 5)
        if([0,1,2,3].includes(strDailyWeatherCode[4])){ // more flexible
            document.querySelector('#day5Icon').innerHTML = '<i class="bi bi-brightness-high"></i>'
        }
        if([45,48].includes(strDailyWeatherCode[4])){ // more flexible
            document.querySelector('#day5Icon').innerHTML = '<i class="bi bi-cloud-fog"></i>'
        }
        if([51,53,55,56,57].includes(strDailyWeatherCode[4])){ // more flexible
            document.querySelector('#day5Icon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
        }
        if([61,63,65,66,67,80,81,82].includes(strDailyWeatherCode[4])){ // more flexible
            document.querySelector('#day5Icon').innerHTML = '<i class="bi bi-cloud-rain"></i>'
        }
        if([71,73,75,77,85,86].includes(strDailyWeatherCode[4])){ // more flexible
            document.querySelector('#day5Icon').innerHTML = '<i class="bi bi-cloud-snow"></i>'
        }
        if([95,96,99].includes(strDailyWeatherCode[4])){ // more flexible
            document.querySelector('#day5Icon').innerHTML = '<i class="bi bi-cloud-lighting-rain"></i>'
        }

        //icon tests (DAY 6)
        if([0,1,2,3].includes(strDailyWeatherCode[5])){ // more flexible
            document.querySelector('#day6Icon').innerHTML = '<i class="bi bi-brightness-high"></i>'
        }
        if([45,48].includes(strDailyWeatherCode[5])){ // more flexible
            document.querySelector('#day6Icon').innerHTML = '<i class="bi bi-cloud-fog"></i>'
        }
        if([51,53,55,56,57].includes(strDailyWeatherCode[5])){ // more flexible
            document.querySelector('#day6Icon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
        }
        if([61,63,65,66,67,80,81,82].includes(strDailyWeatherCode[5])){ // more flexible
            document.querySelector('#day6Icon').innerHTML = '<i class="bi bi-cloud-rain"></i>'
        }
        if([71,73,75,77,85,86].includes(strDailyWeatherCode[5])){ // more flexible
            document.querySelector('#day6Icon').innerHTML = '<i class="bi bi-cloud-snow"></i>'
        }
        if([95,96,99].includes(strDailyWeatherCode[5])){ // more flexible
            document.querySelector('#day6Icon').innerHTML = '<i class="bi bi-cloud-lighting-rain"></i>'
        }

        //icon tests (DAY 7)
        if([0,1,2,3].includes(strDailyWeatherCode[6])){ // more flexible
            document.querySelector('#day7Icon').innerHTML = '<i class="bi bi-brightness-high"></i>'
        }
        if([45,48].includes(strDailyWeatherCode[6])){ // more flexible
            document.querySelector('#day7Icon').innerHTML = '<i class="bi bi-cloud-fog"></i>'
        }
        if([51,53,55,56,57].includes(strDailyWeatherCode[6])){ // more flexible
            document.querySelector('#day7Icon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
        }
        if([61,63,65,66,67,80,81,82].includes(strDailyWeatherCode[6])){ // more flexible
            document.querySelector('#day7Icon').innerHTML = '<i class="bi bi-cloud-rain"></i>'
        }
        if([71,73,75,77,85,86].includes(strDailyWeatherCode[6])){ // more flexible
            document.querySelector('#day7Icon').innerHTML = '<i class="bi bi-cloud-snow"></i>'
        }
        if([95,96,99].includes(strDailyWeatherCode[6])){ // more flexible
            document.querySelector('#day7Icon').innerHTML = '<i class="bi bi-cloud-lighting-rain"></i>'
        }
 
        //icon tests (Label)
        if([0,1,2,3].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-brightness-high"></i>'
            const image = document.getElementById("CurrentWeatherImageId")
            image.src = images[0];
        }
        if([45,48].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-fog"></i>'
            const image = document.getElementById("CurrentWeatherImageId")
            image.src = images[1];
        }
        if([51,53,55,56,57].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
            const image = document.getElementById("CurrentWeatherImageId")
            image.src = images[2];
        }
        if([61,63,65,66,67,80,81,82].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-rain"></i>'
            const image = document.getElementById("CurrentWeatherImageId")
            image.src = images[3];
        }
        if([71,73,75,77,85,86].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-snow"></i>'
            const image = document.getElementById("CurrentWeatherImageId")
            image.src = images[4];
        }
        if([95,96,99].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-lighting-rain"></i>'
            const image = document.getElementById("CurrentWeatherImageId")
            image.src = images[5];
        }


    }
}
