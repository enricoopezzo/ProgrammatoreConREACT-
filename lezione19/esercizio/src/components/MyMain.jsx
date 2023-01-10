import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SelectRegioni from './SelectRegioni';
import SelectProvince from './SelectProvince';
import SelectComuni from './SelectComuni';
import ComuneDetail from './ComuneDetail';

const regioniAPI = 'https://axqvoqvbfjpaamphztgd.functions.supabase.co/regioni';
const provinceAPI = 'https://axqvoqvbfjpaamphztgd.functions.supabase.co/province/'; //{regione}
const comuniAPI = 'https://axqvoqvbfjpaamphztgd.functions.supabase.co/comuni/provincia/'; //{provincia}

export default function MyMain() {

  const [regioni, setRegioni] = useState([]);
  const [province, setProvince] = useState([]);
  const [comuni, setComuni] = useState([]);
  const [selectedRegione, setSelectedRegione] = useState('');
  const [selectedProvincia, setSelectedProvincia] = useState('-');
  const [selectedComune, setSelectedComune] = useState('');

  useEffect(() => {
    axios.get(regioniAPI).then(response => setRegioni(response.data))
  }, [])

  useEffect(() => {
    axios.get(provinceAPI+selectedRegione).then(response => setProvince(response.data))
  }, [selectedRegione])

  useEffect(() => {
    axios.get(comuniAPI+selectedProvincia).then(response => setComuni(response.data))
  }, [selectedProvincia])
  
  const selectRegione = (event) => {
    //console.log(event.target.value);
    setSelectedRegione(event.target.value)
  }

  const selectProvincia = (event) => {
    setSelectedProvincia(event.target.value)
  }

  const selectComune = (event) => {
    setSelectedComune(event.target.value)
  }

  return (
    <>
        <SelectRegioni regioni={regioni} selectRegione={selectRegione} />
        <SelectProvince province={province} selectProvincia={selectProvincia} />
        <SelectComuni comuni={comuni} selectComune={selectComune} />
        <ComuneDetail comune={selectedComune} />
    </>
  )
}
