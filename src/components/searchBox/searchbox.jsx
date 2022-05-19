import TextField from "@mui/material/TextField";

export const Search = ({ setSearchQuery }) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
  </form>
);
