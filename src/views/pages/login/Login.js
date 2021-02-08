import React from "react";
import { Link } from "react-router-dom";
import {
  CRow,
  CCol,
  CLabel,
  CInput,
  CFormGroup,
  CFormText,
  CToaster,
  CToastBody,
  CToast,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CContainer,
  CForm,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = () => {
  return (
    <CContainer className="loginform">
      <h3 className="mb-3">Login Form</h3>
      <CForm action="" method="post" className="form-add">
        <CFormGroup>
          <CLabel htmlFor="nf-email">Email</CLabel>
          <CInput
            type="email"
            id="nf-email"
            name="nf-email"
            placeholder="Enter Email.."
            autoComplete="email"
          />
          <CFormText className="help-block">Please enter your email</CFormText>
        </CFormGroup>
        <CFormGroup>
          <CLabel htmlFor="nf-password">Password</CLabel>
          <CInput
            type="password"
            id="nf-password"
            name="nf-password"
            placeholder="Enter Password.."
            autoComplete="current-password"
          />
          <CFormText className="help-block">
            Please enter your password
          </CFormText>
        </CFormGroup>
        <CButton color="primary" onClick>
          Submit
        </CButton>
      </CForm>
    </CContainer>
  );
};

export default Login;
