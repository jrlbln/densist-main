import React, { useState } from 'react';
import DoctorSidebar from '../sidebar';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import ProgressBar from 'react-customizable-progressbar';
import { Icon01, Icon02, Icon03, IMG01, IMG02, IMG03, IMG04, IMG05, IMG06 } from './img';
import { date } from 'yup';
const DoctorDashboard = () => {
	const [key, setKey] = useState(1);

	const handleSelect = (key) => {
		console.log('selected ' + key);
		setKey(key);
	};
	const date = new Date();

	return (
		<>
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
										Dashboard
									</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Dashboard</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<DoctorSidebar />
						</div>
						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="row">
								<div className="col-md-12">
									<div className="card dash-card call-shadow">
										<div className="card-body">
											<div className="row">
												<div className="col-md-12 col-lg-4">
													<div className="dash-widget dct-border-rht">
														<ProgressBar
															width={10}
															radius={100}
															progress={50}
															rotate={-210}
															strokeWidth={16}
															strokeColor="#142E8A"
															strokeLinecap="square"
															trackStrokeWidth={8}
															trackStrokeColor="#e6e6e6"
															trackStrokeLinecap="square"
															pointerRadius={0}
															initialAnimation={true}
															transition="1.5s ease 0.5s"
															trackTransition="0s ease"
														>
															<div className="indicator-volume">
																<img
																	src={Icon01}
																	className="img-fluid"
																	alt="Patient"
																/>
															</div>
														</ProgressBar>
														<div className="dash-widget-info">
															<h6>Today's Approved Appointment</h6>
															<h3>150000</h3>
															
														</div>
													</div>
												</div>
												<div className="col-md-12 col-lg-4">
													<div className="dash-widget dct-border-rht">
														<ProgressBar
															width={20}
															radius={100}
															progress={60}
															rotate={-210}
															strokeWidth={16}
															strokeColor="#568ED1"
															strokeLinecap="square"
															trackStrokeWidth={8}
															trackStrokeColor="#e6e6e6"
															trackStrokeLinecap="square"
															pointerRadius={0}
															initialAnimation={true}
															transition="1.5s ease 0.5s"
															trackTransition="0s ease"
														>
															<div className="indicator-volume">
																<img
																	src={Icon02}
																	className="img-fluid"
																	alt="Patient"
																/>
															</div>
														</ProgressBar>
														<div className="dash-widget-info">
															<h6>Appointment Request</h6>
															<h3>160</h3>
															
														</div>
													</div>
												</div>
												<div className="col-md-12 col-lg-4">
													<div className="dash-widget">
														<ProgressBar
															width={20}
															radius={100}
															progress={70}
															rotate={-210}
															strokeWidth={16}
															strokeColor="#0070F7"
															strokeLinecap="square"
															trackStrokeWidth={8}
															trackStrokeColor="#e6e6e6"
															trackStrokeLinecap="square"
															pointerRadius={0}
															initialAnimation={true}
															transition="1.5s ease 0.5s"
															trackTransition="0s ease"
														>
															<div className="indicator-volume">
																<img
																	src={Icon03}
																	className="img-fluid"
																	alt="Patient"
																/>
															</div>
														</ProgressBar>
														<div className="dash-widget-info">
															<h6>Dental Record Request</h6>
															<h3>85</h3>
															<p className="text-muted">
																06, Apr 2019
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="card dash-card call-shadow">
										<div className="card-body">
											<div className="row">
												<div className="col-md-12 col-lg-4">
													<div className="dash-widget dct-border-rht">
														<ProgressBar
															width={10}
															radius={100}
															progress={50}
															rotate={-210}
															strokeWidth={16}
															strokeColor="#00B7F7"
															strokeLinecap="square"
															trackStrokeWidth={8}
															trackStrokeColor="#e6e6e6"
															trackStrokeLinecap="square"
															pointerRadius={0}
															initialAnimation={true}
															transition="1.5s ease 0.5s"
															trackTransition="0s ease"
														>
															<div className="indicator-volume">
																<img
																	src={Icon01}
																	className="img-fluid"
																	alt="Patient"
																/>
															</div>
														</ProgressBar>
														<div className="dash-widget-info">
															<h6>Approved Dental Record Request</h6>
															<h3>150000</h3>
															
														</div>
													</div>
												</div>
												<div className="col-md-12 col-lg-4">
													<div className="dash-widget dct-border-rht">
														<ProgressBar
															width={20}
															radius={100}
															progress={60}
															rotate={-210}
															strokeWidth={16}
															strokeColor="#33E9FF"
															strokeLinecap="square"
															trackStrokeWidth={8}
															trackStrokeColor="#e6e6e6"
															trackStrokeLinecap="square"
															pointerRadius={0}
															initialAnimation={true}
															transition="1.5s ease 0.5s"
															trackTransition="0s ease"
														>
															<div className="indicator-volume">
																<img
																	src={Icon02}
																	className="img-fluid"
																	alt="Patient"
																/>
															</div>
														</ProgressBar>
														<div className="dash-widget-info">
															<h6>New Account Created</h6>
															<h3>160</h3>
															
														</div>
													</div>
												</div>
												<div className="col-md-12 col-lg-4">
													<div className="dash-widget">
														<ProgressBar
															width={20}
															radius={100}
															progress={30}
															rotate={-210}
															strokeWidth={16}
															strokeColor="#1b5a90"
															strokeLinecap="square"
															trackStrokeWidth={8}
															trackStrokeColor="#e6e6e6"
															trackStrokeLinecap="square"
															pointerRadius={0}
															initialAnimation={true}
															transition="1.5s ease 0.5s"
															trackTransition="0s ease"
														>
															<div className="indicator-volume">
																<img
																	src={Icon03}
																	className="img-fluid"
																	alt="Patient"
																/>
															</div>
														</ProgressBar>
														<div className="dash-widget-info">
															<h6>Total Patients Accommodated</h6>
															<h3>900</h3>
															<p className="text-muted">
																{''}
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							

							
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DoctorDashboard;
