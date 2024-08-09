"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MobileNav from "./MobileNav";
import { Icon } from "./Icon";

export const Header = () => {
  const router = useRouter();
  const [icon, setIcon] = useState("sun");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 20) {
      setIcon("sun");
    } else {
      setIcon("moon");
    }
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          <div className="logo">
            <Image
              onClick={() => router.push("/")}
              src="/images/logo.png"
              height={80}
              width={160}
              alt="qpd logo"
            />
          </div>
          <div className="nav">
            <div className="nav__list">
              <div className="nav__list-item">
                <Link href="/portfolio">Портфолио</Link>
              </div>
              <div className="nav__list-item">
                <Link href="/services">Услуги</Link>
              </div>
              <div className="nav__list-item">
                <Link href="/about">О студии</Link>
              </div>
              <div className="nav__list-item">
                <button className="button">Заявка</button>
              </div>
              <Icon name={icon} height={40} width={40} />
            </div>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
