let api_url = 'https://v6.exchangerate-api.com/v6/3a8bc95ea7827c4475d638d9/latest/EUR';

    async function obtenerCotizacion(){
        let response = await fetch(api_url);
        let data =  await response.json([]);
        console.log(data)
        
       let {time_last_update_utc,base_code,conversion_rates=[ARS]} = data;
        
       
        document.getElementById('act').textContent=time_last_update_utc;
        //document.getElementById('bas').textContent=base_code;
        document.getElementById('cot').textContent=data.conversion_rates.ARS;
    }
    obtenerCotizacion();


