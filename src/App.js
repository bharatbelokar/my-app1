import {React,useState} from 'react'
import AddUser from './component/AddUser'
import Navbars from './component/Navbars'
import SearchUser from './component/SearchUser'
import Home from './component/Home'
import UserList from './component/UserList'
import UpdateUser from  './component/UpdateUser'
import Login from './component/Login'
import NotFound from './component/NotFound'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
    const [token, setToken] = useState();
    return (
        <Router>
            <Navbars />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/adduser" element={<AddUser />} />
                <Route exact path="/users" element={<UserList />} />
                <Route exact path="/searchuser" element={<SearchUser />} />
                <Route exact path="/updateuser/:id" element={<UpdateUser />} />
                <Route exact path="/login" element={<Login />} />
                <Route path='*' element={<NotFound />} />

            </Routes>

        </Router>
    )
}

export default App
