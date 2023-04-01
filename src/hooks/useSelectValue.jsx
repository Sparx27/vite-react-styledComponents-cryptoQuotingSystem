import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  display: block;
  margin: 15px 0;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #f1f1f1;
`

const Select = styled.select`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  outline: none;
  font-size: 18px;
  background-color: #e0dad7;
`

const useSelectValue = (label, values) => {
  const [state, setState] = useState('')
  
  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option value=''>---</option>
        {
          values.map(val => 
            <option
              key={val.id}
              value={val.id}
            >
              {val.name}
            </option>
          )
        }
      </Select>
    </>
  )

  return [state, SelectCurrency]
}

export default useSelectValue