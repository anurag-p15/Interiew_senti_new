import React,{useState,useEffect, useRef} from 'react'
import Navbar from './navbar'
import Footer from './footer'
import './body.css'
import Form from '../Forms/Form'

function Body(){
  const gridRef = useRef(null); // Reference to the grid-container

  const scrollToGrid = () => {
    gridRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    // Set the title for the Home page
    document.title = 'Interview Mentor: Your Platform to Success ';
  }, []);
  const domains = [
    'Algorithms',
    'Data Structures',
    'Artificial Intelligence',
    'Website Development',
    'DBMS/SQL',
    'Networking',
    'Machine Learning',
    'Mobile Development',
    'DevOps',
    'Cloud Computing',
    'Cyber Security',
    'Software Engineering',
  ];
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
};

const closeModal = () => {
    setModalOpen(false);
};
    return(
        <>
        <Navbar/>
        <div className="bioenvo" style={{ borderTop: 0 }}>
          <h1 style={{textAlign:'center',fontweight:"600",marginBottom:'2%'}}> What do we Do ?</h1>
          <div className="row" style={{ marginBottom: '1%' }}>
            <div className="col-lg-6">
            <div style={{ paddingTop: '1%', paddingBottom: '1%', height: '100%' }}>
              <div className="note" style={{ float: 'left' }}>
               
                  <ul className="arrow-list">
                    <li style={{ fontSize: '20px',paddingBottom:'50px'}}>
                    Offer a comprehensive platform for students and professionals to practice interviews, helping them overcome nervousness and fear.
                    </li>
                    <li style={{ fontSize: '20px',paddingBottom:'50px' }}>
                    Provide access to over 450+ real and updated interview questions across 12 domains for thorough preparation.
                    </li>
                    <li style={{ fontSize: '20px',paddingBottom:'50px' }}>
                    Generate immediate, in-depth analysis of interview performance with graphical feedback on answers and presentation.
                    </li>
                    <li style={{ fontSize: '20px',paddingBottom:'50px' }}>
                    Maintain a detailed history of users’ past attempts, enabling progress tracking and continuous improvement.
                    </li>
                  </ul>
                
              </div>
              </div>
              </div>
              <div className="col-lg-6">
              <div className="image" style={{ float: 'right' }}>
                     {/* Image here */}
              </div>
              </div>
            </div>
              <div className='row'style={{paddingTop:'5%',borderTop:'5px solid #c0c0c0'}}>
              <h1 style={{textAlign:'center',fontweight:"600",marginBottom:'2%'}}> Why Interview Mentor ?</h1>
            <div className="row" style={{ marginBottom: '1%' }}>
              <div className="col-lg-6">
              <div className="image1" >
                      {/* Image here */}
                </div>
              
                </div>
                <div className="col-lg-6">
                <div style={{ paddingTop: '1%', paddingBottom: '1%', height: '100%' }}>
                <div className="note">
                    <ul className="arrow-list">
                      <li style={{ fontSize: '20px',paddingBottom:'50px'}}>
                      Holistic Preparation: Gain confidence with realistic interview simulations tailored to various fields and roles.
                      </li>
                      <li style={{ fontSize: '20px',paddingBottom:'50px' }}>
                      Real-Time Insights: Get immediate feedback with detailed analytics to identify strengths and areas for improvement.
                      </li>
                      <li style={{ fontSize: '20px',paddingBottom:'50px' }}>
                      Real-Time Insights: Get immediate feedback with detailed analytics to identify strengths and areas for improvement.
                      </li>
                      <li style={{ fontSize: '20px',paddingBottom:'50px' }}>
                      Trackable Progress: Review past interviews and measure growth over time with saved records.
                      </li>
                      <li style={{ fontSize: '20px',paddingBottom:'50px' }}>
                      Personalized Feedback: Receive evaluations focused not only on answers but also on presentation and communication skills.
                      </li>
                    </ul>
                  
                </div>
                </div>
                
                </div>
              </div>
              </div>

          <div className={`content-container ${isModalOpen ? 'blur' : ''}`} style={{borderTop:'5px solid #c0c0c0'}}>
          <h1 style={{textAlign:'center',paddingTop:'5%', }}> Our Domains </h1>
                <div className="grid-container" ref={gridRef}>
                  {domains.map((domain, index) => (
                    <div key={index} className="grid-item">
                      <h3>{domain}</h3>
                      <button className="domain-button" onClick={openModal}>Give Interview</button>
                    </div>
                  ))}
                </div>


          </div>



          </div>
        
        

         {/* Modal for Interview Component */}
         {isModalOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <Form />
                    <button className="close-modal" onClick={closeModal}>Close</button>
                </div>
            </div>
        )}
        
        <Footer />
        </>
    )
}

export default Body