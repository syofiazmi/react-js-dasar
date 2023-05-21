

// 1. function component - rfc
// ini jarang dipakai

// import React from 'react'

// export default function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }


// 2. class component - rcc
// ini dipakai kalau pakai component yang gede, dia butuh lifecycle component

// import React, { Component } from 'react'

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>Navbar</div>
//     )
//   }
// }


// 3. arrow function - rafce
// kalau component yang kecil-kecil, dia ga pakai lifecycle component pakai ini

import React from 'react'

const Navbar = () => {
  return (
    <div>
        <h2>Navbar</h2>
    </div>
  )
}

export default Navbar