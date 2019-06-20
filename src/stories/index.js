import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

// import { Button, Welcome } from "@storybook/react/demo";
import CarbonDropdown from "../ui/dropdown/dropdown";
import Button from '../ui/button/button';
import 'bootstrap/dist/css/bootstrap.css';


// storiesOf("Welcome", module).add("to Storybook", () => (
//   <Welcome showApp={linkTo("Button")} />
// ));

// storiesOf("Button", module)
//   .add("with text", () => (
//     <Button onClick={action("clicked")}>Hello Button</Button>
//   ))
//   .add("with some emoji", () => (
//     <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
//   ));



storiesOf("Dropdown", module).add("default", () => <CarbonDropdown />);


storiesOf('Button', module)
.add('primary', () => (
  <Button name='PRIMARY' type='primary' classes='btn-primary'></Button>
))
.add('secondary', () => (
  <Button name='SECONDARY' type='secondary' classes='btn-outline-primary'></Button>
))
