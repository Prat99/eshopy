import React from 'react';
import Dashboard from './container/dashboard/dashboard';
import Layout from './component/layouts/layouts';
import Navbox from './container/shared/nav/nav';
import { Footer } from './container/shared/footer/footer';


function App() {
  return (
    <div className="App">
        <Navbox></Navbox>
        <Layout>
          <Dashboard></Dashboard>
        </Layout>
        <Footer></Footer>
    </div>
  );
}

export default App;
