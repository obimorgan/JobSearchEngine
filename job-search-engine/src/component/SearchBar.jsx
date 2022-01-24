import { useState } from 'react'
import '../App.css';

const SearchBar = ({ handelSearch }) => {

    const [searchInput, setSearchInput] = useState("")

    const handelInput = () => { setSearchInput(searchInput) }

    return (
        <>
            <div className="search_bar_container">
                <input className="search_bar" placeholder="Search Jobs"
                    value={searchInput.value}
                    onChange={(e) => handelInput(e.target.value)}
                    onSubmit={() => handelSearch}
                ></input>
            </div>
        </>
    )
}

export default SearchBar