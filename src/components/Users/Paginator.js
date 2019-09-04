import React from 'react';
import st from "./Users.module.css"

export default props => {
    return <ul className="pagination">
        {
            props.page.map(x => <li key={x} className={`${props.selectedPage === x && st.selected} ${st.paginator} page-item`} >
            <a className="page-link" onClick={() => props.clickPage(x)} href="">{x}</a>
            </li>)
        }
    </ul>
}