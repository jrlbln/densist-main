import React, { useEffect,useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom'
import Joi from 'joi';
import { loginUser } from '../../../services/auth';
import loginBanner from '../../assets/images/login-banner.png';
import toast from '../../../utils/toast';
const LoginContainer = () => {
	useEffect(() => {
		document.body.classList.add('account-page');

		return () => document.body.classList.remove('account-page');
	}, []);


	const navigate = useHistory()
  
	const [loginForm, setLoginForm] = useState({
	  username: '',
	  password: '',
	})
  
	const [errors, setErrors] = useState({})
  
	const schema = Joi.object({
	  username: Joi.string().required(),
	  password: Joi.string().required(),
	})
  
	const handleOnChange = (event) => {
	  event.preventDefault()
	  setLoginForm({
		...loginForm,
		[event.currentTarget.name]: event.currentTarget.value,
	  })
  
	  const { error } = schema
		.extract(event.currentTarget.name)
		.label(event.currentTarget.name)
		.validate(event.currentTarget.value)
  
	  if (error) {
		setErrors({
		  ...errors,
		  [event.currentTarget.name]: error.details[0].message,
		})
	  } else {
		delete errors[event.currentTarget.name]
		setErrors(errors)
	  }
	}
  
	const handleOnSubmit = (event) => {
	  	event.preventDefault()
		  loginUser(loginForm).then((res) => {
		  redirect(res.data)
		})
	  }
	
	const redirect = (data) => {
	  if (data && data.status === 1) {
		localStorage.setItem('currentUser', JSON.stringify(data))
		toast(data.message)
		navigate.push(`/doctor/doctor-dashboard`)
	  } else {
		alert(data.message)
	  }
	}
  
	const isFormInvalid = () => {
	  const result = schema.validate(loginForm)
	  return !!result.error
	}
	console.log(loginForm)


	return (
		<div className='content'>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div className="account-content">
							<div className="row align-items-center justify-content-center">
								<div className="col-md-7 col-lg-6 login-left">
									<img
										src={loginBanner}
										className="img-fluid"
										alt="EDDOC Login"
									/>
								</div>
								<div className="col-md-12 col-lg-6 login-right">
									<div className="login-header">
										<h3>
											Login <span>EDDOC</span>
										</h3>
									</div>
									<form onSubmit={handleOnSubmit} noValidate>
										<div className="form-group form-focus">
											<input 
												placeholder="Username"
												name="username"
												value={loginForm.username}
												onChange={handleOnChange}
												invalid={!!errors.username}
												feedback={errors.username}
												className="form-control floating" />
											<label className="focus-label">Username</label>
										</div>
										<div className="form-group form-focus">
											<input
												type="password"
												placeholder="Password"
												name="password"
												value={loginForm.password}
												onChange={handleOnChange}
												invalid={!!errors.password}
												feedback={errors.password}
												autoComplete="true"
												className="form-control floating"
											/>
											<label className="focus-label">Password</label>
										</div>
										<div className="text-end">
											<Link to="/forgot-password" className="forgot-link">
												Forgot Password ?
											</Link>
										</div>
										<button
											className="btn btn-primary  w-100 btn-lg login-btn"
											type="submit"
											disabled={isFormInvalid()}
										>
											Login
										</button>
									
										
										<div className="text-center dont-have">
											Don’t have an account? {' '}
											<Link to="/register">Register</Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginContainer;
