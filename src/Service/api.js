import axios from 'axios'
const url = " http://127.0.0.1:3003/users";

export const getData = async (id) => {
    id = id || '';
    const res = await axios.get(`${url}/${id}`);
    return res;
}

export const addData = async (user) => {
    await axios.post(url, user);

}

export const editData = async (id,user) => {
    await axios.put(`${url}/${id}`, user);

}

export const deleteData = async (id) => {
    return await axios.delete(`${url}/${id}`);

}
