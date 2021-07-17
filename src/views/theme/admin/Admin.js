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
  adminsList,
  createAdmin,
  deleteAdmin,
  updateAdmin,
} from "../../../redux/actions/adminAction";
const Admin = () => {
  const [flage, setFlage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userName, setuserName] = useState("");
  const [edit, setEdit] = useState(false);
  const [_id, set_id] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [role, setrole] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);
  const [editAdmin,setEditAdmin]=useState(false);
  const dispatch = useDispatch();
  const { adminList } = useSelector((state) => state.admin);
  useEffect(() => {
    async function getAdmin() {
      dispatch(adminsList());
    }
    getAdmin();
  }, [flage]);
console.log(adminList);
const updatehandleSubmit=async()=>{
  let params={
    _id,
    userName,
    email,
    mobile,
    password,
    role,
  }
  const res=await dispatch(updateAdmin(params));
  console.log(res,"dispatch");
  // if (res.data.is_success == true) {
   setEditAdmin(false);
     setFlage(!flage);
  // }
  // setMessage(res.message);
  // setToast(!toast);
}

  const handleSubmit = async () => {
    let params = {
      userName,
      email,
      mobile,
      password,
      role,
    };
    const res = await dispatch(createAdmin(params));
    console.log(res);
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
        <h3>Admins</h3>
        <div onClick={() => setOpenModal(!openModal)}>
          <i class="fas fa-plus-square"></i>
        </div>
      </div>
      <table className="table w-100">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Role</th>
             <th>Edit</th> 
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {adminList &&
            adminList.map((city) => (
              <tr>
                <td className="text-muted">{city.userName}</td>
                <td className="font-weight-bold">{city.email}</td>
                <td className="">{city.mobile}</td>
                <td className="">{city.role}</td>
                <td className="text-center">
                  <i
                    class="fas fa-pen"
                    style={{ color: "blue" }}
                    onClick={() =>
                      setTimeout(() => {
                        setEditAdmin(true);
                        set_id(city._id);
                        setuserName(city.userName);
                        setemail(city.email);
                        setmobile(city.mobile);
                        setrole(city.role);
                        setEditAdmin(!editAdmin);
                      }, 1000)
                    }
                  ></i>
                </td>
                <td className="text-center">
                  <i
                    class="fas fa-trash"
                    style={{ color: "red" }}
                    onClick={() => dispatch(deleteAdmin(city._id))}
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
          <h3>Add Admin</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                <CLabel htmlFor="userName">UserName</CLabel>
                <CInput
                  type="text"
                  id="userName"
                  name="userName"
                  value={userName}
                  placeholder="Enter UserName.."
                  onChange={(e) => setuserName(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your UserName
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="email">Email</CLabel>
                <CInput
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter Email.."
                  onChange={(e) => setemail(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your Email
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="mobile">mobile</CLabel>
                <CInput
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  placeholder="Enter mobile.."
                  onChange={(e) => setmobile(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your Mobile
                </CFormText>
              </CFormGroup>
              {!edit && (
                <CFormGroup>
                  <CLabel htmlFor="password">Password</CLabel>
                  <CInput
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password.."
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <CFormText className="help-block">
                    Please enter your Password
                  </CFormText>
                </CFormGroup>
              )}
              <CFormGroup>
                <CLabel htmlFor="password">Role</CLabel>
                <select
                  onChange={(e) => setrole(e.target.value)}
                  style={{
                    marginLeft: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <option>Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="subadmin">Sub Admin</option>
                </select>
                <CFormText className="help-block">
                  Please enter your Role
                </CFormText>
              </CFormGroup>
              <div style={{ textAlign: "center" }}>
                ''
                <CButton color="primary" onClick={handleSubmit}>
                  {edit ? "Update Admin" : "Create Admin"}
                </CButton>
              </div>
            </CCol>
          </CRow>
        </>
      </Modal>

{/* Edit Admin */}
<Modal open={editAdmin} close={() => setEditAdmin(!editAdmin)}>
        <>
          <h3>Update Admin</h3>
          <CRow>
            <CCol md="12">
              <CFormGroup>
                <CLabel htmlFor="userName">UserName</CLabel>
                <CInput
                  type="text"
                  id="userName"
                  name="userName"
                  value={userName}
                  placeholder="Enter UserName.."
                  onChange={(e) => setuserName(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your UserName
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="email">Email</CLabel>
                <CInput
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter Email.."
                  onChange={(e) => setemail(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your Email
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="mobile">mobile</CLabel>
                <CInput
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  placeholder="Enter mobile.."
                  onChange={(e) => setmobile(e.target.value)}
                />
                <CFormText className="help-block">
                  Please enter your Mobile
                </CFormText>
              </CFormGroup>
              {!edit && (
                <CFormGroup>
                  <CLabel htmlFor="password">Password</CLabel>
                  <CInput
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password.."
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <CFormText className="help-block">
                    Please enter your Password
                  </CFormText>
                </CFormGroup>
              )}
              <CFormGroup>
                <CLabel htmlFor="password">Role</CLabel>
                <select
                  onChange={(e) => setrole(e.target.value)}
                  style={{
                    marginLeft: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <option>Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="subadmin">Sub Admin</option>
                </select>
                <CFormText className="help-block">
                  Please enter your Role
                </CFormText>
              </CFormGroup>
              <div style={{ textAlign: "center" }}>
                ''
                <CButton color="primary" onClick={updatehandleSubmit}>
                  Update Admin
                </CButton>
              </div>
            </CCol>
          </CRow>
        </>
      </Modal>


    </>
  );
};

export default Admin;
