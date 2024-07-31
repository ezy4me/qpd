'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <div className="lava-container">
        <div className="lava">
          {[...Array(30)].map((_, index) => (
            <div key={index} className={`blob blob-${index + 1}`}></div>
          ))}
        </div>
      </div>
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
            </div>
          </div>
          <div className="theme">
            <Image
              src="/images/sun.png"
              height={40}
              width={40}
              alt="light theme"
            />
          </div>
        </div>
        <div className="header__middle">
          <h1 className="title">
            Превратим вашу <span>идею в</span> цифровую <span>реальность</span>
          </h1>
          <button className="button button--filled">
            Заказать
            <Image src={"/images/arrow.svg"} width={60} height={60} alt="" />
          </button>
        </div>
      </div>
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </header>
  );
};
