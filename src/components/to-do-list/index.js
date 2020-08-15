import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Details from "../details/index";

import "./style.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todolistData: [],
      itemDetails: [],
      showDetails: false,
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/todos";

    axios.get(url).then((res) => {
      console.log("response data", res);
      this.state.todolistData = res.data;
      this.setState({
        todolistData: res.data,
      });
    });
  }

  renderDetails = (item) => {
    console.log("current item", item);
    this.setState({
      showDetails: true,
      itemDetails: item,
    });
  };

  render() {
    return (
      <>
        <Table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {this.state.todolistData.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              {item.completed ? <td>Completed</td> : <td>Incomplete</td>}
              <td onClick={() => this.renderDetails(item)}>
                <a>view</a>
              </td>
            </tr>
          ))}
        </Table>
        {this.state.showDetails && <Details info={this.state.itemDetails} />}
      </>
    );
  }
}

export default ToDoList;
