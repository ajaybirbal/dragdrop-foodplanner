import { useEffect, useState } from "react";
import styles from './App.module.css'
import MenuDndContainer from "./components/MenuDndContainer";
import initialdata from './initialdata'
import { useDispatch, useSelector } from "react-redux";
import { setUserplanStateData } from "./reducers/userplanReduxFunctions";
import AddBrunchButton from "./components/AddBrunchButton";
import globals from "./styles/global.module.css"
import { loadState, saveState } from "./helper/localstorage";

function App() {

  //react-redux functions
  const dispatch = useDispatch();
  const state = useSelector(state => state.userplan)

  const [foodList, setFoodList] = useState([]);

  //First time loading of the items
  //If local storage exists than load that
  useEffect(() => {

    //If there is data in local storage, load that else load the initial
    //sample data.
    let dataToBeloaded = loadState() !== undefined ? loadState() : initialdata;

    if (dataToBeloaded.length === 0) {
      dataToBeloaded = initialdata;
    }

    dispatch(setUserplanStateData(dataToBeloaded))
    setFoodList(state)
  }, []);

  //Subsequent state handling
  useEffect(() => {
    setFoodList(state)

    //Adds the event listener to the state
    saveState(foodList)

  }, [state, foodList]);

  /**
   * Loads sample data to the app
   * @param {*} e 
   */
  const loadSampleData = e => {
    e.preventDefault();
    dispatch(setUserplanStateData(initialdata))
  }

  return (
    // Wraps whole draggable app
    <div className={styles.contentWrapper}>
      <h1>Food Planner</h1>
      <div className={styles.buttonContainer}>
        <AddBrunchButton className={globals.primaryButton} />
        <button className={globals.tertiaryButton} onClick={loadSampleData}>Load Sample Data</button>
      </div>
      <MenuDndContainer />
    </div>
  );
}

export default App;
