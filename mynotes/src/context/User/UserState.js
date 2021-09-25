import UserContext from './UserContext'
import React from 'react'
import Alert from '../../components/Alert';
import { useHistory } from 'react-router-dom';

const UserState = (props) => {

    const Port = 8000;
    const host = `http://localhost:${Port}`

    const history = useHistory()

    const LoginMe = async (email, password) => {

        const res = await fetch(`${host}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await res.json();
        console.log(data);
        localStorage.setItem('token', data.toString())
        if (res.status === 400 || !data) {
            Alert("Error", "Invalid Credentials")
        }
        else {
            Alert("Success", "Login Successful");
            history.push('/');
        }
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = details;

        const res = await fetch(`${host}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        })

        const data = await res.json();

        if (res.status === 400 || !data) {
            Alert('Error', 'Registeration Failed')
        }
        else {
            Alert("Success", "Registration Successful")
            history.push("/login")
        }
    }

    return (
        <UserContext.Provider value={{ LoginMe, PostData }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
