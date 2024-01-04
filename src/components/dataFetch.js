import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = `${d.getMonth() + 1}`.padStart(2, '0');
  const day = `${d.getDate() - 1}`.padStart(2, '0');
  return `${day}-${month}-${year}`;
};

const DisplayFetchedData = ({ inputId }) => {
  const [displayedData, setDisplayedData] = useState(null);

  useEffect(() => {
    const fetchDataByIdOrFirst = async () => {
      try {
        if (inputId) {
          const response = await axios.get(`http://localhost:3030/Data/${inputId}`);
          setDisplayedData([response.data]);
          toast.success("Data Fetched Successfully",{autoClose: 500});
        } else {
          const fetchDataResponse = await axios.get('http://localhost:3030/Data');
          const firstItem = fetchDataResponse.data[0];
          setDisplayedData(firstItem ? [firstItem] : []);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          toast.error("ID not in the database",{autoClose : 500});
        } else {
          toast.error(error,{autoClose : 500});
          throw new Error('Error fetching data');
        }
      }
    };

    if (inputId) {
      fetchDataByIdOrFirst();
    } 
  }, [inputId]);

  return (
    <div>
      {displayedData && (
            <div textAlign="center">
            <h2>Display Data</h2>
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
                {displayedData.map((dataItem) => (
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
          </div>
          )}
    </div>
  );
};

export default DisplayFetchedData;
