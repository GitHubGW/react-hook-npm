# @gitgw/use-fullscreen
React Hook to make any element go Fullscreen.

## Installation
### npm
```
npm i @gitgw/use-fullscreen
```

### yarn
```
yarn add @gitgw/use-fullscreen
```

## Usage
```javascript
import React from "react";
import useFullscreen from "@gitgw/use-fullscreen";

function App() {
  const onChange = (isFull) => {
    console.log("onChange");
  }
  const { element, enterFullScreen, exitFullScreen } = useFullscreen(onChange);

  return (
    <div className="App">
      <button onClick={enterFullScreen}>enterFullScreen</button>;
      <button onClick={exitFullScreen}>exitFullScreen</button>;
    </div>
  );
}
```

### Arguments
Argument|Type|Description|Arguments|Required|
|-|-|-|-|-|
|onChange|Function|Function to be called when the screen goes Fullscreen or exits is|isFull: Boolean|no

### Return
```useFullscreen``` returns an object containing the following:
Return value|Type|Description|
|-|-|-|
|element|React ref|Ref to add to the element that you want to make fullscreen
|enterFullScreen|Function|Function to make the element enter fullscreen
|exitFullScreen|Function|Function to make the document exit fullscreen
