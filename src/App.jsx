import { useEffect, useState } from "react";
import styles from './App.module.css'
import MenuDndContainer from "./components/MenuDndContainer";
import initialdata from './initialdata'
import { useDispatch, useSelector } from "react-redux";
import { setUserplanStateData } from "./reducers/userplanReduxFunctions";

function App() {

  //react-redux functions
  const dispatch = useDispatch();
  const state = useSelector(state => state.userplan)

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    dispatch(setUserplanStateData(initialdata))
    setFoodList(state)
  }, [state]);


  return (
    // Wraps whole draggable app
    <div className={styles.contentWrapper}>
      <h1>Food Planner</h1>
      <MenuDndContainer />
    </div>
  );
}

export default App;
