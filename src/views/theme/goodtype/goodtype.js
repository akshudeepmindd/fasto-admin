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

import { useDispatch, useSelector } from "react-redux";
import {
  creategoodtype,getAllgoodtypes
} from "../../../redux/actions/goodtypeactions";
const GoodType = () => {
  const [openModal, setOpenModal] = useState(false);
  const [category_name, setcategory_name] = useState("");
  const [category_image, setcategory_image] = useState("");

  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  const { allgoodtypes } = useSelector((state) => state.city);
  useEffect(() => {
    async function getgoodtypes() {
      dispatch(getAllgoodtypes());
    }
    getgoodtypes();
  }, []);
  const handleSubmit = async () => {
    let params = {
      category_name,
      category_image,
    };
    const res = await dispatch(creategoodtype(params));
    if (res.is_success == true) {
      setOpenModal(false);
    }
    setMessage(res.message);
    setToast(!toast);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Good Type</h3>
        <div onClick={() => setOpenModal(!openModal)}>
          <i class="fas fa-plus-square"></i>
        </div>
      </div>
      <table className="table w-100">
        <thead>
          <tr>
            <th>Category Name </th>
            <th>Category Image </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-muted">Timber</td>
            <td className="font-weight-bold">img</td>
          </tr>
          <tr>
            <td className="text-muted">Plywood </td>
            <td className="font-weight-bold">img</td>
          </tr>
          <tr>
            <td className="text-muted">Laminate </td>
            <td className="font-weight-bold">img</td>
          </tr>
        </tbody>
      </table>
      <Modal open={openModal} close={() => setOpenModal(!openModal)}>
        <>
          <h3>Good Type</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                <CLabel htmlFor="city_name">Category Name</CLabel>
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
                <CLabel htmlFor="state_name">Category Image</CLabel>
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

export default GoodType;
