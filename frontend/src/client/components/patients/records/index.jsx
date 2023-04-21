import React, { useState, useEffect, useRef } from "react";
import { getTransactionsByUser,  requestRecord} from "../../../../services/transactionService";
import { getUserInfo } from "../../../../services/auth";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from 'react-router-dom';
import DashboardSidebar from '../dashboard/sidebar/sidebar';
import StickyBox from 'react-sticky-box';
import { IMG01 } from "../../pages/aboutus/img";
import { useReactToPrint } from "react-to-print";

const Record = () => {
	const [appointment, setAppointment] = useState([])
	const [search, setSearch] = React.useState('');
	const printComponentRef =useRef();
	const printComponentButton = useReactToPrint({
		content: ()=>printComponentRef.current,
		documentTitle: 'Record',
	})
	// console.log(printComponentRef)

	const data = {
		nodes: appointment.filter((item) =>{
			return (item.service.toLowerCase().includes(search.toLowerCase()) 
			|| item.dateTime.toLowerCase().includes(search.toLowerCase())) 
			&& (item.isRequested ===true && item.isApprove ===true)
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
		getTransactionsByUser(getUserInfo().id).then((res)=>{
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
        {field: 'charge', headerName: 'Charge', width: 150 },
		{field: 'dateTime', headerName: 'Appointment Schedule', width: 450 },
		{field: 'isRequested', headerName: 'Status', width: 250, 
        renderCell: (params) => {
			return (
				params.row.status === 'Reject' && params.row.isRequested === true && params.row.isApprove === false?(
					<span className="badge rounded-pill bg-danger-light">Rejected</span>
				):params.row.status === 'Done' && params.row.isRequested === true && params.row.isApprove === true ?(
					<div className="table-action">
						<Link to="#" className="btn btn-sm bg-primary-light text-center" data-bs-toggle="modal" data-bs-target="#appointment"
						onClick={printComponentButton}
						><i className="fa fa-print"></i> Print</Link>
					</div>
				):params.row.status === 'Follow up'?(
					<span className="badge rounded-pill bg-warning-light">Ongoing procedures</span>
				):params.row.status === 'Done' && params.row.isRequested === true && params.row.isApprove === false ?(
					<span className="badge rounded-pill bg-info-light">Pending</span>
				):(
					<div className="table-action">
						<Link to="#" className="btn btn-sm bg-warning-light text-center" data-bs-toggle="modal" data-bs-target="#appointment"
						onClick={()=>{
							requestRecord(params.row.id)
							window.location.reload()
						}}
						><i className="fa fa-book"></i> Request record</Link>
					</div>
				)
				
				)}},
	  ];


  return (
	<>
	<div ref={printComponentRef} style={{width:'100%', height:window.innerHeight}}  hidden={false} >
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
										<a className="nav-link active" href="#pres" data-bs-toggle="tab"><span>Transactions</span></a>
									</li>
								</ul>
							</div>
							<div className="tab-content">

								
								{/* <!-- Prescription Tab --> */}
							<div className="tab-pane fade show active" id="pres">
									<div className="row">
										<div className="col-md-3">
											
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

	<div style={{width:'100%', height:window.innerHeight}} ref={printComponentRef} className='content-page' >
		<div>
			<div className="content">
			<div className="container-fluid">
				<div className="row">
				<div className="col-lg-8 offset-lg-2">
					<div className="invoice-content">
					<div className="invoice-item">
						<div className="row">
						<div className="col-md-6">
							<div className="invoice-logo">
							<img src={IMG01} alt="logo" />
							</div>
						</div>
						<div className="col-md-6">
							<p className="invoice-details">
							<strong>Order:</strong> #00124 <br></br>
							<strong>Issued:</strong> 20/07/2019
							</p>
						</div>
						</div>
					</div>

					<div className="invoice-item">
						<div className="row">
						<div className="col-md-6">
							<div className="invoice-info">
							<strong className="customer-text">
								Invoice From
							</strong>
							<p className="invoice-details invoice-details-two">
														Dr. Eric Buckles <br></br>
														806  Twin Willow Lane, Old Forge,<br></br>
														Newyork, USA <br></br>
													</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="invoice-info invoice-info2">
							<strong className="customer-text">Invoice To</strong>
							<p className="invoice-details">
								Walter Roberson 299 Star Trek Drive, Panama City,
								Florida, 32405, USAaa
							</p>
							</div>
						</div>
						</div>
					</div>

					<div className="invoice-item">
						<div className="row">
						<div className="col-md-12">
							<div className="invoice-info">
							<strong className="customer-text">
								Payment Method
							</strong>
							<p className="invoice-details invoice-details-two">
								Debit Card XXXXXXXXXXXX-2541 HDFC Bank
							</p>
							</div>
						</div>
						</div>
					</div>

					<div className="invoice-item invoice-table-wrap">
						<div className="row">
						<div className="col-md-12">
							<div className="table-responsive">
							<table className="invoice-table table table-bordered">
								<thead>
								<tr>
									<th>Description</th>
									<th className="text-center">Quantity</th>
									<th className="text-center">VAT</th>
									<th className="text-end">Total</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>General Consultation</td>
									<td className="text-center">1</td>
									<td className="text-center">$0</td>
									<td className="text-end">$100</td>
								</tr>
								<tr>
									<td>Video Call Booking</td>
									<td className="text-center">1</td>
									<td className="text-center">$0</td>
									<td className="text-end">$250</td>
								</tr>
								</tbody>
							</table>
							</div>
						</div>
						<div className="col-md-6 col-xl-6 ms-auto">
							<div className="table-responsive">
							<table className="invoice-table-two table">
								<tbody>
								<tr>
									<th>Subtotal:</th>
									<td>
									<span>$350</span>
									</td>
								</tr>
								<tr>
									<th>Discount:</th>
									<td>
									<span>-10%</span>
									</td>
								</tr>
								<tr>
									<th>Total Amount:</th>
									<td>
									<span>$315</span>
									</td>
								</tr>
								</tbody>
							</table>
							</div>
						</div>
						</div>
					</div>

					<div className="other-info">
						<h4>Other information</h4>
						<p className="text-muted mb-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus sed dictum ligula, cursus blandit risus. Maecenas
						eget metus non tellus dignissim aliquam ut a ex. Maecenas
						sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae
						lorem interdum, eu scelerisque tellus fermentum. Curabitur
						sit amet lacinia lorem. Nullam finibus pellentesque
						libero.
						</p>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
      </div>
	</div>
	</>
  )
}

export default Record