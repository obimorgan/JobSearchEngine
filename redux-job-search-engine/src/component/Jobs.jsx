import { Link } from "react-router-dom"
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { connect } from 'react-redux'
import { addToFavouriesAction } from '../redux/actions'



const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (company_name) => { dispatch(addToFavouriesAction(company_name)) }
})

const Jobs = ({ data, addToFavourites }) => {
    const { title, company_name, candidate_required_location } = data
    return (
        <>
            <div className="job_details_frame my-3">
                <div className="job_details_body flex-column">
                    <div className="job_card m-auto">
                        <h3>{company_name}</h3>
                        <div className="like_placeholder"
                            onClick={() => addToFavourites(company_name)}
                        ><FcLikePlaceholder /></div>
                        <div className="liked"><FcLike /></div>
                    </div>
                    <div className="job_details d-flex justify-content-between mx-3">
                        <div className="flex-column">
                            <div className="job_details_header my-2">Title</div>
                            <div className="job_detail">{title}</div>
                        </div>
                        <div className="flex-column">
                            <div className="job_details_header my-2">Location</div>
                            <div className="job_detail">{candidate_required_location}</div>
                        </div>
                        <div className="flex-column">
                            <div className="job_details_header my-2">More Jobs</div>
                            <Link to={`/${company_name}`} className="job_detail">{company_name}</Link>
                        </div>
                    </div>
                    <p className="job_details_header mx-3 mt-2">Job description:</p>
                    {/* <div className="job_description">{description}</div> */}
                </div>
            </div>
        </>

    )
}

export default connect(s => ({}), mapDispatchToProps)(Jobs)
// export default Jobs