import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 30px;
  margin: 0 auto;

  h1 {
      margin: 20px 0;
  }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;    
    margin: 20px 0;

    img {
        height: 64px;
    }

    span {
        font-size: 20px;
        margin-left: 24px;        
    }

    button {
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        background: transparent;
        margin-left: 16px;     
        margin-top: auto;
        transition: 0.2s;

        &:hover {
            border-color: #999;
        }
    }
`;

export const IncidentList = styled.li`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    h1 {
        margin-top: 80px;
        margin-bottom: 24px;        
    } 

    li {
        background: #fff;
        padding: 24px;
        border-radius: 8px;
        position: relative;        

        button {
            position: absolute;
            right: 24px;
            top: 24px;
            border: 0;
            background: transparent;

            &:hover {
                opacity: 0.8;
            }
        }

        strong {
            display: block;
            margin-bottom: 16px;
            color: #41414d;            
        }

        p + strong {
                margin-top: 32px;
            } 

        p {
            color: #737380;
            line-height: 21px;
            font-size: 14px;
            font-weight: bold;        
        }
    }
`;

export const ContainerLink = styled(Link)`
    width: 260px;
    margin-left: auto;
    margin-top: 0;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        filter: brightness(90%)
    }
`;
