import React from 'react';
import { useMemo } from "react";
import dataJson from "./data.json"
import './App.css';
import InfoCardList from "./components/InfoCardsList";
import Carousel from "./components/Carousel";

export type MachineData = {
  id: number
  name: string
  description: string
  year: number
  imageUrl: string
  categories: []
}


const objects = dataJson.data as [MachineData]

function App() {

  return (
      <div className="App">
        <header className="App-header">
          <h1>Items List</h1>
        </header>
        <main>
          <Carousel items={objects} />
        </main>
      </div>
  );
}

export default App;
