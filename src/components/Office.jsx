import React, { Component } from "react";
import "./office.styles.css";
import {
  Card,
  CardImg,
  CardTitle,
  Button,
  CardBody,
  CardText,
} from "reactstrap";

class Office extends Component {
  renderAllEmp = ({ employees, Delete }) => {
    return employees.map((emp) => {
      return (
        <div key={emp.id}>
          <Card className="card-container">
            <CardImg src={emp.picture} alt={emp.name} className="profile-pic" />
            <CardBody>
              <CardTitle>{emp.name}</CardTitle>
              <CardText>{emp.department}</CardText>
              <Button color="danger" onClick={() => Delete(emp)}>
                {" "}
                مسح{" "}
              </Button>
            </CardBody>
          </Card>
        </div>
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        <br />
        <div className="card-list">{this.renderAllEmp(this.props)}</div>
      </React.Fragment>
    );
  }
}

export default Office;
