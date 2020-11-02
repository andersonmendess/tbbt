import styled, { css } from 'styled-components'

const Container = styled.div`
  background: #1D1D1D;
  max-width: 400px;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 5px;
  margin: 10px;
  width: 100%;

`

const Title = styled.h1`
    color: #efefef;
    padding: 10px;
`

const List = styled.ul`
    padding: 10px;
`

const ListItem = styled.li`
    user-select: none;
    cursor: pointer;
    padding: 3px;
    font-size: 15px;
    font-weight: 600;

    white-space: nowrap;

    transition: color 0.2s ease-in-out;


    ${props => props.playing && css`
    color: #9bff96;
  `}
`

export { Container, Title, List, ListItem };