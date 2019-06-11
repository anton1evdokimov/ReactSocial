import React from "react";
import OurPostsContainer from "./OurPosts/OurPostsContainer";
import st from './Profile.module.css'

const Profile = props => {
  return <div>
    <div className={st.imgMain}></div>
    {props.profile &&
    <div className={st.content}>
      <img src={props.profile.photos.large} alt=""/>
      { props.profile.aboutMe}
      description
        </div>
        }
    <OurPostsContainer store={props.store} />
  </div>;
}

export default Profile