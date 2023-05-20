import React, { Component } from 'react'
import Operan from './Operan'

export default class StateProps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            makanan: 'Bakso'
        }
    }

    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan : makanan_baru
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                {/* <button onClick={() => this.setState({ makanan: "Soto" })}>Ganti makanan</button> */}
                <button onClick={() => this.gantiMakanan("Soto")}>Ganti makanan</button>
                <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}


/**

Apa itu Constructor?
Constructor adalah kodingan yang pertama kali dijalankan. 
Kita daftarkan suatu state di sana, misalnya makanan, seperti di atas

lalu kita panggil suatu state nya di dalam Jsx / HTML nya lah, di dalam render.
Nah, di atas adalah sifatnya State, yaitu bisa diubah (Menjadi Soto).

State ini bisa jadi Props, ketika dia dioper ke komponen lain.
Akhirnya sifatnya jadi ga bisa diganti, karena sudah jadi props (Tetap Bakso).

Tapi gimana caranya agar props nya juga bisa diganti?
Caranya kita oper juga function ke dalam file Operan 

Tambahkan ini ke tag Operan
gantiMakanan={this.gantiMakanan}

terus di file Operan
Tambahkan .props

<button onClick={() => this.props.gantiMakanan("Soto")}>Ganti makanan</button>
*/

/**
 Jadi bukan hanya state yang dioper,

 tapi function juga bisa dioper
 */

/**

Lebih baik kalau mau bikin function pakai Arrow Function saja

itu lebih aman

 */