//Js runs from top to bottom
//creat is associated with post
//read is get
//update is put (Patch)
//delete is delete


const strWeatherAPIURL = 'https://api.open-meteo.com/v1/forecast?latitude=36.1693184&longitude=-85.508096&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&hourly=temperature_2m,relative_humidity_2m,precipitation,precipitation_probability,weather_code,cloud_cover,soil_temperature_0cm,wind_speed_10m,wind_speed_80m,wind_direction_10m,wind_direction_80m,wind_gusts_10m,soil_moisture_0_to_1cm,visibility,uv_index,is_day&current=temperature_2m,relative_humidity_2m,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,precipitation,weather_code,cloud_cover&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch'

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

    if(!objResponse.ok){
        alert('Error getting data')
    }
    else{
        const objData = await objResponse.json()
        document.querySelector('#lblCurrentTemp').innerHTML = objData.current.temperature_2m + '°'
        let strMaxTemp = objData.daily.temperature_2m_max[0]
        let strMinTemp = objData.daily.temperature_2m_min[0]
        console.log(strMaxTemp)
        document.querySelector('#lblLow').innerHTML = strMinTemp + '°'
        document.querySelector('#lblHigh').innerHTML = strMaxTemp + '°'
        let strCurrentWeatherCode = objData.current.weather_code
        // || pipe or
        /* if (strCurrentWeatherCode == 0 || strCurrentWeatherCode < 4){ //advantage easy to read

        } */
        if([0,1,2,3].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-brightness-high"></i>'
        }
        if([45,48].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-fog"></i>'
        }
        if([51,53,55,56,57].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
        }
        if([61,63,65,66,67,80,81,82].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-rain"></i>'
        }
        if([71,73,75,77,85,86].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-snow"></i>'
        }
        if([95,96,99].includes(strCurrentWeatherCode)){ // more flexible
            document.querySelector('#lblIcon').innerHTML = '<i class="bi bi-cloud-lighting-rain"></i>'
        }
        
    }
}
