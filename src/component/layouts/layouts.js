import React from 'react';
import './layout.css';

const Layout = props => {
  return (
    <div className="row">
      <div className="container layout">{props.children}</div>
    </div>
  );
};

export default Layout;
