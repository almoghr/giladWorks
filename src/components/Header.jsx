/* eslint-disable react/prop-types */

import { useMemo } from "react";
import Calculator from "./Calculator";
import History from "./History";

const Header = ({username, setIsAuthenticated}) => {

    

    const handleLogOut = () => {
        localStorage.clear();
        setIsAuthenticated(false)
    }
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', width:'1200px'}}>
        <h1>{username}</h1>
        <ul>{tabs.map((tab,index) => <li key={index}>{tab.title}</li>)}</ul>
        <button onClick={handleLogOut}>logout</button>
    </div>
  )
}

export default Header