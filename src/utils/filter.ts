import { IFlights } from "../features/flight";
import data from "../data/fly.json";

export const filter = (
  origin: string,
  destination: string,
  stopsQuantity: string,
  minPrice: number,
  maxPrice: number
): IFlights => {
  var final: IFlights = [];

  const filteredByOrigin = data.flights.filter((flight) =>
    flight.origin.toLowerCase().startsWith(origin.toLowerCase())
  );

  const filteredByDestination = filteredByOrigin.filter((flight) =>
    flight.destination.toLowerCase().startsWith(destination.toLowerCase())
  );

  if (stopsQuantity.length !== 0) {
    final = filteredByDestination.filter(
      (flight) => flight.layovers.length === parseInt(stopsQuantity, 10)
    );
  } else {
    final = filteredByDestination;
  }
  final = final
    .filter((flight) => flight.price >= minPrice)
    .filter((flight) => flight.price <= maxPrice);

  return final;
};
