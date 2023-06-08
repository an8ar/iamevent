import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IFlights } from "../features/flight";
import { useSortByPrice, useSortByTransfers } from "../hooks";
import data from '../data/fly.json'
interface Props {
  setFlights: React.Dispatch<React.SetStateAction<IFlights>>;
  flights: IFlights;
}

export function SelectSorting({ setFlights, flights }: Props) {
  const sortedByPrice = useSortByPrice(flights);

  const sortedByTransfers = useSortByTransfers(flights);
  
  const [sorting, setSorting] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setSorting(event.target.value);
    if (parseInt(event.target.value, 10) === 1) {
      setFlights(sortedByPrice);
    }else if(parseInt(event.target.value, 10) === 2){
      setFlights(sortedByTransfers);
    }else{
      setFlights(data.flights);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортировать</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sorting}
          label="Сортировать"
          onChange={handleChange}
        >
          <MenuItem value={0}>Ничего</MenuItem>
          <MenuItem value={1}>Цене</MenuItem>
          <MenuItem value={2}>Пересадкам</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
