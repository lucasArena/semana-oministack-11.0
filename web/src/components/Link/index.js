import React from 'react';
import { Container } from './styles';

export default function Link({ children, ...rest }) {
  return (
        <Container {...rest}>
            {children}            
        </Container>
  );
}
