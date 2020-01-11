import React from "react";
import OurPostsContainer from "./OurPosts/OurPostsContainer";
import st from './Profile.module.css'
import ProfileStatus from './ProfileStatus'
export default props => (
  <div>
    <div className={st.imgMain}></div>
    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
    {
      props.profile && false &&
      <div className={st.content}>
        <img src={props.profile.photos.large} alt="" width='30px' />
        {props.profile.aboutMe}
      </div>
    }
    <OurPostsContainer store={props.store} />
  </div>
);
