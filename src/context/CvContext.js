import React, {useState, createContext} from 'react';

export const CvContext = createContext();

export const CvProvider = (props) => {
  const [cv, setCv] = useState(
    {
      generalInformation: {
        fullName: 'Sebastian Hönig',
        dateOfBirth: '29.12.1997',
        email: 'hoenigsebastian@gmail.com',
        phoneNumber: '015224528396', 
        location: {
          adressline: 'Sudermannstraße 14',
          city: 'Frankfurt am Main',
          country: 'Germany',
          postalCode: '64031',
          region: 'Hesse'
        }
      },
      workExperience: [{
        companyName: 'Apple Computer',
        position: 'Software Engineer, Intern',
        startDate: '01.08.2021',
        endDate: '31.10.2021',
        summary: 
        [
          "Reduced time to render the user's buddy list by 75% by implementing prediction algorithm",
          'Implemented iChat integration with OSX Spotlight Search by creating tool which extracts metadata from saved data transcripts and provides metadata to a system-wide search database',
          'Redesigned chat file format and implemented backwards compatibility for search'
        ]
      }]

    }
  );
  return (
    <CvContext.Provider value={[cv, setCv]}>
      {props.children}
    </CvContext.Provider>
  )
}
