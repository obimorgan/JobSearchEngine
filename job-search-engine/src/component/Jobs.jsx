import { Link } from "react-router-dom"

const Jobs = ({ data }) => {
    const { title, company_name, category, candidate_required_location } = data
    return (
        <>
            <div className="job_details" >
                <h5>{title}</h5>
                <ul>
                    <Link to={`/${company_name}`}> <li>Company Name - {company_name}</li></Link>
                    <li>Category - {category} </li>
                    <li>Location - {candidate_required_location}</li>
                </ul>
                <hr />
            </div>
        </>

    )
}

export default Jobs