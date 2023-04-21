import React, { useState, useEffect } from "react";
import { getAllAppointentbyUser } from "../../../../services/appointmentService";
import { getUserInfo } from "../../../../services/auth";
import { DataGrid } from "@mui/x-data-grid";
import AddAppointmentForm from "./addAppointmentForm";
import { Link } from 'react-router-dom';
import DashboardSidebar from '../dashboard/sidebar/sidebar';
import StickyBox from 'react-sticky-box';




const PatientAppointment = () => {

	const [appointment, setAppointment] = useState([])
	const [search, setSearch] = React.useState('');

	const data = {
		nodes: appointment.filter((item) =>{
			return item.service.toLowerCase().includes(search.toLowerCase()) ||
			item.status.toLowerCase().includes(search.toLowerCase()) 
			}
		),
	  };

	useEffect(()=>{
		getAll();
	  },[])
	const handleSearch = (event) => {
		setSearch(event.target.value);
	};

	const getAll =()=>{
		getAllAppointentbyUser(getUserInfo().id).then((res)=>{
			if(res && res.data){
				setAppointment(res.data.object)
			}
		})		
	}
	const reset = () => {
        window.location.reload()
    }


	const columns = [
		
		{field: 'service', headerName: 'Service', width: 350 },
		{field: 'dateTime', headerName: 'Appointment Schedule', width: 450 },
		{field: 'status', headerName: 'Status', width: 250, renderCell: (params) => {
			return (
				params.row.status === 'Declined'?(
					<span className="badge rounded-pill bg-danger-light">Declined</span>
				):params.row.status === 'Approved'?(
					<span className="badge rounded-pill bg-success-light">Approved</span>
				):(
					<span className="badge rounded-pill bg-primary-light">Pending</span>
				)
					
				)}},
	  ];


  return (
	<div>
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
								Transactions
							</li>
						</ol>
					</nav>
					<h2 className="breadcrumb-title">Profile</h2>
				</div>
			</div>
		</div>
	</div>

	<div className="content">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
					<StickyBox offsetTop={20} offsetBottom={20}>
								<DashboardSidebar />
					</StickyBox>
				</div>
				<div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
					<div className="card">
						<div className="card-body pt-0">
						<div className="user-tabs">
								<ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
									<li className="nav-item">
										<a className="nav-link active" href="#pres" data-bs-toggle="tab"><span>Appointments</span></a>
									</li>
								</ul>
							</div>
							<div className="tab-content">

								
								{/* <!-- Prescription Tab --> */}
							<div className="tab-pane fade show active" id="pres">
									<div className="row">
										<div className="col-md-3">
											<AddAppointmentForm />
										</div><div className="col-md-4"></div>
										<div className="col-md-5 ">
										
												<label htmlFor="search">
													Search : 
												</label>
												<input className="form-control" id="search" type="text" onChange={handleSearch} />
										
										
										</div>
									</div>
									
									<div className="card card-table mt-3">
										<div className="card-body">
											<div className="table-responsive">
												<div style={{ height: 600, width: '100%' }}>
													<DataGrid
														rows={data.nodes}
														columns={columns}
														pageSize={5}
														rowsPerPageOptions={[5]}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* {/* <!-- /Prescription Tab --> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="modal fade custom-modal" id="edit_transactions" onClick={()=>reset()}>
		<div className="modal-dialog modal-dialog-centered modal-lg" role="document" onClick={e => {e.stopPropagation();}}>
			<div className="modal-content">
				<div className="modal-header">
					<h3 className="modal-title">Edit transaction</h3>
					<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>reset()}><span aria-hidden="true">&times;</span></button>
				</div>
					{/* <TransactionForm data={x} active={active}/> */}
				</div>
		</div>
	</div>
</div>
  )
}

export default PatientAppointment