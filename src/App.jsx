import { useState } from "react";
import { v4 } from 'uuid'
import styles from './App.module.css'
import MenuDndContainer from "./components/MenuDndContainer";

const initialItems = [
  {
    id: v4(),
    brunch: "Breakfast",
    items: [
      {
        id: v4(),
        name: 'poha',
        calories: 200
      },
      {
        id: v4(),
        name: 'milk',
        calories: 140
      },
      {
        id: v4(),
        name: 'bread',
        calories: 300
      }

    ]
  },
  {
    id: v4(),
    brunch: "Lunch",
    items: [
      {
        id: v4(),
        name: 'dal',
        calories: 300
      },
      {
        id: v4(),
        name: 'roti',
        calories: 200
      }
    ]
  }
]


function App() {

  const [foodList, setFoodList] = useState(initialItems);

  

  return (
    // Wraps whole draggable app
    <MenuDndContainer foodList={foodList} setFoodList={setFoodList} />
  );
}

export default App;
