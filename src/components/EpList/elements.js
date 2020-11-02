import styled, { css } from 'styled-components'

const Container = styled.div`
  background: #0f0f0f;
  height: 400px;
  width: 400px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
`

const Title = styled.h1`
    color: #efefef;
    padding-left: 10px;
`

const List = styled.ul`
    padding: 20px;
    padding-top: 0px;
`

const ListItem = styled.li`
    cursor: pointer;
    padding: 2px;
    font-size: 17px;

    transition: color 0.2s ease-in-out;

    :hover {
        color: white;
    }

    ${props => props.playing && css`
    color: #9bff96;
  `}
`

export { Container, Title, List, ListItem };