import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Gallery.css'
import ImageGalleryDisplay from "./ImageGalleryDisplay/ImageGalleryDisplay";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  ARTAPPIMAGES,
  INVITEMUSIC,
  INVITEBIRTHDAY,
  INVITEART,
  INVITESPORT,
  CAFETUCANO,
  BAETAILS,
  ENTERTAINMENTACCESS,
  PRINCEANDWOOSTER,
  CHLOEBDAY,
  TBDEDGE
} from "./GalleryData";


function Gallery() {
  const navigate = useNavigate()

  const allImages = [
    ...INVITEMUSIC,
    ...INVITEBIRTHDAY,
    ...INVITEART,
    ...INVITESPORT,
    ...ARTAPPIMAGES,
    ...CAFETUCANO,
    ...BAETAILS,
    ...ENTERTAINMENTACCESS,
    ...CHLOEBDAY,
    ...TBDEDGE
  ];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  const randomizedImages = shuffleArray(allImages);
  

  const redirectToYouTube = () => {
    window.location.href = 'https://www.youtube.com/watch?v=YbBGoeyBsvU';
  };

  const redirectToBFA = () => {
    window.location.href = 'https://bfa.com/events/39567';
  };

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
          <Tab>Production</Tab>
          <Tab>User Interface</Tab>
          <Tab>Invitations</Tab>
          
        </TabList>

        {/* All Tab */}
        <TabPanel>
          <ImageGalleryDisplay images={randomizedImages} />
        </TabPanel>

       {/* CLIENT PROJECTS TAB  */}
       <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Cafe Tucano</Tab>
              <Tab>Bae Tails</Tab>
              <Tab>Entertainment Access</Tab>
              {/* <Tab>Rombiolo tbd?</Tab> */}
            </TabList>
            {/* Invites: Tucano */}
                <TabPanel>
                  <ImageGalleryDisplay images={CAFETUCANO}/>
                  <div className="design-categories">
                    <button className="design-category" onClick={()=>navigate("/design/clientprojects/CafeTucano")}>READ MORE</button> <br/>
                  </div>
                </TabPanel>
                {/* Invites: BaeTails */}
                <TabPanel>
                  <ImageGalleryDisplay images={BAETAILS}/>
                  <div className="design-categories">
                    <button className="design-category" onClick={()=>navigate("/design/clientprojects/BaeTails")}>READ MORE</button> <br/>
                  </div>
                </TabPanel>
                {/* Invites: EA */}
                <TabPanel>
                  <ImageGalleryDisplay images={ENTERTAINMENTACCESS}/>
                  {/* <div className="design-categories">
                    <button className="design-category" onClick={()=>navigate("/design/clientprojects/EntertainmentAccess")}>READ MORE</button> <br/>
                  </div> */}
                </TabPanel>
                {/* Invites: Rombiolo */}
                {/* <TabPanel>
                <ImageGalleryDisplay images={INVITESPORT}/>
                </TabPanel> */}
          </Tabs>
        </TabPanel>

        {/* PRODUCTION TAB  */}
       <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>The Martinez Brothers at The Edge</Tab>
              <Tab>Prince and Wooster: Gallery Opening</Tab>
              <Tab>Ice Cream Birthday Party</Tab>
            </TabList>
            {/* Production: TMB */}
                <TabPanel>
                  <ImageGalleryDisplay images={TBDEDGE}/>
                  <div className="design-categories">
                    <button className="design-category" onClick={redirectToYouTube}>
                      View Recap
                    </button>
                    </div>
                </TabPanel>
                {/* Production: Art Gallery Opening */}
                <TabPanel>
                  <ImageGalleryDisplay images={PRINCEANDWOOSTER}/>
                  <div className="design-categories">
                    <button className="design-category" onClick={redirectToBFA}>
                      View BFA Coverage
                    </button>
                    </div>
                </TabPanel>
                {/* Production: ChloeBday */}
                <TabPanel>
                  <ImageGalleryDisplay images={CHLOEBDAY}/>
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