import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";
import "../App.css";

const SearchBar =  ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  return (
    <Paper className="papersearch" elevation={6} style={{ padding: "25px" , 
    width:"50%", marginLeft:"25%", backgroundColor:"#ddd", marginTop:"50px"}}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
}

export default SearchBar;