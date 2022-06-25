import React, { useEffect, useState } from 'react'
import Name from './Name'
import Link from './Link';
import StartDate from '../Utils/StartDate';
import EndDate from '../Utils/EndDate';
import Summary from '../Utils/Summary';
import DeleteButton from '../Utils/DeleteButton';

function ProjectItem( {id, project, setProject, onDelete} ) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [summary, setSummary] = useState('');

  useEffect(() => {
    let updateProject = [...project];
    let all_id = project.map((e) => e.id);
    if (!(all_id.includes(id))) {
      updateProject = [...project, 
      {
        name: '',
        startDate: '',
        endDate: '',
        summary: '',
        link: '',
        id: id
      }]
    }
    let modified = updateProject.map(
      el => el.id === id? {...el, name:name, link:link,
      startDate:startDate, endDate:endDate, summary:summary} : el
    )
    setProject(
      modified
    )
  }, [name, link, startDate, endDate, summary])


  return (
    <div>
      <Name setName = {setName}/>  
      <Link setLink = {setLink}/>
      <StartDate setStartDate = {setStartDate}/>
      <EndDate setEndDate = {setEndDate}/>
      <Summary setSummary = {setSummary}/>
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}

export default ProjectItem