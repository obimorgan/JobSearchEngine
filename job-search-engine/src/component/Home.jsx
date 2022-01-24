// import SearchBar from './SearchBar'
import Jobs from './Jobs'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const Home = () => {

    const [data, setData] = useState([])
    const [searchInput, setSearchInput] = useState()

    console.log("Home", data)

    const fetchJobs = async () => {
        try {
            let resp = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${searchInput}&limit=10`)
            if (resp.ok) {
                let data = await resp.json()
                setData(data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handelSearch = (searchInput) => {
        fetchJobs(searchInput)
        console.log("Search")
    }

    useEffect(() => {
        fetchJobs(searchInput)
    }, [searchInput])

    return (
        <Container className="wrapper">
            <div>
                <div className="search_bar_container">
                    <input className="search_bar" placeholder="Search Jobs"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    ></input>
                    <button className="search_btn" style={{ display: "none" }}
                        unSubmit={() => handelSearch(searchInput)}
                    >Search</button>
                </div>
                {
                    data?.map(d => {
                        return <Jobs key={d._id} data={d} />
                    })
                }
            </div>
        </Container>
    )
}

export default Home