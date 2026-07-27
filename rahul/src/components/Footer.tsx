import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const fbSvgUrl = "https://cdn.prod.website-files.com/669a015f62a99f6f75e92ebb/669dd96d473580239c7a6380_fb.svg";
  const instaSvgUrl = "https://cdn.prod.website-files.com/669a015f62a99f6f75e92ebb/669dd9acd172591e58c57dc6_insta.svg";
  const linkedinSvgUrl = "https://cdn.prod.website-files.com/669a015f62a99f6f75e92ebb/669dd9a3473580239c7a851f_in.svg";
  const twitterSvgUrl = "https://cdn.prod.website-files.com/669a015f62a99f6f75e92ebb/669dd9f1789c614295085953_twitter.svg";

  return (
    <footer className="footer">
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-social-wrap">
          <div>Get in touch:</div>
          <div className="footer-social">
            <a 
              aria-label="Facebook" 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon w-inline-block"
            >
              <img src={fbSvgUrl} loading="lazy" alt="Facebook" />
            </a>
            <a 
              aria-label="Instagram" 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon w-inline-block"
            >
              <img src={instaSvgUrl} loading="lazy" alt="Instagram" />
            </a>
            <a 
              aria-label="LinkedIn" 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon w-inline-block"
            >
              <img src={linkedinSvgUrl} loading="lazy" alt="LinkedIn" />
            </a>
            <a 
              aria-label="Twitter / X" 
              href="https://x.com/home" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-icon w-inline-block"
            >
              <img src={twitterSvgUrl} loading="lazy" alt="Twitter" />
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <Link to="/style-guide" className="footer-link">Style Guide</Link>
          <Link to="/instructions" className="footer-link">Instructions</Link>
          <Link to="/licenses" className="footer-link">Licenses</Link>
          <Link to="/changelog" className="footer-link">Changelog</Link>
          <Link to="/link-in-bio" className="footer-link">Link In Bio</Link>
        </div>
        
        <p className="footer-copyright">
          Designed by <a href="https://webestica.com/" target="_blank" rel="noopener noreferrer">Webestica</a>, 
          Powered by <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer">Webflow</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
