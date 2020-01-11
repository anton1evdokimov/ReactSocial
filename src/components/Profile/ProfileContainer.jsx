import React from "react"
import Profile from "./Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from '../../store/postReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import withAuthRedirect from "../HOC/withAuth";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    this.props.getUserProfile(this.props.match.params.id || 2);
    this.props.getUserStatus(this.props.match.params.id || 2);
  }
  render() {
    return <Profile {...this.props} />
  }
}

let mapStateToProps = state => ({ profile: state.postPage.profile, status: state.postPage.status });

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  // withAuthRedirect,
)(ProfileContainer);