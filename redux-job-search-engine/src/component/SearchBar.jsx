import { useEffect, useState } from "react"


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("")

    const fetchJobs = async () => {
        try {
            let resp = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${searchInput}&limit=10`)
            if (resp.ok) {
                let data = await resp.json()
                console.log(data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handelSearch = (e) => {
        setSearchInput(e.target.value)
        console.log(searchInput)
    }
    useEffect(() => {

    }, [])


    return (
        <div className="search_bar_container mx-2">
            <input className="search_bar" placeholder="Search Jobs"
                value={searchInput}
                onChange={handelSearch}
            ></input>
        </div>
    )
}
export default SearchBar