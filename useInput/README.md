# @gitgw/use-input

React Hook that checks the length of the input.

## Installation

### npm

```
npm i @gitgw/use-input
```

### yarn

```
yarn add @gitgw/use-input
```

## Usage

```javascript
import React from "react";
import useInput from "@gitgw/use-input";

function App() {

  const checkIdLength = (value) => {
    return value.length < 5;
  }
  const checkPasswordLength = (value) => {
    return value.length < 10;
  }

  const inputId = useInput("", checkIdLength);
  const inputPassword = useInput("", checkPasswordLength);
  
  return (
    <div className="App">
      <input type="text" placeholder="ID" {...inputId}/>
      <input type="password" placeholder="Password" {...inputPassword}/>
    </div>
  );
}
```

### Arguments

Argument|Type|Description|Required|
|-|-|-|-|
|value|String|The value you want to use on your input|yes
|checkLength|Function|Function used to check input length|yes

### Return

Return value|Type|Description|Default value|
|-|-|-|-|
|Object|Object|An object containing input values and checkLength function|{value:"", onChange: f}
