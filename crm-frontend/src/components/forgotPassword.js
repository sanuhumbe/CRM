import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ForgotPassForm = ({
  handleOnchange,
  handleSubmit,
  formSwitcher,
  email,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className={"text-info text-center"}>Reset Password</h1>
          <hr />
          <Form autoComplete={"off"} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnchange}
                placeholder="Enter Email"
                // required
              />
            </Form.Group>

            <Button type="submit">Reset </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("login")}>
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

ForgotPassForm.propTypes = {
  handleOnchange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
};
