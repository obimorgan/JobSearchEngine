import { FcLike } from "react-icons/fc";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => ({
    LikedCount: state.favourites.companies.length
})

const Liked = ({ LikedCount }) => {
    return (
        <>
            <Link to={"/favourites"} className="liked_counter_wrapper d-flex">
                <div>
                    <FcLike />
                </div>
                <div className="liked_container d-flex">
                    <div>
                        <div className="liked_counter">{LikedCount}</div>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default connect(mapStateToProps)(Liked)