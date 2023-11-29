import React from 'react';
import { useMemo } from "react";
import dataJson from "./data.json"
import './App.css';
import InfoCardList from "./components/InfoCardsList";

export type MachineData = {
  id: number
  name: string
  description: string
  year: number
  imageUrl: string
  categories: []
}


function App() {

  const objects = useMemo(() => dataJson.data as [MachineData], [])

  return (
    <div className="App" >
      <InfoCardList items={objects} />
    </div>
  );
}

export default App;
