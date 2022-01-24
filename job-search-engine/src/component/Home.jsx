// import SearchBar from './SearchBar'
import Jobs from './Jobs'
import { ButtonGroup, Option, Select } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'


const Home = () => {

    const [data, setData] = useState([])
    const [searchInput, setSearchInput] = useState()
    const [category, setCategory] = useState()

    console.log("Home", data)
    console.log("category", category)

    const fetchJobs = async () => {
        try {
            let resp = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${searchInput || category}&limit=10`)
            if (resp.ok) {
                let data = await resp.json()
                setData(data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // const handelSearch = (searchInput) => {
    //     fetchJobs(searchInput)
    // }

    const handleDropdownChange = (e) => {
        setCategory(e.target.value)
        console.log("dropdown")
    }

    useEffect(() => {
        fetchJobs(searchInput)
    }, [searchInput, category])

    return (
        <Container className="wrapper">
            <div className="home_items">
                <h1>Search Jobs!</h1>

                <div className="d-flex align-items-center">
                    <form>
                        <select as={ButtonGroup} title="Category" id="dropdown-basic" variant="success"
                            value={category}
                            onChange={handleDropdownChange}
                        >
                            <option value="Business">Business</option>
                            <option value="Customer Service">Customer Service</option>
                            <option value="Data">Data</option>
                            <option value="Design">Design</option>
                            <option value="DevOps / Sysadmin">DevOps / Sysadmin</option>
                            <option value="inance / Legal">Finance / Legal</option>
                            <option value="uman Resources">Human Resources</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Product">Product</option>
                            <option value="QA">QA</option>
                            <option value="Sales">Sales</option>
                            <option value="Software Development">Software Development</option>
                            <option value="Teaching">Teaching</option>
                            <option value="Writing">Writing</option>
                        </select>
                    </form>


                    <div className="search_bar_container mx-2">
                        <input className="search_bar" placeholder="Search Jobs"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        ></input>
                    </div>
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