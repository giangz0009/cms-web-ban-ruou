import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "1.6rem",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "36ch",
      },
    },
  },
}));

type SearchInputProps = {
  value: string;
  onSearch: (newValue: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, onSearch }) => {
  return (
    <div className="flex items-center justify-center border border-[rgba(0, 0, 0, 0.8)] rounded-xl">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          type="search"
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />
      </Search>
    </div>
  );
};

export default SearchInput;
