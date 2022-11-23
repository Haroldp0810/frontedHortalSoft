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
import { withRouter } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import { Apiurl } from "../../Services/routes";

import axios from "axios";
import imagen from "../../assets/SVG/LogoCompleto.png"

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
    //console.log(this.state.form);
  };

  

  manejadorBoton = () => {
    let url = Apiurl + "/authenticate";
    axios.post(url, this.state.form)
    .then((response) => {
      if(response){
        localStorage.setItem("token", response.data.token);
        const {history} =this.props
        history.push("/carrito")
        
      }else{
        this.setState({
          error:true,
          errorMsg: "mrd"
        })
      }
        console.log(response)
    });
    
    console.log("estoy aqui", url);
  };

  render() {
    return (
      <React.Fragment>
        <MDBContainer fluid className="p-3 my-5 h-custom">
          <MDBRow>
            <MDBCol col="10" md="6" >
              <center><img 
                src={imagen} width="300"
                className="img-fluid"
                alt="Sample image"
              /></center>
            </MDBCol>

            <MDBCol col="4" md="6">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <p className="lead fw-normal mb-0 me-3">Inicia con</p>

                <MDBBtn floating size="md" tag="a" className="me-2" color="black">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn floating size="md" tag="a" className="me-2" color="black" >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn floating size="md" tag="a" className="me-2" color="black">
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Ó</p>
              </div>

              <div className="fomrs">
              <MDBInput
                btnColor="black"
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
              </div>
              

              <div className="checkbox">
              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Recordar Usuario"
                />
                <a href="!#" >¿Olvidaste tu contraseña?</a>
              </div>
              </div>

            {this.state.error === true && 
              <div className="alert alert-danger" role="alert">
                  {this.state.errorMsg}
              </div>
            }
              <div>

                <div className="ingresar">
              <div className="text-center text-md-start mt-4 pt-2 text-align: center !important;">
                
                <MDBBtn
                  className="mb-0 px-5"
                  size="lg"
                  onClick={this.manejadorBoton}
                  color="black"
                >
                  Ingresar
                  {/* <!-- <a href="/home">Ingresar </a> --> */}
                </MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  ¿No tienes cuenta aun?{" "}
                  <a href="/Register" className="link-danger">
                    Registrate
                  </a>
                </p>
              </div>
              </div>
              </div>
            </MDBCol>
          </MDBRow>

        </MDBContainer>
      </React.Fragment>
    );
  }
}

export default  withRouter (Login);
