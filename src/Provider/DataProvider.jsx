import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [place, setPlace] = useState("");
  const [adults, setAdult] = useState(0);
  const [childrenData, setChildrenData] = useState(0);
  const [infants, setInfants] = useState(0);
  const [rooms, setRooms] = useState([]);

  const handleRoomFilter = () => {
    fetch(
      `http://localhost:5000/allFilterRoom/${place}/${adults}/${childrenData}/${infants}`
    )
      .then((res) => res.json())
      .then((data) => setRooms(data));
  };

  const dataInfo = {
    handleRoomFilter,
    rooms,
    setRooms,
    setPlace,
    adults,
    setAdult,
    childrenData,
    setChildrenData,
    infants,
    setInfants,
  };

  return (
    <DataContext.Provider value={dataInfo}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
