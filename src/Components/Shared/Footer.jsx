import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content p-10 max-w-6xl mx-auto">
      <nav>
        <h6 className="text-2xl font-bold text-blue-400">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="text-2xl font-bold text-blue-400">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>

      <nav>
        <h6 className="text-2xl font-bold text-blue-400">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/fullinverse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiFacebook className="text-3xl"></CiFacebook>
          </a>
          <a
            href="https://www.instagram.com/fullinverse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiInstagram className="text-3xl"></CiInstagram>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiTwitter className="text-3xl"></CiTwitter>
          </a>
        </div>
        <h6 className="text-yellow-400 text-4xl font-bold">
          Woods<span className="text-blue-400">Sense</span>
        </h6>
      </nav>
      <nav className="mt-10">
        <p className="text-center text-base">
          © 2024 WoodsSense. All rights reserved.
        </p>
        <p className="text-center text-base">Contact us: 01870540683</p>
      </nav>
    </footer>
  );
};

export default Footer;
