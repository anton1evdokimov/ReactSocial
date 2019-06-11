import React from "react"
import st from "./Users.module.css"
import userImg from '../../img/user.jpg'
import { NavLink } from 'react-router-dom';
let Users = props => {

  let clickPage = (page) => {
    props.clickPage(page);
  }

  let page = [];
  let сount = Math.ceil(props.totalSize / props.pageSize);
  for (let i = 0; i < сount; i++) {
    page.push(i + 1);
  }
  return (
    <div className={st.main}>
      <div className={st.pages}>
        {page.map(x => <span className={`${props.selectedPage === x && st.selected} ${st.paginator}`} onClick={() => clickPage(x)}>{x}</span>)}
      </div>
      <div className={st.block}>
        {
          props.users.map(user =>
            <>
              <div className={st.leftBlock}>
                <div>
                  <NavLink to={'/Profile/' + user.id}>
                    <img src={user.photos.small == null ? userImg : user.photos.small} className={st.userPhoto} alt="user" />
                  </NavLink>
                </div>
                {user.followed ?
                  <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> :
                  <button onClick={() => { props.follow(user.id) }}>Follow</button>
                }
              </div>
              <div className={st.rightBlock}>
                <div>name - {user.name}</div>
                <div>status - {user.status}</div>
              </div>
            </>)
        }
      </div>
    </div>);
}

export default Users