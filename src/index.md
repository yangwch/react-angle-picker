# Basic

## Set value onChange:

```tsx
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

```tsx
import React from 'react';
import { ReactAnglePicker } from 'react-angle-picker';

export default () => {
  const [angle, setAngle] = React.useState(30);
  return (
    <div>
      <div>{angle}</div>
      <ReactAnglePicker value={angle} onAfterChange={setAngle} />
    </div>
  );
};
```
