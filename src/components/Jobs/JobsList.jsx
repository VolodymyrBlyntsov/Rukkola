import React, { useState } from 'react';
import './JobList.scss';
import jobs from '../../data/data';
import { Link } from 'react-router-dom';

const JobsList = () => {
  return (
    <section className="job__list">
      <div className="container">
        <div className="job__list__wrapper">
          <div className="search__panel">
            <div className="search__panel-01">
              <span>
                <i class="ri-search-line"></i>
              </span>
              <input type="text" placeholder='Search by title or companies' />
            </div>
            <div className="search__panel-02">
              <span>
                <i class="ri-map-pin-2-line"></i>
              </span>
              <input type="text" placeholder='Search by location' />
              <button className='btn'>Search</button>
            </div>
            <div className="search__panel-03">
              <select>
                <option> Filter job by </option>
                <option value="full-time"> Full Time </option>
                <option value="part-time"> Part Time </option>
                <option value="freelance"> Freelance </option>
                <option value="contract"> Contract </option>
              </select>
            </div>
          </div>
        </div>

        <div className="job__wrapper">
          {
            jobs.map(item => 
              <div className="job__item" mey={item.id}>
                <img src={item.logo} alt="company_logo" />
                <div className="job__content">
                  <h6> {item.postedAt} - {item.contract} </h6>
                  <h1><Link to={`/jobs/${item.position}`}>{item.position}</Link></h1>
                  <p> {item.location} </p>
                  <div className="location">
                    <p>
                      Location: <span> {item.location} </span>
                    </p>
                  </div>
                </div>
              </div>
              )
          }
        </div>

      </div>
    </section>
  )
}

export default JobsList