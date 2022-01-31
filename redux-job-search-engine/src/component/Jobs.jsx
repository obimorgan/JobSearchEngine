import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addToFavouritesAction, removeFromFavouritesAction } from '../redux/actions'
// import { use } from "react-bootstrap"
import { useSelector } from "react-redux"

// const mapStateToProps = (state) => ({
//     jobs: state.categorySearch.results
// })

// const mapDispatchToProps = (dispatch) => ({
//     addToFavourites: (job) => {
//         console.log("D-a-ta is", job)
//         dispatch(addToFavouritesAction(job))
//     }
// })

const Jobs = ({ job }) => {

    const dispatch = useDispatch()
    const inFavourites = useSelector(state => state.favourites.companies)
    console.log(inFavourites)

    const isInFavouritesCart = inFavourites.includes(job.company_name)
    console.log(isInFavouritesCart)
    const handleFavouriteToggle = () => {
        isInFavouritesCart ?
            dispatch(removeFromFavouritesAction(job.company_name))
            : dispatch(addToFavouritesAction(job.company_name))
    }
    return (
        <>

            <div key={job._id} className="job_details_frame my-3">
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
                        {isInFavouritesCart ?
                            (<button onClick={handleFavouriteToggle}
                                className="fav_remove_btn mr-3 mt-3"
                            >Remove from favourites</button>)
                            // <button onClick={() => handleFavouriteToggle}
                            //     className="fav_btn mr-3 mt-3"
                            // >Add to favourites</button>
                            :
                            (<button onClick={handleFavouriteToggle}
                                className="fav_btn mr-3 mt-3"
                            >Add to favourites</button>)
                            // <button onClick={() => handleFavouriteToggle}
                            //     className="fav_remove_btn mr-3 mt-3"
                            // >Remove from favourites</button>
                        }
                    </div>

                </div>
            </div>


            {/* <Alert className="d-flex m-auto" variant="success" display="none">
                Goodluck with your search!
            </Alert> */}
        </>

    )
}

export default Jobs