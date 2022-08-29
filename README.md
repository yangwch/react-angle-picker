# react-angle-picker

## Usage

Install dependencies

```bash
$ npm install react-angle-picker
```

## Basic

```tsx
import React from 'react';
import { ReactAnglePicker } from 'react-angle-picker';

export default () => {
  const [angle, setAngle] = React.useState(30);
  return (
    <div>
      <div>{angle}º</div>
      <ReactAnglePicker
        value={angle}
        onChange={setAngle}
        onAfterChange={setAngle}
      />
    </div>
  );
};
```

## Customize

```tsx
import React from 'react';
import { ReactAnglePicker } from 'react-angle-picker';

export default () => {
  const [value, setValue] = React.useState(45);
  return (
    <div>
      <div>当前值：{value}º</div>
      <ReactAnglePicker
        value={value}
        onChange={setValue}
        width={100}
        pointerWidth={30}
        pointerColor="red"
        borderColor="green"
        borderWidth={8}
      />
    </div>
  );
};
```

## PreventDefault

```tsx
import React from 'react';
import { ReactAnglePicker } from 'react-angle-picker';

export default () => {
  const [value, setValue] = React.useState(45);
  return (
    <div>
      <div>当前值：{value}º</div>
      <ReactAnglePicker value={value} onChange={setValue} preventDefault />
    </div>
  );
};
```
