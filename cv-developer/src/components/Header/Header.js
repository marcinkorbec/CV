import React from "react";

export const Header = () => {


  return (
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="py-3 clearfix">
          <h1 className="site-title mb-0">Marcin Korbecki</h1>
          <div className="site-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item"><a className="nav-link" href="https://webmarcin.pl"
                                            title="Twitter"><i className="fab fa-twitter"></i><span
                  className="menu-title sr-only">Webmarcin.pl</span></a>
                </li>
                <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/uczszsiewkoncu"
                                            title="Facebook"><i className="fab fa-facebook"></i><span
                  className="menu-title sr-only">Facebook</span></a>
                </li>
                <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/m.j.korbecki/"
                                            title="Instagram"><i className="fab fa-instagram"></i><span
                  className="menu-title sr-only">Instagram</span></a>
                </li>
                <li className="nav-item"><a className="nav-link" href="https://github.com/marcinkorbec"
                                            title="Github"><i className="fab fa-github"></i><span
                  className="menu-title sr-only">Github</span></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}