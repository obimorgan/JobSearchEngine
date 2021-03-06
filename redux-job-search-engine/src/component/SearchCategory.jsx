import { useDispatch } from 'react-redux'
import { setJobsByCategoryAction } from '../redux/actions'
// import { useState, useEffect } from 'react'

// const mapDispatchToProps = dispatch => ({
//     JobsByCategory: (category) => {
//         dispatch(setJobsByCategoryAction(category))
//     }
// })

const CategorySearch = ({ JobsByCategory }) => {

    const dispatch = useDispatch()

    // const [category, setCategory] = useState("")

    return (
        <form>
            <select className="category_dropdown"
                // value={category}
                onChange={e => { dispatch(setJobsByCategoryAction(e.target.value)) }}
            >
                <option value="">Categories</option>
                <option value="Business">Business</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Data">Data</option>
                <option value="Design">Design</option>
                <option value="DevOps / Sysadmin">DevOps / Sysadmin</option>
                <option value="inance / Legal">Finance / Legal</option>
                <option value="uman Resources">Human Resources</option>
                <option value="Marketing">Marketing</option>
                <option value="Product">Product</option>
                <option value="QA">QA</option>
                <option value="Sales">Sales</option>
                <option value="Software Development">Software Development</option>
                <option value="Teaching">Teaching</option>
                <option value="Writing">Writing</option>
            </select>
        </form>
    )
}
export default CategorySearch