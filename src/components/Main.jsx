import React, { Component } from "react";
import Office from "./Office";
import Home from "./Home";
import Header from "./Header";
import { Footer } from "./Footer";
import { Route, Switch, Redirect } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  handleDelete = (employee) => {
    const filteredEmp = this.state.employees.filter(
      (e) => e.id !== employee.id
    );
    this.setState({
      employees: filteredEmp,
    });
  };
  componentDidMount() {
    fetch("https://dtcdashboard.pythonanywhere.com/api/v1/employee/")
      .then((res) => res.json())
      .then((employee) => this.setState({ employees: employee }));
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route
            path="/office"
            component={() => (
              <Office
                employees={this.state.employees}
                Delete={this.handleDelete}
              />
            )}
          />
          <Route exact path="/" component={() => <Home />} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
