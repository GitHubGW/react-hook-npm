# @gitgw/use-hover
React Hook to detect a hover on an any React Element.

## Installation
### npm
```npm i @gitgw/use-hover```

### yarn
```yarn add @gitgw/use-hover```

## Usage
```javascript
import React from "react";
import useHover from "@gitgw/use-hover";

function App() {

  const onHover = ()=>{
    console.log("OnHover");
  }

  const markedRef = useHover(onHover);
  
  return (
    <div className="App">
      <div ref={markedRef}>Hello</div>
    </div>
  );
}
```

### Arguments
Argument|Type|Description|Required|
|-|-|-|-|
|onHover|Function|Function to be called when the element is hovered|yes

### Return
Return value|Type|Description|Default value|
|-|-|-|-|
|ref|React ref|A React ref listening to the hover event, add it to any element|null