import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DoctorSidebar from "../sidebar";
import * as service from "../../../../services/inventoryService";
import { DataGrid } from "@mui/x-data-grid";
import AddInventoryForm from "./addInventoryForm";
import InventoryForm 	 from "./inventoryForm";


const Inventory = () => {
	const [inventorys, setInventory] = useState([])
	const [search, setSearch] = React.useState('');
	const [x, setX] = useState()
	const [active, setActive] = useState(false)
//Set initial


	const data = {
		nodes: inventorys.filter((item) =>{
			return item.itemCode.toLowerCase().includes(search.toLowerCase()) ||
			item.itemName.toLowerCase().includes(search.toLowerCase()) ||
			item.dosage.toLowerCase().includes(search.toLowerCase())
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
		service.getAllInventory().then((res)=>{
			if(res && res.data){
				setInventory(res.data.object)
			}
		})		
	}
	const reset = () => {
        window.location.reload()
    }

	const activateItem =(id)=>{
		service.activateItem(id);
		window.location.reload();
	}

	const columns = [
		{ field: 'itemCode', headerName: 'Item code', width: 250 },
		{ field: 'itemName', headerName: 'Item name', width: 350 },
		{ field: 'quantity', headerName: 'Quantity', width: 180 },
		{
		  field: 'dosage',
		  headerName: 'Dosage',
		  width: 250,
		},
		{
		  field: 'active',
		  headerName: 'Actions / Status',
		  sortable: false,
		  width: 260,
		  renderCell: (params) => {
			return (
				params.row.active === false ? (
					<>
						<div className="table-action">
							<Link to="#" className="btn btn-sm bg-info-light text-center" onClick={()=>{
								activateItem(params.row.id)
							}} data-bs-toggle="modal" data-bs-target="#edit_inventorys">
									<i className="fa fa-eye"></i> Activate
							</Link>
						</div>
					</>
				) : (
				<div className="table-action">
					<Link to="#" className="btn btn-sm bg-primary-light text-center" onClick={()=>{
						setX(params.row)
						setActive(true)
					}} data-bs-toggle="modal" data-bs-target="#edit_inventorys">
							<i className="fa fa-plus"></i> Update
					</Link>

				</div>

				)
			);
		  },
		},
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
										Profile
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
							{/* <PatientSidebar /> */}
							<DoctorSidebar/>
						</div>
						<div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
							<div className="card">
								<div className="card-body pt-0">
								<div className="user-tabs">
										<ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
											
											<li className="nav-item">
												<a className="nav-link active" href="#pres" data-bs-toggle="tab"><span>Inventory</span></a>
											</li>
											
										</ul>
									</div>
									<div className="tab-content">

										
										{/* <!-- Prescription Tab --> */}
									<div className="tab-pane fade show active" id="pres">
											<div className="row">
												<div className="col-md-3">
													<AddInventoryForm />
													
												</div><div className="col-md-4"></div>
												<div className="col-md-5 ">
													<label htmlFor="search">
														Search:
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
														{/* <Table data={data} className="table table-hover table-center mb-1" >
														{(tableList) => (
														<>
															<Header>
																	<HeaderRow>
																		<HeaderCell>Item Code</HeaderCell>
																		<HeaderCell>Item Name</HeaderCell>
																		<HeaderCell>Dosage</HeaderCell>
																		<HeaderCell>Quantity</HeaderCell>
																		<HeaderCell>Action / Status</HeaderCell>
																	</HeaderRow>
																</Header>
																<Body>
																	{tableList.map((item) => (
																		<Row key={item.id} item={item}>

																			<Cell>{item.itemCode}</Cell>
																			<Cell>{item.itemName}</Cell>
																			<Cell>{item.dosage}</Cell>
																			<Cell>{item.quantity}</Cell>
																			<Cell>
																			{
																				item.active === false ? (
																					<>
																						<div className="table-action">
																							<Link to="#" className="btn btn-sm bg-info-light text-center" onClick={()=>{
																								activateItem(item.id)
																							}} data-bs-toggle="modal" data-bs-target="#edit_inventorys">
																									<i className="fa fa-eye"></i> Activate
																							</Link>
																						</div>
																					</>
																				) : (
																				<div className="table-action">
																					<Link to="#" className="btn btn-sm bg-primary-light text-center" onClick={()=>{
																						setX(item)
																						setActive(true)
																					}} data-bs-toggle="modal" data-bs-target="#edit_inventorys">
																							<i className="fa fa-plus"></i> Update
																					</Link>

																				</div>

																				)
																			}
																			</Cell>
																		</Row>
																	))}
																</Body>
															</>
														)}
														</Table> */}
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
			<div className="modal fade custom-modal" id="edit_inventorys" onClick={()=>reset()}>
				<div className="modal-dialog modal-dialog-centered modal-lg" role="document" onClick={e => {e.stopPropagation();}}>
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title">Edit inventory</h3>
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>reset()}><span aria-hidden="true">&times;</span></button>
						</div>
							<InventoryForm data={x} active={active}/>
						</div>
						
				</div>
			</div>
		</div>
	);
}


export default Inventory;