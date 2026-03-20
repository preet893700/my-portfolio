import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer II</h4>
                <h5>Hekaos</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed agentic workflows automating business processes, cutting manual
              intervention by 70%. Built a production RAG pipeline using LangChain &
              GPT-4 over 100+ HR documents with 95% accuracy. Reduced information
              retrieval time from 5 min to 10 sec via vector database integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led backend development for cloud migration of a Fortune 500 pharma
              client's legacy reporting system across 9,000+ locations. Architected a
              Spring Boot microservices engine improving performance by 40%. Implemented
              OAuth 2.0 & JWT with HIPAA compliance using Spring Security.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate System Engineer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Developed Spring Boot microservices with Java 8+ Streams and Lambdas,
              improving code performance by 30%. Engineered complex DB operations using
              Spring Data JPA & Hibernate. Delivered 20+ feature enhancements with 98%
              on-time delivery across bi-weekly sprints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
