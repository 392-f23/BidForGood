import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function formatCustomDate(inputDateString) {
  const inputDate = new Date(inputDateString);

  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(inputDate);

  return formattedDate;
}

export const BidHistory = ({ currentItem }) => {
  const bids = currentItem.Bids;

  return (
    <TableContainer>
      <Table sx={{ maxWidth: "280px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bid</TableCell>
            <TableCell>Bid Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bids ? (
            bids.map((bid) => (
              <TableRow key={bid.id}>
                <TableCell>${bid.bidAmount}</TableCell>
                <TableCell>{formatCustomDate(bid.time)}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow></TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
