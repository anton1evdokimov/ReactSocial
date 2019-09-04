import React from "react";
import OurPostsContainer from "./OurPosts/OurPostsContainer";
import st from './Profile.module.css'
import ProfileStatus from './ProfileStatus'
export default props => { 
  return (
  <div>
    <div className={st.imgMain}></div>
    {props.profile &&
    <div className={st.content}>
       <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
      <img src={props.profile.photos.large} alt=""/>
      { props.profile.aboutMe}
      description
        </div>
        }
    <OurPostsContainer store={props.store} />
  </div>);
}