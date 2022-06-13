import './App.css';
import InputGeneralInformation from './components/InputGeneralInformation';
import { CvProvider } from './context/CvContext';
import OutputGeneralInformation from './components/OutputGeneralInformation';


function App() {

  return (
    <CvProvider>
      <div className="App">
        <div className="leftSide">
          <InputGeneralInformation/>
        </div>
        <div className="rightSide">
          <OutputGeneralInformation/>
        </div>
      </div>
    </CvProvider>
  );
}

export default App;
