import React, { useState, useContext, useEffect } from 'react'
import { CvContext } from '../context/CvContext';
import { v4 as uuidv4 } from 'uuid';
import ProjectItem from './InputProjectComponents/ProjectItem';

function InputProjects() {

  const [cv, setCv] = useContext(CvContext);

  const [project, setProject] = useState([
    {
      name: '',
      startDate: '',
      endDate: '',
      summary: '',
      link: '',
      id: uuidv4()
    },
  ]);

  useEffect(() => {
    setCv((prevState) => ({
      ...prevState,
      project: project
    }))
  }, [project])

  const onDelete = (e, id) => {
    e.preventDefault();
    let modifiedProject = project.filter(el => el.id !== id);
    setCv((prevState) => ({
      ...prevState,
      project: modifiedProject
    }))
  }

  function addProjectItem() {
    setCv((prevState) => ({
        ...prevState,
        project: [
          ...prevState.project,
          {
            name: '',
            startDate: '',
            endDate: '',
            summary: '',
            link: '',
            id: uuidv4()
          },
        ]

    }))
  }



  return (
    <div>
      {cv.project.map((element) => {
        return <ProjectItem key={element.id} id={element.id} project={cv.project} setProject={setProject} onDelete={onDelete} />
      })}
      <button onClick={addProjectItem}>Add</button>
    </div>
  )
}

export default InputProjects