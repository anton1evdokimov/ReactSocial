import React from "react"
import st from './OurPosts.module.css'
import Item from "./Item/Item";
import {Field, reduxForm} from 'redux-form';

let AddPost = prpos => {
  return <form className={st.add} onSubmit={prpos.handleSubmit}>
  <Field component='textarea' className={st.addPost} name='newPostText' />
  <button className={st.addButton}>Добавить пост</button>
</form>
}

const AddPostForm = reduxForm({form:'addPost'})(AddPost);

export default props => {
  const addPs = ({newPostText}) => {
    props.addPs(newPostText);
  }

  return (
    <div className={st.main}>
      My post
        <AddPostForm onSubmit={addPs}/>
      <div>
        {
          props.items.items.map(item => <Item key={item.id} text={item.text} />)
        }
      </div>
    </div>);
}