import React from "react";
import MenuItem from "../menu-item/menuItem.component";
import {selectDirectorySection  } from "../../redux/directory/directory.selctor";
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux";
const DirectoryMenu = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
});
export default connect(mapStateToProps)(DirectoryMenu) ;
