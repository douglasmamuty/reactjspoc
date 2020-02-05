import React, {useState} from  'react';
import logo from '../assets/logo.svg'
import './Login.css';

import Api from '../services/Api';
// import AsyncSelect from 'react-select/async';
// import Select from 'react-select'
import CreatableSelect from "react-select/creatable";
   
export default function Login({ history }) {        
    const [getCountry, setCountry] = useState('');    

    async function getSrc() {   
        var src = await Api.get('/api/Pais')
             .then(function (response) {                 
                let arrayOptions = [];

                response.data.response.forEach(element => {
                    let options = {};
                    options['value'] = element.id;
                    options['label'] = element.descricaoPT;   
                    arrayOptions.push(options);                 
                });             
                console.log(JSON.stringify(arrayOptions));
                return arrayOptions;
             })
             .catch(function (response) {
                  console.log(response);
             });
        // doing other something
        return src;
    }
          
    // const options = ;
    

    
      
    const MyComponent = () => (
        <CreatableSelect options={getSrc()} ></CreatableSelect>
    )
    // const promiseOptions =  new Promise(function(resolve,reject){
    //         let response = Api.get('/api/Pais');
    //         let options;

    //         // response.data.response.map(

    //         // );

    //         resolve([ { value: 'chocolate', label: 'Chocolate' },
    //         { value: 'strawberry', label: 'Strawberry' },
    //         { value: 'vanilla', label: 'Vanilla' }]);
    //     }            
    // )
    // console.log(promiseOptions);

    async function handleSubmit(e){
        e.preventDefault();
        console.log(getCountry);
        // const response = await  Api.get ('/api/pais/{paisId}/estado', {
        //     descricao : getUsername, 
        // });

        
        // const  { sigla }  = response.data.response[0];
        
        // console.log(sigla);

        // history.push(`/home/${sigla}`);

    }    

    return (
        <div className="login-container">
            <img src={logo} alt="Empresa"/>
            <form onSubmit={handleSubmit} >                                
                <MyComponent></MyComponent>
                <button type="submit"> Enviar </button>
            </form>
        </div>
        
    );
}
