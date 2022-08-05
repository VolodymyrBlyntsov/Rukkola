import React from 'react';
import './JobList.scss';

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
              <input type="text" placeholder='Search by title, companies' />
            </div>
            <div className="search__panel-02">
              <span>
                <i class="ri-map-pin-2-line"></i>
              </span>
              <input type="text" placeholder='Search by location' />
              <button className='btn'>Search</button>
            </div>
            <div className="search__panel__-03">
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
      </div>
    </section>
  )
}

export default JobsList