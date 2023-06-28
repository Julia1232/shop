import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai"

const RegistrationForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        const userData = {
            name: name,
            email: email,
            password: password,
        };

        setName('');
        setEmail('');
        setPassword('');


        sendDataToBackend(userData);
    };

    const sendDataToBackend = (data) => {

        // axios.post('/api/register', data)
        //     .then((response) => {
        //         // Обработайте успешный ответ от бэкэнда
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         // Обработайте ошибку
        //         console.error('Error:', error);
        //     });
    };
    return (
        <div className="container-profile">
            <div>
                <h2>Registration Form</h2>
                <form>
                    <AiOutlineClose className="container-profile-close" onClick={props.onClick} />
                    <div className="form-group">
                        <label for="name" onChange={(e) => setName(e.target.value)}>Name:</label>
                        <input type="text" id="name" name="name" required></input>
                    </div>
                    <div className="form-group">
                        <label for="email" onChange={(e) => setName(e.target.value)}>Email:</label>
                        <input type="email" id="email" name="email" required></input>
                    </div>
                    <div className="form-group">
                        <label for="password" onChange={(e) => setName(e.target.value)}>Password:</label>
                        <input type="password" id="password" name="password" required></input>
                    </div>
                    <div className="form-group"  >
                        <input type="submit" value="Register" onSubmit={handleSubmit}></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;

