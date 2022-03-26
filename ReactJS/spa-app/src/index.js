import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import BrowserRouter
//BrowserRouter is the predefined component in react-router-dom v6
//BrowserRouter is used to encapsulate the single page applications
//as is the keyword used to assign the alias names


//import Routes
//Routes is used to "encapsulate" the "routings" in single page applications
//Routes is the child component of BrowserRouter



//import Route
//Route is the predefined component
//Route component used to define the independent routing
//Route is the child component of Routes


//Navigate is the predefined component
//Navigate resolves the issue with "more end points in component"

import { BrowserRouter as Router, Routes, Route,Navigate, Link, Outlet } from "react-router-dom";


ReactDOM.render(
   <Router>
      <Routes>
          <Route path="/" element={<Pageone />} />

          <Route path="page_two" element={<Pagetwo />} >
              <Route path="child1" element={<Child1 />} >
                  <Route path="subchild" element={<Subchild />} />
              </Route>
              <Route path="child2" element={<Child2 />} />
          </Route>



          <Route path="page_three" element={<Pagethree />}>
              <Route path="child3" element={<Child3 /> }/>
              <Route path="child4" element={<Child4 /> }>
                  <Route path="subchild2" element={<Subchild2 />} />
              </Route>
          </Route>

          <Route path="/page_four" element={<Navigate replace to="/page_five" /> } />
          <Route path="/page_five" element={<Pagefour /> } />
      </Routes>
   </Router>,
  document.getElementById('root')
);


function Pageone(){
  return(
    <React.Fragment>
        <h1>Pageone !!!</h1>
    </React.Fragment>
  )
}

function Pagetwo(){
  return(
    <React.Fragment>
        <h1>Pagetwo !!!</h1>
        <Link to="/page_two/child1">Child1</Link>
        <Link to="/page_two/child2">Child2</Link>
        <br></br>
        <Outlet />
    </React.Fragment>
  )
}


function Pagethree(){
  return(
    <React.Fragment>
        <h1>Pagethree !!!</h1>
        <Link to="/page_three/child3">Child3</Link>
        <Link to="/page_three/child4">Child4</Link>
        <br></br>
        <Outlet />
    </React.Fragment>
  )
}


function Pagefour(){
  return(
    <React.Fragment>
        <h1>Pagefour !!!</h1>
    </React.Fragment>
  )
}


function Child1(){
  return(
    <React.Fragment>
        <h1>Childone !!!</h1>
        <Link to="/page_two/child1/subchild">Subchild</Link>
        <br></br>
        <Outlet />
    </React.Fragment>
  )
}

function Child2(){
  return(
    <React.Fragment>
        <h1>Childtwo !!!</h1>
    </React.Fragment>
  )
}


function Child3(){
  return(
    <React.Fragment>
        <h1>Childthree !!!</h1>
    </React.Fragment>
  )
}


function Child4(){
  return(
    <React.Fragment>
        <h1>Childfour !!!</h1>
        <Link to="/page_three/child4/subchild2">Subchild</Link>
        <Outlet />
    </React.Fragment>
  )
}


function Subchild(){
  return(
    <React.Fragment>
        <h1>Subchild</h1>
    </React.Fragment>
  )
}


function Subchild2(){
  return(
    <React.Fragment>
        <h1>Subchild2</h1>
    </React.Fragment>
  )
}




reportWebVitals();
