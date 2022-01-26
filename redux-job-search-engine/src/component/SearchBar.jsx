import { connect } from "react-redux"
import { useEffect, useState } from "react"
import { addSearchResultAction } from '../redux/actions'


const mapDispatchToProps = (dispatch) => ({
    addSearchResult: (data) => {
        dispatch(addSearchResultAction(data))
    }
})

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("")
    const [data, setData] = useState([])

    const fetchJobs = async () => {
        try {
            let resp = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${searchInput}&limit=10`)
            if (resp.ok) {
                let data = await resp.json()
                console.log(data.data)
                setData(data.data)
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
        fetchJobs(searchInput)
    }, [searchInput])

    useEffect(() => {
        mapDispatchToProps(data)
    }, [data])


    return (
        <div className="search_bar_container mx-2">
            <input className="search_bar" placeholder="Search Jobs"
                value={searchInput}
                onChange={handelSearch}
            ></input>
        </div>
    )
}
export default connect(s => ({}), mapDispatchToProps)(SearchBar)