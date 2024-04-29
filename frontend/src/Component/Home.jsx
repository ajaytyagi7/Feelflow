import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <div className='container-fluid'>
        <header className='header'>
            <div className='py-5 mx-auto container-fluid'>
                <h1 className='text-white fw-bold  display-4 text-center mt-5 '>Empowering Schools with <br />
                Innovative Solutions</h1>
                <p className='text-center text-white fs-5'>India's Leading Cloud-Based School Management Software</p>
                <div className="row home-btn-chat">
                    <div className="col-md-2">
                        <button className='btn btn-primary'>30 Days Trail</button>
                    </div>
                    <div className="col-md-2">
                        <button className='btn btn-danger'>Let's Chat</button>
                    </div>

                </div>
                <img src="https://feeflow.in/assets/img/herox@2x.png" alt="" />
            </div>

        </header>
        <div className="container-fluid p-5">
            <h3 className='text-center'>22+ Key Features & Modules</h3>
            <p className='text-center text-secondary fs-5'>Discover how these features enhance your experience, <br />
             streamline tasks, and provide valuable functionality,<br />
              enabling you to achieve your goals efficiently.</p>
            <div className="row ">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center fw-bold'>Student Management </h5>
                <p className='text-secondary  text-center fw-bold'>Effectively manage student fees, track payments, and generate financial reports related to student accounts.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'>Parents Management </h5>
                <p className='text-secondary  text-center fw-bold'>Collaboration with parents, providing them with access to their child's progress reports, attendance records, and important updates.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'>Staff Management </h5>
                <p className='text-secondary  text-center fw-bold'>Effectively manage staff details, including personal information, qualifications, and employment history, ensuring smooth administration and organization.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Teacher Management</h5>
                <p className='text-secondary  text-center fw-bold'>Simplify teacher-related tasks, such as tracking teaching assignments, scheduling, performance evaluations, and professional development.</p> 
                 </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center fw-bold  '> Attachments Book Management</h5>
                <p className='text-secondary  text-center fw-bold'>Easily manage and track the availability and borrowing of books and other educational resources in the school library</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Attendance Management</h5>
                <p className='text-secondary  text-center fw-bold'>Streamline attendance tracking and reporting, ensuring accurate records and facilitating efficient monitoring of student attendance.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Bulk SMS and Email Management</h5>
                <p className='text-secondary  text-center fw-bold'>Facilitate communication with various stakeholders by enabling the sending of bulk SMS and emails, allowing for quick and effective information dissemination.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> ID Card Management</h5>
                <p className='text-secondary  text-center fw-bold'>Manage student identification cards, ensuring easy access control and efficient tracking of student movements within the school premises.</p> 
                 </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'>Certificate Management </h5>
                <p className='text-secondary  text-center fw-bold'>Streamline the process of issuing and managing certificates for various achievements and qualifications, ensuring accurate and organized record-keeping</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Events Management </h5>
                <p className='text-secondary  text-center fw-bold'>Organize and manage school events, such as parent-teacher meetings, sports days, and cultural activities, to ensure smooth planning and execution.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Homework Management</h5>
                <p className='text-secondary  text-center fw-bold'>Simplify the assignment and submission of homework, facilitating effective communication between teachers, students, and parents.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Hostel Management</h5>
                <p className='text-secondary  text-center fw-bold'>Efficiently manage hostel facilities, including room allocation, inventory management, and student check-ins and check-outs.</p> 
                 </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'>Human Resource Management </h5>
                <p className='text-secondary  text-center fw-bold'>Streamline HR-related tasks, including employee information management, attendance tracking, leave management, and payroll processing.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Library Management</h5>
                <p className='text-secondary  text-center fw-bold'>Digitally manage the school library, including cataloging books, tracking borrowing and returns, and generating reports on library usage.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Live Class Management</h5>
                <p className='text-secondary  text-center fw-bold'>Facilitate virtual learning by providing tools for conducting live online classes, including video conferencing, screen sharing, and interactive features.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'>Office Accounting Management </h5>
                <p className='text-secondary  text-center fw-bold'>Simplify financial management by tracking expenses, generating invoices, and managing payroll, ensuring accurate and efficient accounting processes.</p> 
                 </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Students Accounting Management</h5>
                <p className='text-secondary  text-center fw-bold'>Effectively manage student fees, track payments, and generate financial reports related to student accounts.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'>Online Exam Management </h5>
                <p className='text-secondary  text-center fw-bold'>Conduct and manage online examinations, including question paper creation, grading, and result generation, providing a seamless exam experience.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Reception Management</h5>
                <p className='text-secondary  text-center fw-bold'>Streamline front desk operations, including visitor management, appointment scheduling, and inquiries handling, ensuring efficient reception services.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Transport Management</h5>
                <p className='text-secondary  text-center fw-bold'>Manage school transportation, including route planning, vehicle tracking, and student transportation scheduling, ensuring safe and reliable transportation services.</p> 
                 </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> School Website</h5>
                <p className='text-secondary  text-center fw-bold'>Enhance the school's website with customizable modules to showcase information, news, events, and important updates to visitors and parents.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> WhatsApp Integration</h5>
                <p className='text-secondary  text-center fw-bold'>Seamlessly integrate WhatsApp communication into your school management system, allowing for efficient communication with staff, and students.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> Multi Language Software</h5>
                <p className='text-secondary  text-center fw-bold'>A powerful multilingual school management solution that enables efficient management of student, staff, and parent information.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src="" alt="" />
                <h5 className='text-center  fw-bold'> In-built Email Communication</h5>
                <p className='text-secondary  text-center fw-bold'>Efficiently manage communication within your school management system through a comprehensive mailbox feature. Stay connected connections.</p> 
                 </div>
            </div>
        </div>

        <div className="container-fluid bg-secondar-subtle">
            <h1 className='text-center fw-bold '>Advantages of FeeFlow Technologies</h1>
            <h6 className='text-center text-secondary  fs-5 '>Say goodbye to manual paperwork, tedious processes, and <br />
             scattered information. Embrace the advantages of <br />
              FeeFlow Technologies and unlock the true potential of <br />
               your educational institution.</h6>
            <img className='mx-auto img-fluid' src="http://feeflow.in/assets/img/whatsapp/we-are-online.png" alt="" />

            <div className="row p-5">
                <div className="col-md-6">
                    <h4 className='fw-bold'>Admission Dashboard</h4>
                    <h5 className='text-secondary '>Welcome to a hassle-free admission process. Our Student Admission Dashboard feature streamlines the journey from application to enrollment. Manage inquiries, applications, and approvals seamlessly in one place. Monitor each step in real time, ensuring a smooth transition for both students and administrators. With customizable workflows and automated notifications, stay on top of every admission detail. Whether you're managing multiple campuses or a single institution, our Admission Dashboard empowers you to make informed decisions and provide an exceptional onboarding experience.</h5>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://feeflow.in/assets/img/student-admission.jpg" alt="" />
                </div>
            </div>

            <div className="row p-5">
                <div className="col-md-6">
                <img className='img-fluid' src="https://feeflow.in/assets/img/student-admission.jpg" alt="" />
                   
                </div>
                <div className="col-md-6">
                    <h4 className='fw-bold'>Admission Dashboard</h4>
                    <h5 className='text-secondary '>Welcome to a hassle-free admission process. Our Student Admission Dashboard feature streamlines the journey from application to enrollment. Manage inquiries, applications, and approvals seamlessly in one place. Monitor each step in real time, ensuring a smooth transition for both students and administrators. With customizable workflows and automated notifications, stay on top of every admission detail. Whether you're managing multiple campuses or a single institution, our Admission Dashboard empowers you to make informed decisions and provide an exceptional onboarding experience.</h5>
                </div>
            </div>

            <div className="row p-5">
                <div className="col-md-6">
                    <h4 className='fw-bold'>Admission Dashboard</h4>
                    <h5 className='text-secondary '>Welcome to a hassle-free admission process. Our Student Admission Dashboard feature streamlines the journey from application to enrollment. Manage inquiries, applications, and approvals seamlessly in one place. Monitor each step in real time, ensuring a smooth transition for both students and administrators. With customizable workflows and automated notifications, stay on top of every admission detail. Whether you're managing multiple campuses or a single institution, our Admission Dashboard empowers you to make informed decisions and provide an exceptional onboarding experience.</h5>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://feeflow.in/assets/img/student-admission.jpg" alt="" />
                </div>
            </div>

            <div className="row p-5">
                <div className="col-md-6">
                <img className='img-fluid' src="https://feeflow.in/assets/img/student-admission.jpg" alt="" />
                  
                </div>
                <div className="col-md-6">
                    <h4 className='fw-bold'>Admission Dashboard</h4>
                    <h5 className='text-secondary '>Welcome to a hassle-free admission process. Our Student Admission Dashboard feature streamlines the journey from application to enrollment. Manage inquiries, applications, and approvals seamlessly in one place. Monitor each step in real time, ensuring a smooth transition for both students and administrators. With customizable workflows and automated notifications, stay on top of every admission detail. Whether you're managing multiple campuses or a single institution, our Admission Dashboard empowers you to make informed decisions and provide an exceptional onboarding experience.</h5>
                </div>
            </div>
            <div className=''>
            <img className='img-fluid home-school' src="https://feeflow.in/assets/img/school-collabe.webp" alt="" />
            </div>
        </div>
        
        <div className='p-5 bg-secondary-subtle'>
            <h1 className='text-center fw-bold mb-4'>Reasons To Choose FeeFlow</h1>
            <h5 className='text-center text-secondary fw-bold mb-5'>There are several compelling reasons to choose FeeFlow Technologies for your school's management needs:</h5>
            <div className=''>
            <div className=''>
            <h5 className='fw-bold '> </h5>
            <h6 className='text-secondary fs-5'></h6>
            </div>

            <div className='p-2'>
            <h5 className='fw-bold '> 1. Comprehensive Solution:</h5>
            <h6 className='text-secondary fs-5 mx-4'>FeeFlow offers a comprehensive School Management System that covers a wide range of modules and features. From student management to attendance tracking, online exams, library management, accounting, and more, our system provides a holistic approach to school administration, consolidating multiple functionalities into one streamlined platform.</h6>
            </div>

            <div className='p-2'>
            <h5 className='fw-bold '> 2. Cloud-Based and Accessible Anywhere:</h5>
            <h6 className='text-secondary fs-5 mx-4'>Our cloud-based system allows you to access your school's data and manage operations from anywhere with an internet connection. Whether you're in the school premises, at home, or on the go, you can conveniently oversee administrative tasks, monitor student progress, and communicate with stakeholders seamlessly.</h6>
            </div>

            <div className='p-2'>
            <h5 className='fw-bold '> 3. Data Security and Privacy:</h5>
            <h6 className='text-secondary fs-5 mx-4'>We prioritize the security and confidentiality of your data. With robust encryption, secure cloud infrastructure, access controls, and adherence to data protection regulations, we take extensive measures to ensure that your information remains protected from unauthorized access and privacy breaches.</h6>
            </div>

            <div className='p-2'>
            <h5 className='fw-bold '> 4. Customization and Scalability:</h5>
            <h6 className='text-secondary fs-5 mx-4'>We understand that every school is unique, and our School Management System is designed to be flexible and customizable. We work closely with you to tailor the system to your specific requirements, ensuring that it aligns with your school's workflows and caters to your unique needs. Moreover, our system is scalable, allowing it to grow and adapt as your institution expands.</h6>
            </div>

            <div className='p-2'>
            <h5 className='fw-bold '> 5. Excellent Customer Support:</h5>
            <h6 className='text-secondary fs-5'>hiasgidg</h6>
            </div>

            <div className='p-2'>
            <h5 className='fw-bold '> 6. Proven Track Record:</h5>
            <h6 className='text-secondary fs-5 mx-4'>FeeFlow Technologies has a proven track record of serving schools and institutions across various educational sectors. We have garnered positive feedback and testimonials from satisfied clients who have experienced the benefits of our School Management System firsthand.</h6>
            </div>
            <h6 className='text-center  fs-5 text-secondary'>Choose FeeFlow Technologies as your partner in transforming school management. Experience the convenience, efficiency, and innovation that our system brings, empowering your institution to thrive in the digital age and provide an enriched educational experience for students, parents, and staff.</h6>

            </div>
        </div>
        
        <div className='support p-5'>
        <div className="row  p-5">
            <div className="col-md-6 p-5">
            <h3 className='text-white py-3 fw-bold'>Recognized for Outstanding Support</h3>
            <p className=' text-white fs-5' >SoftMaji's dedicated team has been honored as key contributors and exceptional support providers in the industry. Our commitment to assisting clients has led to us being awarded the prestigious title of the "Best Support Provider." We take pride in going the extra mile to ensure that our clients receive unparalleled assistance and guidance.</p>
            </div>
            <div className="col-md-6 p-5">
                <img className='img-fluid' src="https://feeflow.in/assets/img/support/softmaji-support@2x.png" alt="" />
            </div>
        </div>
        </div>
        
        <div className='p-5'>
            <h1 className='text-center fw-bold '>Pricing Plan</h1>
            <h6 className='text-center fs-5 text-secondary'>  Packages Sasta Hone Chahiye Janab <br />
                Mehanga To Zamana Bhi Hai.</h6>
            <button className=' home-btn-price mt-4'>Start 30 Days Free Trail</button>
            <div className="row p-5">
                <div className="col-md-3">
                <h5 className='text-center text-secondary py-5'>30% off on Neu & Algon Plan yearly.</h5>
                </div>
                <div className="col-md-3">
                    <h5 className='text-center text-secondary'>Pixy</h5>
                    <p className='text-center '>Rs.499</p>
                    <h5 className='text-center text-secondary'>Ideal for smaller institutions. Efficiently manage up to 1500 students.</h5>
                </div>
                <div className="col-md-3">
                <h5 className='text-center text-secondary'>Neu</h5>
                    <p className='text-center '>Rs.799</p>
                    <h5 className='text-center text-secondary'>Perfect for mid-sized schools. Seamlessly handle up to 2500 students.</h5>
                </div>

                <div className="col-md-3">
                <h5 className='text-center text-secondary'>Algon</h5>
                    <p className='text-center '>Rs.999</p>
                    <h5 className='text-center text-secondary'>Tailored for larger institutions. Easily oversee up to 5000 students.</h5>
                </div>
                <div className='row mt-5'>
                   <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div>
                    <hr />

                   <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div>
                    <hr />
                   <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div>
                    <hr />
                   <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div> 
                    <hr />
                   <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div> 
                    <hr />
                   <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div> 
                    <hr />
                   <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div> 
                    <hr />
                   <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div> 
                    <hr />
                   <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div> 
                    <hr />
                   <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div>
                    <hr /> 
                   <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div> 
                    <hr />
                   
                    <div className="col-md-3">
                    <h5 className='text-secondary'>Student Limit</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>1500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>2500</h5>
                   </div>
                   <div className="col-md-3">
                    <h5 className='text-center text-secondary'>3000</h5>
                   </div> 
                    <hr />

                    <div className="col-md-3">
                   </div>
                   <div className="col-md-3">
                    <button>Get Started</button>
                   </div>
                   <div className="col-md-3">
                   <button>Get Started</button>
                    
                   </div>
                   <div className="col-md-3">
                   <button className='mx-5'>Get Started</button>
                    
                   </div> 
                </div>
                
            </div>
        </div>

        <div>
            <h3 className='text-center fw-bold'>Brands Collaboration</h3>
            <h5 className='text-center text-secondary'>FeeFlow connected with these brands in and as.</h5>
        </div>

        <div className='p-5'>
            <img className='img-fluid home-brand' src="https://feeflow.in/assets/img/brand-collaboration.webp" alt="" />
        </div>

        <div>
            <h3 className='text-center fw-bold'>What Say People</h3>
            <h5 className='text-center text-secondary'>Verified reviews from Google & Trustpilot</h5>
        </div>

        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>

    </div>
  )
}

export default Home