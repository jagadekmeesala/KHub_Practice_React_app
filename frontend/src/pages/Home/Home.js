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
          <div className="card">
            <div className="card-content">
              <FontAwesomeIcon className="card-icon" icon={faDatabase} />
              <h2 className="card-text">About the Data</h2>
            </div>
            <div className="card-scrollable">
            <p className="card-paragraph">
              Welcome to the captivating world of statistical visualization centered around Dukes University, an esteemed institution nestled amidst the enchanting landscapes of North California, USA. This meticulously curated dataset offers a profound glimpse into the lives of students, their academic trajectories, and the intricate facets of their capabilities. At its core, the dataset encompasses pivotal attributes: GPA, study week, sleepnight, outing, and gender.</p>


            <p className="card-paragraph">Incorporating gender into the equation adds a layer of complexity, enabling us to discern potential variations in academic accomplishments. This visualization not only provides insights into students' lives but also underscores the university's commitment to fostering an environment where diverse attributes converge to shape educational experiences.</p>

            <p className="card-paragraph">As the data comes alive through charts and graphs, we gain a holistic comprehension of the students' journey, enriching our perception of the myriad factors that mold their academic voyage at Dukes University.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
