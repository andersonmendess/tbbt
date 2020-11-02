import styled from 'styled-components'

const Center = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Title = styled.span`
  font-size: 23px;
`

const CenteredContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

export { Center, Title, CenteredContent };