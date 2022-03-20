const linkedInLink = "https://www.linkedin.com/in/krishna-kumar-keshri/";

export const Footer = ({ source }) => {
  return (
    <footer className="footer-container">
      <div className="source">
        <div>
          <span>API Source -</span>
          <a href={source} target="blank">
            Muhammad Mustadi
          </a>
        </div>
      </div>
      <div className="copyright">
        <a href={linkedInLink} target="blank">
          Krishna Keshri
        </a>
        <span>© 2022</span>
      </div>
    </footer>
  );
};
