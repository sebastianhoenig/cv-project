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
      }

    }
  );
  return (
    <CvContext.Provider value={[cv, setCv]}>
      {props.children}
    </CvContext.Provider>
  )
}
