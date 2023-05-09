import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [first, setfirst] = useState()

  const handleOnClick = (state) => {
 (state=="off") ? setfirst("false") : setfirst("true");
 
    localStorage.setItem("click", state)
  }

  React.useEffect(() => {
    window.addEventListener("storage", () => {
    window.location.reload();
    });
  }, [first]);

  useEffect(()=>{
    setfirst(localStorage.getItem("click")==="on"?"true":"false")
  },[])

  return (
    <div className="App">
      <button onClick={()=>handleOnClick("off")}  className={first=="true" ? "active" : "off__btn"}>
        OFF
      </button>
      <button className={first!="true" ? "active" : "on__btn"} onClick={()=>handleOnClick("on")}>
        ON
      </button> 
    </div>
  );
}

export default App;
