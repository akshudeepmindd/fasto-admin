import { react } from "react";
import {
    CRow,
    CCol,
    CLabel,
    CInput,
    CFormGroup,
    CFormText,
    CButton,
    CToaster,
    CToastBody,
    CToast,
  } from "@coreui/react";
export default () => {
  return (
    <CContainer fluid>
      <CRow>
        <CCol sm="12">
          <CForm action="" method="post">
            <CFormGroup>
              <CLabel htmlFor="nf-email">Email</CLabel>
              <CInput
                type="email"
                id="nf-email"
                name="nf-email"
                placeholder="Enter Email.."
                autoComplete="email"
              />
              <CFormText className="help-block">
                Please enter your email
              </CFormText>
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
            <CButton color="primary" onClick={handleSubmit}>
                  Create City
                </CButton>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  );
};
