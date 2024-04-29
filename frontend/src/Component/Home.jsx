import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import accounting from  './images/accounting.png'
import student from  './images/student.png'
import parents from  './images/parents.png'
import teacher from  './images/teacher.png'
import communication from  './images/communication.png'
import exam from  './images/exam.png'
import staff from  './images/staff.png'
import homework from  './images/homework.png'
import sms from  './images/sms.png'
import id from  './images/id.png'
import hostel from  './images/hostel.png'
import attachment from  './images/attachment.png'
import library from  './images/library.png'
import live from  './images/live.png'
import certificate from  './images/certificate.png'
import events from  './images/events.png'
import reception from  './images/reception.png'
import transport from  './images/transport.png'
import website from  './images/website.png'
import whatsapp from  './images/whatsapp.png'
import laptop from  './images/laptop.png'
import admission from  './images/admission.png'
import list from  './images/list.png'
import fees from  './images/fees.png'
import attendence from  './images/attendence.png'
import softmaji from  './images/softmaji.png'



const Home = () => {
  return (
    <div className='container-fluid'>
        <header className='header'>
            <div className='py-5 mx-auto container-fluid'>
                <h1 className='text-white fw-bold  display-4 text-center mt-5 '>Empowering Schools with <br />
                Innovative Solutions</h1>
                <p className='text-center text-white fs-5'>India's Leading Cloud-Based School Management Software</p>
                <div className="row home-btn-chat py-3">
                    <div className="col-md-3">
                        <button className='Btn'>30 Days Trail</button>
                    </div>
                    <div className="col-md-3">
                        <button className='cssbuttons-io-button'>Let's Chat</button>
                    </div>

                </div>
                <img className='img-fluid p-3 mx-5 ' src={laptop} alt="" />
            </div>

        </header>
        <div className='p-5 mb-5'>
            <div className='p-5'></div>

        </div>
        <div className="container-fluid p-5">
            <h3 className='text-center text-color '>22+ Key Features & Modules</h3>
            <p className='text-center text-secondary fs-5'>Discover how these features enhance your experience, <br />
             streamline tasks, and provide valuable functionality,<br />
              enabling you to achieve your goals efficiently.</p>
            <div className="row  p-5">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={student} alt="" />
                <h5 className='text-center fw-bold'>Student Management </h5>
                <p className='text-secondary  text-center fw-bold'>Effectively manage student fees, track payments, and generate financial reports related to student accounts.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={parents} alt="" />
                <h5 className='text-center  fw-bold'>Parents Management </h5>
                <p className='text-secondary  text-center fw-bold'>Collaboration with parents, providing them with access to their child's progress reports, attendance records, and important updates.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={staff} alt="" />
                <h5 className='text-center  fw-bold'>Staff Management </h5>
                <p className='text-secondary  text-center fw-bold'>Effectively manage staff details, including personal information, qualifications, and employment history, ensuring smooth administration and organization.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={teacher} alt="" />
                <h5 className='text-center  fw-bold'> Teacher Management</h5>
                <p className='text-secondary  text-center fw-bold'>Simplify teacher-related tasks, such as tracking teaching assignments, scheduling, performance evaluations, and professional development.</p> 
                 </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={attachment} alt="" />
                <h5 className='text-center fw-bold  '> Attachments Book Management</h5>
                <p className='text-secondary  text-center fw-bold'>Easily manage and track the availability and borrowing of books and other educational resources in the school library</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={library} alt="" />
                <h5 className='text-center  fw-bold'> Attendance Management</h5>
                <p className='text-secondary  text-center fw-bold'>Streamline attendance tracking and reporting, ensuring accurate records and facilitating efficient monitoring of student attendance.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={sms} alt="" />
                <h5 className='text-center  fw-bold'> Bulk SMS and Email Management</h5>
                <p className='text-secondary  text-center fw-bold'>Facilitate communication with various stakeholders by enabling the sending of bulk SMS and emails, allowing for quick and effective information dissemination.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={id} alt="" />
                <h5 className='text-center  fw-bold'> ID Card Management</h5>
                <p className='text-secondary  text-center fw-bold'>Manage student identification cards, ensuring easy access control and efficient tracking of student movements within the school premises.</p> 
                 </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={certificate} alt="" />
                <h5 className='text-center  fw-bold'>Certificate Management </h5>
                <p className='text-secondary  text-center fw-bold'>Streamline the process of issuing and managing certificates for various achievements and qualifications, ensuring accurate and organized record-keeping</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={events} alt="" />
                <h5 className='text-center  fw-bold'> Events Management </h5>
                <p className='text-secondary  text-center fw-bold'>Organize and manage school events, such as parent-teacher meetings, sports days, and cultural activities, to ensure smooth planning and execution.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={homework} alt="" />
                <h5 className='text-center  fw-bold'> Homework Management</h5>
                <p className='text-secondary  text-center fw-bold'>Simplify the assignment and submission of homework, facilitating effective communication between teachers, students, and parents.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={hostel} alt="" />
                <h5 className='text-center  fw-bold'> Hostel Management</h5>
                <p className='text-secondary  text-center fw-bold'>Efficiently manage hostel facilities, including room allocation, inventory management, and student check-ins and check-outs.</p> 
                 </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={reception} alt="" />
                <h5 className='text-center  fw-bold'>Human Resource Management </h5>
                <p className='text-secondary  text-center fw-bold'>Streamline HR-related tasks, including employee information management, attendance tracking, leave management, and payroll processing.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={library} alt="" />
                <h5 className='text-center  fw-bold'> Library Management</h5>
                <p className='text-secondary  text-center fw-bold'>Digitally manage the school library, including cataloging books, tracking borrowing and returns, and generating reports on library usage.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={live} alt="" />
                <h5 className='text-center  fw-bold'> Live Class Management</h5>
                <p className='text-secondary  text-center fw-bold'>Facilitate virtual learning by providing tools for conducting live online classes, including video conferencing, screen sharing, and interactive features.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={accounting} alt="" />
                <h5 className='text-center  fw-bold'>Office Accounting Management </h5>
                <p className='text-secondary  text-center fw-bold'>Simplify financial management by tracking expenses, generating invoices, and managing payroll, ensuring accurate and efficient accounting processes.</p> 
                 </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={accounting} alt="" />
                <h5 className='text-center  fw-bold'> Students Accounting Management</h5>
                <p className='text-secondary  text-center fw-bold'>Effectively manage student fees, track payments, and generate financial reports related to student accounts.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={exam} alt="" />
                <h5 className='text-center  fw-bold'>Online Exam Management </h5>
                <p className='text-secondary  text-center fw-bold'>Conduct and manage online examinations, including question paper creation, grading, and result generation, providing a seamless exam experience.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={reception} alt="" />
                <h5 className='text-center  fw-bold'> Reception Management</h5>
                <p className='text-secondary  text-center fw-bold'>Streamline front desk operations, including visitor management, appointment scheduling, and inquiries handling, ensuring efficient reception services.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={transport} alt="" />
                <h5 className='text-center  fw-bold'> Transport Management</h5>
                <p className='text-secondary  text-center fw-bold'>Manage school transportation, including route planning, vehicle tracking, and student transportation scheduling, ensuring safe and reliable transportation services.</p> 
                 </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={website} alt="" />
                <h5 className='text-center  fw-bold'> School Website</h5>
                <p className='text-secondary  text-center fw-bold'>Enhance the school's website with customizable modules to showcase information, news, events, and important updates to visitors and parents.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={whatsapp} alt="" />
                <h5 className='text-center  fw-bold'> WhatsApp Integration</h5>
                <p className='text-secondary  text-center fw-bold'>Seamlessly integrate WhatsApp communication into your school management system, allowing for efficient communication with staff, and students.</p>
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={website} alt="" />
                <h5 className='text-center  fw-bold'> Multi Language Software</h5>
                <p className='text-secondary  text-center fw-bold'>A powerful multilingual school management solution that enables efficient management of student, staff, and parent information.</p> 
                </div>
                <div className="col-md-3">
                <img className='img-fluid mx-auto' src={communication} alt="" />
                <h5 className='text-center  fw-bold'> In-built Email Communication</h5>
                <p className='text-secondary  text-center fw-bold'>Efficiently manage communication within your school management system through a comprehensive mailbox feature. Stay connected connections.</p> 
                 </div>
            </div>
        </div>

        <div className="container-fluid bg-secondar-subtle p-5">
            <h1 className='text-center fw-bold text-color'>Advantages of FeeFlow Technologies</h1>
            <h6 className='text-center text-secondary  fs-5 '>Say goodbye to manual paperwork, tedious processes, and <br />
             scattered information. Embrace the advantages of <br />
              FeeFlow Technologies and unlock the true potential of <br />
               your educational institution.</h6>
            <img className='mx-auto img-fluid' src="http://feeflow.in/assets/img/whatsapp/we-are-online.png" alt="" />

            <div className="row p-5">
                <div className="col-md-6">
                    <h4 className='fw-bold p-3'>Admission Dashboard</h4>
                    <h5 className='text-secondary '>Welcome to a hassle-free admission process. Our Student Admission Dashboard feature streamlines the journey from application to enrollment. Manage inquiries, applications, and approvals seamlessly in one place. Monitor each step in real time, ensuring a smooth transition for both students and administrators. With customizable workflows and automated notifications, stay on top of every admission detail. Whether you're managing multiple campuses or a single institution, our Admission Dashboard empowers you to make informed decisions and provide an exceptional onboarding experience.</h5>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={admission} alt="" />
                </div>
            </div>

            <div className="row p-5">
                <div className="col-md-6">
                <img className='img-fluid' src={list} alt="" />
                   
                </div>
                <div className="col-md-6">
                    <h4 className='fw-bold p-3'>Admission Dashboard</h4>
                    <h5 className='text-secondary '>Welcome to a hassle-free admission process. Our Student Admission Dashboard feature streamlines the journey from application to enrollment. Manage inquiries, applications, and approvals seamlessly in one place. Monitor each step in real time, ensuring a smooth transition for both students and administrators. With customizable workflows and automated notifications, stay on top of every admission detail. Whether you're managing multiple campuses or a single institution, our Admission Dashboard empowers you to make informed decisions and provide an exceptional onboarding experience.</h5>
                </div>
            </div>

            <div className="row p-5">
                <div className="col-md-6">
                    <h4 className='fw-bold p-3'>Admission Dashboard</h4>
                    <h5 className='text-secondary '>Welcome to a hassle-free admission process. Our Student Admission Dashboard feature streamlines the journey from application to enrollment. Manage inquiries, applications, and approvals seamlessly in one place. Monitor each step in real time, ensuring a smooth transition for both students and administrators. With customizable workflows and automated notifications, stay on top of every admission detail. Whether you're managing multiple campuses or a single institution, our Admission Dashboard empowers you to make informed decisions and provide an exceptional onboarding experience.</h5>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={attendence} alt="" />
                </div>
            </div>

            <div className="row p-5">
                <div className="col-md-6">
                <img className='img-fluid' src={fees} alt="" />
                  
                </div>
                <div className="col-md-6">
                    <h4 className='fw-bold p-3'>Admission Dashboard</h4>
                    <h5 className='text-secondary '>Welcome to a hassle-free admission process. Our Student Admission Dashboard feature streamlines the journey from application to enrollment. Manage inquiries, applications, and approvals seamlessly in one place. Monitor each step in real time, ensuring a smooth transition for both students and administrators. With customizable workflows and automated notifications, stay on top of every admission detail. Whether you're managing multiple campuses or a single institution, our Admission Dashboard empowers you to make informed decisions and provide an exceptional onboarding experience.</h5>
                </div>
            </div>
            <div className=''>
            <img className='img-fluid home-school' src="https://feeflow.in/assets/img/school-collabe.webp" alt="" />
            </div>
        </div>
        
        <div className='p-5 bg-secondary-subtle'>
            <h1 className='text-center fw-bold mb-4 text-color'>Reasons To Choose FeeFlow</h1>
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
                <img className='img-fluid' src={softmaji} alt="" />
            </div>
        </div>
        </div>
        
        <div className='p-5'>
            <h1 className='text-center fw-bold  text-color'>Pricing Plan</h1>
            <h6 className='text-center fs-5 text-secondary'>  Packages Sasta Hone Chahiye Janab <br />
                Mehanga To Zamana Bhi Hai.</h6>
            <button className=' home-btn-price mt-4'>Start 30 Days Free Trail</button>
            <div className="row p-5">
                <div className="col-md-3">
                <h5 className='text-center text-secondary py-5'>30% off on Neu & Algon Plan yearly.</h5>
                </div>
                <div className="col-md-3">
                    <h5 className='text-center text-secondary'>Pixy</h5>
                    <p className='text-center text-color'>Rs.499</p>
                    <h5 className='text-center text-secondary'>Ideal for smaller institutions. Efficiently manage up to 1500 students.</h5>
                </div>
                <div className="col-md-3">
                <h5 className='text-center text-secondary'>Neu</h5>
                    <p className='text-center text-color'>Rs.799</p>
                    <h5 className='text-center text-secondary'>Perfect for mid-sized schools. Seamlessly handle up to 2500 students.</h5>
                </div>

                <div className="col-md-3">
                <h5 className='text-center text-secondary'>Algon</h5>
                    <p className='text-center text-color'>Rs.999</p>
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
                   <button className=''>Get Started</button>
                    
                   </div>
                   <div className="col-md-3">
                   <button className=' cssbuttons-io-button1'>Get Started</button>
                    
                   </div> 
                </div>
                
            </div>
        </div>

        <div>
            <h3 className='text-center fw-bold text-color'>Brands Collaboration</h3>
            <h5 className='text-center text-secondary'>FeeFlow connected with these brands in and as.</h5>
        </div>

        <div className='p-5'>
            <img className='img-fluid home-brand' src="https://feeflow.in/assets/img/brand-collaboration.webp" alt="" />
        </div>

        <div>
            <h3 className='text-center fw-bold'>What Say People</h3>
            <h5 className='text-center text-secondary'>Verified reviews from Google & Trustpilot</h5>
        </div>

        <div className='p-5'>
            <div className="row p-3">
                
                    <div className="col-md-4">
                    <div className="card shadow p-3">
                        <p className='text-center text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, earum soluta, doloremque, necessitatibus aspernatur harum culpa consequatur itaque velit eius iusto officia. Minus, dolor et?</p>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card shadow p-3">
                    <p className='text-center text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illum ea impedit iure deleniti nam? Dolore exercitationem possimus vitae error rerum aliquid, animi ipsa doloremque?</p>
                    
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card shadow p-3">
                    <p className='text-center text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci neque quae commodi earum. Ducimus placeat commodi reiciendis optio voluptatibus fugit officiis alias aliquid eum sequi!</p>
                    
                    </div>
                    
                    </div>
                    <div className="col-md-4 mt-3">
                    <h5  className='text-center'>Amit Desai</h5>
                    <p className='text-secondary text-center '>Principle, Globle Harmony School</p> 
                    </div>
                    <div className="col-md-4 mt-3">
                    <h5  className='text-center'>Anjali Verma</h5>
                    <p className='text-secondary text-center '>Adminstrator, Blossom Academy</p> 
                    </div>
                    <div className="col-md-4 mt-3">
                    <h5  className='text-center'>Sneha Desai</h5>
                    <p className='text-secondary text-center '>Principle, Globle Harmony School</p> 
                    </div>
                    
            </div>
        </div>

        <div>
            <h2 className='text-center fw-bold text-color'>FeeFlow's Desi Avengers</h2>
            <h5 className='text-center'>We Code, We Laugh, We Make School Management </h5>
            <h5 className='text-center'> Superpower Fun!</h5>

            <div className="row p-5">
                <div className="col-md-3">
                    <img className='img-fluid rounded-pill' src="https://feeflow.in/assets/img/events/launch-event-3@2x.webp" alt="" />
                </div>
                <div className="col-md-3">
                    <img className='img-fluid rounded-pill' src="https://feeflow.in/assets/img/events/launch-event-1@2x.webp" alt="" />
                </div>
                <div className="col-md-3">
                    <img className='img-fluid rounded-pill' src="https://feeflow.in/assets/img/events/launch-event-3@2x.webp" alt="" />
                </div>
                <div className="col-md-3">
                    <img className='img-fluid rounded-pill' src="https://feeflow.in/assets/img/events/launch-event-2@2x.webp" alt="" />
                </div>
            </div>
        </div>

        <div className='text-light support p-5'>
            <div className='p-5'>
                <h4 className='fw-bold'>About FeeFlow Technologies</h4>
                <h1 className='text-secondary fw-bold'>Welcome to FeeFlow Technologies - Your Trusted Partner for Cloud-Based School Management Software in India</h1>
                <p className='text-light fw-bold'>At FeeFlow Technologies, we understand the complexities schools and educational institutions face in managing their day-to-day operations efficiently. That's why we offer a comprehensive cloud-based School Management Software designed to streamline administrative tasks, enhance communication, and empower educational institutions across India. With our user-friendly and feature-rich software, schools can unlock their true potential and focus on providing quality education.</p>
                <h3 className='fw-bold'>Revolutionizing School Management with 22+ Modules</h3>
                <p className='fw-bold'>Our cloud-based School Management Software comes equipped with 22+ modules, ensuring a seamless experience for every aspect of school administration. Whether you need to manage students, parents, staff, or teachers, our software has you covered. Here are just a few of the powerful modules included:</p>
                <p className='fw-bold'>1.Student Management: Effortlessly handle student admissions, records, attendance, and academic progress tracking.</p>
                <p className='fw-bold'>2.Parents Management: Foster parent-school collaboration by providing access to student information, progress reports, and communication tools.</p>
                <p className='fw-bold'>3.Staff Management: Manage staff details, assignments, schedules, and professional development activities with ease.</p>
                <p className='fw-bold'>4.Teacher Management: Simplify teacher-related tasks, such as scheduling, assignments, evaluations, and professional growth.</p>
                <p className='fw-bold'>5.Attendance Management: Streamline attendance tracking, reporting, and monitoring for accurate records.</p>
                <p className='fw-bold'>6.Library Management: Digitally manage library resources, including cataloging, borrowing, and usage tracking.</p>
                <p className='fw-bold'>7.Accounting Management: Efficiently manage school finances, expenses, payroll, and reporting.</p>
                <p className='fw-bold'>8.Online Exam Management: Conduct and manage online exams, including question creation, grading, and result generation.</p>
                <p className='fw-bold'>9.Live Class Management: Facilitate virtual learning with live online classes, video conferencing, and interactive features.</p>
                <p className='fw-bold'>10.Transport Management: Manage school transportation, routes, vehicle tracking, and scheduling for student safety.</p>
                <p className='fw-bold'>11.And many more...</p>

                <h2 className='fw-bold'>Boost Efficiency, Collaboration, and Success with FeeFlow Technologies</h2>
                <p className='fw-bold'>At FeeFlow Technologies, we are committed to helping schools and educational institutions thrive in the digital era. Our cloud-based School Management Software provides an all-in-one solution that automates administrative tasks, fosters effective communication, and enhances collaboration among stakeholders.</p>
                <p className='fw-bold'>With our SEO-optimized website content and comprehensive suite of features, FeeFlow Technologies is your reliable partner in transforming school management. Join hands with us today and unlock the potential of your institution. Contact us now to schedule a personalized demo and experience the power of FeeFlow Technologies!</p>
            
            
            
            
            
            
            </div>

        </div>

        <div className='p-5'>
            <h2 className='text-center fw-bold text-color'>A Visual Tour of FeeFlow's Android App</h2>
            <h5 className='text-secondary text-center'>Experience Efficiency with FeeFlow's App Screenshots</h5>
            <img src="https://feeflow.in/assets/img/app/play-store.png" alt="" />
        </div>

        <div className='p-5 upgrade'>
            <div className="row p-5 text-white">
                <div className="col-md-3">
                    <h3 className='text-center fw-bold'>24/7 Support</h3>
                    <p className='text-center fw-bold'>Enjoy round-the-clock assistance from our dedicated support team, ensuring your queries are resolved promptly.</p>
                </div>
                <div className="col-md-3">
                    <h3 className='text-center fw-bold' >Reg. Upgrades</h3>
                    <p className='text-center fw-bold'>Receive regular updates and new features to keep your software at the forefront of technology.</p>
                </div>
                <div className="col-md-3">
                    <h3 className='text-center fw-bold'>Data Security</h3>
                    <p className='text-center fw-bold'>Rest easy knowing your sensitive school data is protected with advanced security measures.</p>
                </div>
                <div className="col-md-3">
                    <h3 className='text-center fw-bold'>Customizable</h3>
                    <p className='text-center fw-bold'>Tailor the software to your institution's unique needs, ensuring an optimized management experience.</p>
                </div>
            </div>
        </div>

        <div className='p-5'>
            <h2 className='text-center fw-bold text-color'>Brands Collaboration</h2>
            <h5  className='text-center fw-bold text-secondary'>FeeFlow connected with these brands in and as.</h5>
            <div>
                <img className='img-fluid home-brand' src="https://feeflow.in/assets/img/brand-collaboration.webp" alt="" />
            </div>
        </div>


    </div>
  )
}

export default Home
