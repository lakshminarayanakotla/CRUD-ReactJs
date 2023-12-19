import React, { useState , useEffect} from 'react';
import { Table, Grid, Message, Segment, Header, Container } from 'semantic-ui-react';
//import axios from 'axios';

const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate() - 1}`.padStart(2, '0');
  return `${day}-${month}-${year}`;
};

const Display = ({ details }) => {
  // const [inputId, setInputId] = useState('');
  // const [displayedData, setDisplayedData] = useState(null);

  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const formattedDate = details.selectDate ? formatDate(details.selectDate) : '';

  return (
    <>
    {/* <Segment inverted color='teal' vertical>
      <Container>
        <Header as="h1">Your submiited data is..</Header>
      </Container>
    </Segment> */}
    <div>
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign="middle" >
        <Grid.Column style={{ maxWidth: 450 }}>
        {showMessage && <Message positive>
          <Message.Header>You are data inserted successfully</Message.Header>
        </Message>}
          <h2>Submitted Details</h2>
          <Table color="blue" key="blue">
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <b>Name : </b>
                </Table.Cell>
                <Table.Cell>{details.username}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <b>Phone :</b>
                </Table.Cell>
                <Table.Cell>{details.phone}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <b>Age :</b>
                </Table.Cell>
                <Table.Cell>{details.age}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <b>Gender :</b>
                </Table.Cell>
                <Table.Cell>{details.gender}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <b>Date :</b>
                </Table.Cell>
                <Table.Cell>{formattedDate}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <b>Time :</b>
                </Table.Cell>
                <Table.Cell>
                  {details.startTime} to {details.endTime}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          
        </Grid.Column>
      </Grid>
      
    </div>
    </>
  );
};

export default Display;
