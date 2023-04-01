import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Result from './components/Result'
import Spinner from './components/Spinner'
import './styles/Spinner.css'
import CryptoImg from './img/crypto-img.png'

const Contenedor = styled.div`
  max-width: 900px;
  width: 80%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
`

const Image = styled.img`
  display: block;
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  @media (max-width: 430px) {
    width: 90%;
  }
`

const Title = styled.h1`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
  font-family: 'Lato', sans-serif;
  font-size: 45px;
  font-weight: 700;
  color: #f1f1f1;
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 6px;
    margin: 10px auto 0 auto;
    border-radius: 5px;
    background-color: #66A2FE;
  }
  @media (max-width: 430px) {
    font-size: 35px;
  }
`
// 

function App() {
  const [bothValues, setBothValues] = useState({})
  const [apiResponse, setApiResponse] = useState({})
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    if(Object.keys(bothValues).length > 0) {
      
      const getData = async () => {
        setSpinner(true)
        setApiResponse({})

        const {currency, crypto} = bothValues
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`

        const response = await fetch(url)
        const apiData = await response.json()
        
        setApiResponse(apiData.DISPLAY[crypto][currency])
        setSpinner(false)
      }
      getData()
    }
  }, [bothValues])

  return (
    <Contenedor>
      <Image
        src={CryptoImg}
        alt='Image with cryptocurrencies'
      />

      <div>
        <Title>Quote Your Cryptos Instantly</Title>
        <Form setBothValues={setBothValues} />
        {spinner && <Spinner />}
        {apiResponse.PRICE && <Result apiResponse={apiResponse} />}
      </div>
    </Contenedor>
  )
}

export default App
