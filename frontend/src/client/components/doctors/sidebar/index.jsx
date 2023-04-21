import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import IMG01 from '../../../assets/images/doctors/doctor-thumb-02.jpg';
import { getFullname } from '../../../../services/auth';
const DoctorSidebar = () => {
	return (
		<div className="profile-sidebar call-shadow">
			<div className="widget-profile pro-widget-content">
				<div className="profile-info-widget">
					<Link to="#" className="booking-doc-img">
						<img src={IMG01} alt="User" />
					</Link>
					<div className="profile-det-info">
						<h3>{getFullname()}</h3>

						<div className="patient-details">
							<h5 className="mb-0"> </h5>
						</div>
					</div>
				</div>
			</div>
			<div className="dashboard-widget">
				<Nav className="dashboard-menu">
					<Nav.Item>
						<NavLink to="/doctor/doctor-dashboard">
							<i className="fas fa-columns"></i>
							<span>Dashboard</span>
						</NavLink>
					</Nav.Item>

					<Nav.Item>
						<NavLink to="/doctor/my-patients">
							<i className="fas fa-user-injured"></i>
							<span>Patients list</span>
						</NavLink>
					</Nav.Item>

					<Nav.Item>
						<NavLink to="/doctor/appointments" activeClassName="active">
							<i className="fas fa-calendar-check"></i>
							<span>Appointments</span>
						</NavLink>
					</Nav.Item>
					{/* <Nav.Item>
						<NavLink to="/pages/invoice">
							<i className="fas fa-file-invoice"></i>
							<span>Invoices</span>
						</NavLink>
					</Nav.Item> */}

					<Nav.Item>
						<NavLink to="/doctor/transaction">
							<i className="fa fa-address-book"></i>
							<span>Transactions</span>
						</NavLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink to="/doctor/inventory">
							<i className="fa fa-list-ol"></i>
							<span>Inventory</span>
						</NavLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink to="/doctor/record">
							<i className="fa fa-address-card"></i>
							<span>Dental records</span>
						</NavLink>
					</Nav.Item>
					{/* <Nav.Item>
						<NavLink to="/doctor/review">
							<i className="fas fa-star"></i>
							<span>Reviews</span>
						</NavLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink to="/doctor/chat-doctor">
							<i className="fas fa-comments"></i>
							<span>Message</span>
							<small className="unread-msg">23</small>
						</NavLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink to="/doctor/profile-setting">
							<i className="fas fa-user-cog"></i>
							<span>Profile Settings</span>
						</NavLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink to="/social-media">
							<i className="fas fa-share-alt"></i>
							<span>Social Media</span>
						</NavLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink to="/doctor-change-passwword">
							<i className="fas fa-lock"></i>
							<span>Change Password</span>
						</NavLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink to="/home" activeClassName="active">
							<i className="fas fa-sign-out-alt"></i>
							<span>Logout</span>
						</NavLink>
					</Nav.Item> */}
				</Nav>
			</div>
		</div>
	);
};

export default DoctorSidebar;
