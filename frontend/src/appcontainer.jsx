import React from "react";
import config from 'config';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./client/components/header.jsx";
import Footer from "./client/components/footer.jsx";
import TopHeader from  './client/components/topheader.jsx';
import LoginContainer from "./client/components/login/login.jsx";
import Register from "./client/components/register/register.jsx";
import ForgotPassword from "./client/components/forgot-password";
import Home from "./client/components/home/index";
// import Home1 from "./client/components/home/home1";
// import Home2 from "./client/components/home/home2";
// import HomeSlider1 from "./client/components/home/homeslider1";
// import HomeSlider2 from "./client/components/home/homeslider2";
import Aboutus from "./client/components/pages/aboutus/aboutus"
import Contactus from "./client/components/pages/contactus/contactus"
//blog
import BlogList from "./client/components/blog/bloglist";
import BlogGrid from "./client/components/blog/bloggrid";
import BlogDetails from "./client/components/blog/blogdetails";
//pages
import VideoCall from "./client/components/pages/videocall";
import VoiceCall from "./client/components/pages/voicecall";
import SearchDoctor from "./client/components/pages/searchdoctor";
import Calendar from "./client/components/pages/calender";
import Invoice from "./client/components/pages/invoices/invoices";
import InvoiceView from "./client/components/pages/invoices/view";
import DoctorGrid from "./client/components/patients/doctorgrid";
import DoctorList from "./client/components/patients/doctorlist";
import DoctorProfile from "./client/components/patients/doctorprofile";
import DoctorChat from "./client/components/doctors/chat";
import PatientChat from "./client/components/patients/chat";
import MyPatient from "./client/components/doctors/mypatient";
import Booking from "./client/components/patients/booking";
import Checkout from "./client/components/patients/checkout";
import BookingSuccess from "./client/components/patients/booking-success";
import Dashboard from "./client/components/patients/dashboard";
import Favourties from "./client/components/patients/dashboard/favourties";
import Profile from "./client/components/patients/dashboard/profile";
import Password from "./client/components/patients/dashboard/password";
import DoctorDashboard from "./client/components/doctors/dashboard";
import SocialMedia from "./client/components/doctors/socialmedia";
import ScheduleTiming from "./client/components/doctors/scheduletimings";
import DoctorPassword from "./client/components/doctors/password";
import Appointments from "./client/components/doctors/appointments";
import PatientProfile from "./client/components/doctors/transaction";
import AddPescription from "./client/components/doctors/addpescription";
import AddBilling from "./client/components/doctors/addbilling";
import ProfileSetting from "./client/components/doctors/profilesetting";
import Review from "./client/components/doctors/reviews";
import DoctorRegister from "./client/components/doctors/register";
import Terms from "./client/components/pages/terms";
import Policy from "./client/components/pages/policy";
import BlankPage from "./client/components/blankpage";
import Componentss from "./client/components/pages/Components";

import EditBilling from "./client/components/doctors/editbilling/index"
import Inventory from "./client/components/doctors/inventory/index.jsx";
import DentalRecords from "./client/components/doctors/Records/index.jsx";

import PatientAppointment from "./client/components/patients/appointment/index.jsx";
import Transactions from "./client/components/patients/transactions/index.jsx";
import Record from "./client/components/patients/records/index.jsx";

import AppUniversal from "./admin/app-universal";

const AppContainer = function (props) {
  if (props) {
    const url = props.location.pathname.split("/")[1];

    return (
      <Router basename={`${config.publicPath}`}>
        {
        url === "admin" ? (
          <div>
            <Switch>
              <Route path="/admin" component={AppUniversal} />
            </Switch>
          </div>
        ) :
        (
          <div>
            {/* { url === "homeslider1" && <Route render={(props)=> <TopHeader {...props}/>} />} */}
            <Route render={(props) => <Header {...props} />} />
            <Switch>
              <Route path="/patient/doctor-grid" exact component={DoctorGrid} />
              <Route path="/patient/doctor-list" exact component={DoctorList} />
              <Route path="/pages/video-call" exact component={VideoCall} />
              <Route path="/pages/voice-call" exact component={VoiceCall} />
              <Route path="/doctor/chat-doctor" exact component={DoctorChat} />

              <Route path="/login" exact component={LoginContainer} />
              <Route path="/register" exact component={Register} />
              <Route path="/forgot-password" exact component={ForgotPassword} />
              <Route path="(/|/home)" exact component={Home} />	
              {/* <Route path="/home1" exact component={Home1} />	
              <Route path="/home2" exact component={Home2} />	
              <Route path="/homeslider1" exact component={HomeSlider1} />	
              <Route path="/homeslider2" exact component={HomeSlider2} /> */}

              {/* blog */}
              <Route path="/blog/blog-list" exact component={BlogList} />
              <Route path="/blog/blog-grid" exact component={BlogGrid} />
              <Route path="/blog/blog-details" exact component={BlogDetails} />
              {/* pages */}

              <Route
                path="/patient/search-doctor"
                exact
                component={SearchDoctor}
              />
              <Route path="/pages/calendar" exact component={Calendar} />
              <Route path="/pages/invoice" exact component={Invoice} />
              <Route path="/doctor/invoice" exact component={Invoice} />
              <Route path="/pages/invoice-view" exact component={InvoiceView} />
              <Route path="/pages/components" exact component={Componentss} />
              
              <Route
                path="/patient/doctor-profile"
                exact
                component={DoctorProfile}
              />
              <Route path="/doctor/my-patients" exact component={MyPatient} />
              <Route path="/patient/booking" exact component={Booking} />
              <Route
                path="/patient/patient-chat"
                exact
                component={PatientChat}
              />
              <Route path="/patient/checkout" exact component={Checkout} />
              <Route
                path="/patient/booking-success"
                exact
                component={BookingSuccess}
              />
              <Route path="/patient/dashboard" exact component={Dashboard} />
              <Route path="/patient/appointment" exact component={PatientAppointment} />
              <Route path="/patient/records" exact component={Record} />
              <Route path="/patient/transaction" exact component={Transactions} />
              <Route path="/patient/favourites" exact component={Favourties} />
              <Route path="/patient/profile" exact component={Profile} />
              <Route
                path="/patient/change-password"
                exact
                component={Password}
              />
              <Route
                path="/doctor/doctor-dashboard"
                exact
                component={DoctorDashboard}
              />
              <Route path="/social-media" exact component={SocialMedia} />
              <Route
                path="/doctor/schedule-timing"
                exact
                component={ScheduleTiming}
              />
              <Route
                path="/doctor-change-passwword"
                exact
                component={DoctorPassword}
              />
              {/* <Route path="/chat-doctor" exact component={DoctorChat} /> */}
              <Route
                path="/doctor/appointments"
                exact
                component={Appointments}
              />
              <Route
                path="/doctor/transaction"
                exact
                component={PatientProfile}
              />
               <Route
                path="/doctor/inventory"
                exact
                component={Inventory}
              />
               <Route
                path="/doctor/record"
                exact
                component={DentalRecords}
              />
              <Route
                path="/add-prescription"
                exact
                component={AddPescription}
              />
              <Route path="/add-billing" exact component={AddBilling} />
              <Route
                path="/doctor/profile-setting"
                exact
                component={ProfileSetting}
              />
              <Route path="/doctor/review" exact component={Review} />
              <Route
                path="/doctor/doctor-register"
                exact
                component={DoctorRegister}
              />
              <Route path="/pages/terms" exact component={Terms} />
              <Route path="/pages/privacy-policy" exact component={Policy} />
              <Route path="/pages/blank-page" exact component={BlankPage} />
              <Route path="/aboutus" exact component={Aboutus} />
              <Route path="/contactus" exact component={Contactus} />
              {/* <Route path="/editprescription" exact component={EditPrescription}/> */}
              <Route path="/editbilling" exact component={EditBilling}/>
            </Switch>
            <Route render={(props) => <Footer {...props} />} />
          </div>
        )}
      </Router>
    );
  }
  return null;
};

export default AppContainer;
