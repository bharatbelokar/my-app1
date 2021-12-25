import { React, useState,useEffect } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import { FaEdit, FaTimes } from 'react-icons/fa';
import { getData, deleteData } from '../Service/api.js'
import { useNavigate } from 'react-router-dom';




const SearchUser = () => {
    const [filteredData, setFilteredData] = useState();
    const [noData, setnoData] = useState(false);
    const [data, setData] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, [])

    const handleSearch = (key) => {
        fetch('http://127.0.0.1:3003/users?q=' + key).then((data) => {
            data.json().then((resp) => {
                if (resp.length > 0) {
                    setFilteredData(resp);
                    setnoData(false)

                } 
                // else if(!key) {
                //     setnoData(false);
                //     setFilteredData(false);
                // }
                else {
                    setnoData(true);
                    setFilteredData(false);
                }

            })
        });

    }

    const getUsers = async () => {
        const res = await getData();
        const data = res.data;
        setFilteredData(data);


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
            <div className='container my-3'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Search User"
                    className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" onChange={(event) => handleSearch(event.target.value)} />
                </FloatingLabel>
            </div>
            {filteredData ?
                <Table striped bordered hover className='container'>
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

                            filteredData.map((user, index) => {
                                return (

                                    <tr key={user.id + index}>
                                        <td>{user.id}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td><span className="icons-edit" onClick={() => editUser(user.id)} ><FaEdit /></span>
                                            <span className="icons-delete" onClick={() => { deleteUser(user.id) }}><FaTimes /></span>
                                        </td>
                                    </tr>

                                );


                            })
                        }

                    </tbody>
                </Table> : ""
            }
            {
                noData ? <h4 className='container text-center' style={{ padding: 10, color: "royalblue" }}>No Data Found</h4> : null
            }

        </>

    )
}

export default SearchUser
