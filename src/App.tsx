import { useState } from 'react';

import { Button, Checkbox, Modal, Select, Switch, TextField } from './index';

import './styles/token.css';

export default function App() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="lib-components-container">
      <Button variant="contained" size="large">
        Button1
      </Button>

      <Button variant="outlined" size="medium">
        Button2
      </Button>

      <Button variant="text" size="small">
        Button3
      </Button>

      <Select
        options={[
          { label: 'rose', value: 'flower' },
          { label: 'apple', value: 'phone' },
          { label: 'table', value: 'furniture' },
        ]}
        label="Select label"
        helperText="select helper text"
      ></Select>

      <Checkbox error label="I have read the rules" helperText="checkbox helper text"></Checkbox>

      <Checkbox error checked={true} label="I haven't read the rules"></Checkbox>

      <TextField
        error
        placeholder="write here"
        label="I have read the rules"
        helperText="checkbox helper text"
      ></TextField>

      <Button onClick={handleOpen}>Modal</Button>

      <Modal open={open} onClose={handleClose}>
        <h2>Modal content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Modal>

      <Switch
        label="Something important"
        helperText="switch helper text"
        onChange={(e) => setChecked(e.target.checked)}
      ></Switch>
    </div>
  );
}
