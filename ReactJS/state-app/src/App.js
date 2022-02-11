import React,{useState} from "react";


function App() {
  const [num,setNum] = useState(100);
  const [str,setStr] = useState("Hello");
  const [flag,setFlag] = useState(true);
  const [arr,setArr] = useState([100,200,300,400,500]);
  const [obj,setObj] = useState({"sub_one":"ReactJS","sub_two":"NodeJS","sub_three":"MongoDB"});
  
  const myFun = ()=>{
      setNum(200);
      setStr("Welcome");
      setFlag(false);
      setArr([...arr,...[600,700,800,900,1000]]);
      setObj({"sub_one":"Angular14","sub_two":"Go","sub_three":"CassandraDB"})
  };
  
  
  
  
  return (
      <React.Fragment>
          <h2>{num}</h2>
          <h2>{str}</h2>
          <h2>{JSON.stringify(flag)}</h2>
          {
              arr.map((element,index)=>(
                  <h2 key={index}>{element}</h2>
              ))
          }
          <h2>{obj.sub_one}....{obj.sub_two}....{obj.sub_three}</h2>

         <button onClick={myFun}>ClickMe</button>



      </React.Fragment>
  );
}

export default App;
