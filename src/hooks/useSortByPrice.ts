import { useState, useEffect } from 'react';
import { IFlights } from '../features/flight';


export const useSortByPrice = (initialArray: IFlights) => {
  const [sortedArray, setSortedArray] = useState<IFlights>([]);

  useEffect(() => {
    const sortArray = () => {
      const sorted = [...initialArray].sort((a, b) => a.price - b.price);
      setSortedArray(sorted);
    };

    sortArray();
  }, [initialArray]);

  return sortedArray;
};

