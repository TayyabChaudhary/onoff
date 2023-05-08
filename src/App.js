import './App.css';
import React from 'react';

function App() {
  const [first, setfirst] = React.useState(localStorage.getItem("click"))
  const [state, setstate] = React.useState(localStorage.getItem("click-second"));

  const handleOnClick = () => {
    setfirst("true");
    setstate("false");
    localStorage.setItem("click", first)
    localStorage.setItem("click-second", state)



  }


  const handleSecondClick = () => {
    setstate("true");
    setfirst('false');
    localStorage.setItem("click", first)
    localStorage.setItem("click-second", state)
    refresh()

  }
  const refresh=()=>{
    window.location.reload();
  }

  React.useEffect(() => {
    console.log("dfsdfdsf");
    // window.location.reload();

    // window.location.reload();
    

    window.addEventListener("storage", (first) => {

    window.location.reload();
      
    });
    
   
  }, [first,state]);



  return (
    <div className="App">
      {localStorage.getItem("click-second")?
      <>
      <button onClick={handleSecondClick}  className={first=="true" ? "active" : "off__btn"}>
        OFF
      </button>
      <button className={state=="true" ? "active" : "on__btn"} onClick={handleOnClick}>
        ON
      </button> </>:"ghfhgf"} 
    </div>
  );
}

export default App;
