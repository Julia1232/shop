import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai"

const RegistrationForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        // Создайте объект с данными пользователя
        const userData = {
            name: name,
            email: email,
            password: password,
        };

        // Обновите состояние и выполните отправку данных
        setName('');
        setEmail('');
        setPassword('');



        // Отправьте данные на бэкэнд
        sendDataToBackend(userData);
    };

    const sendDataToBackend = (data) => {
        // Выполните отправку данных на бэкэнд, используя библиотеку, такую как Axios или fetch

        // // Пример с использованием Axios:
        // axios.post('/api/register', data)
        //     .then((response) => {
        //         // Обработайте успешный ответ от бэкэнда
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         // Обработайте ошибку
        //         console.error('Error:', error);
        //     });
        console.log(123)
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

