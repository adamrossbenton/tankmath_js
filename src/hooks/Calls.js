import {useState} from "react"
import api from "./api"

function CallHooks() {

    // API Calls
    const {countryAPI, converterAPI} = api()
    const name = `${countryAPI}/name/`

    // State
    const [homeCountry, setHomeCountry] = useState(null)
    const [homeCurr, setHomeCurr] = useState(null)
    const [visitCountry, setVisitCountry] = useState(null)
    const [visitCurr, setVisitCurr] = useState(null)

    const getHomeCountry = async (c) => {
        console.log(name + c)
        const response = await fetch(name + c)
        const data = await response.json()
        setHomeCountry(data)
    }

    return {
        getHomeCountry,
    }

}

export default CallHooks