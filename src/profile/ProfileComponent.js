import React from "react";
import PropTypes  from "prop-types";
export const ProfileComponent = ({fullName, profession, bio, handleName}) => {
    return(
    <div>
        <div>
            <h1>Full Name: <a href="/" onClick={e => handleName (e)}>{fullName}</a></h1>
        </div>
        <div>
            <h2>Profession: {profession}</h2>
        </div>
        <div>
            <h3>Bio: {bio}</h3>
        </div>
    </div>
    )
}
ProfileComponent.defaultProps = {
    fullName: "Owner Profile"
}
ProfileComponent.propTypes = {   
    unionProp: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
}
