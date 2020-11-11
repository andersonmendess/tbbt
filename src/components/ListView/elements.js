import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 3px;
`

const Title = styled.h1`
    color: #efefef;
    padding-left: 10px;
`

const List = styled.ul`
`

const ListItem = styled.li`
    cursor: pointer;
    padding: 7px;
    font-size: 16px;
    text-align: center;
    max-width: 540px;
    margin: 2px auto;

    font-weight: 600;
    border-radius: 2px;

    border: 1px solid transparent;
    background-color: #1D1D1D;


    transition: color, background-color 0.1s ease-in-out;

    :hover {
      opacity: 90%;
        background-color: black;
    }
`

export { Container, Title, List, ListItem };