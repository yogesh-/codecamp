import "./topbar.css";
import { useState } from "react";

export const Topbar = ({ func }) => {
  const [currentBtn, setCurrentBtn] = useState("all");
  const filterBgHandler = (e) => {
    let filterBtn = e.target.name;
    console.log(filterBtn);
    setCurrentBtn(filterBtn);
  };

  return (
    <>
      <div className="top-bar">
        {/* <button className="btn-top-bar" onClick={() => func("all")}> */}
        <button
          name="all"
          className={"btn-top-bar" + (currentBtn === "all" ? " btn-bg" : "")}
          onClick={(e) => {
            func("all");
            filterBgHandler(e);
          }}
        >
          All
        </button>
        <button
          name="html"
          className={"btn-top-bar" + (currentBtn === "html" ? " btn-bg" : "")}
          onClick={(e) => {
            func("html");
            filterBgHandler(e);
          }}
        >
          HTML
        </button>
        <button
          name="css"
          className={"btn-top-bar" + (currentBtn === "css" ? " btn-bg" : "")}
          onClick={(e) => {
            func("css");
            filterBgHandler(e);
          }}
        >
          CSS
        </button>
        <button
          name="javascript"
          className={
            "btn-top-bar" + (currentBtn === "javascript" ? " btn-bg" : "")
          }
          onClick={(e) => {
            func("javascript");
            filterBgHandler(e);
          }}
        >
          JavaScript
        </button>
        <button
          name="react"
          className={"btn-top-bar" + (currentBtn === "react" ? " btn-bg" : "")}
          onClick={(e) => {
            func("react");
            filterBgHandler(e);
          }}
        >
          React
        </button>
      </div>
    </>
  );
};
