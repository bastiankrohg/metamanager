const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MetaManager</h3>
            <p className="text-gray-400">
              Transform your website’s SEO and online presence with MetaManager. Delivering tools for better visibility, higher traffic, and growth.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/features" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  CLA
                </a>
              </li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">Follow us on social media:</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.099 2.794.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.764v2.311h3.59l-.467 3.622h-3.123V24h6.126c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.643 4.937c-.835.37-1.73.62-2.675.733a4.692 4.692 0 002.048-2.593 9.48 9.48 0 01-2.99 1.15 4.679 4.679 0 00-7.973 4.26A13.263 13.263 0 011.671 3.15a4.666 4.666 0 001.448 6.225 4.622 4.622 0 01-2.118-.583v.06c0 2.286 1.62 4.188 3.772 4.618a4.7 4.7 0 01-2.112.08 4.682 4.682 0 004.377 3.256A9.388 9.388 0 010 19.54a13.219 13.219 0 007.19 2.105c8.635 0 13.355-7.16 13.355-13.385 0-.204-.005-.407-.014-.61A9.583 9.583 0 0024 4.556a9.255 9.255 0 01-2.357.645z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.226.793 24 1.77 24h20.459c.978 0 1.771-.774 1.771-1.727V1.727C24 .774 23.209 0 22.23 0zM7.085 20.454H3.554V9.169h3.531v11.285zM5.32 7.551a2.047 2.047 0 110-4.093 2.047 2.047 0 010 4.093zm14.872 12.903h-3.536v-5.592c0-1.333-.027-3.05-1.855-3.05-1.857 0-2.141 1.45-2.141 2.948v5.694h-3.536V9.169h3.396v1.537h.048c.472-.892 1.625-1.835 3.345-1.835 3.576 0 4.237 2.355 4.237 5.418v6.165z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          <p>© 2024 MetaManager - EBFS Ventures AS. All rights reserved.🦄</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;