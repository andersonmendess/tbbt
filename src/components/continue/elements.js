import styled from 'styled-components'

const Container = styled.div`
  padding: 25px;
  display: flex;
  align-content: center;
  justify-items:center;
  align-items:center;
  justify-content: center;
  cursor: pointer;
  div {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items:center;
  }

  img {
    opacity: 80%;
  }

  img:hover {
    opacity: 100%;
  }
  
  p {
    font-size: 13px;
    color: #d6d6d6
  }

  a {
    color: #ff7272;
    font-weight: 600;
  }

  a:hover {
    color: red;
  }
`

export { Container };