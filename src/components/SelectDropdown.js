import React, { useState, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TotalSchemeCard from "./TotalSchemeCard";
import data from '../api/govt_schemes.json';
import './Selectstyle.css';

export default function SelectDropdown() {
  const [selectedState, setSelectedState] = useState('');

  // Memoized filtered data based on selected state
  const schemeData = useMemo(() => {
    if (selectedState === 'All India' || selectedState === '') {
      return data.filter(item => item.State === 'All India');
    }
    return data.filter(item => item.State === selectedState);
  }, [selectedState]);

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <>
      <Container className="mt-2">
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <div className="card border-0">
              <div className="card-body p-0">
                <select 
                  onChange={handleChange} 
                  className="form-control border-0 px-4 py-4 rounded shadow select-heading"
                  value={selectedState}
                >
                  <option value="" disabled hidden>Select State</option>
                  <option value="All India">All India</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Bihar">Bihar</option>
                </select>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <TotalSchemeCard state={selectedState} data={schemeData} />
    </>
  );
}
