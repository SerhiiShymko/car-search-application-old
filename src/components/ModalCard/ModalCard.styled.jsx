import styled from 'styled-components';
import { ReactComponent as CloseBtnStyled } from 'images/icons/close.svg';

export const Container = styled.div`
 position: relative;
  width: 541px;

  padding: 40px;
  border-radius: 24px;
  background: #fff;
`
export const Img = styled.img`
object - fit: cover;
object-position: 50% 50%;
margin - right: 16px;
`


export const BtnRental = styled.button`
 padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
export const BtnClose = styled.button`
position: absolute;
  top: 16px;
  right: 16px;

  background-color: transparent;
  border: none;

  &:focus,
  &:hover {
    background-color: transparent;
  }
`
export const BtnCloseSvg = styled(CloseBtnStyled)`
 stroke: #121417;

  &:focus,
  &:hover {
    stroke: rgba(52, 112, 255, 1);
  }
`
