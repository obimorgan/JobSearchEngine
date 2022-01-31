import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Container } from "react-bootstrap"
import { removeFromFavouritesAction } from "../redux/actions"


// const mapStateToProps = (state) => ({
//     companies: state.favourites.companies
// })

// const mapDispatchToProps = (dispatch) => ({
//     removeFromFavourites: (id) => {
//         dispatch(removeFromFavouritesAction(id))
//     }
// })

const Favourites = () => {

    const companies = useSelector(state => state.favourites.companies)
    const dispatch = useDispatch()
    console.log(companies)
    return (
        <>
            <div className="wrapper">
                <Link to="/" > <div className="my-5">Back to search</div> </Link>
                <h1>Your Favourites!</h1>
            </div>

            <Container>
                <hr />
                <div className="d-flex flex-wrap justify-content-between">
                    {
                        companies?.map((company, i) => (
                            <div key={company._id} className="job_details_frame my-3 mx-1" >
                                <div className="job_details_body">
                                    <div className="job_card m-auto">
                                        <h3>{company.company_name}</h3>
                                    </div>
                                    <div className="job_details d-flex justify-content-between mx-3">
                                        <div className="flex-column">
                                            <div className="job_details_header my-2">Title</div>
                                            <div className="job_detail">{company.title}</div>
                                        </div>
                                        <div className="flex-column">
                                            <div className="job_details_header my-2">Location</div>
                                            <div className="job_detail">{company.candidate_required_location}</div>
                                        </div>
                                        <div className="flex-column">
                                            <div className="job_details_header my-2">More Jobs</div>
                                            <Link to={`/${company.company_name}`} className="job_detail">{company.company_name}</Link>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="job_details_header mx-3 mt-2">Job description:</p>
                                    </div>
                                    <button onClick={() => dispatch(removeFromFavouritesAction(i))}
                                        className="fav_btn mr-3 mt-3"
                                    >Remove from favourites</button>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </>
    )
}

export default Favourites
// export default Favourites