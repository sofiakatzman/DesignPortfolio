import React, { useState } from "react";
import './Gallery.css'
import ImageGalleryDisplay from "./ImageGalleryDisplay/ImageGalleryDisplay";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {ARTAPPIMAGES, INVITEMUSIC, INVITEBIRTHDAY, INVITEART, INVITESPORT, TUCANO, BAETAILS, ENTERTAINMENTACCESS} from "./GalleryData"; // Import your data structure here


function Gallery() {
  const allImages = [
    ...INVITEMUSIC,
    ...INVITEBIRTHDAY,
    ...INVITEART,
    ...INVITESPORT,
    ...ARTAPPIMAGES,
    ...TUCANO,
    ...BAETAILS,
    ...ENTERTAINMENTACCESS,
  ];
  return (
    

    // <div className="design-categories">
    //   <Tabs forceRenderTabPanel defaultIndex={0}>
    //     <TabList>
    //       {GALLERYDATA.map((tab, index) => (
    //         <Tab key={index} onClick={() => handleTabClick(index)}>
    //           {tab.label}
    //         </Tab>
    //       ))}
    //     </TabList>
    //     {GALLERYDATA.map((tab, index) => (
    //       <TabPanel key={index}>
    //         <Tabs forceRenderTabPanel defaultIndex={0}>
    //           <TabList>
    //             {tab.subtabs.map((subtab, subtabIndex) => (
    //               <Tab
    //                 key={subtabIndex}
    //                 onClick={() => handleSubtabClick(subtabIndex)}
    //               >
    //                 {subtab.label}
    //               </Tab>
    //             ))}
    //           </TabList>
    //           <TabPanel>
    //             <ImageGalleryDisplay images={currentSubtabData.images} />
    //             {/* You can access the class name from the subtab's label */}
    //             <p>Class Name: {currentSubtabData.label}</p>
    //           </TabPanel>
    //         </Tabs>
    //       </TabPanel>
    //     ))}
    //   </Tabs>
    // </div>
<div className="design-categories">
      <Tabs forceRenderTabPanel defaultIndex={0}>

       {/* MAIN TABS */}
        <TabList>
          <Tab>All</Tab>
          <Tab>Client Projects</Tab>
          <Tab>User Interface</Tab>
          <Tab>Invitations</Tab>
          
        </TabList>

        {/* All Tab */}
        <TabPanel>
          <ImageGalleryDisplay images={allImages} />
        </TabPanel>

       {/* CLIENT PROJECTS TAB  */}
       <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Cafe Tucano</Tab>
              <Tab>Bae Tails</Tab>
              <Tab>Entertainment Access</Tab>
              {/* <Tab>Rombiolo</Tab> */}
            </TabList>
            {/* Invites: Tucano */}
                <TabPanel>
                  <ImageGalleryDisplay images={TUCANO}/>
                </TabPanel>
                {/* Invites: BaeTails */}
                <TabPanel>
                  <ImageGalleryDisplay images={BAETAILS}/>
                </TabPanel>
                {/* Invites: EA */}
                <TabPanel>
                  <ImageGalleryDisplay images={ENTERTAINMENTACCESS}/>
                </TabPanel>
                {/* Invites: Rombiolo */}
                {/* <TabPanel>
                <ImageGalleryDisplay images={INVITESPORT}/>
                </TabPanel> */}
          </Tabs>
        </TabPanel>

       {/* UI TAB */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>The Art App</Tab>
            </TabList>
            <TabPanel>
              <ImageGalleryDisplay images={ARTAPPIMAGES}/>
            </TabPanel>
          </Tabs>
        </TabPanel>

        {/* Invites TAB  */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Music</Tab>
              <Tab>Birthday</Tab>
              <Tab>Art</Tab>
              <Tab>Sport</Tab>
            </TabList>
            {/* Invites: Music */}
                <TabPanel>
                  <ImageGalleryDisplay images={INVITEMUSIC}/>
                </TabPanel>
                {/* Invites: Birthday */}
                <TabPanel>
                  <ImageGalleryDisplay images={INVITEBIRTHDAY}/>
                </TabPanel>
                {/* Invites: Art */}
                <TabPanel>
                  <ImageGalleryDisplay images={INVITEART}/>
                </TabPanel>
                {/* Invites: Sport */}
                <TabPanel>
                <ImageGalleryDisplay images={INVITESPORT}/>
                </TabPanel>
          </Tabs>
        </TabPanel>

       

        
      </Tabs>
      </div>
  );
}

export default Gallery;