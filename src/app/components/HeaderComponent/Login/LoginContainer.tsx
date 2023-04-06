import React, { FC, useState } from 'react';
import { Login } from 'pwojtaszko-design';
import restService from '@/app/api/restService';

interface LoginContainerProps {
    onLogin?: Function;
}

const LoginContainer: FC<LoginContainerProps> = ({ onLogin }) => {
    const [message, setMessage] = useState('');

    const handleLogin = (login: string, password: string) => {
        restService.authenticateUser(login, password)
            .then(() => {
                setMessage('');

                if (onLogin) {
                    onLogin();
                }
            })
            .catch(() => {
                setMessage('Wrong credentials');
            });
    };

    return (
        <Login
            message={message}
            onLogin={handleLogin}
        />
    );
}

export default LoginContainer;
