import React, { useEffect, useState, createRef } from "react";
import Modal from '../../../components/common/Modal'
import classNames from "classnames";
import { rgbToHex } from "@coreui/utils";
import DocsLink from "../../../reusable/DocsLink";
import { useDispatch, useSelector } from "react-redux";
import { rideList ,createRide,updateRide} from "../../../redux/actions/rideAction";
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

const Ride = () => {

  const [Driver,setDriver]=useState()
  const[editDriver,setEditDriver]=useState(false)
  const [openModal, setOpenModal] = useState(false)
    const [ByuserId,setByuserId]=useState('')
    const [pickUpLocation,setpickUpLocation]=useState('')
    const [dropLocation,setdropLocation]=useState('')
    const [kms,setkms]=useState('')
    const [goodType,setgoodType]=useState('')
    const [pickupName,setpickupName]=useState('')
    const [pickupNumber,setpickupNumber]=useState('')
    const [receivrNumber,setreceivrNumber]=useState('')
    const [vehicalSelected,setvehicalSelected]=useState('')
    const [paymentType,setpaymentType]=useState('')
    const [orderStatus,setorderStatus]=useState('')
    const [createdAt,setcreatedAt]=useState('')
    const [couponApplied,setcouponApplied]=useState('')
    const [AcceptedByDriverId,setAcceptedByDriverId]=useState('')
    const [AcceptedAt,setAcceptedAt]=useState('')
    const [PickedUpAt,setPickedUpAt]=useState('')
    const [RecivedAt,setRecivedAt]=useState('')
    const [rating,setrating]=useState('')
    const [comment,setcomment]=useState('')
    const [suggestion,setsuggestion]=useState('')
    const [status,setstatus]=useState('')
    const [otp,setotp]=useState('')
    const [_id,set_id]=useState('')
    const [message, setMessage] = useState('')
  const [toast, setToast] = useState(false)
  const [flage, setFlage] = useState(false)
  const dispatch = useDispatch();
  const { ridelist } = useSelector((state) => state.rides);
  useEffect(() => {
    async function getRides() {
      dispatch(rideList());
    }
    getRides();
  }, [flage]);
console.log(ridelist,"heelloo");
console.log(localStorage.getItem("token"));
  const handleSubmit = async () => {
    let params = {
      ByuserId,
      pickUpLocation,
      dropLocation,
      kms,
      goodType,
      pickupName,
      pickupNumber,
      receivrNumber,
      vehicalSelected,
      paymentType,
      receivrNumber,
      vehicalSelected,
      paymentType,
      orderStatus,
      createdAt,
      couponApplied,
      AcceptedByDriverId,
      AcceptedAt,
      PickedUpAt,
      RecivedAt,
      rating,
      comment,
      suggestion,
      status,
      otp,
      message,

    }
    let token=localStorage.getItem("token");
    const res = await dispatch(createRide(params,token));
    console.log(res,"buttin ");
    if (res.isSuccess == true) {
      setOpenModal(false)
      setFlage(!flage)
    }
    setMessage(res.message)
    setToast(!toast)
  }
  const updateDriver=async()=>{
    let params={
      _id,
      Driver
    }
    const res=await dispatch(updateRide(params));
console.log(res,"UpdateDriver");
    if (res.isSuccess == true) {
      setEditDriver(false)
      setFlage(!flage)
    }
    setMessage(res.message)
    setToast(!toast)

  }
  
  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>User Rides</h3>
        <div onClick={() => setOpenModal(!openModal)}>
        <i class="fas fa-plus-square"></i></div>
      </div>
      <table className="table w-100">
        <thead>
          <tr>
            <th>Order Id </th>
            <th>Date and Time </th>
            <th>Driver </th>
            <th>Pickup Location </th>
            <th>Drop Location </th>
            <th>Pickup By </th>
            <th>Received By </th>
            <th>AddPaid Amount </th>
            <th> Payment Method</th>
            <th>Feedback </th>
            <th>Vehicle</th>
            <th>Invoice</th>

            <th>Status</th>

            <th>OTP </th>
          </tr>
        </thead>
        <tbody>
          {ridelist && ridelist.map((item)=>(<><tr>
            
            <td>{item._id}</td>
            <td></td>
            <td>{item.Driver} <div onClick={() => setTimeout(() => {
                        setEditDriver(true)
                        set_id(item._id)
                        setEditDriver(!editDriver)
                      }, 1000)
}>
        <i class="fas fa-plus-square"></i></div></td>
            <td></td>
            <td></td>
            <td>{item.pickupName}</td>
            <td></td>
            <td></td>
            <td>{item.paymentType}</td>
            <td>{}</td>
            <td>{item.status} </td>
            <td>{item.otp}</td>

          </tr></>))}
          

                  </tbody>

      </table>

{/* edit Driver */}
<Modal open={editDriver} close={() => (!editDriver)}>
        <>
          <h3>Set Driver</h3>
          <CRow>
            <CCol md='12'>
            <CFormGroup>
                <CLabel htmlFor='Driver'>Driver_Name</CLabel>
                <CInput
                  type='text'
                  id='Driver_Name'
                  name='Driver_Name'
                
                  placeholder='Enter Driver Name..'
                  onChange={(e) => setDriver(e.target.value)}
                />
                <CFormText className='help-block'>
                Please Enter UserId
                </CFormText>
              </CFormGroup>
              <div style={{ textAlign: 'center'  }}>
                ''
                <CButton color='primary'onClick={updateDriver} >
                  Update Driver
                </CButton>
              </div>
            </CCol>
          </CRow>
        </>
      </Modal>
   







      <Modal open={openModal} close={() => setOpenModal(!openModal)}>
        <>
          <h3>Add User Ride</h3>
          <CRow>
            <CCol md='12'>
              <CFormGroup>
                <CLabel htmlFor='ByUserId'>UserId</CLabel>
                <CInput
                  type='text'
                  id='user_Id'
                  name='ByUser_id'
                 value={ByuserId}
                  placeholder='Enter User Id..'
                  onChange={(e) => setByuserId(e.target.value)}
                />
                <CFormText className='help-block'>
                Please Enter UserId
                </CFormText>
              </CFormGroup>
              <CFormGroup>



                <CLabel htmlFor='pickUpLocation'>Pickup-Location</CLabel>
                <CInput
                  type='text'
                  id='pickUpLocation'
                  name='pickUpLocation'
                
                  placeholder='Enter Your Pickup Location..'
                  onChange={(e) => setpickUpLocation(e.target.value)}
                />
                <CFormText className='help-block'>
                  Please enter your Pickup Location
                </CFormText>
              </CFormGroup>


              <CFormGroup>
                <CLabel htmlFor='dropLocation'>dropLocation</CLabel>
                <CInput
                  type='text'
                  id='dropLocation'
                  name='dropLocation'
                
                  placeholder='Enter Your Pickup Location..'
                  onChange={(e) => setdropLocation(e.target.value)}
                />
                <CFormText className='help-block'>
                  Please enter your Drop Location
                </CFormText>
              </CFormGroup>

              <CFormGroup>
                <CLabel htmlFor='Kms'>Kilometers</CLabel>
                <CInput
                  type='text'
                  id='Kms'
                  name='Kms'
                
                  placeholder='Enter Your Pickup Location..'
                  onChange={(e) => setkms(e.target.value)}
                />
                <CFormText className='help-block'>
                  Please enter Kilometers
                </CFormText>
              </CFormGroup>
             

              <CFormGroup>
                <CLabel htmlFor='goodType'>GoodType</CLabel>
                <CInput
                  type='text'
                  id='goodType'
                  name='goodType'
                
                  placeholder='Enter Your GoodType..'
                  onChange={(e) => setgoodType(e.target.value)}
                />
                <CFormText className='help-block'>
                  Please enter GoodType
                </CFormText>
              </CFormGroup>



              <CFormGroup>
                <CLabel htmlFor='pickupName'>PickupName</CLabel>
                <CInput
                  type='text'
                  id='PickupName'
                  name='PickupName'
                
                  placeholder='Enter Your GoodType..'
                  onChange={(e) => setpickupName(e.target.value)}
                />
                <CFormText className='help-block'>
                  Please enter PickupName
                </CFormText>
              </CFormGroup>


              <CFormGroup>
                <CLabel htmlFor='pickupNumber'>pickupNumber</CLabel>
                <CInput
                  type='number'
                  id='pickupNumber'
                  name='pickupNumber'
                
                  placeholder='Enter Your PickupNumber..'
                  onChange={(e) => setpickupNumber(e.target.value)}
                />
                <CFormText className='help-block'>
                  Please enter PickupNUmber
                </CFormText>
              </CFormGroup>

              <CFormGroup>
                <CLabel htmlFor='receivrNumber'>receivrNumber</CLabel>
                <CInput
                  type='number'
                  id='receivrNumber'
                  name='receivrNumber'
                
                  placeholder='Enter The receivrNumber..'
                  onChange={(e) => setreceivrNumber(e.target.value)}
                />
                <CFormText className='help-block'>
                  Please enter receivrNumber
                </CFormText>
              </CFormGroup> 

              <CFormGroup>
                <CLabel htmlFor='vehicalSelected'>vehicalSelected</CLabel>
                <CInput
                  type='text'
                  id='vehicalSelected'
                  name='vehicalSelected'
                
                  placeholder='Enter The vehicalNumber..'
                  onChange={(e) => setvehicalSelected(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter vehicalNumber
                </CFormText>
              </CFormGroup>

              <CFormGroup>
                <CLabel htmlFor='paymentType'>paymentType</CLabel>
                <CInput
                  type='text'
                  id='paymentType'
                  name='paymentType'
                
                  placeholder='Enter The vehicalNumber..'
                  onChange={(e) => setpaymentType(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter paymentType
                </CFormText>
              </CFormGroup>
             
              <CFormGroup>
                <CLabel htmlFor='orderStatus'>orderStatus</CLabel>
                <CInput
                  type='text'
                  id='orderStatus'
                  name='orderStatus'
                
                  placeholder='Enter The vehicalNumber..'
                  onChange={(e) => setorderStatus(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter orderStatus
                </CFormText>
              </CFormGroup>

              <CFormGroup>
                <CLabel htmlFor='createdAt'>createdAt</CLabel>
                <CInput
                  type='text'
                  id='createdAt'
                  name='createdAt'
                
                  placeholder='Enter The createdAt..'
                  onChange={(e) => setcreatedAt(e.target.value)}
                />
              <CFormText className='help-block'>
                Created At
                </CFormText>
              </CFormGroup>



              <CFormGroup>
                <CLabel htmlFor='couponApplied'>couponApplied</CLabel>
                <CInput
                  type='text'
                  id='couponApplied'
                  name='couponApplied'
                
                  placeholder='Enter The couponApplied..'
                  onChange={(e) => setcouponApplied(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter couponApplied
                </CFormText>
              </CFormGroup>


              <CFormGroup>
                <CLabel htmlFor='couponApplied'>createdAt</CLabel>
                <CInput
                  type='text'
                  id='couponApplied'
                  name='couponApplied'
                
                  placeholder='Enter The couponApplied..'
                  onChange={(e) => setcouponApplied(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter couponApplied
                </CFormText>
              </CFormGroup>

              <CFormGroup>
                <CLabel htmlFor='AcceptedByDriverId'>AcceptedByDriver</CLabel>
                <CInput
                  type='text'
                  id='AcceptedByDriverId'
                  name='AcceptedByDriverId'
                
                  placeholder='Enter The AcceptedByDriverId..'
                  onChange={(e) => setAcceptedByDriverId(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter AcceptedByDriverId
                </CFormText>
              </CFormGroup>


              <CFormGroup>
                <CLabel htmlFor='AcceptedAt'>AcceptedAt</CLabel>
                <CInput
                  type='text'
                  id='AcceptedAt'
                  name='AcceptedAt'
                
                  placeholder='Enter The AcceptedAt..'
                  onChange={(e) => setAcceptedAt(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter AcceptedAt
                </CFormText>
              </CFormGroup>

              <CFormGroup>
                <CLabel htmlFor='PickedUpAt'>PickedUpAt</CLabel>
                <CInput
                  type='text'
                  id='PickedUpAt'
                  name='PickedUpAt'
                
                  placeholder='Enter The PickedUpAt..'
                  onChange={(e) => setPickedUpAt(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter PickedUpAt
                </CFormText>
              </CFormGroup>


              <CFormGroup>
                <CLabel htmlFor='RecivedAt'>RecivedAt</CLabel>
                <CInput
                  type='text'
                  id='RecivedAt'
                  name='RecivedAt'
                
                  placeholder='Enter The RecivedAt..'
                  onChange={(e) => setRecivedAt(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter RecivedAt
                </CFormText>
              </CFormGroup>


              <CFormGroup>
                <CLabel htmlFor='rating'>rating</CLabel>
                <CInput
                  type='text'
                  id='rating'
                  name='rating'
                
                  placeholder='Enter The trating..'
                  onChange={(e) => setrating(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter trating
                </CFormText>
              </CFormGroup>

              <CFormGroup>
                <CLabel htmlFor='comment'>comment</CLabel>
                <CInput
                  type='text'
                  id='comment'
                  name='comment'
                
                  placeholder='Enter The comment..'
                  onChange={(e) => setcomment(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter comment
                </CFormText>
              </CFormGroup>


              <CFormGroup>
                <CLabel htmlFor='suggestion'>suggestion</CLabel>
                <CInput
                  type='text'
                  id='suggestion'
                  name='suggestion'
                
                  placeholder='Enter The suggestion..'
                  onChange={(e) => setsuggestion(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter suggestion
                </CFormText>
              </CFormGroup>


              <CFormGroup>
                <CLabel htmlFor='status'>status</CLabel>
                <CInput
                  type='text'
                  id='status'
                  name='status'
                
                  placeholder='Enter The status..'
                  onChange={(e) => setstatus(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter status
                </CFormText>
              </CFormGroup>


              <CFormGroup>
                <CLabel htmlFor='otp'>otp</CLabel>
                <CInput
                  type='number'
                  id='otp'
                  name='otp'
                
                  placeholder='Enter The otp..'
                  onChange={(e) => setotp(e.target.value)}
                />
              <CFormText className='help-block'>
                  Please enter otp
                </CFormText>
              </CFormGroup>


              <div style={{ textAlign: 'center' }}>
                ''
                <CButton color='primary' onClick={handleSubmit}>
                  Create UserRide
                </CButton>
              </div>
            </CCol>
          </CRow>
        </>
      </Modal>
    </>
  );
};

export default Ride;
