import React from 'react';
import Card from 'react-bootstrap/Card';

const EventResults = (props) => {
  const renderEvents = () => {
    return props.events.map((event, index) => {
      return (
        <Card style={{ width: '18rem' }} key={index}>
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  return <div className="events-grid">{renderEvents()}</div>;
};

export default EventResults;
