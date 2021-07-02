import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import FindReplaceIcon from "@material-ui/icons/FindReplace";

const AppBarList = ({ onHandleSearch }) => {
  return (
    <div>
      <ListItem button onClick={() => onHandleSearch("search")}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Search" />
      </ListItem>
      <ListItem button onClick={() => onHandleSearch("advancedSearch")}>
        <ListItemIcon>
          <FindReplaceIcon />
        </ListItemIcon>
        <ListItemText primary="Advanced Search" />
      </ListItem>
    </div>
  );
};

export default AppBarList;
