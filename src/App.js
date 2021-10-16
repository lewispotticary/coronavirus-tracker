import React, { useState } from 'react'

//Components
import { Cards, Chart, CountryPicker, CountrySelected, Table } from './components';

//Material UI 

//Styles
import styles from './App.module.css';

function App() {

  //useState

  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState("worldwide");

  const [countryInfo, setCountryInfo] = useState("");

  const [countrySelect, setCountrySelect] = useState("");

  const [image, setImage] = useState("");

  const [tableData, setTableData] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>      
          <CountryPicker 
          countries={countries}
          setCountries={setCountries}
          country={country}
          setCountry={setCountry}
          countryInfo={countryInfo}
          setCountryInfo={setCountryInfo}
          setTableData={setTableData}
          />

          <CountrySelected 
          countryInfo={countryInfo} 
          setCountrySelect={setCountrySelect} 
          countrySelect={countrySelect}
          image={image}
          setImage={setImage}
          />
      </div>
      
      <div className={styles.containerMain}>
        <div className={styles.containerMainLeft}>
          <Cards countryInfo={countryInfo}/>
        </div>
        <div className={styles.containerMainRight}>
          <Table setTableData={setTableData} tableData={tableData}/>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default App;
