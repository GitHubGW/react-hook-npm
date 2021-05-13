# @gitgw/use-before-leave
React Hook to execute a function when the mouse leaves the page. Useful to show a popup or for analytics.

## Installation
### npm
```npm i @gitgw/use-before-leave```

### yarn
```yarn add @gitgw/use-before-leave```

## Usage
```javascript
import React from "react";
import useBeforeLeave from "@gitgw/use-before-leave";

function App() {

  const onBeforeLeave = ()=>{
    console.log("onBeforeLeave");
  }

  useBeforeLeave(onBeforeLeave);

  return (
    <div className="App"></div>
  );
}
```

### Arguments
Argument|Type|Description|Required|
|-|-|-|-|
|onBeforeLeave|Function|Function to be called when the mouse leaves the document|yes