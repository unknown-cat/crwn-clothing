import React from 'react';
import './homepage.styles.scss'

import DirectoryMenu
  from "../../compnonents/directory/directory.component";

const HomePage = () => (
  <div className="homepage">
    <DirectoryMenu/>
  </div>
);

export default HomePage;