import React from "react"

function api() {

    const KEY=process.env.REACT_APP_KEY

    // COUNTRIES AND CURRENCIES API
    const countryAPI = "https://restcountries.com/v3.1/"

    // CURRENCY CONVERSION API
    const converterAPI = `http://api.exchangeratesapi.io/v1/latest?access_key=${KEY}`

    return {
        countryAPI,
        converterAPI,
    }

}

export default api