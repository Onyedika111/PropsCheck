import React from "react";
import PropTypes from 'prop-types'

function Profile(props) {
  return (
    <div className="Container">
      <div className="row">
        <h1 className="mt-5">
          My name is {props.fullName} and I am a {props.profession}
        </h1>
      </div>

      <div>{props.children}</div>
      <div className="row">
        <div className="col-4"></div>
        <button
          className="btn btn-dark mt-5 col-4 mb-5"
          onClick={() =>
            props.handleName(
              `My name is ${props.fullName} and I am a ${props.profession}`
            )
          }
        >
          Get Name
        </button>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Onyedika Celestine",
  profession: "Fullstack Developer",
};


Profile.propTypes = {
  fullName: PropTypes.string,
  profession:  PropTypes.string
};

export default Profile;
