import React from 'react'
import { Table } from 'react-bootstrap'


const Tabel = ({ makanans }) => {
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
                    <tr>
                        <td>{index + 1}</td>
                        <td>{makanan.nama}</td>
                        <td>{makanan.deskripsi}</td>
                        <td>Rp. {makanan.harga}</td>
                        <td></td>
                    </tr>
                ))}


            </tbody>
        </Table>
    )
}

export default Tabel