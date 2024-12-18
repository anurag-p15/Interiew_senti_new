import React,{useEffect,useRef} from 'react'
import Navbar from '../Home/navbar';
import Footer from '../Home/footer';
import './dashboard.css';

function Dashboard(){
  const gridRef = useRef(null); // Reference to the grid-container
  
    const scrollToGrid = () => {
      gridRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
    // Set the title for the Home page
    document.title = 'Dashboard';
  }, []);

  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Aspiring software engineer passionate about AI and web development.",
    graduationStream: "Computer Science",
    graduationYear: "2023",
  };

  const interviewData = [
    { srNo: 1, domain: "Algorithms", date: "2024-12-01", score: 85, resultLink: "#" },
    { srNo: 2, domain: "Data Structures", date: "2024-12-03", score: 90, resultLink: "#" },
    { srNo: 3, domain: "Machine Learning", date: "2024-12-05", score: 78, resultLink: "#" },
    { srNo: 4, domain: "Website Development", date: "2024-12-07", score: 92, resultLink: "#" },
  ];


    return(
    <>
      <Navbar />

        <div className="user-dashboard">
      <h1>User Dashboard</h1>

      <section className="user-details">
        <h2>Personal Details</h2>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Bio:</strong> {userData.bio}</p>
        <p><strong>Graduation Stream:</strong> {userData.graduationStream}</p>
        <p><strong>Graduation Year:</strong> {userData.graduationYear}</p>
        <div className="edit-buttons">
          <button>Edit Name</button>
          <button>Edit Email</button>
          <button>Edit Bio</button>
          <button>Edit Graduation Stream</button>
          <button>Edit Graduation Year</button>
        </div>
      </section>

      <section className="interview-history">
        <h2>Past Interview Details</h2>
        <table className="interview-table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Domain</th>
              <th>Date</th>
              <th>Score</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {interviewData.map((interview) => (
              <tr key={interview.srNo}>
                <td>{interview.srNo}</td>
                <td>{interview.domain}</td>
                <td>{interview.date}</td>
                <td>{interview.score}</td>
                <td><a href={interview.resultLink}>View Results</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>

        <Footer/>


    </>

    )
}

export default Dashboard