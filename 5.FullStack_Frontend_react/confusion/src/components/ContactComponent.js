import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import FormFeedback from "reactstrap/es/FormFeedback";

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contactType: 'Tel.',
      message: '',
      touched: {
        firstname: '',
        lastname: '',
        telnum: '',
        email: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {

    const {target} = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const {name} = target;

    this.setState({
      [name]: value
    });
  };


  validate = (firstname, lastname, telnum, email) => {

    const {touched} = this.state;
    const errors = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: ''
    };

    if (touched.firstname && firstname.length < 3)
      errors.firstname = 'First Name should be >= 3 characters';
    else if (touched.firstname && firstname.length > 10)
      errors.firstname = 'First Name should be <= 10 characters';

    if (touched.lastname && lastname.length < 3)
      errors.lastname = 'Last Name should be >= 3 characters';
    else if (touched.lastname && lastname.length > 10)
      errors.lastname = 'Last Name should be <= 10 characters';

    const reg = /^\d+$/;
    if (touched.telnum && !reg.test(telnum))
      errors.telnum = 'Tel. Number should contain only numbers';

    if (touched.email && email.split('').filter(letter => letter === '@').length !== 1)
      errors.email = 'Email should contain a @';

    return errors;
  };

  handleBlur = (field) => (event) => {
    const {touched} = this.state;
    this.setState({
      touched: {...touched, [field]: true}
    });
  };

  handleSubmit(event) {

    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(`Current State is: ${JSON.stringify(this.state)}`);
    // eslint-disable-next-line no-undef
    alert(`Current State is: ${JSON.stringify(this.state)}`);
  }

  render() {

    const {
      firstname,
      lastname,
      telnum,
      email,
      agree,
      contactType,
      message
    } = this.state;

    const errors = this.validate(firstname, lastname, telnum, email);
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr/>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br/>
              Clear Water Bay, Kowloon
              <br/>
              HONG KONG
              <br/>
              <i className="fa fa-phone"/>: +852 1234 5678
              <br/>
              <i className="fa fa-fax"/>: +852 8765 4321
              <br/>
              <i className="fa fa-envelope"/>:{' '}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a role="button" className="btn btn-primary" href="tel:+85212345678">
                <i className="fa fa-phone"/> Call
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a role="button" className="btn btn-info" href=''>
                <i className="fa fa-skype"/> Skype
              </a>
              <a role="button" className="btn btn-success" href="mailto:confusion@food.net">
                <i className="fa fa-envelope-o"/> Email
              </a>
            </div>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor='firstname' md={2}>First Name</Label>
                <Col md={10}>
                  <Input type="text" id="firstname"
                         placeholder="First Name"
                         name='firstname'
                         valid={errors.firstname === '' && firstname !== ''}
                         invalid={errors.firstname !== ''}
                         onBlur={this.handleBlur('firstname')}
                         value={firstname}
                         onChange={this.handleInputChange}/>
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='lastname' md={2}>Last Name</Label>
                <Col md={10}>
                  <Input type="text" id="lastname" name="lastname"
                         placeholder="Last Name"
                         value={lastname}
                         valid={errors.lastname === '' && lastname !== ''}
                         invalid={errors.lastname !== ''}
                         onBlur={this.handleBlur('lastname')}
                         onChange={this.handleInputChange}/>
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                <Col md={10}>
                  <Input type="tel" id="telnum" name="telnum"
                         placeholder="Tel. number"
                         value={telnum}
                         valid={errors.telnum === '' && telnum !== ''}
                         invalid={errors.telnum !== ''}
                         onBlur={this.handleBlur('telnum')}
                         onChange={this.handleInputChange}/>
                  <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>Email</Label>
                <Col md={10}>
                  <Input type="email" id="email" name="email"
                         placeholder="Email"
                         value={email}
                         valid={errors.email === ''  && email !== ''}
                         invalid={errors.email !== ''}
                         onBlur={this.handleBlur('email')}
                         onChange={this.handleInputChange} />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{size: 6, offset: 2}}>
                  <FormGroup check>
                    <Label check>
                      <Input type='checkbox' name="agree"
                             checked={agree}
                             onChange={this.handleInputChange}
                      />

                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{size: 3, offset: 1}}>
                  <Input type="select" name="contactType"
                         value={contactType}
                         onChange={this.handleInputChange}>
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>Your Feedback</Label>
                <Col md={10}>
                  <Input type="textarea" id="message" name="message"
                         rows="12"
                         value={message}
                         onChange={this.handleInputChange}/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{size: 10, offset: 2}}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }

}

export default Contact;
