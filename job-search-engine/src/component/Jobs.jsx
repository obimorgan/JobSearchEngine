

const Jobs = ({ data }) => {
    const { title, company_name, category, candidate_required_location } = data
    return (
        <>
            <div>
                <h5>{title}</h5>
                <ul>
                    <li>{company_name}</li>
                    <li>{category} </li>
                    <li>{candidate_required_location}</li>
                </ul>
            </div>
        </>

    )
}

export default Jobs