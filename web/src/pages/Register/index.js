import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Content, InputGroup } from './styles';

import Link from '../../components/Link';
import Button from '../../components/Button';

import api from '../../services/api';
import history from '../../services/history';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            await api.post('/ongs', data);
            alert("Cadastro realizado")
            history.push('/');  
        } catch (err) {
            alert("Erro ao tentar salvar")
        }
    }

    return (
        <Container>
            <Content>
                <section>
                    <img src={logo} alt="Logo Be the Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>

                    <Link to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={event => setName(event.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
                    <input placeholder="Whatsapp" value={whatsapp} onChange={event => setWhatsapp(event.target.value)}/>

                    <InputGroup>
                        <input placeholder="Cidade" value={city} onChange={event => setCity(event.target.value)} />
                        <input placeholder="UF" value={uf} onChange={event => setUf(event.target.value)} style={{ width: 80 }} />
                    </InputGroup>

                    <Button type="submit">Cadastrar</Button>
                </form>
            </Content>
        </Container>
    )
}