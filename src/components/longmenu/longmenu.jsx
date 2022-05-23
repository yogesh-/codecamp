import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./longmenu.css";
import { useDispatch } from "react-redux";
import { addToLikes } from "../../features/likes/likes-slice";

const ITEM_HEIGHT = 48;

export const LongMenu = (props) => {
  const dispatch = useDispatch();

  const options = [
    { name: "Add to Likes", action: () => dispatch(addToLikes(props.video)) },
    { name: "Add to Watch Later", action: () => console.log("qqq2") },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const just = (option) => {
    option.action();
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onKeyUp={options.action}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.name}
            selected={option === "Pyxis"}
            onClick={() => just(option)}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
