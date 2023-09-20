import styled from 'styled-components';

export const Container = styled.div`
// display: flex;
//  flex-wrap:wrap
`
export const Cards = styled.div`
display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 30px;
  grid-column-gap: 28px;
`