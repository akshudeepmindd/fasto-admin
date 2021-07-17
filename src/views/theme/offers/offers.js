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
  createOffer,
  getAllOffer,
  updateOffer,
  deleteOffer
} from "../../../redux/actions/offeractions";
const Offer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [offer_name, setoffer_name] = useState("");
  const [offer_code, setcode] = useState("");
  const [offer_discount, setdiscount] = useState("");
  const [edit, setEdit] = useState(false);
  const [_id, set_id] = useState("");
  const [offer_valid_to, setvalid_to] = useState("");
  const [offer_valid_from, setvalid_from] = useState("");
  const { alloffers } = useSelector((state) => state.offer);
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    async function alloffer() {
      await dispatch(getAllOffer());
    }
    alloffer();
  }, []);
  const handleSubmit = async () => {
    let params = {
      offer_name,
      offer_code,
      offer_discount,
      offer_valid_to,
      offer_valid_from,
    };
    const res = await dispatch(createOffer(params));
    if (res.isSuccess == true) {
      setOpenModal(false);
      await dispatch(getAllOffer());
    }
    setMessage(res.message);
    setToast(!toast);

    console.log(params, "params");
  };

  const handleEditSubmit = async () => {
    let params = {
      offer_name,
      offer_code,
      offer_discount,
      offer_valid_to,
      offer_valid_from,
    };
    const res = await dispatch(updateOffer(_id, params));
    if (res.is_success == true) {
      setOpenModal(false);
      await dispatch(getAllOffer());
    }
    setMessage(res.message);
    setToast(!toast);

    console.log(params, "params");
  };
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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {alloffers &&
            alloffers.map((offer) => (
              <tr>
                <td className="text-muted">{offer.offer_name}</td>
                <td className="font-weight-bold">{offer.offer_code}</td>
                <td> {offer.offer_discount}</td>

                <td className="text-center">{offer.offer_valid_to}</td>
                <td className="text-center">{offer.offer_valid_from}</td>
                <td className="text-center">
                  <i
                    class="fas fa-pen"
                    style={{ color: "blue" }}
                    onClick={() =>
                      setTimeout(() => {
                        setEdit(true);
                        set_id(offer._id);
                        setoffer_name(offer.offer_name);
                        setcode(offer.offer_code);
                        setdiscount(offer.offer_discount);
                        setvalid_to(offer.offer_valid_to);
                        setvalid_from(offer.offer_valid_from);

                        setOpenModal(!openModal);
                      }, 1000)
                    }
                  ></i>
                </td>
                <td className="text-center">
                  <i
                    class="fas fa-trash"
                    style={{ color: "red" }}
                    onClick={() => dispatch(deleteOffer(offer._id))}
                  ></i>
                </td>
              </tr>
            ))}
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
                  value={offer_name}
                  onChange={(e) => setoffer_name(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter offer name
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="state_name">Code</CLabel>
                <CInput
                  type="text"
                  id="state_name"
                  name="state_name"
                  value={offer_code}
                  placeholder="Enter State Name.."
                  onChange={(e) => setcode(e.target.value)}
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
                  value={offer_discount}
                  placeholder="Enter Country.."
                  onChange={(e) => setdiscount(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your Country
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="city_charges">Valid to</CLabel>
                <CInput
                  type="date"
                  id="city_charges"
                  name="city_charges"
                  placeholder="Enter City Charges.."
                  value={offer_valid_to}
                  onChange={(e) => setvalid_to(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your City Charges
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="city_charges">Valid From</CLabel>
                <CInput
                  type="date"
                  id="city_charges"
                  name="city_charges"
                  value={offer_valid_from}
                  placeholder="Enter City Charges.."
                  onChange={(e) => setvalid_from(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your City Charges
                </CFormText>
              </CFormGroup>
              <div style={{ textAlign: "center" }}>
                <CButton
                  color="primary"
                  onClick={edit ? handleEditSubmit : handleSubmit}
                >
                  {edit ? "Update Offer" : "Create Offer"}
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
