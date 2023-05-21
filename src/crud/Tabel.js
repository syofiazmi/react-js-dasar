import React from 'react'
import { Table } from 'react-bootstrap'


const Tabel = ({ makanans, editData }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama Makanan</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {makanans.map((makanan, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{makanan.nama}</td>
                        <td>{makanan.deskripsi}</td>
                        <td>Rp. {makanan.harga}</td>
                        <td>
                            <button className='btn btn-warning' onClick={() => editData(makanan.id)}>Edit</button>
                        </td>
                    </tr>
                ))}


            </tbody>
        </Table>
    )
}

export default Tabel