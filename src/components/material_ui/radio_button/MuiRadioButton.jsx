import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import React from 'react'
import { Box } from '../../material_ui'

const MuiRadioButton = (props) => {
  const { name, list, setValue, row, defaultValue } = props

  const handleOnChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap
    >
      <FormControl fullWidth>
        <FormLabel id={`${name}-group-label`}>{name}</FormLabel>
        <RadioGroup
          aria-labelledby={`${name}-group-label`}
          name={`${name}-buttons-group`}
          onChange={handleOnChange}
          row={row}
          defaultValue={defaultValue}
        >
          {list.map((data) => (
            <FormControlLabel
              control={<Radio />}
              label={data.name}
              value={data.name}
              
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButton
