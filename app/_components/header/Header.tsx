"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-brand">
          rajan baliwal
        </Link>
        <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
          <div className="header-hello header-item">_hello</div>
        </Link>

        <Link
          href="/blogs"
          className={`link ${pathname === "/blogs" ? "active" : ""}  `}
        >
          <div className="header-projects header-item">_blogs</div>
        </Link>
        <Link
          href="/about"
          className={`link ${pathname === "/about" ? "active" : ""}`}
        >
          <div className="header-about header-item">_about-me</div>
        </Link>
        <Link
          href="/contact"
          className={`link ${pathname === "/contact" ? "active" : ""} header-contact`}
        >
          <div>_contact</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
