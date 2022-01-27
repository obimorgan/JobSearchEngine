import Liked from './Liked'
import Jobs from './Jobs'
import { Container } from 'react-bootstrap'
// import { useState, useEffect } from 'react'
import CategorySearch from './SearchCategory'
import SearchBar from './SearchBar'

const Home = () => {

    // const [data, setData] = useState([])
    // const [searchInput, setSearchInput] = useState()
    // // const [category, setCategory] = useState()

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

    // // const fetchJobsCategory = async () => {
    // //     try {
    // //         let resp = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?category=${category}&limit=10`)
    // //         if (resp.ok) {
    // //             let data = await resp.json()
    // //             setData(data.data)
    // //         }
    // //     } catch (error) {
    // //         console.log(error)
    // //     }
    // // }

    // const handelSearch = (e) => {
    //     setSearchInput(e.target.value)
    // }
    // // const handleDropdownChange = (e) => {
    // //     setCategory(e.target.value)
    // //     console.log("dropdown")
    // // }

    // useEffect(() => {
    //     fetchJobs(searchInput)
    //     // fetchJobsCategory(category)
    // }, [searchInput])

    return (
        <>
            <div className="wrapper">
                <h1>Search Jobs!</h1>
                <div className="search_container d-flex align-items-center mt-n5">
                    {/* <CategorySearch category={category} handleDropdownChange={handleDropdownChange} /> */}
                    <CategorySearch />
                    {/* <div className="mx-5" ><SearchBar searchInput={searchInput} handelSearch={handelSearch} /></div> */}
                    <SearchBar />
                    <Liked />
                </div>
            </div>
            <Container >
                <hr />

                <div className="d-flex flex-wrap justify-content-between">
                    {/* {
                        data?.map(d => {
                            return <Jobs key={d._id} data={d} />
                        })
                    } */}
                    <Jobs />
                </div>
            </Container>
        </>
    )
}

export default Home