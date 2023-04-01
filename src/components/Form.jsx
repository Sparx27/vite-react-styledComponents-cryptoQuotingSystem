import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectValue from '../hooks/useSelectValue'
import { fiatOptions } from '../data/fiat'
import ErrorMsg from './ErrorMsg'

const InputSmb = styled.input`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #478ef8;
  font-family: 'Lato', sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: #f1f1f1;
  text-transform: uppercase;
  transition: background-color .3s;
  &:hover {
    background-color: #3584fa;
    cursor: pointer;
  }
  @media (max-width: 430px) {
    padding: 12px;
    font-size: 20px;
  }
`

const Form = ({ setBothValues }) => {
  const [currency, SelectFiat] = useSelectValue('Select Currency', fiatOptions)
  const [cryptocurrency, setCryptoCurrency] = useState([])
  const [crypto, SelectCrypto] = useSelectValue('Select Cryptocurrency', cryptocurrency)
  const [errorMsg, setErrorMsg] = useState(false)

  useEffect(() => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

    const getCryptocurrencies = async () => {
      const response = await fetch(url)
        .then(res => res.json())
        .then(tojson => tojson.Data)

      const filteredCryptosData = response.map(obj => {
        return {
          id: obj.CoinInfo.Name,
          name: obj.CoinInfo.FullName
        }
      })

      setCryptoCurrency(filteredCryptosData)
    }
    getCryptocurrencies()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if([currency, crypto].includes('')) {
      setErrorMsg('Please select both fields')
      return setTimeout(() => {
        setErrorMsg('')
      }, 5000)
    }

    return setBothValues({currency, crypto})
  }
  

  return (
    <form onSubmit={handleSubmit}>
      {
        errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>
      }
      <SelectFiat />
      <SelectCrypto />
      <InputSmb type='submit' value='Send'/>
    </form>
  )
}

export default Form