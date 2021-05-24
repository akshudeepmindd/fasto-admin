import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { rgbToHex } from '@coreui/utils'
import DocsLink from '../../../reusable/DocsLink'
import Modal from '../../../components/common/Modal'
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
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { driversList } from '../../../redux/actions/driverAction'

const Driver = () => {
  const [openModal, setOpenModal] = useState(false)

  const dispatch = useDispatch()
  const { driverslist } = useSelector((state) => state.drivers)
  const [userName, setUserName] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [dp, setDp] = useState('')
  const [Mobile, setMobile] = useState('')
  const [email, setemail] = useState('')
  const [state, setState] = useState('')
  const [address, setaddress] = useState('')
  const [pincode, setpincode] = useState('')
  const [walletMoney, setwalletMoney] = useState('')
  const [memberType, setmemberType] = useState('')
  const [city, setcity] = useState('')
  const [currentLocation, setcurrentLocation] = useState('')
  const [driverAadhaar, setdriverAadhaar] = useState('')
  const [driverRc, setdriverRc] = useState('')
  const [driverInsurance, setdriverInsurance] = useState('')
  const [driverCategory, setdriverCategory] = useState('')
  const [totalKM, settotalKM] = useState('')
  useEffect(() => {
    async function getDrivers() {
      dispatch(driversList())
    }
    getDrivers()
  }, [])
  console.log(driverslist);

  const onHandleSubmit = () => {
    console.log("handle");
  }

  return (
    <>
      <div className='d-flex justify-content-between'>
        <h3>Drivers</h3>
        <div onClick={() => setOpenModal(!openModal)}>
          <i class='fas fa-plus-square'></i>
        </div>
      </div>
      <table className='table w-100'>
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
          {driverslist &&
            driverslist.map((item) => (
              <tr key={item._id}>
                <td className=''>{item.userName}</td>
                <td className=''>{item.firstName}</td>
                <td className=''>{item.lastName}</td>
                <td className=''>{item.dp}</td>
                <td className=''>{item.Mobile}</td>
                <td className=''>{item.email}</td>
                <td className=''>{item.state}</td>
                <td className=''>{item.address}</td>
                <td className=''>{item.pincode}</td>
                <td className=''>{item.walletMoney}</td>
                <td className=''>{item.memberType}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal open={openModal} close={() => setOpenModal(!openModal)}>
        <>
          <h3>Drivers</h3>
          <CRow>
            <CCol md='12'>
              <CFormGroup>
                <CLabel htmlFor='city_name'>User Name</CLabel>
                <CInput
                  type='text'
                  id='city_name'
                  name='city_name'
                  placeholder='Enter CityName..'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <CFormText className='help-block'>
                  Please enter your City
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <div className='d-flex justify-content-between'>
                  <div>
                    <CLabel htmlFor='state_name'>First Name</CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      value={firstName}
                      placeholder='Enter State Name..'
                      onChange={(e) => setfirstName(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor='state_name'>Last Name</CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      placeholder='Enter State Name..'
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
              </CFormGroup>
              <CFormGroup>
                <div className='d-flex justify-content-between'>
                  <div>
                    <CLabel htmlFor='state_name'>Profile Pic</CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      value={dp}
                      placeholder='Enter State Name..'
                      onChange={(e) => setDp(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor='state_name'>Mobile</CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      value={Mobile}
                      placeholder='Enter State Name..'
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <div>
                    <CLabel htmlFor='state_name'>Email</CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      value={email}
                      placeholder='Enter State Name..'
                      onChange={(e) => setemail(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor='state_name'>State</CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      value={state}
                      placeholder='Enter State Name..'
                      onChange={(e) => setState(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
              </CFormGroup>
              <div>
                <CLabel htmlFor='state_name'>Address</CLabel>
                <CInput
                  type='text'
                  id='state_name'
                  name='state_name'
                  value={address}
                  placeholder='Enter State Name..'
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>

              <CFormGroup>
                <div className='d-flex justify-content-between'>
                  <div>
                    <CLabel htmlFor='state_name'>Pin Code</CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      placeholder='Enter State Name..'
                      value={pincode}
                      onChange={(e) => setpincode(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor='state_name'>Wallet</CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      placeholder='Enter State Name..'
                      value={walletMoney}
                      onChange={(e) => setwalletMoney(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <div>
                    <CLabel htmlFor='state_name'>Member Type</CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      placeholder='Enter State Name..'
                      onChange={(e) => setmemberType(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor='state_name'>City</CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      placeholder='Enter State Name..'
                      onChange={(e) => setcity(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
              </CFormGroup>
              <CFormGroup>
                <div className='d-flex justify-content-between'>
                  <div>
                    <CLabel htmlFor='state_name'>Current Location </CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      placeholder='Enter State Name..'
                      onChange={(e) => setcurrentLocation(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor='state_name'>Aadhar </CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      placeholder='Enter State Name..'
                      onChange={(e) => setdriverAadhaar(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
              </CFormGroup>
              <CFormGroup>
                <div className='d-flex justify-content-between'>
                  <div>
                    <CLabel htmlFor='state_name'>rc </CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      placeholder='Enter State Name..'
                      onChange={(e) => setdriverRc(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor='state_name'> insurance </CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      placeholder='Enter State Name..'
                      onChange={(e) => setdriverInsurance(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your State Name
                    </CFormText>
                  </div>
                </div>
              </CFormGroup>
              <CFormGroup>
                <div className='d-flex justify-content-between'>
                  <div>
                    <CLabel htmlFor='state_name'>Driver Category </CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      placeholder='Enter Driver Category..'
                      onChange={(e) => setdriverCategory(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your Driver Category
                    </CFormText>
                  </div>
                  <div>
                    <CLabel htmlFor='state_name'> Total km </CLabel>
                    <CInput
                      type='text'
                      id='state_name'
                      name='state_name'
                      placeholder='Enter Total km.'
                      onChange={(e) => settotalKM(e.target.value)}
                    />
                    <CFormText className='help-block'>
                      Please enter your Total km
                    </CFormText>
                  </div>
                </div>
              </CFormGroup>
              <div style={{ textAlign: 'center' }}>
                <CButton color='primary' onClick>
                  Create City
                </CButton>
              </div>
            </CCol>
          </CRow>
        </>
      </Modal>
    </>
  )
}

export default Driver
