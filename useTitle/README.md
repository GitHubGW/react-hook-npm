# @gitgw/use-title
React Hook to update your document's title.

## Installation
### npm
```
npm i @gitgw/use-title
```

### yarn
```
yarn add @gitgw/use-title
```

## Usage
```javascript
import React from "react";
import useTitle from "@gitgw/use-title";

function App() {
  useTitle("Hello");
  
  return (
    <div className="App">
      App
    </div>
  );
}
```

### Arguments
Argument|Type|Description|Required|
|-|-|-|-|
|title|String|The title you want to use on your document|yes