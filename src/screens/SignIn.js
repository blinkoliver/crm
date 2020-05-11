import React from "react";
import SignInForm from "../components/SignInForm";
import "./SignIn.scss";
import { connect } from "react-redux";
import { getUsername } from "../actions/username";

const SignIn = () => {
  return (
    <div className="SignIn">
      <div className="FirstBlock">
        <SignInForm />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.username,
});
const mapDispatchToProps = (dispatch) => ({
  getUsername: (url) => dispatch(getUsername(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);