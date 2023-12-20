import React, { useState } from 'react';
import { Button, Input, Header, Segment, Container, Grid } from 'semantic-ui-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteData = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3030/Data/${id}`);
      if (response.status === 200) {
        toast.success('Data Deleted Successfully', { autoClose: 1000 });
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error('Data not found for provided id', { autoClose: 1500 });
      } else {
        toast.error('Error deleting data', { autoClose: 1000 });
        console.error('Error deleting data:', error);
      }
    }
  };

  return (
    <div >
      <Segment inverted color='teal' vertical>
        <Container textAlign='center'>
          <Header as="h1">Delete Data</Header>
        </Container>
      </Segment>
      <Grid textAlign="center" style={{ height: '80vh'}} verticalAlign="middle">
        <Grid.Column>
          <Header as="h3">Enter the Id to remove :</Header>
          <Input
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />
          <br />
          <Button onClick={handleDelete}>Delete Data</Button>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default DeleteData;
