# @gitgw/use-network
React Hook to listen when the user goes online or offline.

## Installation
### npm
```
npm i @gitgw/use-network
```

### yarn
```
yarn add @gitgw/use-network
```

## Usage
```javascript
import React from "react";
import useNetwork from "@gitgw/use-network";

function App() {

  const onNetworkChange = ()=>{
    console.log("onNetworkChange");
  }

  const isOnline=useNetwork(onNetworkChange);

  return (
    <div className="App">
      <h1>{isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
}
```

### Arguments
Argument|Type|Description|Arguments|Required|
|-|-|-|-|-|
|onNetworkChange|Function|Function to be called when the network status changes|isOnline : Boolean|no

### Return
Return value|Type|Description|Default value|
|-|-|-|-|
|isOnline|Boolean|A boolean representing if the user is online or not|true
