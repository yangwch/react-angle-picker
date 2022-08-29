# Customize

## 自定义尺寸、颜色

```tsx
import React from 'react';
import { ReactAnglePicker } from 'react-angle-picker';

export default () => {
  const [value, setValue] = React.useState(0);
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

## 禁止默认行为

在移动鼠标时会**_选中文字_**或导致其它问题？
试一下属性 **_preventDefault_**

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
