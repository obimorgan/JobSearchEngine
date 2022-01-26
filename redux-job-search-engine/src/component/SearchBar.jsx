
const SearchBar = ({ handelSearch, searchInput }) => {
    return (
        <div className="search_bar_container mx-2">
            <input className="search_bar" placeholder="Search Jobs"
                value={searchInput}
                onChange={handelSearch}
            ></input>
        </div>
    )
}
export default SearchBar