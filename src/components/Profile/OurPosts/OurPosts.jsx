import React from "react"
import st from './OurPosts.module.css'
import Item from "./Item/Item";

const OurPosts = props => {
  //let newPost = React.createRef();
  const addPs = () => {
    props.addPs();
  }

  const updatePost = e => {
    props.updatePost(e.currentTarget.value);
  }
  return (
    <div className={st.main}>
      My post
        <div className={st.add}>
        <textarea className={st.addPost} value={props.newPostContent} onChange={updatePost} />
        <button className={st.addButton} onClick={addPs} >Добавить пост</button>
      </div>
      <div>
        {
          props.items.items.map(item => <Item key={item.id} text={item.text} />)
        }
      </div>
    </div>);
}

export default OurPosts