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
const Refferals = () => {
  const [openModal, setOpenModal] = useState(false);
  const [s_no, sets_no] = useState("");
  const [discount_on_referrals, setdiscount_on_referrals] = useState("");
  const [message, setMessage] = useState("");

  const [toast, setToast] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Refferals</h3>
        <div onClick={() => setOpenModal(!openModal)}>
          <i class="fas fa-plus-square"></i>
        </div>
      </div>
      <table className="table w-100">
        <thead>
          <tr>
            <th>s.no</th>
            <th>Discount on referrals </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">#</td>
            <td className="">10%</td>
          </tr>
          <tr>
            <td className="">#</td>
            <td className="">10%</td>
          </tr>
          <tr>
            <td className="">#</td>
            <td className="">10%</td>
          </tr>
          <tr>
            <td className="">#</td>
            <td className="">10%</td>
          </tr>
        </tbody>
      </table>
      <Modal open={openModal} close={() => setOpenModal(!openModal)}>
        <>
          <h3>Refferals</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                <CLabel htmlFor="city_name">s.no</CLabel>
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
                <CLabel htmlFor="state_name">Discount on referrals</CLabel>
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

export default Refferals;
