import Tabs from './tabs';

const RandomComponent = () => {
  return 'This is a random component';
};

const TabsParent = () => {
  const tabs = [
    { label: 'Tab 1', content: <div>This is the content for Tab 1</div> },
    { label: 'Tab 2', content: <div>This is the content for Tab 2</div> },
    { label: 'Tab 3', content: <RandomComponent /> },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabsParent;
