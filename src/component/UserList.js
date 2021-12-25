import { React, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getData,deleteData } from '../Service/api.js'
import { FaEdit, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const UserList = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const res = await getData();
        const data = res.data;
        console.log(data);
        setData(data)
    }

    const editUser = (id) => {
        navigate(`../updateuser/${id}`);

    }

    const deleteUser = (id) => {
        deleteData(id);
        getUsers();

    }

    return (
        <>
            <h1 className='table-heading'>Members of the House</h1>
            <div className='margin-table'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {

                            data.map((user, index) => {
                                return (

                                    <tr key={user.id + index}>
                                        <td>{user.id}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td><span className="icons-edit" onClick={()=>editUser(user.id)} ><FaEdit /></span>
                                            <span className="icons-delete" onClick={()=>{deleteUser(user.id)}}><FaTimes /></span>
                                        </td>
                                    </tr>

                                );


                            })
                        }

                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default UserList
