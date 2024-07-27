import * as React from 'react';
import "./Schemecard.css";
import Container from 'react-bootstrap/Container';
import SchemeCard from "./SchemeCard";
import SchemeCard1 from "./SchemeCard1";

export default function SelectDropdown(props) {
  const { data, state } = props;
  
  // Determine heading based on the state
  const heading = state === "" ? "All India" : state;

  return (
    <>
      <Container>
        <h1 className='scheme-heading'>{heading}</h1>
      </Container>
      <br />
      {/* Render SchemeCard and SchemeCard1 based on index */}
      {data.map((element, index) => (
        index % 2 === 0 ? (
          <SchemeCard key={index} data={element} />
        ) : (
          <SchemeCard1 key={index} data={element} />
        )
      ))}
    </>
  );
}
