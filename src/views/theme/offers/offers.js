import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import { rgbToHex } from "@coreui/utils";
import DocsLink from "../../../reusable/DocsLink";
import Modal from "../../../components/common/Modal";
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
const Offer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [offer_name, setoffer_name] = useState("");
  const [code, setcode] = useState("");
  const [discount, setdiscount] = useState("");
  const [valid_to, setvalid_to] = useState("");
  const [Valid_from, setValid_from] = useState("");

  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Offers</h3>
        <div onClick={() => setOpenModal(!openModal)}>
          <i class="fas fa-plus-square"></i>
        </div>
      </div>
      <table className="table w-100">
        <thead>
          <tr>
            <th>Offer Name </th>
            <th> Code </th>
            <th>Discount</th>
            <th>Valid to </th>
            <th>Valid From</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-muted">30% off </td>
            <td className="font-weight-bold"> Offer30% </td>
            <td> 30%</td>

            <td className="text-center">dd-mm-yyyy</td>
            <td className="text-center">dd-mm-yyyy</td>
          </tr>
          <tr>
            <td className="text-muted">30% off </td>
            <td className="font-weight-bold"> Offer30% </td>
            <td> 30%</td>

            <td className="text-center">dd-mm-yyyy</td>
            <td className="text-center">dd-mm-yyyy</td>
          </tr>
          <tr>
            <td className="text-muted">30% off </td>
            <td className="font-weight-bold"> Offer30% </td>
            <td> 30%</td>

            <td className="text-center">dd-mm-yyyy</td>
            <td className="text-center">dd-mm-yyyy</td>
          </tr>
        </tbody>
      </table>
      <Modal open={openModal} close={() => setOpenModal(!openModal)}>
        <>
          <h3>Offers</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                <CLabel htmlFor="city_name">Offers</CLabel>
                <CInput
                  type="text"
                  id="city_name"
                  name="city_name"
                  placeholder="Enter CityName.."
                />
                <CFormText className="help-block">
                  Please enter your City
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="state_name">Code</CLabel>
                <CInput
                  type="text"
                  id="state_name"
                  name="state_name"
                  placeholder="Enter State Name.."
                />
                <CFormText className="help-block">
                  Please enter your State Name
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Discount $Value</CLabel>
                <CInput
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter Country.."
                />
                <CFormText className="help-block">
                  Please enter your Country
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="city_charges">Valid to</CLabel>
                <CInput
                  type="text"
                  id="city_charges"
                  name="city_charges"
                  placeholder="Enter City Charges.."
                />
                <CFormText className="help-block">
                  Please enter your City Charges
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="city_charges">Valid From</CLabel>
                <CInput
                  type="text"
                  id="city_charges"
                  name="city_charges"
                  placeholder="Enter City Charges.."
                />
                <CFormText className="help-block">
                  Please enter your City Charges
                </CFormText>
              </CFormGroup>
              <div style={{ textAlign: "center" }}>
                <CButton color="primary" onClick>
                  Create City
                </CButton>
              </div>
            </CCol>
          </CRow>
        </>
      </Modal>
    </>
  );
};

export default Offer;
