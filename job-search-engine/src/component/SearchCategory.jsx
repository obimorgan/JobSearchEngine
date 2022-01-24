const CategorySearch = ({ handleDropdownChange, category }) => {
    return (
        <form>
            <select className="category_dropdown"
                value={category}
                onChange={handleDropdownChange}
            >
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