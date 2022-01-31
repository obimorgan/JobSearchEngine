import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { setJobsAction } from '../redux/actions'

// const mapDispatchToProps = dispatch => ({
//     setSearch: (searchInput) => {
//         dispatch(setJobsAction(searchInput))
//     }
// })

const SearchBar = () => {

    const dispatch = useDispatch()

    const [searchInput, setSearchInput] = useState("")

    return (
        <div className="search_bar_container mx-2">
            <input className="search_bar" placeholder="Search Jobs"
                // value={searchInput}
                onChange={e => { setSearchInput(e.target.value); console.log("Im typing:", e.target.value) }}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        dispatch(setJobsAction((searchInput)))
                    }
                }}
            ></input>
        </div>
    )
}
export default SearchBar