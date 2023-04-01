import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  margin: 0 auto;
  font-family: 'Lato', sans-serif;
  color: #f1f1f1;

  @media (max-width: 475px) {
    flex-direction: column;
  }
`

const Imgage = styled.img`
  display: block;
  width: 100px;

  @media (max-width: 993px) {
    width: 125px;
    margin-top: 10px;
  }
`

const Price = styled.p`
  font-size: 24px;

  span {
    font-weight: 700;
  }
`

const Text = styled.p`
  font-size: 20px;

  span {
    font-weight: 700;
  }
`

const Result = ({ apiResponse }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = apiResponse
  return (
    <Container>
      <Imgage src={`https://cryptocompare.com/${IMAGEURL}`} alt='Cryptocurrency icon' />
      <div>
        <Price>Price: <span>{PRICE}</span></Price>
        <Text>Highest Price Today: <span>{HIGHDAY}</span></Text>
        <Text>Lowest Price Today: <span>{LOWDAY}</span></Text>
        <Text>Price Change 24 hrs: <span>{CHANGEPCT24HOUR}%</span></Text>
        <Text>Last Update: <span>{LASTUPDATE}</span></Text>
      </div>
    </Container>
  )
}

export default Result