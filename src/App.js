import './App.css';
import InputGeneralInformation from './components/InputGeneralInformation';
import InputWorkExperience from './components/InputWorkExperience';
import { CvProvider } from './context/CvContext';
import OutputGeneralInformation from './components/OutputGeneralInformation';
import OutputWorkExperience from './components/OutputWorkExperience';
function App() {

  return (
    <CvProvider>
      <div className="App">
        <div className="leftSide">
          <InputGeneralInformation/> 
          <InputWorkExperience />
        </div>
        <div className="rightSide">
          <OutputGeneralInformation/>
          <OutputWorkExperience />
        </div>
      </div>
    </CvProvider>
  );
}

export default App;
