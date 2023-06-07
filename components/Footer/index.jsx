import React from "react";
import Link from "next/link"

const Footer = () => {
  return (
    <section className="py-5 border-bottom text-center">
      <div className="bg-secondary text-light">
        <div className="d-flex justify-content-center mb-4">
          <Link className="btn btn-dark btn-square mx-1" href="/contact">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link className="btn btn-dark btn-square mx-1" href="/contact">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link className="btn btn-dark btn-square mx-1" href="/contact">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link className="btn btn-dark btn-square mx-1" href="/contact">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <Link className="text-light px-3 border-end" href="/contact">Privacy</Link>
          <Link className="text-light px-3 border-end" href="/contact">Terms</Link>
          <Link className="text-light px-3 border-end" href="/contact">FAQs</Link>
          <Link className="text-light px-3" href="/contact">Help</Link>
        </div>
        <p className="m-0">&copy; All Rights Reserved. Designed by HTML Codex</p>
      </div>
    </section>
  );
};

export default Footer;