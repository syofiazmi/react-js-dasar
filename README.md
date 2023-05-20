# Learn React Js Dasar

This project reference is from [Wahidev Academy - React JS Dasar Bahasa Indonesia](https://www.youtube.com/watch?v=AYb7l6XDlPo&list=PLIan8aHxsPj0XtJjWW04hN24fWXrCpLkY&index=2).

## Subjects

What I learnt in this project:

1. Components: Class Component, Functional Component, Arrow Function
2. How to export and import component
3. State, Props

### `Class Component`

 ini dipakai kalau pakai component yang gede, dia butuh lifecycle component

```
 import React, { Component } from 'react'

 export default class Navbar extends Component {
   render() {
     return (
       <div>Navbar</div>
     )
   }
 }
```

### `Function Component`

ini jarang dipakai

```
 import React from 'react'

 export default function Navbar() {
   return (
     <div>Navbar</div>
   )
 }
```

### `Arrow Function`

kalau component yang kecil-kecil, dia ga pakai lifecycle component pakai ini

```
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <h2>Navbar</h2>
    </div>
  )
}

export default Navbar
```

### `Props vs State`

Both are a property or model data from React Js. We can call them a variable for saving data.

Props:
- read-only
- can not be modified

State:
- state change can be asynchronous
- state can be modified using this.setState

State or Props is better built by <strong>Class Component</strong>
