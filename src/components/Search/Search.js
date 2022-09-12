import "./Search.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Search = ({ setSearch }) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search Name"
          color="warning"
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
        />
      </Box>
    </>
  );
};

export default Search;
