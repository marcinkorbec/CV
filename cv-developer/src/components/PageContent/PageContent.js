import React from "react";

export const PageContent = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="cover shadow-lg bg-white">
          <div className="cover-bg p-3 p-lg-4 text-light">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="avatar hover-effect bg-white shadow-sm p-1"><img src="https://imagizer.imageshack.com/img923/2025/VB8N59.png" width="200"
                                                                                 height="200"/></div>
              </div>
              <div className="col-lg-8 col-md-7 text-center text-md-start">
                <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">Marcin Korbecki</h2>
                <p data-aos="fade-left" data-aos-delay="100">Junior JavaScript & Web Developer</p>
                <div className="d-print-none" data-aos="fade-left" data-aos-delay="200"><a
                  className="btn btn-light text-dark shadow-sm mt-1 me-1" href="right-resume.pdf" target="_blank">Pobierz
                  CV</a><a className="btn btn-primary shadow-sm mt-1" href="#contact">Napisz do mnie</a></div>
              </div>
            </div>
          </div>
          <div className="about-section pt-4 px-3 px-lg-4 mt-1">
            <div className="row">
              <div className="col-md-6">
                <h2 className="h3 mb-3">O mnie</h2>
                <p>Cześć! Jestem Marcin. Jestem pasjonatem programowania i Web Designu.
                  Posiadam juniorskie umiejętności z zakresu JavaScriptu, TypeScriptu, Baz Danych oraz Reacta.
                </p>
              </div>
              <div className="col-md-5 offset-md-1">
                <div className="row mt-2">
                  <div className="col-sm-4">
                    <div className="pb-1">Wiek</div>
                  </div>
                  <div className="col-sm-8">
                    <div className="pb-1 text-secondary">34</div>
                  </div>
                  <div className="col-sm-4">
                    <div className="pb-1">Email</div>
                  </div>
                  <div className="col-sm-8">
                    <div className="pb-1 text-secondary">poczta@webmarcin.pl</div>
                  </div>
                  <div className="col-sm-4">
                    <div className="pb-1">Tel</div>
                  </div>
                  <div className="col-sm-8">
                    <div className="pb-1 text-secondary">+48 501 360 355</div>
                  </div>
                  <div className="col-sm-4">
                    <div className="pb-1">Adres</div>
                  </div>
                  <div className="col-sm-8">
                    <div className="pb-1 text-secondary">Zabratówka 119c</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*component Skills*/}
          <hr className="d-print-none"/>
          <div className="skills-section px-3 px-lg-4">
            <h2 className="h3 mb-3">Umiejętności</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2"><span>HTML</span>
                  <div className="progress my-1">
                    <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right"
                         data-aos-delay="100" data-aos-anchor=".skills-section" style={{width: '90%'}} aria-valuenow="90"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="mb-2"><span>CSS</span>
                  <div className="progress my-1">
                    <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right"
                         data-aos-delay="200" data-aos-anchor=".skills-section" style={{width: '85%'}} aria-valuenow="85"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="mb-2"><span>JavaScript</span>
                  <div className="progress my-1">
                    <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right"
                         data-aos-delay="300" data-aos-anchor=".skills-section" style={{width: "45%"}} aria-valuenow="45"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2"><span>TypeScript</span>
                  <div className="progress my-1">
                    <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right"
                         data-aos-delay="400" data-aos-anchor=".skills-section" style={{width: "30%"}} aria-valuenow="30"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="mb-2"><span>MySQl</span>
                  <div className="progress my-1">
                    <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right"
                         data-aos-delay="500" data-aos-anchor=".skills-section" style={{width: "85%"}} aria-valuenow="85"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="mb-2"><span>Adobe Photoshop</span>
                  <div className="progress my-1">
                    <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right"
                         data-aos-delay="600" data-aos-anchor=".skills-section" style={{width: "75%"}} aria-valuenow="75"
                         aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none"/>
          {/*Component Eucation*/}
          <div className="page-break"></div>
          <div className="education-section px-3 px-lg-4 pb-4">
            <h2 className="h3 mb-4">Edukacja</h2>
            <div className="timeline">
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Kurs Backend Developer <span className="text-muted h6">w MegaKurs JaVaScriptu</span>
                  </div>
                  <div className="text-muted text-small mb-2">2022 - 2023</div>
                  <div>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                    approaches to corporate strategy foster collaborative thinking to further the overall value
                    proposition.
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Bachelor of Computer Science <span className="text-muted h6">from Regional College</span>
                  </div>
                  <div className="text-muted text-small mb-2">2007 - 2011</div>
                  <div>Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion
                    along the information highway will close the loop on focusing solely on the bottom line.
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-success card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Science and Mathematics <span
                    className="text-muted h6">from Mt. High Scool</span></div>
                  <div className="text-muted text-small mb-2">1995 - 2007</div>
                  <div>User generated content in real-time will have multiple touchpoints for offshoring. Organically
                    grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none"/>
          {/*Experience*/}
          <div className="work-experience-section px-3 px-lg-4">
            <h2 className="h3 mb-4">Work Experience</h2>
            <div className="timeline">
              <div className="timeline-card timeline-card-primary card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Frontend Developer <span
                    className="text-muted h6">at Creative Agency</span></div>
                  <div className="text-muted text-small mb-2">May, 2015 - Present</div>
                  <div>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                    approaches to corporate strategy foster collaborative thinking to further the overall value
                    proposition.
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-primary card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Graphic Designer <span className="text-muted h6">at Design Studio</span>
                  </div>
                  <div className="text-muted text-small mb-2">June, 2013 - May, 2015</div>
                  <div>Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion
                    along the information highway will close the loop on focusing solely on the bottom line.
                  </div>
                </div>
              </div>
              <div className="timeline-card timeline-card-primary card shadow-sm">
                <div className="card-body">
                  <div className="h5 mb-1">Junior Web Developer <span className="text-muted h6">at Indie Studio</span>
                  </div>
                  <div className="text-muted text-small mb-2">Jan, 2011 - May, 2013</div>
                  <div>User generated content in real-time will have multiple touchpoints for offshoring. Organically
                    grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none"/>
          <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
            <h2 className="h3 text mb-3">Contact</h2>
            <div className="row">
              {/*<div className="col-md-7 d-print-none">*/}
              {/*  <div className="my-2">*/}
              {/*    <form action="https://formspree.io/your@email.com"*/}
              {/*          method="POST">*/}
              {/*      <div className="row">*/}
              {/*        <div className="col-6">*/}
              {/*          <input className="form-control" type="text" id="name" name="name" placeholder="Your Name"*/}
              {/*                 required/>*/}
              {/*        </div>*/}
              {/*        <div className="col-6">*/}
              {/*          <input className="form-control" type="email" id="email" name="_replyto"*/}
              {/*                 placeholder="Your E-mail" required/>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*      <div className="form-group my-2">*/}
              {/*        <textarea className="form-control" style="resize: none;" id="message" name="message" rows="4"*/}
              {/*                  placeholder="Your Message" required></textarea>*/}
              {/*      </div>*/}
              {/*      <button className="btn btn-primary mt-2" type="submit">Send</button>*/}
              {/*    </form>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="col">
                <div className="mt-2">
                  <h3 className="h6">Adres</h3>
                  <div className="pb-2 text-secondary">Zabratówka 119c, 36-017, Błędowa Tyczyńska</div>
                  <h3 className="h6">Telefon</h3>
                  <div className="pb-2 text-secondary">+48 501 360 355</div>
                  <h3 className="h6">Email</h3>
                  <div className="pb-2 text-secondary">poczta@webmarcin.pl</div>
                </div>
              </div>
              <div className="col d-none d-print-block">
                <div className="mt-2">
                  <div>
                    <div className="mb-2">
                      <div className="text-dark"><i
                        className="fab fa-twitter mr-1"></i><span>https://twitter.com/templateflip</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-dark"><i
                        className="fab fa-facebook mr-1"></i><span>https://www.facebook.com/templateflip</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-dark"><i
                        className="fab fa-instagram mr-1"></i><span>https://www.instagram.com/templateflip</span>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-dark"><i
                        className="fab fa-github mr-1"></i><span>https://github.com/templateflip</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}