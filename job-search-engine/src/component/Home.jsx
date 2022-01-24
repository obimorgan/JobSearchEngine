// import SearchBar from './SearchBar'
import Jobs from './Jobs'
import { ButtonGroup, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'


const Home = () => {

    const [data, setData] = useState([])
    const [searchInput, setSearchInput] = useState()
    const [category, setCategory] = useState()

    console.log("Home", data)

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

    const handelSearch = (searchInput) => {
        fetchJobs(searchInput)
    }

    const handleDropdownChange = () => {
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
                    <DropdownButton as={ButtonGroup} title="Category" id="dropdown-basic" variant="success"
                        value={category}
                        onChange={handleDropdownChange}
                    >
                        <Dropdown.Item value="Business">Business</Dropdown.Item>
                        <Dropdown.Item value="Customer Service">Customer Service</Dropdown.Item>
                        <Dropdown.Item value="Data">Data</Dropdown.Item>
                        <Dropdown.Item value="Design">Design</Dropdown.Item>
                        <Dropdown.Item value="DevOps / Sysadmin">DevOps / Sysadmin</Dropdown.Item>
                        <Dropdown.Item value="inance / Legal">Finance / Legal</Dropdown.Item>
                        <Dropdown.Item value="uman Resources">Human Resources</Dropdown.Item>
                        <Dropdown.Item value="Marketing">Marketing</Dropdown.Item>
                        <Dropdown.Item value="Product">Product</Dropdown.Item>
                        <Dropdown.Item value="QA">QA</Dropdown.Item>
                        <Dropdown.Item value="Sales">Sales</Dropdown.Item>
                        <Dropdown.Item value="Software Development">Software Development</Dropdown.Item>
                        <Dropdown.Item value="Teaching">Teaching</Dropdown.Item>
                        <Dropdown.Item value="Writing">Writing</Dropdown.Item>
                    </DropdownButton>


                    <div className="search_bar_container mx-2">
                        <input className="search_bar" placeholder="Search Jobs"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        ></input>
                        <button className="search_btn" style={{ display: "none" }}
                            unSubmit={() => handelSearch(searchInput)}
                        >Search</button>
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