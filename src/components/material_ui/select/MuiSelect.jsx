import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React from 'react'
import { Box } from '../../material_ui'
import FormControl from '@mui/material/FormControl'

const MuiSelect = (props) => {
  const { name, list, value,sx } = props
  // const [value, setValue] = useState(name)

  // const handleOnChange = (event) => {
  //   setValue(event.target.value)
  // }

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id={`${name}-label`}>{name}</InputLabel>
        <Select
          labelId={`${name}-label`}
          id={`${name}-select`}
          value={value}
          label={name}
          sx={sx}
          // onChange={(e) => handleOnChange(e)}
        >
          {list.map((data) => (
            <MenuItem
              key={data}
              value={data}
            >
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default MuiSelect
