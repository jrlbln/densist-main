import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import StickyBox from 'react-sticky-box';
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08, IMG010, IMG011 } from './img';
import DoctorSidebar from '../sidebar';
import { getAllAppointent, approveAppointment, declineAppointment} from '../../../../services/appointmentService';
import { getSchedule,setNullSchedule } from '../../../../services/scheduleService';
import { getUserInfo } from '../../../../services/auth';


const Appointments = () => {
	const [id, setID] = useState();
	const [sched, setSchedule] = useState();
	const navigate =useHistory();

	const [showConfirm, setShowConfirm] = useState(false);
	const handleCloseConfirm = () => setShowConfirm(false);
	const handleShowConfirm = (id) => {
		setID(id)
		setShowConfirm(true);
	}
	const [showReject, setShowReject] = useState(false);
	const handleCloseReject = () => setShowReject(false);
	const handleShowReject = (id) => {
		setID(id)
		setShowReject(true);
	}

	const [appointment, setAppointment] = useState([])
	useEffect(() => {
		getAppointments();
		schedule();
	}, [])
	const getAppointments = () => {
		getAllAppointent().then((res) => {
		if (res && res.data) {
			setAppointment(res.data.object)
		}
	  })
	}

	const d = new Date();
	const getDate = (d) =>{
		return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
	}

	const getTime = (d) =>{
		d.toLocaleTimeString()
		return `${d.getHours()} : ${d.getMinutes()}`
	}

	const confirmButton = (id,confirm) =>{
		if(confirm === 1){
			approveAppointment(id);
			window.location.reload();
		}else if(confirm === 0){
			console.log("asdasd")
			declineAppointment(id);
			window.location.reload();
		}
	}
	const schedule =()=>{
		getSchedule(getUserInfo().id).then((res) => {
			if (res && res.data) {
				setSchedule(res.data.object)
			}
		  })
	}
	console.log(sched)

	return (
		<div className="content-page">
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/home">Home</Link>
									</li>
									<li className="breadcrumb-item active" aria-current="page">
										Appointments
									</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Appointments</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							
								<StickyBox offsetTop={50} offsetBottom={20}>
									<DoctorSidebar />
								</StickyBox>

						</div>
						
						
						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="row">
								<div className="col-md-10 ">Patient Lists</div>
								<div className="col-md-2 ">
									<Link onClick={()=>{
										schedule();
										if(sched === undefined || sched === null){
												setNullSchedule(getUserInfo().id)
												navigate.push("/doctor/schedule-timing");
										}else{
											navigate.push("/doctor/schedule-timing");
										}
										}}><i className="fa fa-cog fa-5"></i>Manage time slots</Link>
								</div>
							</div>
							
							<div className="appointments">
								{appointment.map(obj=>(
										<div className="appointment-list call-shadow">
										<div className="profile-info-widget">
											<Link
												to=""
												className="booking-doc-img"
											>
												<img src={IMG01} alt="User" />
											</Link>
											<div className="profile-det-info">
												<h3>
													<Link to="">
														{obj.user.firstName} {obj.user.middleName} {obj.user.lastName}
													</Link>
												</h3>
												<div className="patient-details">
													
													
													<h5>
														<i className="far fa-clock"></i> {getDate(new Date(obj.dateTime))}  {getTime(new Date(obj.dateTime))}
													</h5>
													<h5>
														<i className="fas fa-map-marker-alt"></i>{' '}
														{obj.user.address}
													</h5>
													<h5>
														<i className="fas fa-envelope"></i>{' '}
														{obj.user.email}
													</h5>
													<h5 className="mb-0">
														<i className="fas fa-phone"></i> {obj.user.contactNumber}
													</h5>
													<h5>
														<i className="fas fa-check"></i> {obj.service}
													</h5>
												</div>
											</div>
										</div>
										<div className="appointment-action">
											{obj.status === "Pending"?(
												<>
													<Link to="#0" className="btn btn-sm bg-success-light" onClick={()=>handleShowConfirm(obj.id)}>
													<i className="fas fa-check"></i> Accept
													</Link>
													<Link to="#0" className="btn btn-sm bg-danger-light" onClick={()=>handleShowReject(obj.id)}>
														<i className="fas fa-times"></i> Reject
													</Link>
												</>
												
											):(
												<div className="">{obj.status}</div>
											)

											}
											
										</div>
									</div>
									))
								}
								
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*view modal*/}
			{/* <Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<h5 className="modal-title">Appointment Details</h5>
				</Modal.Header>
				<Modal.Body>
					<ul className="info-details">
						<li>
							<div className="details-header">
								<div className="row">
									<div className="col-md-6">
										
										<span className="text">21 Oct 2019 10:00 AM</span>
									</div>
									<div className="col-md-6">
										<div className="text-end">
											<button
												type="button"
												className="btn bg-success-light btn-sm"
												id="topup_status"
											>
												Completed
											</button>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<span className="title">Status:</span>
							<span className="text">Completed</span>
						</li>
						<li>
							<span className="title">Confirm Date:</span>
							<span className="text">29 Jun 2019</span>
						</li>
						<li>
							<span className="title">Paid Amount</span>
							<span className="text">$450</span>
						</li>
					</ul>
				</Modal.Body>
			</Modal> */}
			{/*view modal*/}
			<Modal show={showConfirm} onHide={handleCloseConfirm} centered>
				<Modal.Header closeButton>
					<h5 className="modal-title">Do you want to confirm?</h5>
				</Modal.Header>
				
				<Modal.Footer>
						<div className="appointment-action" centered>
										<Link to="#0" className="btn btn-lg bg-success" onClick={()=>confirmButton(id,1)}>
											<i className="fas fa-check"></i> Confirm
										</Link>
										<Link to="#0" className="btn btn-lg bg-danger" onClick={handleCloseConfirm} >
											<i className="fas fa-times"></i> Cancel
										</Link>
					</div>
				</Modal.Footer>
			</Modal>
			{/*view modal*/}
			<Modal show={showReject} onHide={handleCloseReject} centered>
				<Modal.Header closeButton>
					<h5 className="modal-title">Do you want to reject?</h5>
				</Modal.Header>
				
				<Modal.Footer>
						<div className="appointment-action" centered>
										<Link to="#0" className="btn btn-lg bg-success" onClick={()=>confirmButton(id,0)}>
											<i className="fas fa-check"></i> Confirm
										</Link>
										<Link to="#0" className="btn btn-lg bg-danger"  onClick={handleCloseReject}>
											<i className="fas fa-times"></i> Cancel
										</Link>
					</div>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Appointments;
