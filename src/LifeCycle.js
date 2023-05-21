import React, { Component } from 'react'
import SubLifeCycle from './SubLifeCycle'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            makanan: "Bakso",
            data: {},
            tampilHalamanSub: false,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
                })
            })
    }

    /**
     * Jadi fungsi nya componentDidMount ini seperti di atas, dia nge-fetch / ngambil data dari API, terus dia simpan ke state
     */


    ubahMakanan(value) {
        this.setState({
            makanan: value
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
      
                {/* 
                    kita kasih kondisi, jika this.state.tampilHalamanSub (true), maka akan ngejalananin component <SubLifeCycle />. Kemudian kita oper fungsi ubahMakanan()
                */}    
                
                {this.state.tampilHalamanSub && <SubLifeCycle ubahMakanan={(value) => this.ubahMakanan(value)} />}

                <button onClick={() => this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })}>Tampilkan Halaman Sub</button>
            </div>
        )
    }
}
