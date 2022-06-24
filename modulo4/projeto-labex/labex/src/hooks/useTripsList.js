import { useState, useEffect } from "react"
import axios from "axios"


const useTripsList = () => {
    const [tripList, setTripList] = useState([])

    useEffect(()=>{
       
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovanna-julio-hooks/trips`)
            .then((response)=>{
                setTripList(response.data.trips)
            })
            .catch((error)=>{
                console.log(error.response)
            })   
    }, [tripList])

    return tripList
}

export default useTripsList;