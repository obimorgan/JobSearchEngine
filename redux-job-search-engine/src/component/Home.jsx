import Liked from './Liked'
import Jobs from './Jobs'
import { Container } from 'react-bootstrap'
import CategorySearch from './SearchCategory'
import SearchBar from './SearchBar'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

// const mapStateToProps = state => ({
//     errorStatus: state.categorySearch.errorStatus
// })

const Home = () => {

    const jobs = useSelector(state => state.categorySearch.results)
    const errorStatus = useSelector(state => state.categorySearch.errorStatus)
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
                    errorStatus && (
                        <Alert variant="danger">
                            There is an error with retrieving data: {errorStatus}
                        </Alert>
                    )
                }
                <div className="d-flex flex-wrap justify-content-between">
                    {jobs && jobs.map(job => (
                        <Jobs job={job} />
                    ))
                    }
                </div>
            </Container>
        </>
    )
}

export default Home