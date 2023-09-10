import React, { useState } from "react";
import './Gallery.css'
import ImageGalleryDisplay from "./ImageGalleryDisplay/ImageGalleryDisplay";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GALLERYDATA from "./GalleryData"; // Import your data structure here

function Gallery() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubtab, setActiveSubtab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    setActiveSubtab(0); // Reset subtab when changing main tabs
  };

  const handleSubtabClick = (subtabIndex) => {
    setActiveSubtab(subtabIndex);
  };

  const currentTabData = GALLERYDATA[activeTab];
  const currentSubtabData = currentTabData.subtabs[activeSubtab];

  return (
    <div className="design-categories">
      <Tabs forceRenderTabPanel defaultIndex={0}>
        <TabList>
          {GALLERYDATA.map((tab, index) => (
            <Tab key={index} onClick={() => handleTabClick(index)}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        {GALLERYDATA.map((tab, index) => (
          <TabPanel key={index}>
            <Tabs forceRenderTabPanel defaultIndex={0}>
              <TabList>
                {tab.subtabs.map((subtab, subtabIndex) => (
                  <Tab
                    key={subtabIndex}
                    onClick={() => handleSubtabClick(subtabIndex)}
                  >
                    {subtab.label}
                  </Tab>
                ))}
              </TabList>
              <TabPanel>
                <h2>Subtab Name: {currentSubtabData.label}</h2>
                <ImageGalleryDisplay images={currentSubtabData.images} />
                <p>Class Name: {currentSubtabData.images[0]?.className}</p>
              </TabPanel>
            </Tabs>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default Gallery;