import {React, useState} from "react";
import{Grid, Input, Button, Segment, Container, Header} from "semantic-ui-react";
import DisplayFetchedData from "./dataFetch";

const Fetch = () => {

    const [inputId, setInputId] = useState('');
    return(
        <div>
            <Segment inverted color="teal" vertical>
                <Container textAlign="center">
                    <Header as="h1">Details can be fetched here.</Header>
                </Container>
            </Segment>
        <Grid  textAlign="center" style={{ height: '80vh'}} verticalAlign="middle">
            <Grid.Column  style={{ maxWidth: 750 }}>
              <h2>Fetch the Details</h2>       
              <Input
                type="text"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                placeholder="Enter ID "
                required
              />
              <Button onClick={() => <DisplayFetchedData inputId={inputId} />}>Fetch Data</Button>

              {/* Display fetched data */}
              <DisplayFetchedData inputId={inputId} />
            </Grid.Column>
          </Grid>
          </div>
    )
}

export default Fetch;