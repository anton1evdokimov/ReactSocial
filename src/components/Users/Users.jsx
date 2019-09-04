import React from "react"
import st from "./Users.module.css"
import userImg from '../../img/user.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from "./Paginator";

export default props => {
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
      <Paginator page={page} selectedPage={props.selectedPage} clickPage={clickPage}/>
     {/* <div className={st.page}>
        {page.map(x => <span key={x} className={`${props.selectedPage === x && st.selected} ${st.paginator} page-item`} onClick={() => clickPage(x)}>
          {x}
        </span>)}
      </div>*/
     }
      <div className={st.block}>
        {
          props.users.map(user =>
            <div key={user.id} style={{display:'flex'}}>
              <div className={st.leftBlock}>
                <div>
                  <NavLink to={'/Profile/' + user.id}>
                    <img src={user.photos.small == null ? userImg : user.photos.small} className={st.userPhoto} alt="user" />
                  </NavLink>
                </div>
                {user.followed ?
                  <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.unfollow(user.id) }}>
                    Unfollow</button> :
                  <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.follow(user.id); }}>
                    Follow</button>
                }
              </div>
              <div className={st.rightBlock}>
                <div>name - {user.name}</div>
                <div>status - {user.status}</div>
              </div>
            </div>)
        }
      </div>
    </div>);
}