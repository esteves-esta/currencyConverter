import React from 'react';
import { Container, ListItem, Column } from './styles';

const List = ({ arrayOfItens }) => {

  return (
    <Container>
      {arrayOfItens.map((item) => <ListItem key={item}>{item}</ListItem>)}
    </Container>
  )
}

export default List;