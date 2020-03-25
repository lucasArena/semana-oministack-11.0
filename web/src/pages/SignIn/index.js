import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Section } from './styles';
import logo from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

import Button from '../../components/Button';
import Link from '../../components/Link';

import api from '../../services/api';
import history from '../../services/history';

export default function SignIn() {
    const [id, setId] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
        
        try {
            const response = await api.post('/sessions', { id });

            localStorage.setItem('id', id);
            localStorage.setItem('name', response.data.name);

            history.push('/profile');
        } catch(err) {  
            alert('Falha ao tentar realizar login');
        }
    }

    return (    
        <Container>
            <Section>
                <img src={logo} alt="Logo" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={event => setId(event.target.value)} />
                    <Button type="submit">Entrar</Button>

                    <Link to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>                
            </Section>
            <img src={herosImg} alt="Logo be the hero" /> 
        </Container>    
    )
}