import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { Container, Row, Col } from "react-bootstrap"


const mapStateToProps = (state) => ({
    companies: state.favourites.companies
})


const Favourites = ({ companies }) => {

    console.log(companies)

    return (
        <>
            <Container>
                <Row>
                    <Col md="4">
                        {
                            companies?.map(company => (
                                <div key={company._id} className="job_details_frame my-3" >
                                    <div className="job_details_body flex-column">
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

                                    </div>
                                </div>
                            ))
                        }
                        {/* <div>Hello favourites</div> */}
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default connect(mapStateToProps)(Favourites)
// export default Favourites