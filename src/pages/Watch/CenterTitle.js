import styled from 'styled-components'

const Center = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const MinTitle = styled.span`
  font-size: 13px;
  opacity: 60%;
  font-weight: 600;
  padding: 0px 10px;
`

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  padding: 5px 10px;
`

const CenteredContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const VideoArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1D1D1D;
  padding: 5px;
  border-radius: 3px;

  max-width: 700px;

  hr {
    margin-top: 10px;
  }

  video {
    margin-bottom: 10px;
  }
`

const Actions = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`

const ActionButton = styled.button`
  border: none;
  background-color: #1D1D1D;
  display: flex;
  padding: 5px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;

  span {
    padding: 5px 0px;
    font-weight: 600;
    color: #fafafa
  }


`

export { Center, Title, CenteredContent, VideoArea, MinTitle, Actions, ActionButton };