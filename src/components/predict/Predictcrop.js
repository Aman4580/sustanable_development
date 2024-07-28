import React, { useState } from 'react';
import './pred.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import state from '../../api/state.json';
import district from '../../api/district.json';
import crop from '../../api/crop.json';
import season from '../../api/season.json';
import { PredictCrop } from '../../api/predictcrop';

const state_data = Object.keys(state);
const district_data = Object.keys(district);
const crop_data = Object.keys(crop);
const season_data = Object.keys(season);

export default function Predictcrop() {
  const [State, setState] = useState('');
  const [District, setDistrict] = useState('');
  const [Crop, setCrop] = useState('');
  const [Year, setYear] = useState('');
  const [Season, setSeason] = useState('');
  const [Area, setArea] = useState('');
  const [Production, setProduction] = useState('');
  const [Ans, setAns] = useState('');

  const handleClick = async () => {
    const ans = {
      selected_state: State,
      selected_district: District,
      selected_crop: Crop,
      crop_year: Year,
      selected_season: Season,
      area: Area,
      Production: Production,
    };

    try {
      const temp = await PredictCrop(ans);
      setAns(temp.answer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1 className='h1-pred-crop'>CROP YIELD PREDICTION</h1>
      <br />
      <br />
      <Row className='justify-content-md-center'>
        <Col>
          <div className='form-container'>
            <h2>Fill up the details (all details are compulsory to fill)</h2>
            <div className='form-group'>
              <label htmlFor='stateDropdown'>State:</label>
              <select
                className='form-control'
                id='stateDropdown'
                value={State}
                onChange={(e) => setState(e.target.value)}
              >
                <option value='' disabled hidden>
                  Select State
                </option>
                {state_data.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='districtDropdown'>District:</label>
              <select
                className='form-control'
                id='districtDropdown'
                value={District}
                onChange={(e) => setDistrict(e.target.value)}
              >
                <option value='' disabled hidden>
                  Select District
                </option>
                {district_data.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='cropDropdown'>Crop:</label>
              <select
                className='form-control'
                id='cropDropdown'
                value={Crop}
                onChange={(e) => setCrop(e.target.value)}
              >
                <option value='' disabled hidden>
                  Select Crop
                </option>
                {crop_data.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>

            <div className='form-outline mb-2'>
              <label className='form-label' htmlFor='yearInput'>
                Enter Crop Year
              </label>
              <input
                value={Year}
                type='number'
                id='yearInput'
                className='form-control'
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='seasonDropdown'>Season:</label>
              <select
                className='form-control'
                id='seasonDropdown'
                value={Season}
                onChange={(e) => setSeason(e.target.value)}
              >
                <option value='' disabled hidden>
                  Select Season
                </option>
                {season_data.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>

            <div className='form-outline mb-1'>
              <label className='form-label' htmlFor='areaInput'>
                Enter Area
              </label>
              <input
                value={Area}
                type='number'
                id='areaInput'
                className='form-control'
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            <div className='form-outline mb-2'>
              <label className='form-label' htmlFor='productionInput'>
                Enter Production Value
              </label>
              <input
                value={Production}
                type='number'
                id='productionInput'
                className='form-control'
                onChange={(e) => setProduction(e.target.value)}
              />
            </div>

            <Button variant='primary mb-2 mt-2' onClick={handleClick}>
              Submit
            </Button>

            <br />
            <h3>Yield: {Ans}</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
