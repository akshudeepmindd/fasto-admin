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
import {
  createCity,
  getAllCities,
  updateCity,
  deleteCity,
} from "../../../redux/actions/cityactions";
const City = () => {
  const [flage, setFlage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [city_name, setcity_name] = useState("");
  const [Edit, setEdit] = useState(false);
  const [_id, set_id] = useState("");
  const [state_name, setState_name] = useState("");
  const [country, setcountry] = useState("");
  const [city_class, setcity_class] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  const { allcities } = useSelector((state) => state.city);
  useEffect(() => {
    async function getCities() {
      dispatch(getAllCities());
    }
    getCities();
  }, [flage]);
  console.log(allcities, "All");

  const updatehandleSubmit = async () => {
    let params = {
      _id,
      city_name,
      state_name,
      country,
      city_class,
    };
    console.log(params, "update");
    const res = await dispatch(updateCity(params));
    if (res.is_success == true) {
      setOpenModal(false);
      setFlage(!flage);
    }
    setMessage(res.message);
    setToast(!toast);
  };

  const handleSubmit = async () => {
    let params = {
      city_name,
      state_name,
      country,
      city_class,
    };
    console.log(params);
    const res = await dispatch(createCity(params));
    if (res.is_success == true) {
      setOpenModal(false);
      setFlage(!flage);
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
            <th>City Class</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allcities &&
            allcities.map((city) => (
              <tr>
                <td className="text-muted">{city.city_name}</td>
                <td className="font-weight-bold">{city.state_name}</td>
                <td className="">{city.country}</td>
                <td>{city.city_class}</td>
                <td className="text-center">
                  <i
                    class="fas fa-pen"
                    style={{ color: "blue" }}
                    onClick={() =>
                      setTimeout(() => {
                        setEdit(true);
                        set_id(city._id);
                        setEdit(!Edit);
                      }, 1000)
                    }
                  ></i>
                </td>
                <td className="text-center">
                  <i
                    class="fas fa-trash"
                    style={{ color: "red" }}
                    onClick={() => dispatch(deleteCity(city._id))}
                  ></i>
                </td>
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
                  value={city_name}
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
                  value={state_name}
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
                  value={country}
                  placeholder="Enter Country.."
                  onChange={(e) => setcountry(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your Country
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="city_class">City Class</CLabel>
                <CInput
                  type="text"
                  id="city_class"
                  name="city_class"
                  placeholder="Enter City Class.."
                  onChange={(e) => setcity_class(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your City Charges
                </CFormText>
              </CFormGroup>
              <div style={{ textAlign: "center" }}>
                ''
                <CButton color="primary" onClick={handleSubmit}>
                  Create City
                </CButton>
              </div>
            </CCol>
          </CRow>
        </>
      </Modal>

      {/* Edit City */}

      <Modal open={Edit} close={() => setEdit(!Edit)}>
        <>
          <h3>Edit City</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                <CLabel htmlFor="city_name">City</CLabel>
                <CInput
                  type="text"
                  id="city_name"
                  name="city_name"
                  value={city_name}
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
                  value={state_name}
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
                  value={country}
                  placeholder="Enter Country.."
                  onChange={(e) => setcountry(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your Country
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="city_class">City Charges</CLabel>
                <CInput
                  type="text"
                  id="city_class"
                  name="city_class"
                  placeholder="Enter City Charges.."
                  onChange={(e) => setcity_class(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your City Charges
                </CFormText>
              </CFormGroup>
              <div style={{ textAlign: "center" }}>
                ''
                <CButton color="primary" onClick={updatehandleSubmit}>
                  Update City
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
