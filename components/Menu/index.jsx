import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link"

const Profile = () => {
  const [typedText, setTypedText] = useState('');
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      const words = ['Web Designer', 'Web Developer', 'Front End Developer', 'Apps Designer', 'Apps Developer'];
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setTypedText(typedText + randomWord);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-lg-4 sticky-lg-top vh-100">
      <div className="d-flex flex-column h-100 text-center overflow-auto shadow">
        <img src="/img/profile.jpg" alt="Image" class="w-100 img-fluid mb-4" />
        <h1 class="text-primary mt-2">John Doe</h1>
        <div className="mb-4" style={{height: "22px"}}>
          <h4 class="typed-text-output d-inline-block text-light">{typedText}</h4>
        </div>
        <div className="d-flex justify-content-center mt-auto mb-3">
          <Link href="/" className="btn btn-secondary btn-square mx-1">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="/" className="btn btn-secondary btn-square mx-1">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="/" className="btn btn-secondary btn-square mx-1">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link href="/" className="btn btn-secondary btn-square mx-1">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
        <div className="d-flex align-items-end justify-content-between border-top">
          <Link href="/" className="btn w-50 border-end">Download CV</Link>
          <Link href="#contact" onClick={() => router.push('/contact')} className="btn w-50 btn-scroll">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;