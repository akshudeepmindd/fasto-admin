import React, { useEffect, useState, createRef } from "react";
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
import { createCity, getAllCities } from "../../../redux/actions/cityactions";
const City = () => {
  const [openModal, setOpenModal] = useState(false);
  const [city_name, setcity_name] = useState("");
  const [state_name, setState_name] = useState("");
  const [country, setcountry] = useState("");
  const [city_charges, setcity_charges] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  const { allcities } = useSelector((state) => state.city);
  useEffect(() => {
    async function getCities() {
      dispatch(getAllCities());
    }
    getCities();
  }, []);
  const handleSubmit = async () => {
    let params = {
      city_name,
      state_name,
      country,
      city_charges,
    };
    const res = await aa(createCity(params));
    if (res.is_success == true) {
      setOpenModal(false);
    }
    setMessage(res.message);
    setToast(!toast);
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>City</h3>
        <div onClick={() => setOpenModal(!openModal)}>
          <i class="fas fa-plus-square"></i>
        </div>
      </div>
      <table className="table w-100">
        <thead>
          <tr>
            <th>City Name </th>
            <th>State Name </th>
            <th>Country</th>
            <th>City Charges </th>
          </tr>
        </thead>
        <tbody>
          {allcities &&
            allcities.map((city) => (
              <tr>
                <td className="text-muted">{city.city_name}</td>
                <td className="font-weight-bold">{city.state_name}</td>
                <td>{city.country}</td>
                <td className="text-left">{city.city_charges}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <CToaster>
        <CToast show={toast} autohide={2000}>
          <CToastBody>{message}</CToastBody>
        </CToast>
      </CToaster>
      <Modal open={openModal} close={() => setOpenModal(!openModal)}>
        <>
          <h3>Add City</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                <CLabel htmlFor="city_name">City</CLabel>
                <CInput
                  type="text"
                  id="city_name"
                  name="city_name"
                  placeholder="Enter CityName.."
                  onChange={(e) => setcity_name(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your City
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="state_name">State Name</CLabel>
                <CInput
                  type="text"
                  id="state_name"
                  name="state_name"
                  placeholder="Enter State Name.."
                  onChange={(e) => setState_name(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your State Name
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Country</CLabel>
                <CInput
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter Country.."
                  onChange={(e) => setcountry(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your Country
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="city_charges">City Charges</CLabel>
                <CInput
                  type="text"
                  id="city_charges"
                  name="city_charges"
                  placeholder="Enter City Charges.."
                  onChange={(e) => setcity_charges(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your City Charges
                </CFormText>
              </CFormGroup>
              <div style={{ textAlign: "center" }}>''
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

export default City;
