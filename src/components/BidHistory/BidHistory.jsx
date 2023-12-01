import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const createData = (bidAmount, bidTime) => {
  return { bidAmount, bidTime };
};

export const BidHistory = ({ currentItem }) => {
  const bids = currentItem.Bids;

  return (
    <TableContainer>
      <Table sx={{ maxWidth: "300px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Bid Amount</TableCell>
            <TableCell>Bid Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bids ? (
            bids.map((bid) => (
              <TableRow key={bid.userID}>
                <TableCell>${bid.bidAmount}</TableCell>
                <TableCell>{bid.time}</TableCell>
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
