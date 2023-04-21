import React from 'react';
import profile from '../../../assets/images/profile1.jpg';
import Slider from 'react-slick';

const Counts = () => {
	const settings = {
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// variableWidth: true,
		arrows: false,

		responsive: [
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};
	return (
		<section className="testimonial">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12">
						{/* <div className="testimonial-slider slider">
							<Slider {...settings}>
								<div className="testimonial-item">
									<div className="row">
										<div className="col-12 col-lg-9">
											<div className="left">
												<h6>Our Patient’s Stories</h6>
												<h2>Testimonials</h2>
												<p>
													Sed ut perspiciatis unde omnis iste natus error
													sit voluptatem accusantium doloremque
													laudantium, totam rem aperiam, eaque ipsa quae
													ab illo inventore veritatis et quasi architecto
													beatae vitae dicta sunt explicabo, sed ut
													perspiciatis unde omnis iste natus error sit
													voluptatem accusantium.
												</p>
												<p>
													Doloremque laudantium, totam rem aperiam, eaque
													ipsa quae ab illo inve ntore veritatis et quasi
													architecto beatae vitae dicta sunt explicabo Sed
													ut perspiciatis unde omnis iste natus error sit
													voluptatem accusantium dolo remque la udantium,
													totam rem aperiam, eaque ipsa quae ab illo
													inventore veritatis et quasi architecto beatae
													vitae dicta sunt e xplicabo.
												</p>
											</div>
										</div>
										<div className="col-12 col-lg-3">
											<div className="testimonial-profile text-center">
												<div>
													<div className="profile-icon">
														<img src={profile} alt="" />
													</div>
													<h4>Jillan Smith</h4>
													<span>Business Organiser</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="testimonial-item">
									<div className="row">
										<div className="col-12 col-lg-9">
											<div className="left">
												<h6>Our Patient’s Stories</h6>
												<h2>Testimonials</h2>
												<p>
													Sed ut perspiciatis unde omnis iste natus error
													sit voluptatem accusantium doloremque
													laudantium, totam rem aperiam, eaque ipsa quae
													ab illo inventore veritatis et quasi architecto
													beatae vitae dicta sunt explicabo, sed ut
													perspiciatis unde omnis iste natus error sit
													voluptatem accusantium.
												</p>
												<p>
													Doloremque laudantium, totam rem aperiam, eaque
													ipsa quae ab illo inve ntore veritatis et quasi
													architecto beatae vitae dicta sunt explicabo Sed
													ut perspiciatis unde omnis iste natus error sit
													voluptatem accusantium dolo remque la udantium,
													totam rem aperiam, eaque ipsa quae ab illo
													inventore veritatis et quasi architecto beatae
													vitae dicta sunt e xplicabo.
												</p>
											</div>
										</div>
										<div className="col-12 col-lg-3">
											<div className="testimonial-profile text-center">
												<div>
													<div className="profile-icon">
														<img src={profile} alt="" />
													</div>
													<h4>Jillan Smith</h4>
													<span>Business Organiser</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="testimonial-item">
									<div className="row">
										<div className="col-12 col-lg-9">
											<div className="left">
												<h6>Our Patient’s Stories</h6>
												<h2>Testimonials</h2>
												<p>
													Sed ut perspiciatis unde omnis iste natus error
													sit voluptatem accusantium doloremque
													laudantium, totam rem aperiam, eaque ipsa quae
													ab illo inventore veritatis et quasi architecto
													beatae vitae dicta sunt explicabo, sed ut
													perspiciatis unde omnis iste natus error sit
													voluptatem accusantium.
												</p>
												<p>
													Doloremque laudantium, totam rem aperiam, eaque
													ipsa quae ab illo inve ntore veritatis et quasi
													architecto beatae vitae dicta sunt explicabo Sed
													ut perspiciatis unde omnis iste natus error sit
													voluptatem accusantium dolo remque la udantium,
													totam rem aperiam, eaque ipsa quae ab illo
													inventore veritatis et quasi architecto beatae
													vitae dicta sunt e xplicabo.
												</p>
											</div>
										</div>
										<div className="col-12 col-lg-3">
											<div className="testimonial-profile text-center">
												<div>
													<div className="profile-icon">
														<img src={profile} alt="" />
													</div>
													<h4>Jillan Smith</h4>
													<span>Business Organiser</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Slider>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Counts;
