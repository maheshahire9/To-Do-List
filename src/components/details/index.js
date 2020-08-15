import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "./style.css";

function Details(props) {
  const { completed, id, title, userId } = props.info;
  return (
    <div className="details">
      <h3>Details of user: {id}</h3>
      <h4>id : {id}</h4>
      <h4>title : {title}</h4>
      {completed ? <h4>Status : Completed</h4> : <h4>Status : Incomplete</h4>}
      <h4>suggestion : </h4>
      <h4>To Do List 1 : </h4>
      <h4>To Do List 2 : </h4>
      <h4>To Do List 3 : </h4>
    </div>
  );
}

export default Details;
