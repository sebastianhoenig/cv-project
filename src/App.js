/**
 * Ideas for later: Use SCSS to make Inputs awesome
 * Make Inputs a Modal thats opened/closed
 * 
 */

import './App.css';
import InputGeneralInformation from './components/InputGeneralInformation';
import InputWorkExperience from './components/InputWorkExperience';
import { CvProvider } from './context/CvContext';
import OutputGeneralInformation from './components/OutputGeneralInformation';
import OutputWorkExperience from './components/OutputWorkExperience';
import InputEducation from './components/InputEducation';
import OutputEducation from './components/OutputEducation';
import InputProjects from './components/InputProjects'
import OutputProjects from './components/OutputProjects';

function App() {

  return (
    <CvProvider>
      <div className="App">
        <div className="leftSide">
          <InputGeneralInformation /> 
          <InputWorkExperience />
          <InputEducation />
          <InputProjects />
        </div>
        <div className="rightSide">
          <OutputGeneralInformation/>
          <OutputWorkExperience />
          <OutputEducation />
          <OutputProjects />
        </div>
      </div>
    </CvProvider>
  );
}

export default App;
