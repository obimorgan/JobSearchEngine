
import Jobs from './Jobs'
import { Container, Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import CategorySearch from './SearchCategory'
import SearchBar from './SearchBar'

const Home = () => {

    const [data, setData] = useState([])
    // const [searchInput, setSearchInput] = useState()
    const [category, setCategory] = useState()

    console.log("Home", data)
    console.log("category", category)

    // const fetchJobs = async () => {
    //     try {
    //         let resp = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${searchInput}&limit=10`)
    //         if (resp.ok) {
    //             let data = await resp.json()
    //             setData(data.data)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const fetchJobsCategory = async () => {
        try {
            let resp = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?category=${category}&limit=10`)
            if (resp.ok) {
                let data = await resp.json()
                setData(data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handelSearch = (e) => {
        setSearchInput(e.target.value)
    }
    const handleDropdownChange = (e) => {
        setCategory(e.target.value)
        console.log("dropdown")
    }

    useEffect(() => {
        fetchJobs(searchInput)
        fetchJobsCategory(category)
    }, [searchInput, category])

    return (
        <>
            <div className="wrapper">
                <h1>Search Jobs!</h1>
                <div className="d-flex align-items-center mt-n5">
                    <CategorySearch category={category} handleDropdownChange={handleDropdownChange} />
                    <SearchBar />
                </div>
            </div>
            <Container className="job_details_container">
                <Row>
                    <Col md={4}>
                        {
                            data?.map(d => {
                                return <Jobs key={d._id} data={d} />
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home