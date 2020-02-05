import React, { useEffect, useState } from 'react';
import './Main.css';

import Logo from '../assets/logo.svg';
import Api from  '../services/Api'

import PhotoProfile from '../assets/profilePhoto1.jpg';


export default function Main({ match }) {
    const [states, setStates] = useState([]);

    useEffect(() => {
        async function loadCountry() {
            const response = await  Api.get(`/api/pais/${match.params.id}/estado`)
            setStates(response.data.response);            
        }

        loadCountry();
    }, [match.params.id]);

    async function handleLike(id) {
        console.log('dislike', id);
        
        setStates(states.filter(state => state.id !== id));
    }

    async function handleDislike(id) {
        console.log('dislike', id);
        
        setStates(states.filter(state => state.id !== id));
    }

    return(
        <div className="main-container">
            <img src={Logo} alt="Company"/>
            
                {
                    states.length > 0 ? (
                        <ul> {
                        states.map(state => (                            
                                <li key={state.id} >
                                    <img src={PhotoProfile} alt="Profile Photo"/>
                                    <footer>
                                        <strong>{state.descricao}</strong>
                                        <p>UF: {state.uf}</p>
                                    </footer>
        
                                    <div className="buttons">
                                        <button 
                                            type="button" 
                                            onClick={() => handleLike(state.id)}
                                        >Like</button>
                                        <button type="button"
                                            onClick={() => handleDislike(state.id)}
                                        >Dislike</button>
                                    </div>
                                </li>                             
                        ))}
                        </ul>
                    ) : (
                        <div className="empty"> Não tem mais Estados.</div>
                    )
                }                                               
            
        </div>
    );
}