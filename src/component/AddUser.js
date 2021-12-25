import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { addData } from '../Service/api.js'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState({ firstname: '', lastname: '', email: '', password: '' });
    const [error, setError] = useState(false);
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);


    const navigate = useNavigate();
    let flag1 = 1;
    let flag2 = 1;
    let flag3 = 1;
    let flag4 = 1;



    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValidate = validateForm();
        if (isValidate) {
            await addData(user);
            navigate("../users", { replace: true });
        }

    }

    function validateForm() {
        if (user.firstname == "") {
            setError("Firstname should not empty");
            flag1 = 0;
        }
        else if (user.firstname.length <= 3) {
            setError("Min 3 chracter required");
            flag1 = 0;
        }
        else {
            setError(false);
            flag1 = 1;

        }

        if (user.lastname == "") {
            setError1("Lastname should not empty");
            flag2 = 0;
        }
        else if (user.lastname.length <= 3) {
            setError1("Min 3 chracter required");
            flag2 = 0;
        }
        else {
            setError1(false);
            flag2 = 1;
        }

        if (user.email == "") {
            setError2("Email should not empty");
            flag3 = 0;
        }
        else if (user.email.length <= 3) {
            setError2("Min 3 chracter required");
            flag3 = 0;
        }
        else {
            setError2(false);
            flag3 = 1;
        }

        if (user.password == "") {
            setError3("Password should not empty");
            flag4 = 0;
        }
        else if (user.password.length <= 3) {
            setError3("Min 3 chracter required");
            flag4 = 0;
        }
        else {
            setError3(false);
            flag4 = 1;

        }

        if (flag1 == 1 && flag2 == 1 && flag3 == 1 && flag4 == 1) {
            return true;
        }
        else {
            return false;
        }
    }

    return (

        <div className='container'>
            <h1 className='table-heading'>Add Members of the House</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label className="mt-2">Name</Form.Label>
                    <Form.Control className="" type="name" name='firstname' value={user.firstname}
                        onChange={handleChange} placeholder="Enter name" />
                    {error ? <span style={{ color: "red" }}>{error}</span> : null}<br />
                    <Form.Label className="mt-1" >Last Name</Form.Label>
                    <Form.Control className="" type="lastname" name='lastname' value={user.lastname}
                        onChange={handleChange} placeholder="Enter lastname" />
                    {error1 ? <span style={{ color: "red" }}>{error1}</span> : null}<br />
                    <Form.Label className="mt-1">Email Address</Form.Label>
                    <Form.Control type="email" className="" name='email' value={user.email}
                        onChange={handleChange} placeholder="Enter email" />
                    {error2 ? <span className="" style={{ color: "red" }}>{error2}</span> : null}<br />
                    <Form.Label className="mt-1">Password</Form.Label>
                    <Form.Control type="password" name='password' value={user.password}
                        onChange={handleChange} placeholder="Enter password" />
                    {error3 ? <span className="" style={{ color: "red" }}>{error3}</span> : null}
                </Form.Group>
                <Button variant="success" className='my-3 px-10' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddUser
