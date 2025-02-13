import React from 'react';
import { Sai } from './Data/Student';

export function Table() {
    return (
        <div>
            <h1>Student Table</h1>
            <table border="5">
                <thead>
                    <tr>
                      <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>marks</th>
                    </tr>
                </thead>
                <tbody>
                    {Sai.map((value, index) => (
                        <tr key={index}>
                             <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.address}</td>
                            <td>{value.age}</td>
                            <td>{value.mobile}</td>
                            <td>{value.marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;