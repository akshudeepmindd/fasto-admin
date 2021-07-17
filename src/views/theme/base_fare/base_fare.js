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
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCity,
  getAllCities,
  updateCity,
  deleteCity,
  fareList,
  Addfare,
  deleteClass,
  Addclass,
} from "../../../redux/actions/cityactions";
const Base_fare = () => {
  const [flage, setFlage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [km, setkm] = useState("");
  const [Edit, setEdit] = useState(false);
  const [_id, set_id] = useState("");
  const [state_name, setState_name] = useState("");
  const [country, setcountry] = useState("");
  const [class_name, setclass_name] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);
  const [openClass, setopenClass] = useState(false);
  const [fare, setfare] = useState("");
  const [fuelcharge, setfuelcharge] = useState("");
  const [waitingcharge, setwaitingcharge] = useState();
  const dispatch = useDispatch();
  const { allfare } = useSelector((state) => state.city);
  useEffect(() => {
    async function farelist() {
      await dispatch(fareList());
    }
    farelist();
  }, [flage]);

  const submitAddClass = () => {
    const params = {
      class_name,
      fuelcharge,
      waitingcharge,
    };
    dispatch(Addclass(params));
    setopenClass(!openClass);
    setFlage(!flage);
  };

  const submitAddFare = () => {
    const params = {
      class_name,
      km,
      fare,
    };
    dispatch(Addfare(params));
    setOpenModal();
    setFlage(!flage);
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Fare List</h3>
        <div
          onClick={() => {
            setopenClass(!openClass);
          }}
        >
          <i class="fas fa-plus-square"></i>
        </div>
      </div>
      <table className="table w-100">
        <thead>
          <tr>
            <th>City Class </th>
            <th>Fuel Charge </th>
            <th>Waiting Charge</th>
            <th>Base Fare</th>
            <th>Add Fare</th>

            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allfare &&
            allfare.data &&
            allfare.data.map((fare) => (
              <tr>
                <td className="text-muted">{fare.class_name}</td>
                <td className="font-weight-bold">{fare.fuelcharge}</td>
                <td className="">{fare.waitingcharge}</td>
                <td>
                  {" "}
                  <CDropdown>
                    <CDropdownToggle color="secondary">
                      Base Fare
                    </CDropdownToggle>
                    <CDropdownMenu>
                      {fare?.basefare?.map((item) => {
                        return (
                          <CDropdownItem>
                            Number of km={item.no_km} fare= {item.fare}
                          </CDropdownItem>
                        );
                      })}
                    </CDropdownMenu>
                  </CDropdown>
                </td>
                <td>
                  {" "}
                  <div
                    onClick={() => {
                      setclass_name(fare.class_name);
                      setOpenModal(!openModal);
                    }}
                  >
                    <i class="fas fa-plus-square"></i>
                  </div>
                </td>
                {/* <td className="text-center"> */}
                {/* <i
                    class="fas fa-pen"
                    style={{ color: "blue" }}
                    onClick={() =>
                      setTimeout(() => {
                        setEdit(true);
                        set_id(city._id);
                        setEdit(!Edit);
                      }, 1000)
                    }
                  ></i> */}
                {/* </td> */}
                <td className="text-center">
                  {
                    <i
                      class="fas fa-trash"
                      style={{ color: "red" }}
                      onClick={() => {
                        dispatch(deleteClass(fare._id));
                        setFlage(!flage);
                      }}
                    ></i>
                  }
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* set clsss */}
      {/* set Fare */}
      <Modal open={openModal} close={() => setOpenModal(!openModal)}>
        <>
          <h3>Add Fare</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                <CLabel htmlFor="">Number of KM</CLabel>
                <CInput
                  type="text"
                  id="Number of KM"
                  name="Number of KM"
                  value={km}
                  placeholder="Enter KM.."
                  onChange={(e) => setkm(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter the Km
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="Fare">Fare</CLabel>
                <CInput
                  type="text"
                  id="Fare"
                  name="Fare"
                  value={fare}
                  placeholder="Enter State Name.."
                  onChange={(e) => setfare(e.target.value)}
                />
                <CFormText className="help-block">Please enter fare</CFormText>
              </CFormGroup>
              <div style={{ textAlign: "center" }}>
                ''
                <CButton onClick={() => submitAddFare()} color="primary">
                  Add Fare
                </CButton>
              </div>
            </CCol>
          </CRow>
        </>
      </Modal>

      <Modal open={openClass} close={() => setopenClass(!openClass)}>
        <>
          <h3>Add Class</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                Enter The Class Name
                <CLabel htmlFor="">Class Name</CLabel>
                <CInput
                  type="text"
                  id="Class Name"
                  name="Class Name"
                  value={class_name}
                  placeholder="Enter KM.."
                  onChange={(e) => setclass_name(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter fuelcharge
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="Fuelcharge">Fuelcharge</CLabel>
                <CInput
                  type="Fuelcharge"
                  id="Fare"
                  name="Fare"
                  value={fuelcharge}
                  placeholder="Enter State Name.."
                  onChange={(e) => setfuelcharge(e.target.value)}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="waitingcharge">waitingcharge</CLabel>
                <CInput
                  type="waiting charge"
                  id="waiting charge"
                  name="waiting charge"
                  value={waitingcharge}
                  placeholder="Enter State Name.."
                  onChange={(e) => setwaitingcharge(e.target.value)}
                />

                <CFormText className="help-block">Please enter fare</CFormText>
              </CFormGroup>
              <div style={{ textAlign: "center" }}>
                ''
                <CButton onClick={() => submitAddClass()} color="primary">
                  Add Class
                </CButton>
              </div>
            </CCol>
          </CRow>
        </>
      </Modal>
    </>
  );
};

export default Base_fare;
