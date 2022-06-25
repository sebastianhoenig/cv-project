import React, { useEffect, useState } from 'react'
import Degree from './Degree';
import Grade from './Grade';
import Institution from './Institution';
import StartDate from '../Utils/StartDate';
import EndDate from '../Utils/EndDate';
import Summary from '../Utils/Summary';
import DeleteButton from '../Utils/DeleteButton';

function EducationItem( {id, education, setEducation, onDelete} ) {

  const [institution, setInstitution] = useState('');
  const [degree, setDegree] = useState('');
  const [grade, setGrade] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [summary, setSummary] = useState('');

  useEffect(() => {
    let updateEducation = [...education];
    let all_id = education.map((e) => e.id);
    if (!(all_id.includes(id))) {
      updateEducation = [...education, 
      {
        institution: '',
        degree: '',
        startDate: '',
        grade: '',
        endDate: '',
        summary: '',
        id: id
      }]
    }
    let modified = updateEducation.map(
      el => el.id === id? {...el, institution:institution, degree:degree, grade: grade, 
      startDate:startDate, endDate:endDate, summary:summary} : el
    )
    setEducation(
      modified
    )
  }, [institution, degree, grade, startDate, endDate, summary])


  return (
    <div>
      <Institution setInstitution = {setInstitution}/>  
      <Degree setDegree = {setDegree}/>
      <StartDate setStartDate = {setStartDate}/>
      <Grade setGrade= {setGrade}/>
      <EndDate setEndDate = {setEndDate}/>
      <Summary setSummary = {setSummary}/>
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}

export default EducationItem