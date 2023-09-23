import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"

import {GEO_API_URL} from '../api'
import {geoApi} from '../api'


const Search =({onSearchChange})=>{

    const [search,setSearch] = useState(null)

    const handleOnChange = (searchData) =>{
        setSearch(searchData)
        onSearchChange(searchData)
    }

    const loadOption = (inputvalue)=>{
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputvalue}`,geoApi)
        .then(response=>response.json())
        .then(response=> {
            return {
                options : response.data.map((ity)=>{
                    return {
                        value : `${ity.latitude} ${ity.longitude}`,
                        label: `${ity.name},${ity.countryCode}`
                    }
                })
            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOption}
        />
    )
}
export default Search