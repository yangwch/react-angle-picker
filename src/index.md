# Basic

## Set value onChange:

```jsx
import React from 'react';
import { ReactAnglePicker } from 'react-angle-picker';

export default () => {
  const [angle, setAngle] = React.useState(30);
  return (
    <div>
      <div>{angle}º</div>
      <ReactAnglePicker value={angle} onChange={setAngle} />
    </div>
  );
};
```

## Set value onAfterChange:

```jsx
import React from 'react';
import { ReactAnglePicker } from 'react-angle-picker';

export default () => {
  const [angle, setAngle] = React.useState(30);
  const onAfterChange = (value) => {
    console.log('save value:', value);
    setAngle(value);
  };
  return (
    <div>
      <div>{angle}</div>
      <ReactAnglePicker
        value={angle}
        onChange={setAngle}
        onAfterChange={onAfterChange}
      />
    </div>
  );
};
```
