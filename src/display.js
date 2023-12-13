import React from 'react';
import { Table, Grid, Button } from 'semantic-ui-react';
//import { useLocation } from 'react-router-dom';

const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    return `${day}-${month}-${year}`;
  };


const Display = ({details}) => {

  // const location = useLocation();
  // const data = location.state.details;

    const formattedDate = details.selectDate ? formatDate(details.selectDate) : '';
return (
  <div>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{maxWidth : 450}}>
    <h2>Submitted Details</h2>
      <Table color='blue' key='blue' >
        <Table.Body>
          <Table.Row>
            <Table.Cell><b>Name : </b></Table.Cell>
            <Table.Cell>{details.username}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><b>Phone :</b></Table.Cell>
            <Table.Cell>{details.phone}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><b>Age :</b></Table.Cell>
            <Table.Cell>{details.age}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><b>Gender :</b></Table.Cell>
            <Table.Cell>{details.gender}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><b>Date :</b></Table.Cell>
            <Table.Cell>{formattedDate}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><b>Time :</b></Table.Cell>
            <Table.Cell>{details.startTime} to {details.endTime}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </Grid.Column>
    </Grid>
  </div>
);
}
export default Display;