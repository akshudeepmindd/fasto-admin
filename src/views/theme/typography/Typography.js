import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import { rgbToHex } from "@coreui/utils";
import DocsLink from "../../../reusable/DocsLink";
import Modal from "../../../components/common/Modal";
import { useDispatch, useSelector } from "react-redux";

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
import { vehicalList, addVehical } from "../../../redux/actions/vehicalAction";

const Vehicle = () => {
  const [openModal, setOpenModal] = useState(false);
  const [vehicle_Name, setvehicle_Name] = useState("");
  const [capacity, setcapacity] = useState("");
  const [size, setsize] = useState("");
  const [about_vehicle, setabout_vehicle] = useState("");
  const [km, setkm] = useState("");

  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);

  const dispatch = useDispatch();
  const { vehicalslist } = useSelector((state) => state.vehicals);
  useEffect(() => {
    async function getVehicals() {
      dispatch(vehicalList());
    }
    getVehicals();
  }, []);

  const handleSubmit = async () => {
    let formData = new FormData();
    // formData.append("vehical_image", {
    //   uri: path,
    //   name: `photo.${fileExtension}`,
    //   type: `image/${fileExtension}`,
    // });
    formData.append("vehicle_Name", vehicle_Name);
    formData.append("capacity", capacity);
    formData.append("size", size);
    formData.append("about_vehicle", about_vehicle);
    formData.append("km", km);
    // let params = {
    //   vehicle_Name,
    //   capacity,
    //   size,
    //   about_vehicle,
    //   km,
    // };
    const res = await dispatch(addVehical(formData));
    if (res.is_success == true) {
      setOpenModal(false);
    }
    setMessage(res.message);
    setToast(!toast);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Vehicle Type</h3>
        <div onClick={() => setOpenModal(!openModal)}>
          <i class="fas fa-plus-square"></i>
        </div>
      </div>
      <table className="table w-100">
        <thead>
          <tr>
            <th>Vehicle Name </th>
            <th>Capacity </th>
            <th>Size </th>
            <th>About Vehicle </th>
            <th>KM</th>
          </tr>
        </thead>
        <tbody>
          {vehicalslist &&
            vehicalslist.map((item) => (
              <tr key={item._id}>
                <td className="text-muted">{item.vehical_name}</td>
                <td className="font-weight-bold">{item.vehical_capacity}</td>
                <td> {item.vehical_size}</td>
                <td className="text-center">{item.about_vehical}</td>
                <td className="text-center">{item.vehical_KM}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal open={openModal} close={() => setOpenModal(!openModal)}>
        <>
          <h3>Vehicle Type</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                <CLabel htmlFor="city_name">Vehicle Name</CLabel>
                <CInput
                  type="text"
                  id="city_name"
                  name="city_name"
                  placeholder="Enter CityName.."
                  onChange={(e) => setvehicle_Name(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your City
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="state_name">Capacity</CLabel>
                <CInput
                  type="text"
                  id="state_name"
                  name="state_name"
                  placeholder="Enter State Name.."
                  onChange={(e) => setcapacity(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your State Name
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Size</CLabel>
                <CInput
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter Country.."
                  onChange={(e) => setsize(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your Country
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="city_charges">About Vehicle</CLabel>
                <CInput
                  type="text"
                  id="city_charges"
                  name="city_charges"
                  placeholder="Enter City Charges.."
                  onChange={(e) => setabout_vehicle(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your City Charges
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="city_charges">Km</CLabel>
                <CInput
                  type="text"
                  id="city_charges"
                  name="city_charges"
                  placeholder="Enter City Charges.."
                  onChange={(e) => setkm(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your City Charges
                </CFormText>
              </CFormGroup>
              <div style={{ textAlign: "center" }}>
                <CButton color="primary" onClick={handleSubmit}>
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

export default Vehicle;
