import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleCompany = () => {

    const { company } = useParams()
    const [companyDetails, setCompanyDetails] = useState([])
    console.log(companyDetails)

    const fetchCompanyDetails = async () => {
        try {
            let resp = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${company}&limit=20`)
            if (resp.ok) {
                let data = await resp.json()
                setCompanyDetails(data.data)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchCompanyDetails()
    }, [])

    return (
        <Container>
            <Link to="/" > <div className="my-5">Back to search</div> </Link>
            {
                companyDetails && companyDetails.map((detail) => (
                    <div>
                        <h3>{detail.company_name}</h3>
                        <p>{detail.title}</p>
                        <p>{detail.url}</p>
                    </div>
                ))
            }
        </Container>
    )
}

export default SingleCompany