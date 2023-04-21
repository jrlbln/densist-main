import React from 'react';
import config from 'config';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/header/index';
import Dashboard from './components/dashboard';
import Appointments from './components/appointments';
import Specialities from './components/specialities';
import Doctors from './components/doctors';
import Patients from './components/patients';
import Reviews from './components/reviews';
import Transaction from './components/transaction';
import Settings from './components/settings';
import InvoiceReport from './components/invoicereport';
import Invoice from './components/invoicereport/invoice';
import Profile from './components/profile';
import Login from './components/login';
import Register from './components/register';
import ForgotPassword from './components/forgotpassword';
import Lockscreen from './components/lockscreen';
import Error from './components/error404';
import ErrorPage from './components/error500';
import BasicInput from './components/forms/baiscinput';
import FormInput from './components/forminput';
import FormHorizontal from './components/formhorizontal';
import Formvertical from './components/formvertical';
import FormMask from './components/formask';
import FormValidation from './components/formvalidation';
import BlankPage from './components/blankpage';
import Components from './components/component';
import DataTables from './components/datatables';
import BasicTables from './components/basictables';

const AppUniversal = function (props) {
	return (
		<Router basename={`${config.publicPath}`}>
			<div className="main-wrapper">
				<Route render={(props) => <Header {...props} />} />
				<Switch>
					<Route path="/admin" exact component={Dashboard} />
					<Route path="/admin/appointments" exact component={Appointments} />
					<Route path="/admin/specialities" exact component={Specialities} />
					<Route path="/admin/doctors" exact component={Doctors} />
					<Route path="/admin/patients" exact component={Patients} />
					<Route path="/admin/reviews" exact component={Reviews} />
					<Route path="/admin/profile" exact component={Profile} />
					<Route path="/admin/transaction" exact component={Transaction} />
					<Route path="/admin/settings" exact component={Settings} />
					<Route path="/admin/invoice-report" exact component={InvoiceReport} />
					<Route path="/admin/invoice" exact component={Invoice} /> 
					<Route path="/admin/login" exact component={Login} />
					<Route path="/admin/register" exact component={Register} />
					<Route path="/admin/forgotPassword" exact component={ForgotPassword} />
					<Route path="/admin/lockscreen" exact component={Lockscreen} />
					<Route path="/admin/404" exact component={Error} />
					<Route path="/admin/500" exact component={ErrorPage} />
					<Route path="/admin/blank-page" exact component={BlankPage} />
					<Route path="/admin/components" exact component={Components} />
					<Route path="/admin/basic-input" exact component={BasicInput} />
					<Route path="/admin/form-input-group" exact component={FormInput} />
					<Route path="/admin/form-horizontal" exact component={FormHorizontal} />
					<Route path="/admin/form-vertical" exact component={Formvertical} />
					<Route path="/admin/form-mask" exact component={FormMask} />
					<Route path="/admin/form-validation" exact component={FormValidation} />
					<Route path="/admin/tables-basic" exact component={BasicTables} />
					<Route path="/admin/data-tables" exact component={DataTables} />
				</Switch>
			</div>
		</Router>
	);
};

export default AppUniversal;
