import styled from 'styled-components'

const Container = styled.div`
  padding: 15px;
  padding-top: 30px;
  display: flex;
  align-content: center;
  justify-items:center;
  align-items:center;
  justify-content: center;
  div {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items:center;
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