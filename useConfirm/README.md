# @gitgw/use-confirm
React Hook to prompt a confirmation before executing a function.

## Installation
### npm
```npm i @gitgw/use-confirm```

### yarn
```yarn add @gitgw/use-confirm```

## Usage
```javascript
import React from "react";
import useConfirm from "@gitgw/use-confirm";

function App() {
  const onConfirm = () => {
    console.log("onConfirm");
  }
  const onCancel = () => {
    console.log("onCancel");
  }

  const confirmAction = useConfirm("true or false?", onConfirm, onCancel);
  
  return (
    <div className="App">
      <button onClick={confirmAction}>Delete the world</button>;
    </div>
  );
}
```

### Arguments
Argument|Type|Description|Required|
|-|-|-|-|
|message|String|Message to show the user on the confirmation propmt|yes
|onConfirm|Function|Function to be executed when the user confirms|yes
|onCancel|Function|Function to be executed when the user cancels|yes

### Return
Return value|Type|Description|Default value|
|-|-|-|-|
|Function|Function|Function wrapped around the confirmation logic|null