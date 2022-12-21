import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const url = "http://api.openweathermap.org/data/2.5/forecast?q=Barcelona,es&cnt=5&APPID=72fbc28f994dfa94297aefc7e97d7657";

export const Barcelona = () => {

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
    );
}