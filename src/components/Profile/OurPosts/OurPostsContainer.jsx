import OurPosts from "./OurPosts"

import { updateNwPsActionCreator, addPsActionCreator } from "../../../store/postReducer"
import { connect } from "react-redux";

let mapStateToProps = state => ({ items: state.postPage, newPostContent: state.postPage.newPostContent });

let mapDispatchToProps = dispatch => (
  {
    updatePost: (value) => dispatch(updateNwPsActionCreator(value)),
    addPs: () => dispatch(addPsActionCreator())
  }
);

const OurPostsContainer = connect(mapStateToProps, mapDispatchToProps)(OurPosts);

export default OurPostsContainer