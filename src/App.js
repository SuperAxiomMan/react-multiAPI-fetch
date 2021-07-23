import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Userlist from "./components/Userlist";

class App extends Component {
  state = {
    users: [],
    formations: [],
  };

  fetchdata = () => {
    const getUsers = axios.get(
      "https://node-workshop-tpk.herokuapp.com/api/v1/users"
    );
    const getFormation = axios.get(
      "https://node-workshop-tpk.herokuapp.com/api/v1/formations"
    );

    axios.all([getUsers, getFormation]).then(
      axios.spread((...allData) => {
        const allDataUser = allData[0];
        const allDataFormation = allData[1];
        // console.log(allDataUser);
        this.setState({ users: allDataUser.data });
        this.setState({ formations: allDataFormation.data.formation });
        // console.log(this.state.users);
        // console.log(this.state.formations);
      })
    );
  };

  componentDidMount() {
    this.fetchdata();
  }

  render() {
    return <Userlist dataFull={this.state} />;
  }
}

export default App;
