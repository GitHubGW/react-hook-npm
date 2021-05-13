# @gitgw/use-scroll
React Hook to get X/Y coordinates of current position of the scroll.

## Installation
### npm
```npm i @gitgw/use-scroll```

### yarn
```yarn add @gitgw/use-scroll```

## Usage
```javascript
import React from "react";
import useScroll from "@gitgw/use-scroll";

function App() {

  const {x, y} = useScroll();
  console.log(x, y);

  return (
    <div className="App"></div>
  );
}
```

### Return
Return value|Type|Description|Default value|
|-|-|-|-|
|Coords|Object|An object containing the x/y coordinates of the current scroll position|{x:0, y:0}