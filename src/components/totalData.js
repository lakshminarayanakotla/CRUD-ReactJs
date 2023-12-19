import  axios  from "axios";
import React,{useEffect, useState} from "react";
import {Icon, Pagination, Table, Grid, Segment, Header, Container} from "semantic-ui-react";

const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate() - 1}`.padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

const TotalData = () =>{
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)
    useEffect( ()=>{
        const fetchData = async () =>{
            try{
                const response = await axios.get("http://localhost:3030/Data")
                setData(response.data)
            }
            catch(error){
                console.error("Error while fetching data",error)
            }
        };
        fetchData();
    },[])

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    const handlePaginationChange = (e, { activePage }) => {
      setCurrentPage(activePage);
    };
  
    return(
        <>
        <div >
            <Segment inverted color="teal" vertical>
                <Container textAlign="center">
                    <Header as="h1">You can find all data here.</Header>
                </Container>
            </Segment>
      {data && (
            <div>
            <Grid textAlign="center" style={{ height: '80vh'}} verticalAlign="middle">
                <Grid.Column style={{maxWidth: 900}}>
            <h1 textAlign="center">Display Data</h1>
            <Table color="blue" key="blue">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Username</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                  <Table.HeaderCell>Age</Table.HeaderCell>
                  <Table.HeaderCell>Select Date</Table.HeaderCell>
                  <Table.HeaderCell>Start Time</Table.HeaderCell>
                  <Table.HeaderCell>End Time</Table.HeaderCell>
                  <Table.HeaderCell>Gender</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {currentItems.map((dataItem) => (
                  <Table.Row key={dataItem.id}>
                    <Table.Cell>{dataItem.id}</Table.Cell>
                    <Table.Cell>{dataItem.username}</Table.Cell>
                    <Table.Cell>{dataItem.phone}</Table.Cell>
                    <Table.Cell>{dataItem.age}</Table.Cell>
                    <Table.Cell>{formatDate(dataItem.selectDate)}</Table.Cell>
                    <Table.Cell>{dataItem.startTime}</Table.Cell>
                    <Table.Cell>{dataItem.endTime}</Table.Cell>
                    <Table.Cell>{dataItem.gender}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            </Grid.Column>
            </Grid>
          </div>
          )}
            
            <Grid textAlign="center" verticalAlign="middle"> 
                <Grid.Column>
                  <Pagination
                        activePage={currentPage}
                        onPageChange={handlePaginationChange}
                        pointing
                        secondary
                        ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                        prevItem={{ content: <Icon name='angle left' />, icon: true }}
                        nextItem={{ content: <Icon name='angle right' />, icon: true }}
                        totalPages={totalPages}
                        color="red"
                    />
                </Grid.Column>
            </Grid>
                
    </div>
  </>
    )
}

export default TotalData;