# Belajar React JS Dasar

Project ini adalah referensi dari [Wahidev Academy - React JS Dasar Bahasa Indonesia](https://www.youtube.com/watch?v=AYb7l6XDlPo&list=PLIan8aHxsPj0XtJjWW04hN24fWXrCpLkY&index=2).

## Materi

Apa yang saya pelajari di project ini:

1. Components: Class Component, Functional Component, Arrow Function
2. Bagaimana cara eksport-import component
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

Keduanya adalah property atau model data dari React Js. Kita bisa menyebutnya sebuah variabel yang menyimpan data.

Props:
- read-only
- can not be modified

State:
- state change can be asynchronous
- state can be modified using this.setState

State atau Props ini better di buat dengan <strong>Class Component</strong>


### `Map, Filter dan Reduce`

Map adalah looping di dalam Javascript ES6


### `Lifecycle Component`

<img src="https://miro.medium.com/v2/resize:fit:1099/1*Q1JUFppwxVg8FgzYbZ-eIA.png" />

Lifecycle sebuah React Js Component, 


  - Pertama kali di Mounting (komponen dipasang),
  - Kemudian diupdate (ketika state atau props terupdate) jadi apa yang mesti dilakukan component,
  - Kemudian Unmounting (ketika komponen itu dicopot).


<Strong>Reaksi apa yang dilakukan oleh suatu komponen, ketika ada state / props update.</Strong>
Jadi yang namanya React JS itu bereaksi ya, makanya namanya React.

Hanya <Strong>Class Component</Strong> yang bisa menjalankan lifecycle component.

Alur:

  - Yang pertama itu Mounting. Mounting yang pertama kali di jalankan itu Constructor
  - Kemudian ke bawah, getDerivedStateFromProps
  - Render: Jadi Render ini dibuka dua kali. Pertama di Mounting dan di Updating
  - Lalu ComponentDidMount: apa yang dia lakukan ketika component itu dipasang. Biasanya dia kaya Get data-data API. Nah Kalau sudah berhasil nanti di render (ditampilkan)
  <br>
  Dari sekian proses ini yang paling penting, Constructor, ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount dan Render. 
  <br><br>
  Selain ini jarang dipake. Jadi yang dibold yang sering dipake.

Keterangan tambahan:

- ComponentDidUpdate, itu ketika ada state atau props ada perubahaan, maka dia dijalankan. 

<p> Misal ada suatu form add data, ketika submit, dia nyimpan ke database/API, nah otomatis di dalam API ada perubahan, maka di menjalankan ComponentDidUpdate. </p>

- ComponentWillUnmount

<p> Misal ada component halaman Profile, ketika si user pindah ke halaman Home, maka halaman Profile ini sudah dicopot, maka akan menjalankan ComponentWillUnmount</p>
