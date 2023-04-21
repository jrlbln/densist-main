import React,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08,IMG09,IMG010,IMG011 ,IMG012 } from './img';
import DoctorSidebar from '../sidebar';
import StickyBox from 'react-sticky-box';
import { getAllUsers } from '../../../../services/userServices';
import { object } from 'joi';

const MypPatient = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		getUsers()
	}, [])
	const getUsers = () => {
		getAllUsers().then((res) => {
		if (res && res.data) {
			setUsers(res.data.object)
		}
	  })
	}



	const getPatients = users.filter(obj => obj.role === "Patient").slice(0, 10)
	// console.log(getPatients)
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
										My Patients
									</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">My Patients</h2>
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
							<div className="row row-grid">
							
							{getPatients.map((obj , idx)=>(
											<div className="col-md-6 col-lg-4 col-xl-3">
												<div className="card widget-profile pat-widget-profile call-shadow">
													<div className="card-body">
														<div className="pro-widget-content">
															<div className="profile-info-widget">
																<Link
																	to="/doctor/transaction"
																	className="booking-doc-img"
																>
																	<img src={IMG01} alt="User" />
																</Link>
																<div className="profile-det-info">
																	<h3>
																		<Link to="/doctor/transaction">
																			{obj.firstName} {obj.middleName} {obj.lastName}
																		</Link>
																	</h3>

																	<div className="patient-details">
																		{/* <h5>
																			<b>Patient ID :</b> P0016
																		</h5> */}
																		<h5 className="mb-0">
																			<i className="fas fa-map-marker-alt"></i>{' '}
																			{obj.address}
																		</h5>
																	</div>
																</div>
															</div>
														</div>
														<div className="patient-info">
															<ul>
																<li>
																	Phone <span>{obj.contactNumber}</span>
																</li>
																<li>
																	Email <span>{obj.email}</span>
																</li>
																<li>
																	Age <span>{obj.gender}</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										
									))
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MypPatient;
