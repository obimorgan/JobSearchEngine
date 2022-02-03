import Liked from './Liked'
import Jobs from './Jobs'
import { Container } from 'react-bootstrap'
import CategorySearch from './SearchCategory'
import SearchBar from './SearchBar'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { useState } from 'react'

// const mapStateToProps = state => ({
//     errorStatus: state.categorySearch.errorStatus
// })

const Home = () => {

    const jobs = useSelector(state => state.categorySearch.results)
    console.log(jobs)
    const errorStatus = useSelector(state => state.categorySearch.errorStatus)
    const displayGoodluck = useSelector(state => state.home.displayGoodluck)
    console.log(displayGoodluck)

    return (
        <>
            <div className="wrapper">
                <h1>Search Jobs!</h1>
                <div className="search_container d-flex align-items-center mt-n5">
                    <CategorySearch />
                    <SearchBar />
                    <Liked />
                </div>
            </div>
            <Container >
                <hr />
                {
                    displayGoodluck === true ?
                        <Alert variant="success" className="text-center">
                            <h2>Goodluck with your search!!</h2>
                        </Alert>
                        : null
                }
                {
                    errorStatus && (
                        <Alert variant="danger">
                            There is an error with retrieving data: {errorStatus}
                        </Alert>
                    )
                }
                <div className="d-flex flex-wrap justify-content-between">
                    {jobs?.map(job => (
                        <Jobs key={job._id} job={job} />
                    ))
                    }
                </div>
            </Container>
        </>
    )
}

export default Home