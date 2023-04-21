import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DoctorSidebar from "../sidebar";
import * as service from "../../../../services/transactionService";
import { DataGrid } from "@mui/x-data-grid";


const DentalRecords = () => {
  const [transactions, setTransactions] = useState([])
	const [search, setSearch] = React.useState('');
//Set initial

	const data = {
		nodes: transactions.filter((item) =>{
			return item.userFullName.toLowerCase().includes(search.toLowerCase()) ||
			item.service.toLowerCase().includes(search.toLowerCase()) ||
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
		service.getRequestedRecords().then((res)=>{
			if(res && res.data){
				setTransactions(res.data.object)
			}
		})		
	}
	const reset = () => {
        window.location.reload()
    }


    const columns = [
      { field: 'date_modified', headerName: 'Dates', width: 250 },
      { field: 'userFullName', headerName: 'Patient name', width: 350 },
      { field: 'charge', headerName: 'Charge', width: 180 },
      {
        field: 'service',
        headerName: 'Service',
        type: 'number',
        width: 250,
      },
      {
        field: 'status',
        headerName: 'Actions / Status',
        sortable: true,
        width: 260,
        renderCell: (params) => {
          return (
              params.row.isApprove === true ? (
                <span className="badge rounded-pill bg-success-light">Approve</span>
              ):params.row.status === "Reject" ? (
                <span className="badge rounded-pill bg-danger-light">Reject</span>
              ) : (
              <div className="table-action">
                <Link to="#" className="btn btn-sm bg-info-light text-center" onClick={()=>{
                  console.log(params.row.id)
                  service.approveRequestRecord(params.row.id);
                  window.location.reload();
                }} data-bs-toggle="modal" data-bs-target="#edit_transactions">
                    <i className="fa fa-check"></i> Approve 
                </Link>
                <Link to="#" className="btn btn-sm bg-danger-light text-center" onClick={()=>{
                  service.rejectRequestedRecords(params.row.id);
                  window.location.reload();
                }} data-bs-toggle="modal" data-bs-target="#edit_transactions">
                    <i className="fa fa-times"></i> Reject 
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
                      <a className="nav-link active" href="#pres" data-bs-toggle="tab"><span>Records</span></a>
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
                          {/* <Table data={data} className="table table-hover table-center mb-1" >
                          {(tableList) => (
                            
                            <>
                            <Header>
                                <HeaderRow>
                                  <HeaderCell>Dates</HeaderCell>
                                  <HeaderCell>Patient</HeaderCell>
                                  <HeaderCell>Service</HeaderCell>
                                  <HeaderCell>Action / Status</HeaderCell>
                                </HeaderRow>
                              </Header>
                              <Body>
                                  {tableList.map((item) => (
                                    <Row key={item.id} item={item}>
                                      
                                      <Cell>{item.date_modified}</Cell>
                                      <Cell>{item.userFullName}</Cell>
                                      <Cell>{item.service}</Cell>
                                      <Cell>
                                      {
                                        item.isApprove === true ? (
                                          <div className="">APPROVE</div>
                                        ):item.status === "Reject" ? (
                                          <div className="">REJECTED</div>
                                        ) : (
                                        <div className="table-action">
                                          <Link to="#" className="btn btn-sm bg-info-light text-center" onClick={()=>{
                                            service.approveRequestRecord(item.id);
                                            window.location.reload();
                                          }} data-bs-toggle="modal" data-bs-target="#edit_transactions">
                                              <i className="fa fa-check"></i> Approve 
                                          </Link>
                                          <Link to="#" className="btn btn-sm bg-danger-light text-center" onClick={()=>{
                                            service.rejectRequestedRecords(item.id);
                                            window.location.reload();
                                          }} data-bs-toggle="modal" data-bs-target="#edit_transactions">
                                              <i className="fa fa-times"></i> Reject 
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
    {/* <div className="modal fade custom-modal" id="edit_transactions" onClick={()=>reset()}>
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document" onClick={e => {e.stopPropagation();}}>
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Edit transaction</h3>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>reset()}><span aria-hidden="true">&times;</span></button>
          </div>
            <TransactionForm data={x} active={active}/>
          </div>
          
      </div>
    </div> */}
  </div>
  )
}

export default DentalRecords