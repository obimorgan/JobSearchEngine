import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { addToFavouritesAction } from '../redux/actions'
import { Alert } from "react-bootstrap"

// const mapStateToProps = (state) => ({
//     jobs: state.categorySearch.results
// })

// const mapDispatchToProps = (dispatch) => ({
//     addToFavourites: (job) => {
//         console.log("D-a-ta is", job)
//         dispatch(addToFavouritesAction(job))
//     }
// })

const Jobs = () => {

    const jobs = useSelector(state => state.categorySearch.results)
    const dispatch = useDispatch()

    return (
        <>

            {jobs.map((job) => (
                <div job={job._id} className="job_details_frame my-3">
                    <div className="job_details_body">
                        <div className="job_card m-auto">
                            <h3>{job.company_name}</h3>
                        </div>
                        <div className="job_details d-flex justify-content-between mx-3">
                            <div className="flex-column">
                                <div className="job_details_header my-2">Title</div>
                                <div className="job_detail">{job.title}</div>
                            </div>
                            <div className="flex-column">
                                <div className="job_details_header my-2">Location</div>
                                <div className="job_detail">{job.candidate_required_location}</div>
                            </div>
                            <div className="flex-column">
                                <div className="job_details_header my-2">More Jobs</div>
                                <Link to={`/${job.company_name}`} className="job_detail">{job.company_name}</Link>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="job_details_header mx-3 mt-2">Job description:</p>
                            <button onClick={() => dispatch(addToFavouritesAction(job))}
                                className="fav_btn mr-3 mt-3"
                            >Add to favourites</button>
                        </div>

                    </div>
                </div>
            ))
            }
            {/* <Alert className="d-flex m-auto" variant="success" display="none">
                Goodluck with your search!
            </Alert> */}
        </>

    )
}

export default Jobs