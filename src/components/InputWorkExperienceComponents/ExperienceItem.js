import React, { useEffect, useState } from 'react'
import CompanyName from './CompanyName';
import Position from './Position';
import StartDate from '../Utils/StartDate';
import EndDate from '../Utils/EndDate'
import Summary from '../Utils/Summary';
import DeleteButton from '../Utils/DeleteButton'

function ExperienceItem( {id, workExperience, setWorkExperience, onDelete} ) {

  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [summary, setSummary] = useState('');

  useEffect(() => {
    let updateWorkExperience = [...workExperience];
    let all_id = workExperience.map((e) => e.id)
    if (!(all_id.includes(id))) {
      updateWorkExperience = [...workExperience, 
      {
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        summary: '',
        id: id
      }]
    }
    let modified = updateWorkExperience.map(
      el => el.id === id? {...el, companyName:companyName, position:position,
      startDate:startDate, endDate:endDate, summary:summary} : el
    )
    setWorkExperience(
      modified
    )
  }, [companyName, position, startDate, endDate, summary])


  return (
    <div>
      <CompanyName setCompanyName = {setCompanyName}/>  
      <Position setPosition = {setPosition}/>
      <StartDate setStartDate = {setStartDate}/>
      <EndDate setEndDate = {setEndDate}/>
      <Summary setSummary = {setSummary}/>
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}

export default ExperienceItem