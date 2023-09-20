import styled from 'styled-components';

export const SidebarContainer = styled.div`
display:flex;	flex-direction:row;

  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  display:flex;	flex-direction:row;
    margin-bottom: 10px;
  font-weight: bold;
`;

export const InputField = styled.input`
  width: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const SearchButton = styled.button`
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
 
`;