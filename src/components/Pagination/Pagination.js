import { useState } from "react";
import "./Pagination.css";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
const Pagination = ({ setOffset, offset, limit, count }) => {
  let pages = Math.round(count / limit);
  let [page, setPage] = useState(1);

  const toPrev = (e) => {
    let newOff = offset - limit;
    setPage(page - 1);
    setOffset(newOff);
  };

  const toNext = (e) => {
    let newOff = offset + limit;
    setPage(page + 1);
    setOffset(newOff);
  };

  return (
    <div className="pages-container">
      <button
        type="button"
        className="btnpag"
        disabled={page == 1}
        onClick={toPrev}
      >
        <span role="img" aria-label="prev arrow">
          <ArrowCircleLeftSharpIcon style={{ color: "#bde1fc" }} />
        </span>
      </button>
      <h4 className="numpage">
        {page} To {pages}
      </h4>
      <button type="button" className="btnpag" onClick={toNext}>
        <span role="img" aria-label="next arrow">
          <ArrowCircleRightSharpIcon style={{ color: "#bde1fc" }} />
        </span>
      </button>
    </div>
  );
};

export default Pagination;
