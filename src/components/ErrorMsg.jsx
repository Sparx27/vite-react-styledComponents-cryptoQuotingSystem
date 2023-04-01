import styled from "@emotion/styled"

const ErrorDiv = styled.div`
  margin-top: -25px;
  margin-bottom: 15px;
  padding: 14px;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  background-color: #B7322C;
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #f1f1f1;
`

const ErrorMsg = ({children}) => {
  return (
    <ErrorDiv>{children}</ErrorDiv>
  )
}

export default ErrorMsg