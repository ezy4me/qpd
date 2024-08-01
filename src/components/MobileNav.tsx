"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
      <button className="mobile-nav-toggle" onClick={toggleNav}>
        <Icon
          name={isOpen ? "close" : "menu"}
          width={40}
          height={40}
          color="--bg-primary"
          className={`icon ${isOpen ? "close" : ""}`}
        />
      </button>
      <nav className={`mobile-nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link href="/portfolio">Портфолио</Link>
          </li>
          <li>
            <Link href="/services">Услуги</Link>
          </li>
          <li>
            <Link href="/about">О студии</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
