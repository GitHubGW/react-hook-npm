# @gitgw/use-fade-in
React Hook to fade in any element.

## Installation
### npm
```
npm i @gitgw/use-fade-in
```

### yarn
```
yarn add @gitgw/use-fade-in
```

## Usage
```javascript
import React from "react";
import useFadeIn from "@gitgw/use-fade-in";

function App() {
  const fadeIn = useFadeIn(3, 5);
  
  return (
    <div className="App">
      <h1 {...fadeIn}>This will fade in.</h1>
    </div>
  );
}
```

### Arguments
Argument|Type|Description|Required|Default value
|-|-|-|-|-|
|duration|Number|Sets the duration of the transition. In seconds|no|1
|delay|Number|Delays of transition's start. In seconds|no|0

### Return
```useScroll``` returns an object containing the following:
Return value|Type|Description|Default value|
|-|-|-|-|
|ref|React ref|A ref created to fadeIn the element|element
|style|Object|Style object containing to give to the element as a default|opacity: 0
