import React from "react";
import { useState} from "react";
import { Container, Button, Form, Grid, Header, Label, Input, Segment } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import Display from "./display";
import axios from "axios";
// import DisplayFetchedData from "./dataFetch";
import {Link} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  Layout = () =>{
    const initialDetails ={
        username:"", 
        phone:"",
        age:"",
        gender:"",
        selectDate:"",
        startTime:"",
        endTime:""
    }
    

    const [details, setDetails] = useState(initialDetails);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = async (event) => {
      event.preventDefault();
      setSubmitted(true);
      toast.success("Your data inserted successfully..",{autoClose : 1000});
    
      try {
        await axios.post('http://localhost:3030/Data', details);
        console.log("Data sent successfully!");
        // clearForm();
      } catch (error) {
        console.error("Error sending data: ", error);
      }
    };
  

    const isFormInvalid = () => {
      return (
        details.username === '' ||
        details.phone === '' ||
        details.age === '' ||
        details.selectDate === '' ||
        details.startTime === '' ||
        details.endTime === '' ||
        details.gender === ''
      );
    };

    // const handleFetchData = () => {
    //   fetchDataFromAPI();
    // };
    
    const clearForm = () => {
      setDetails(initialDetails)
    };

    

    const options = [
      { key: 'm', text: 'Male', value: 'Male' },
      { key: 'f', text: 'Female', value: 'Female' },
      { key: 'o', text: 'Other', value: 'Other' },
    ]
    return(
        <div className="App">
            <Segment inverted color="teal" vertical>
              <Container>
                <Grid columns={2} verticalAlign="middle" stackable>
                  <Grid.Column>
                    <Header as="h1">Welcome</Header>
                  </Grid.Column>
                  <Grid.Column textAlign="right">
                    <Button.Group>
                      <Button as={Link} to="/fetch">Fetch Data</Button>
                      <Button.Or ></Button.Or>
                      <Button as={Link} to="/totalData">TotalData</Button>
                    </Button.Group>
                  </Grid.Column>
                </Grid>
              </Container>
            </Segment>
            {!submitted ? (<Container>
                <Grid textAlign='center' style={{ height: '90vh' }} >
                    <Grid.Column verticalAlign='middle' style={{maxWidth : 450}}>
                      <Header as='h2' color='teal' textAlign='center'>
                        Fill the Below details
                      </Header>
                        <Form onSubmit={handleSubmit} size="small" loading={submitted}>
                          <Segment stacked>
                            <Form.Field >
                              {/* <Label textAlign='left'>Enter your name :</Label> */}
                                <Input fluid
                                    type="text" 
                                    name="username" 
                                    label="Name :"
                                    labelPosition="left corner"
                                    value={details.username} 
                                    placeholder="Enter your name"
                                    required
                                    onChange={(a) => {setDetails({...details, username : a.target.value})}}>
                                </Input>
                            </Form.Field>
                            <Form.Group widths='equal'>
                            <Form.Field>
                                {/* <Label>Enter your Ph. No. :</Label> */}
                                <Input fluid
                                    type="text" 
                                    name="phone" 
                                    value={details.phone}
                                    label="Phone No. :"
                                    labelPosition="left corner"
                                    placeholder="Enter your Phone No." 
                                    required
                                    onChange={(a) => {setDetails({...details, phone : a.target.value})}}>
                                </Input>
                            </Form.Field>
                            
                            <Form.Field>
                                {/* <Label>Enter your Age :</Label> */}
                                <Input fluid
                                    type="Number" 
                                    name="age" 
                                    value={details.age} 
                                    label="Age"
                                    labelPosition="left corner"
                                    placeholder="Enter your age"
                                    required
                                    onChange={(a) => {setDetails({...details, age : a.target.value})}}>
                                </Input>
                            </Form.Field>
                            </Form.Group>
                            <Form.Group>
                            <Form.Field required inline >
                              <Label required>Date :</Label>
                              <SemanticDatepicker
                                format="DD-MMMM-YYYY"
                                required
                                value={details.selectDate}
                                placeholder="DD-MM-YYYY"
                                onChange={(a, data) => {setDetails({ ...details, selectDate: data.value })}}
                              />
                            </Form.Field>
                            <Form.Select fluid
                              options={options}
                              placeholder="Gender"
                              value={details.gender}
                              onChange={(e, { value }) => {setDetails({ ...details, gender: value });
                            }}
                            />
                            </Form.Group>
                            <Form.Group verticalAlign>
                            <Form.Field>
                              <Label>Start Time:</Label>
                              <Input
                                type="time"
                                value={details.startTime}
                                onChange={(a) => {setDetails({...details, startTime : a.target.value})}}
                              />
                            </Form.Field>
                            <Form.Field>
                              <Label>End Time:</Label>
                              <Input
                                type="time"
                                value={details.endTime}
                                onChange={(a) => {setDetails({...details, endTime : a.target.value})}}
                              />
                            </Form.Field>
                            </Form.Group>
                            <Form.Field>
                                <Input type="file"></Input>
                            </Form.Field>
                            <div id='valid'></div>
                            <Button color='teal' size='large' disabled={isFormInvalid()}>Submit</Button>
                            <Button color="grey" size="large" onClick={clearForm}>clear</Button>
                            {/* <Button color='teal' size='large' onClick={handleFetchData}>Fetch Data</Button> */}
                            
                          </Segment>
                        </Form>
                        
                    </Grid.Column>
                </Grid>
            </Container>
            )           
            : (<Display details={details} />)}
        </div>     
    )
}


export default Layout;