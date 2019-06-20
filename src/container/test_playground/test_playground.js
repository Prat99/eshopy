import React, { Component } from "react";
import Button from "../../ui/button/button";
import CarbonDropdown from '../../ui/dropdown/dropdown';
import './test_playground.css';

class TestPlayground extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <Button name="PRIMARY" classes="btn-primary" type="primary" />
            <Button
              name="SECONDARY"
              classes="btn-outline-primary"
              type="secondary"
            />
          </div>
          <div className='row row-splitter'>
              <CarbonDropdown></CarbonDropdown>
          </div>
        </div>
      </div>
    );
  }
}

export default TestPlayground;
