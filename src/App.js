import React from 'react';
import Dashboard from './container/dashboard/dashboard';
import Layout from './component/layouts/layouts';
import Navbox from './container/shared/nav/nav';
import Cart from './container/cart/cart';
import TestPlayground from './container/test_playground/test_playground';
import { Footer } from './container/shared/footer/footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function App() {
  return (
  //  <Router>
  //     <div className="App">
  //       <Navbox></Navbox>
  //       <Layout>
  //         {/* <Dashboard></Dashboard> */}
  //         <Route path="/" exact component={Dashboard} />
  //         <Route path="/cart" exact component={Cart} />
  //       </Layout>
  //       <Footer></Footer>
  //   </div>
  //  </Router>
    <div className="App">
         <Navbox></Navbox>
         <Layout>
           <Route path='/' exact component={Dashboard}/>
           <Route path='/cart' exact component={Cart}/>
           <Route path='/playground' exact component={TestPlayground}/>
           <Cart></Cart>
         </Layout>
         <Footer></Footer>
     </div>
  
  );
}

export default App;
