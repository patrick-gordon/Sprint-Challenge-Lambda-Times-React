import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';


const Tabs = ({tabs,selectedTab, selectTabHandler}) => {
  return (
    
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map(tab => {
          return(
            <tab
              selectTabHandler={selectTabHandler}
              selectedTab={selectedTab}
              tab={tab}
              key={tab}
            />
          )
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}
export default Tabs;


/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/