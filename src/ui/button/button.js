// class Button extends HTMLElement {
//     constructor() {
//         super();
//     }
//     connectedCallback() {
//         ReactDOM.render(<MyReactComponent />, this);
//      }
//      disconnectedCallback(){
//         ReactDOM.unmountComponentAtNode(this);
//      }

// }

// customElements.define('button', Button);

import React from "react";
import "./button.css";

const Button = props => {
  let classes = "";
  let btn_type = <div className="btn">button</div>;
  if (props.type.toLowerCase() === "primary") {
    classes = `ehg-main ehg-btn-primary btn ${props.classes}`;
    btn_type = <button className={classes}><span className='ehg-main btn-name'>{props.name}</span></button>;
  } else if (props.type.toLowerCase() === "secondary") {
    classes = `ehg-main ehg-btn-secondary btn ${props.classes}`;
    const styles = {
        'margin-left': '1rem',
         color: '#000',
         background: '#fff'
    }
    const name_styles = {
        color: '#000'
    }
    btn_type = <button style={styles} className={classes}><span className='ehg-main btn-name' style={name_styles}>{props.name}</span></button>;
  }
  return <div className="ehg-main">
        {btn_type}
  </div>
};

export default Button;
