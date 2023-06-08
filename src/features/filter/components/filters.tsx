import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { IFlights } from "../../flight";
import data from "../../../data/fly.json";

interface Props {
  setFlights: React.Dispatch<React.SetStateAction<IFlights>>;
  flights: IFlights;
}

export function Filters({ flights, setFlights }: Props) {
  const [origin, setOrigin] = useState<IFlights>([]);

  const handleOriginCity = (city: string) => {
    const filtered = data.flights.filter((flight) =>
      flight.origin.toLowerCase().includes(city.toLowerCase())
    );
    setFlights(filtered);
    setOrigin(filtered);
  };

  const handleDestinationCity = (city: string) => {
    const filtered = origin.filter((flight) =>
      flight.destination.toLowerCase().includes(city.toLowerCase())
    );
    setFlights(filtered);
  };

  const handleTransferQuantity = (quantity: number) => {
    if (quantity) {
      const filtered = data.flights.filter(
        (flight) => flight.layovers.length === quantity
      );
      setFlights(filtered);
    }else{
        setFlights(data.flights)
    }
  };

  return (
    <Box sx={{ gap: 2, display: "flex", flexDirection: "column", mt: 2 }}>
      <TextField
        placeholder="Город отправления"
        onChange={(e) => handleOriginCity(e.target.value)}
      />
      <TextField
        placeholder="Город прилета"
        onChange={(e) => handleDestinationCity(e.target.value)}
      />
      <TextField
        placeholder="Количество остановок"
        onChange={(e) => handleTransferQuantity(parseInt(e.target.value, 10))}
      />
    </Box>
  );
}
