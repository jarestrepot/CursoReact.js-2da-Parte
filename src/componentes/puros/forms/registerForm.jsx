import React, { useState } from 'react';

const RegisterForm = () => {

    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: '',
        }
    ];

    //Para actulizar y tratar los datos.
    const [data, setData] = useState(initialData);

    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
