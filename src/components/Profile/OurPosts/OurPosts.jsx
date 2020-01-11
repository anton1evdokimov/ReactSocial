import React, { useState } from "react";
import st from './OurPosts.module.css';
import Item from "./Item/Item";
import { Field, reduxForm } from 'redux-form';

let AddPost = prpos => {
  return <form className={st.add} onSubmit={prpos.handleSubmit}>
    <Field component='textarea' className={st.addPost} name='newPostText' />
    <button className={st.addButton}>Добавить пост</button>
  </form>
}

const AddPostForm = reduxForm({ form: 'addPost' })(AddPost);

export default () => {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')) || []);
  const addPs = ({ newPostText }) => {
    let temp = JSON.parse(localStorage.getItem('posts')) || [];
    temp.push({ text: newPostText, id: temp.length });
    localStorage.setItem('posts', JSON.stringify(temp));
    setPosts(temp);
  }

  const handleDelete = id => {
    let temp = JSON.parse(localStorage.getItem('posts'));
    temp = temp.filter(i => i.id !== id);
    localStorage.setItem('posts', JSON.stringify(temp));
    setPosts(temp);
  }

  return (
    <div className={st.main}>
      Мои посты
        <AddPostForm onSubmit={addPs} />
      <div>
        {
          posts.map(item => <Item key={item.id} text={item.text} onDelete={() => handleDelete(item.id)} />)
        }
      </div>
    </div>);
}