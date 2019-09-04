import OurPosts from "./OurPosts"

import { addPsActionCreator } from "../../../store/postReducer"
import { connect } from "react-redux";

let mapStateToProps = state => ({ items: state.postPage, newPostContent: state.postPage.newPostContent });

let mapDispatchToProps = dispatch => (
  {
    addPs: post => dispatch(addPsActionCreator(post))
  }
);

const OurPostsContainer = connect(mapStateToProps, mapDispatchToProps)(OurPosts);

export default OurPostsContainer