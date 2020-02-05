import React, {useState} from  'react';
import logo from '../assets/logo.svg'
import './Login.css';

import Api from '../services/Api';

   
export default function Login({ history }) {        
    const [getCountry, setCountry] = useState('');          

    async function handleSubmit(e){
        e.preventDefault();
        
        const response = await  Api.get ('/api/Pais');        
        let  { id }  = response.data.response[0];                

        history.push(`/home/${id}`);

    }    

    return (
        <div className="login-container">
            <img src={logo} alt="Empresa"/>
            <form onSubmit={handleSubmit} >                                
                <input 
                    placeholder="Estado" 
                    onChange={e => setCountry(e.target.value)} 
                    value={getCountry}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
        
    );
}
