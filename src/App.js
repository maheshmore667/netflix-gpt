import {Provider} from "react-redux";
import './App.css';
import Body from './Components/Body';
import appStore from "./Store/appsStore";

function App() {
  return (
    <div className="w-screen h-screen">
      <Provider store={appStore}>
        <Body />
      </Provider>
      
    </div>
  );
}

export default App;
