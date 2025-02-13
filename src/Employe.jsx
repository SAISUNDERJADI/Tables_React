import React from 'react';
import { Employe } from './Data/Employe';
import './Employe.css';



export function EmployeTable() {
    return (
        <div>
            <h1>EmployeTable</h1>
            <table border="5">
                
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Salary</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {Employe.map((value, index) => (
                        <tr key={index}>
                             <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.address}</td>
                            <td>{value.age}</td>
                            <td>{value.mobile}</td>
                            <td>{value.salary}</td>
                            <td>{value.role}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeTable;