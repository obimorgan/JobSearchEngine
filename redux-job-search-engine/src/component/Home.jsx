import Liked from './Liked'
import Jobs from './Jobs'
import { Container } from 'react-bootstrap'
import CategorySearch from './SearchCategory'
import SearchBar from './SearchBar'
import { connect } from 'react-redux'

// const mapStateToProps = state => ({
//     errorStatus: state.results.errorStatus
// })

const Home = () => {

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

                <div className="d-flex flex-wrap justify-content-between">
                    <Jobs />
                </div>
            </Container>
        </>
    )
}

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home