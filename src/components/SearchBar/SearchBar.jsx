import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { auctionItemData } from '../../data/auctionItems';


export const SearchBar = ({setFilteredAuctions, aucs_list}) => {
    return ( 
    <div>
    <TextField
    id="search-bar"
    className="text"
    onInput={(e) => {
      console.log(typeof e.target.value);
      if (e.target.value.length == 0) {
        setFilteredAuctions(aucs_list);
      } else {
        const filteredAuctions = aucs_list.filter(auction => (
          auction.AuctionName.toLowerCase().includes(e.target.value.toLowerCase()) || 
          auction.OrganizationName.toLowerCase().includes(e.target.value.toLowerCase())
          ));
        //console.log("go search!!!"+JSON.stringify(filteredAuctions))
        setFilteredAuctions(filteredAuctions)
      }
    }}
    label="Enter a keyword"
    variant="outlined"
    placeholder="Search your auction"
    size="small"
  />
  <IconButton type="submit" aria-label="search">
    <SearchIcon style={{ fill: "green" }} />
  </IconButton>
  </div>
);
}