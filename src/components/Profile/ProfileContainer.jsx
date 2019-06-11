import React from "react"
import Profile from "./Profile";
import * as userAxios from "axios";
import { setUserProfile } from '../../store/postReducer'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const axios = userAxios.create({});
class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.id || 2; 
       debugger
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => 
    { 
      this.props.setUserProfile(res.data); 
    });
  }

  render() {
    return <Profile {...this.props} />
  }
}

let mapStateToProps = state => ({ profile: state.postPage.profile });

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));