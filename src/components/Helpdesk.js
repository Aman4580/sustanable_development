import React from 'react';
import Container from 'react-bootstrap/Container';
import './helpdesk.css';
import Helpdeskcard from './Helpdeskcard';
import helpdeskData from '../api/helpdesk_data.json'; // Import the JSON data

export default function Helpdesk() {
  const [query, setQuery] = React.useState('');
  const [data, setData] = React.useState(helpdeskData);

  const handleClick = () => {
    const filteredData = helpdeskData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredData);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Container>
        <div className="search">
          <div className="row">
            <div className="col">
              <div className="search-1">
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Ask me Anything"
                  value={query}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={handleClick} className="button">Search</button>
        </div>
        <br />
        <div className="helpdesk-container">
          {/* Display Helpdesk Data */}
          {data.length > 0 ? (
            data.map(item => (
              <Helpdeskcard key={item.id} data={item} />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </Container>
    </>
  );
}
