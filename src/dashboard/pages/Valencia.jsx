import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

const url = "http://api.openweathermap.org/data/2.5/forecast?q=Valencia,es&cnt=5&APPID=72fbc28f994dfa94297aefc7e97d7657";

export const Valencia = () => {

  const [ temp, setWeather ] = useState([])

  const fetchWea = async () => {
    try {
      const response = await axios(url);
      setWeather(response.data.list);
    } catch (err) {
      console.error(err);
    }
  };

   useEffect(()=> {
    fetchWea();
  }, [temp])

    return (
      <Container>
        <Row>
          <Col>
            <BarChart
              width={1000}
              height={300}
              data={temp}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="dt" />
              <YAxis dataKey="wind.speed"/>
              <Tooltip />
              <Legend />
              <Bar dataKey="wind.speed" fill="#8884d8" />
            </BarChart>
          </Col>
        </Row>
        <Row>
          <Col>
            <LineChart
              width={500}
              height={300}
              data={temp}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dt" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </Col>
        </Row>
      </Container>
      
        
      
    );
}