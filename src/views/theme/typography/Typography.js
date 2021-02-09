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

import {
  vehicalList,
  addVehical,
  updateSingleVehiclel,
  deleteVehicle,
} from "../../../redux/actions/vehicalAction";

const Vehicle = () => {
  const { vehicalslist, singleVehicle } = useSelector(
    (state) => state.vehicals
  );
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState({});
  const [vehicle_Name, setvehicle_Name] = useState("");
  const [edit, setEdit] = useState(false);
  const [capacity, setcapacity] = useState("");
  const [size, setsize] = useState("");
  const [about_vehicle, setabout_vehicle] = useState("");
  const [km, setkm] = useState("");
  const [_id, set_id] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getVehicals() {
      dispatch(vehicalList());
      if (edit) {
        setEditData(singleVehicle);
      }
    }
    getVehicals();
  }, []);
  console.log(vehicle_Name, "nMamamama");
  const handleSubmit = async () => {
    let formData = new FormData();
    // formData.append("vehical_image", {
    //   uri: path,
    //   name: `photo.${fileExtension}`,
    //   type: `image/${fileExtension}`,
    // });
    formData.append("vehical_name", vehicle_Name);
    formData.append("vehical_capacity", capacity);
    formData.append("vehical_size", size);
    formData.append("about_vehical", about_vehicle);
    formData.append("vehical_KM", km);
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
  const UpdateSubmit = async () => {
    let formData = new FormData();
    // formData.append("vehical_image", {
    //   uri: path,
    //   name: `photo.${fileExtension}`,
    //   type: `image/${fileExtension}`,
    // });
    formData.append("vehical_name", vehicle_Name);
    formData.append("vehical_capacity", capacity);
    formData.append("vehical_size", size);
    formData.append("about_vehical", about_vehicle);
    formData.append("vehical_KM", km);
    // let params = {
    //   vehicle_Name,
    //   capacity,
    //   size,
    //   about_vehicle,
    //   km,
    // };
    const res = await dispatch(updateSingleVehiclel(_id, formData));
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
            <th>Edit</th>
            <th>Delete</th>
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
                <td className="text-center">
                  <i
                    class="fas fa-pen"
                    style={{ color: "blue" }}
                    onClick={() =>
                      setTimeout(() => {
                        setEdit(true);
                        set_id(item._id);
                        setvehicle_Name(item.vehical_name);
                        setcapacity(item.vehical_capacity);
                        setabout_vehicle(item.about_vehical);
                        setkm(item.vehical_KM);
                        setsize(item.vehical_size);
                        setOpenModal(!openModal);
                      }, 1000)
                    }
                  ></i>
                </td>
                <td className="text-center">
                  <i
                    class="fas fa-trash"
                    style={{ color: "red" }}
                    onClick={() => dispatch(deleteVehicle(item._id))}
                  ></i>
                </td>
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
                <CLabel htmlFor="vehical_name">Vehicle Name</CLabel>
                <CInput
                  type="text"
                  id="vehical_name"
                  name="vehical_name"
                  value={vehicle_Name}
                  placeholder=""
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
                  value={capacity}
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
                  value={size}
                  placeholder="Enter Size of Vehicle.."
                  onChange={(e) => setsize(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your Country
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="vehicle_about">About Vehicle</CLabel>
                <CInput
                  type="text"
                  id="vehicle_about"
                  name="vehicle_about"
                  value={about_vehicle}
                  placeholder="Enter About Vehicle.."
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
                  value={km}
                  placeholder="Enter Vehicel KM.."
                  onChange={(e) => setkm(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your City Charges
                </CFormText>
              </CFormGroup>
              <div style={{ textAlign: "center" }}>
                <CButton
                  color="primary"
                  onClick={edit ? UpdateSubmit : handleSubmit}
                >
                  {edit ? "Update Vehicle" : "Create Vehicle"}
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
