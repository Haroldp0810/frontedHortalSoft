import "./Login.scss";
import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import { Apiurl } from "../../Services/routes";

import axios from "axios";

//import React, { Component } from 'react';
//import { render } from "@testing-library/react";

class Login extends React.Component {


  constructor(props){
    super(props);
  }

  

  state = {
    form: {
      name: "",
      password: "",
    },
    error: false,
    errorMsg: "",
  };

  manejadorCambios = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  manejadorBoton = () => {
    let url = Apiurl + "/authenticate";
    axios.post(url, this.state.form)
    .then((response) => {
      if(response){
        localStorage.setItem("token", response.data.token);
        const {history} =this.props
        history.push("/home")
      }else{
        this.setState({
          error:true,
          errorMsg: "mrd"
        })
      }
        console.log(response)
    });
    
    console.log(url);
  };

  render() {
    return (
      <React.Fragment>
        <MDBContainer fluid className="p-3 my-5 h-custom">
          <MDBRow>
            <MDBCol col="10" md="6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </MDBCol>

            <MDBCol col="4" md="6">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <p className="lead fw-normal mb-0 me-3">Inicia con</p>

                <MDBBtn floating size="md" tag="a" className="me-2">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn floating size="md" tag="a" className="me-2">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn floating size="md" tag="a" className="me-2">
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Ó</p>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="Usuario"
                id="formControlLg"
                type="email"
                name="name"
                size="lg"
                onChange={this.manejadorCambios}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Contraseña"
                id="formControlLg"
                type="password"
                name="password"
                size="lg"
                onChange={this.manejadorCambios}
              />

              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Recordar Usuario"
                />
                <a href="!#">¿Olvidaste tu contraseña?</a>
              </div>

            {this.state.error === true && 
              <div className="alert alert-danger" role="alert">
                  {this.state.errorMsg}
              </div>
            }

              <div className="text-center text-md-start mt-4 pt-2">
                <MDBBtn
                  className="mb-0 px-5"
                  size="lg"
                  onClick={this.manejadorBoton}
                >
                  Ingresar
                </MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  ¿No tienes cuenta aun?{" "}
                  <a href="#!" className="link-danger">
                    Registrate
                  </a>
                </p>
              </div>
            </MDBCol>
          </MDBRow>

          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div className="text-white mb-3 mb-md-0">
              Copyright © 2022. All rights reserved.
            </div>

            <div>
              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "white" }}
              >
                <MDBIcon fab icon="facebook-f" size="md" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "white" }}
              >
                <MDBIcon fab icon="twitter" size="md" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "white" }}
              >
                <MDBIcon fab icon="google" size="md" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="mx-3"
                style={{ color: "white" }}
              >
                <MDBIcon fab icon="linkedin-in" size="md" />
              </MDBBtn>
            </div>
          </div>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default Login;
