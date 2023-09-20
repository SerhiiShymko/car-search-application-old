import React from 'react';
import { Button, Container, Heading, Paragraph } from './HomePage.styled'

const HomePage = () => {
    return (
        <Container>
            <Heading>Ласкаво просимо до нашої служби оренди автомобілів</Heading>
            <Paragraph>Надамо вам можливість орендувати автомобілі різних марок та комплектацій за доступними цінами.</Paragraph>
            <Button to="/catalog">Перейти до каталогу автомобілів</Button>
        </Container>
    );
};

export default HomePage;