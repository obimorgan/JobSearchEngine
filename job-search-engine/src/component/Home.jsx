import SearchBar from './SearchBar'
import Jobs from './Jobs'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const Home = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            let resp = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=10`)
            if (resp.ok) {
                let data = await resp.json()
                setData(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handelSearch = () => {
        console.log("Innitiate Search")
    }

    return (
        <Container className="wrapper">
            <div>
                <SearchBar handelSearch={handelSearch} />
                <Jobs data={data} />
            </div>
        </Container>
    )
}

export default Home