import { useState, useEffect } from 'react';
import { IFlights } from '../features/flight';


export const useSortByTransfers = (initialArray: IFlights) => {
  const [sortedArray, setSortedArray] = useState<IFlights>([]);

  useEffect(() => {
    const sortArray = () => {
      const sorted = [...initialArray].sort((a, b) => a.layovers.length - b.layovers.length);
      setSortedArray(sorted);
    };

    sortArray();
  }, [initialArray]);

  return sortedArray;
};

