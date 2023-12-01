import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { auctionItemData } from "../../data/auctionItems";

export const SearchBar = ({ setFilteredAuctions, aucs_list }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          console.log(typeof e.target.value);
          if (e.target.value.length == 0) {
            setFilteredAuctions(aucs_list);
          } else {
            const filteredAuctions = aucs_list.filter(
              (auction) =>
                auction.AuctionName.toLowerCase().includes(
                  e.target.value.toLowerCase()
                ) ||
                auction.OrganizationName.toLowerCase().includes(
                  e.target.value.toLowerCase()
                )
            );
            setFilteredAuctions(filteredAuctions);
          }
        }}
        label="Search auctions"
        variant="outlined"
        placeholder="Search auctions"
        size="small"
        style={{ width: 250 }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "green" }} />
      </IconButton>
    </div>
  );
};
