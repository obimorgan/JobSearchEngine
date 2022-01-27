import Liked from './Liked'
import Jobs from './Jobs'
import { Container } from 'react-bootstrap'
import CategorySearch from './SearchCategory'
import SearchBar from './SearchBar'
import { connect } from 'react-redux'
// import { Alert } from 'react-bootstrap'

// const mapStateToProps = state => ({
//     errorStatus: state.results.errorStatus
// })

const Home = ({ errorStatus }) => {

    return (
        <>
            <div className="wrapper">
                <h1>Search Jobs!</h1>
                {/* {
                    errorStatus && (
                        <Alert variant="danger">
                            There is an error with retrieving data: {errorStatus}
                        </Alert>
                    )
                } */}
                <div className="search_container d-flex align-items-center mt-n5">
                    <CategorySearch />
                    <SearchBar />
                    <Liked />
                </div>
            </div>
            <Container >
                <hr />

                <div className="d-flex flex-wrap justify-content-between">
                    <Jobs />
                </div>
            </Container>
        </>
    )
}

// export default connect(mapStateToProps)(Home)
export default Home