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
  creategoodtype,
  getAllgoodtypes,
  updategoodtype,
  deletegoodtype,
} from "../../../redux/actions/goodtypeactions";
const GoodType = () => {
  const [openModal, setOpenModal] = useState(false);
  const [category_name, setcategory_name] = useState("");
  const [category_image, setcategory_image] = useState("");
  const [_id, set_id] = useState("");
  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  const { allgoods } = useSelector((state) => state.category);
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
    if (res.isSuccess == true) {
      setOpenModal(false);
      dispatch(getAllgoodtypes());
    }
    setMessage(res.message);
    setToast(!toast);
  };
  const handleEditSubmit = async () => {
    let params = {
      category_name,
      category_image,
    };
    const res = await dispatch(updategoodtype(_id, params));
    if (res.is_success == true) {
      setOpenModal(false);
      dispatch(getAllgoodtypes());
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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allgoods &&
            allgoods.map((good) => (
              <tr>
                <td className="text-muted">{good.category_name}</td>
                <td className="font-weight-bold">{good.category_image}</td>
                <td className="text-center">
                  <i
                    class="fas fa-pen"
                    style={{ color: "blue" }}
                    onClick={() =>
                      setTimeout(() => {
                        setEdit(true);
                        set_id(good._id);
                        setcategory_name(good.category_name);
                        setcategory_image(good.category_image);

                        setOpenModal(!openModal);
                      }, 1000)
                    }
                  ></i>
                </td>
                <td className="text-center">
                  <i
                    class="fas fa-trash"
                    style={{ color: "red" }}
                    onClick={() => dispatch(deletegoodtype(good._id))}
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal open={openModal} close={() => setOpenModal(!openModal)}>
        <>
          <h3>Good Type</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                <CLabel htmlFor="category_name">Category Name</CLabel>
                <CInput
                  type="text"
                  id="category_name"
                  name="category_name"
                  placeholder="Enter Category Name.."
                  value={category_name}
                  onChange={(e) => setcategory_name(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your City
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="category_image">Category Image</CLabel>
                <CInput
                  type="text"
                  id="category_image"
                  name="category_image"
                  value={category_image}
                  onChange={(e) => setcategory_image(e.target.value)}
                  placeholder="Enter State Name.."
                />
                <CFormText className="help-block">
                  Please enter your State Name
                </CFormText>
              </CFormGroup>

              <div style={{ textAlign: "center" }}>
                <CButton
                  color="primary"
                  onClick={edit ? handleEditSubmit : handleSubmit}
                >
                  {edit ? "Update Good Type" : "Create Good Type"}
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
