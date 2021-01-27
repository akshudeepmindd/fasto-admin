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
const Passenger = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Passenger</h3>
        <div onClick={() => setOpenModal(!openModal)}>
          <i class="fas fa-plus-square"></i>
        </div>
      </div>

      <table className="table w-100">
        <thead>
          <tr>
            <th>User Name </th>
            <th>First Name </th>
            <th>Last Name </th>
            <th>Profile Pic </th>
            <th>Mobile </th>
            <th>Email</th>
            <th>State</th>
            <th>Address </th>
            <th>Pincode</th>
            <th>Wallet </th>
            <th>Member Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
          </tr>
          <tr>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
          </tr>
          <tr>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
            <td className="">Asgdghdh</td>
          </tr>
        </tbody>
      </table>
      <Modal open={openModal} close={() => setOpenModal(!openModal)}>
        <>
          <h3>Passengers</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                <div className="d-flex justify-content-between">
                  <div>
                    <CLabel htmlFor="state_name">User Name </CLabel>
                    <CInput
                      type="text"
                      id="state_name"
                      name="state_name"
                      placeholder="Enter State Name.."
                    />
                    <CFormText className="help-block">
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor="state_name">First Name </CLabel>
                    <CInput
                      type="text"
                      id="state_name"
                      name="state_name"
                      placeholder="Enter State Name.."
                    />
                    <CFormText className="help-block">
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
              </CFormGroup>
              <CFormGroup>
                <div className="d-flex justify-content-between">
                  <div>
                    <CLabel htmlFor="state_name">Last Name </CLabel>
                    <CInput
                      type="text"
                      id="state_name"
                      name="state_name"
                      placeholder="Enter State Name.."
                    />
                    <CFormText className="help-block">
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor="state_name"> Profile Pic	 </CLabel>
                    <CInput
                      type="text"
                      id="state_name"
                      name="state_name"
                      placeholder="Enter State Name.."
                    />
                    <CFormText className="help-block">
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
              </CFormGroup>
              <CFormGroup>
                <div className="d-flex justify-content-between">
                  <div>
                    <CLabel htmlFor="state_name">Mobile </CLabel>
                    <CInput
                      type="text"
                      id="state_name"
                      name="state_name"
                      placeholder="Enter State Name.."
                    />
                    <CFormText className="help-block">
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor="state_name"> Email </CLabel>
                    <CInput
                      type="text"
                      id="state_name"
                      name="state_name"
                      placeholder="Enter State Name.."
                    />
                    <CFormText className="help-block">
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
              </CFormGroup>
              <CFormGroup>
                <div className="d-flex justify-content-between">
                  <div>
                    <CLabel htmlFor="state_name">State</CLabel>
                    <CInput
                      type="text"
                      id="state_name"
                      name="state_name"
                      placeholder="Enter State Name.."
                    />
                    <CFormText className="help-block">
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor="state_name"> Address </CLabel>
                    <CInput
                      type="text"
                      id="state_name"
                      name="state_name"
                      placeholder="Enter State Name.."
                    />
                    <CFormText className="help-block">
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
              </CFormGroup>
              <CFormGroup>
                <div className="d-flex justify-content-between">
                  <div>
                    <CLabel htmlFor="state_name">Pincode</CLabel>
                    <CInput
                      type="text"
                      id="state_name"
                      name="state_name"
                      placeholder="Enter State Name.."
                    />
                    <CFormText className="help-block">
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor="state_name"> Wallet </CLabel>
                    <CInput
                      type="text"
                      id="state_name"
                      name="state_name"
                      placeholder="Enter State Name.."
                    />
                    <CFormText className="help-block">
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
              </CFormGroup>
               <div>
                    <CLabel htmlFor="state_name"> Member Type </CLabel>
                    <CInput
                      type="text"
                      id="state_name"
                      name="state_name"
                      placeholder="Enter State Name.."
                    />
                    <CFormText className="help-block">
                      Please enter your State Name
                    </CFormText>
                  </div>
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

export default Passenger;
