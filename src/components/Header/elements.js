import styled from 'styled-components'

const Base = styled.div`
  height: 60px;
  width: 100%;
  background-color: #1D1D1D;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
`

const Content = styled.div`
  height: 60px;
  padding: 12px 7px;
  display: flex;
  justify-content: start;
  align-content: center;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
`;

const Icon = styled.img`
  padding: 0 12px;
  height: 100%;
`

const HeaderText = styled.span`
  font-size: 22px;
  font-weight: 600;

`

export { Base, Content , Icon, HeaderText };