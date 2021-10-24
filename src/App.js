import React, { useState } from 'react'

//Components
import { Cards, Chart, CountryPicker, CountrySelected, Table, Map } from './components';

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

  const [casesChartData, setCasesChartData] = useState([]);

  const [deathChartData, setDeathChartData] = useState([]);

  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);

  const [zoom, setZoom] = useState(0);

  const [mapData, setMapData] = useState("cases");

  const [circleColour, setCircleColour] = useState("rgba(0, 0, 255, 0.5)");

  const [circleRadius, setCircleRadius] = useState(30);

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
          setMapCenter={setMapCenter}
          setZoom={setZoom}
          />
      </div>
      
      <div className={styles.containerMain}>
        <div className={styles.containerMainLeft}>
          <Cards countryInfo={countryInfo}/>
          <Map 
          mapCenter={mapCenter} 
          zoom={zoom} 
          countryInfo={countryInfo} 
          tableData={tableData} 
          mapData={mapData} 
          setMapData={setMapData} 
          circleColour={circleColour} 
          setCircleColour={setCircleColour}
          setCircleRadius={setCircleRadius}
          circleRadius={circleRadius}
          />
        </div>
        <div className={styles.containerMainRight}>
          <Table setTableData={setTableData} tableData={tableData}/>
          <Chart setCasesChartData={setCasesChartData} casesChartData={casesChartData} deathChartData={deathChartData} setDeathChartData={setDeathChartData}/>
        </div>
      </div>

      
      
      
      
    </div>
  );
}

export default App;
