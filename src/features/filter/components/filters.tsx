import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { IFlights } from "../../flight";
import { filter } from "../../../utils/filter";

interface Props {
  setFlights: React.Dispatch<React.SetStateAction<IFlights>>;
  flights: IFlights;
}

export function Filters({ flights, setFlights }: Props) {
  const [originName, setOriginName] = useState("");

  const [destinationName, setDestinationName] = useState("");

  const [stopsQuantity, setStopsQuantity] = useState("");

  const [flightMinPrice, setFlightMinPrice] = useState(0);

  const [flightMaxPrice, setFlightMaxPrice] = useState(800);

  const handleClick = () => {
    const filtered = filter(
      originName,
      destinationName,
      stopsQuantity,
      flightMinPrice,
      flightMaxPrice
    );
    setFlights(filtered);
  };
  return (
    <Box sx={{ gap: 2, display: "flex", flexDirection: "column", mt: 2 }}>
      <TextField
        placeholder="Город отправления"
        value={originName}
        onChange={(e) => setOriginName(e.target.value)}
      />
      <TextField
        placeholder="Город прилета"
        value={destinationName}
        onChange={(e) => setDestinationName(e.target.value)}
      />
      <TextField
        placeholder="Количество остановок"
        value={stopsQuantity}
        onChange={(e) => setStopsQuantity(e.target.value)}
      />
      <TextField
        placeholder="Минимальная цена"
        value={flightMinPrice}
        onChange={(e) => {
          const value = e.target.value;
          const parsedValue = value !== "" ? parseInt(value) : 0;
          setFlightMinPrice(parsedValue);
        }}
      />
      <TextField
        placeholder="Максимальная цена"
        value={flightMaxPrice}
        onChange={(e) => {
            const value = e.target.value;
            const parsedValue = value !== "" ? parseInt(value) : 800;
            setFlightMaxPrice(parsedValue);
          }}      />
      <Button onClick={handleClick}>Найти</Button>
    </Box>
  );
}
