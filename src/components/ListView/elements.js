import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  border-radius: 5px;
`

const Title = styled.h1`
    color: #efefef;
    padding-left: 10px;
`

const List = styled.ul`
`

const ListItem = styled.li`
    cursor: pointer;
    padding: 10px;
    font-size: 20px;
    margin: 8px;
    text-align: center;

    border: 1px solid transparent;
    border-radius: 5px;
    background-color: #1D1D1D;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);


    transition: color, background-color 0.1s ease-in-out;

    :hover {
      opacity: 90%;
        background-color: black;
    }
`

export { Container, Title, List, ListItem };