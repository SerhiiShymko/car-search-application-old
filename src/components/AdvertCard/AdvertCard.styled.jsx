import styled from 'styled-components';


export const Container = styled.div`
        // width: 274px;
    border: 1px solid #ccc;
    padding: 16px;
    margin - bottom: 16px;

`

export const Img = styled.img`
object - fit: cover;
object-position: 50% 50%;
margin - right: 16px;
`

export const Details = styled.div`
    flex: 1;
`

export const Title = styled.div`
    font - size: 1.2rem;
    margin - bottom: 8px;
`

export const Info = styled.div`
    margin - bottom: 4px;
`

export const MoreButton = styled.button`
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
