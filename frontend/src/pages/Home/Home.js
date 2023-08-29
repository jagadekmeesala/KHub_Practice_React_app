import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Home = () => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/stats", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setStatistics(data);
      })
      
      .catch((err) => {
        console.log(err.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderGradientBar = (statistic) => {
    const stats = statistics[statistic];
    const data = Object.keys(stats).map((attribute) => ({
      name: attribute,
      value: stats[attribute],
    }));

    const customColorRGB = ' rgb(217, 217, 217)';

    return (
      <div className="box" key={statistic}>
        <h3>{statistic}</h3>
        <div className="chart">
          <BarChart width={185.56} height={200} data={data}>
            <XAxis dataKey="name" tick={{ fill: 'white' }} />
            <YAxis tick={{ fill: 'white' }} />
            <Tooltip />
            <Bar dataKey="value" fill={customColorRGB} />
          </BarChart>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="layout-container">
        <div className="left-half">
          {Object.keys(statistics).map((statistic) =>
            renderGradientBar(statistic)
          )}
        </div>
        <div className="right-half">
          <p className="textarea" placeholder="Enter up to 150 words">
            <FontAwesomeIcon icon={faDatabase} size="2x" />
            About the data
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
