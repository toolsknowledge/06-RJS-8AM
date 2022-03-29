import React,{useState} from "react";
import './App.css';
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4
 from "./Comp4";
import {BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom";

function App() {

  const [pid,setPid] = useState(333);
  const [pname,setPname] = useState("p_three");
  const [pcost,setPcost] = useState(30000);
  

  let navigate = useNavigate();


  const my_fun = ()=>{
    navigate("/comp4");
  }


  return (
    <div className="App">
        <BrowserRouter>
            <Link to="/comp1/111/p_one/10000" style={{marginRight:100}}>Comp1</Link>
            <Link to="/comp2" style={{marginRight:100}}>Comp2</Link>
            <Link to={`/comp3/${pid}/${pname}/${pcost}`} style={{marginRight:100}}>Comp3</Link>
            <button onClick={my_fun}>Comp4</button>
            <br></br>
            <Routes>
                <Route path="/comp1/:p1/:p2/:p3" element={<Comp1 />}/>
                <Route path="/comp2" element={<Comp2 />}/>
                <Route path="/comp3/:v1/:v2/:v3" element={<Comp3 />}/>
                <Route path="/comp4" element={<Comp4 />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
