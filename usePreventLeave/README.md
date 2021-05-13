# @gitgw/use-prevent-leave
React Hook to prompt the user for confirmation before leaving the page.

## Installation
### npm
```npm i @gitgw/use-prevent-leave```

### yarn
```yarn add @gitgw/use-prevent-leave```

## Usage
```javascript
import React from "react";
import usePreventLeave from "@gitgw/use-prevent-leave";

function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePrevent}>enablePrevent</button>;
      <button onClick={disablePrevent}>disablePrevent</button>;
    </div>
  );
}
```

### Return
Return value|Type|Description|
|-|-|-|
|enablePrevent|Function|Function to use enable the leaving prevention
|disablePrevent|Function|Function to use disable the leaving prevention