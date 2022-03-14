import {useState} from "react"
import api from "./api"

function CallHooks() {

    // API Calls
    const {countryAPI, converterAPI, gallon, impGallon, countryList} = api()
    const name = `${countryAPI}/alpha/`

    // State
    const [homeCountry, setHomeCountry] = useState(null)
    // const [homeCurr, setHomeCurr] = useState(null)
    const [visitCountry, setVisitCountry] = useState(null)
    // const [visitCurr, setVisitCurr] = useState(null)

    // All-purpose country hook
    // const getCountry = async c => {
    //     console.log("getCountry is running")
    //     console.log(name + c)
    //     const response = await fetch(name + c)
    //     const data = await response.json
    //     return data
    // }

    // Set user's home country
    // Less DRY but good start
    const getHomeCountry = async c => {
        console.log("getHomeCountry is running")
        console.log(name + c)
        const response = await fetch(name + c)
        const data = await response.json
        setHomeCountry(data)
    }
    // This version would be more DRY, maybe try to get it to work
    // const getHomeCountry = c => {
    //     console.log("getHomeCountry is running")
    //     console.log("getCountry(c):")
    //     console.log(getCountry(c))
    //     setHomeCountry(getCountry(c))
    //     console.log(homeCountry)
    // }

    // Set user's visiting country
    // see above notes re: DRYness
    const getVisitCountry = async c => {
        console.log("getCountry is running")
        console.log(name + c)
        const response = await fetch(name + c)
        const data = await response.json
        setVisitCountry(data)
    }

    // const getVisitCountry = async c => {
    //     setVisitCountry(getCountry(c))
    //     console.log(visitCountry)
    // }

    const convertCurr = (homeCurr, visitCurr) => {
        console.log(homeCountry)
        console.log(visitCountry)
    }

    return {
        getHomeCountry,
        getVisitCountry,
        convertCurr,
    }

}

export default CallHooks