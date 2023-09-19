import styled from 'styled-components';
import bg from '../../images/bg.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  margin: auto;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  padding: 20px;
  
`;

export const Heading = styled.h1`
  font-size: 34px;
  font-weight: 600;
  color: #1c749f;
  margin-top: 100px;
  margin-bottom: 30px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #1c749f;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
