import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`  
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.2s;

    svg {
        margin-right: 10px;
    }

    &:hover {
        opacity: 0.8;
    }
`;
