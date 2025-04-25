/* eslint-disable react/prop-types */
import { useState } from 'react';
import './styles.css';

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <button
            key={tabItem.label}
            onClick={() => handleOnClick(index)}
            className={`tab-item ${currentTabIndex === index ? 'active' : ''}`}
          >
            <span className="label">{tabItem.label}</span>
          </button>
        ))}
      </div>

      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
