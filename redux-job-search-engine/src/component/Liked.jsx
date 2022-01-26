import { FcLike } from "react-icons/fc";
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    LikedCount: state.favourites.companies
})

const Liked = ({ LikedCount }) => {
    return (
        <>
            <div>
                <FcLike />
            </div>
            <div className="liked_container d-flex">
                <div>
                    <div className="liked_counter">{LikedCount.length}</div>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps)(Liked)