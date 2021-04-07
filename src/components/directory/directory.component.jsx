import React from 'react';
import { connect } from 'react-redux'

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";


import MenuItem from "../menu-item/menu-item.component";

import {DirectoryMenuComponent} from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryMenuComponent>
    { sections.map(({ id, ...otherSectionsProps }) => (
        <MenuItem key={ id } { ...otherSectionsProps }
        />
      )) }
  </DirectoryMenuComponent>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);