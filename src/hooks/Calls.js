import {useState} from "react"
import api from "./api"

function CallHooks() {

    // API Calls
    const {countryAPI, converterAPI, gallon, impGallon, countryList} = api()
    const name = `${countryAPI}/name/`

    // State
    const [homeCountry, setHomeCountry] = useState(null)
    const [homeCurr, setHomeCurr] = useState(null)
    const [visitCountry, setVisitCountry] = useState(null)
    const [visitCurr, setVisitCurr] = useState(null)

    // ALL-PURPOSE HOOKS
    // Find country from list
    const getCountry = async c => {
        console.log(name + c)
        const response = await fetch(name + c)
        const data = await response.json
        return data
    }

    // SPECIFIC HOOKS
    // Set user's home country
    const getHomeCountry = async c => {
        setHomeCountry(getCountry(c))
    }

    // Set user's visiting country
    const getVisitCountry = async c => {
        setVisitCountry(getCountry(c))
    }

    return {
        getHomeCountry,
        getVisitCountry,

    }

}

export default CallHooks