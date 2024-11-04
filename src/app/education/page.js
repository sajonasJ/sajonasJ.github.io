import React from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";

const educationPage = () => {
  return (
    <main>
      <Navigation />
      <section className="container-fluid">
        <div className="d-flex w-100 flex-column">
          <div className="container-fluid d-flex mb-4 justify-content-between">
            <h2>Tertiary Education</h2>
            <div className="btn btn-sm btn-outline-primary">sort</div>
          </div>
          <div className="d-flex container-fluid flex-column align-items-center mb-4">
            <h3 className="align-self-start mb-4">Software Development</h3>
            <div className="card w-100">
              <div className="card-header card-head-left">
                <h4>Bachelor of Information, Communications and Technology</h4>
              </div>
              <div className="card-body d-flex flex-column text-start">
                <h5>Griffith University</h5>
                <h6>Major in Software Development</h6>
                <p>Duration: 3 Years (2022 - 2024)</p>
                <p>Location: Gold Coast, Queensland, Australia</p>
                <p>Courses:</p>
              </div>
            </div>
          </div>
          <div className="d-flex container-fluid flex-column gap-3 align-items-center mb-4">
            <h3 className="align-self-start">Registered Nurse</h3>
            <div className="card w-100">
              <div className="card-header card-head-left">
                <h4>Bachelor of Nursing</h4>
              </div>
              <div className="card-body d-flex flex-column text-start">
                <h5>Edith Cowan University</h5>
                <p>Duration: 1 year (2015 - 2016)</p>
                <p>Location: Perth, Western Australia, Australia</p>
                <p>
                  Specialties: Orthopaedics, General Surgery, Obstetrics and
                  Gyneacology, Trauma
                </p>
              </div>
            </div>
            <div className="card w-100">
              <div className="card-header d-flex">
                <h5>Bachelor of Science in Nursing</h5>
              </div>
              <div className="card-body d-flex flex-column text-start">
                <h6>Chinese General Hospital College of Nursing</h6>
                <p>Duration: 5 years (2006 - 2011)</p>
                <p>Location: Manila, Philippines</p>

                <p>
                  Specialties: Orthopaedics, General Surgery, Obstetrics and
                  Gyneacology, Trauma
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex w-100 flex-column">
          <div className="container-fluid d-flex mb-4 ">
            <h2>Certifications</h2>
          </div>
          <div className="d-flex container-fluid flex-column mb-4">
            <div className="card w-100">
              <div className="card-header d-flex">
                <h5>Griffith Plus</h5>
              </div>
              <div className="card-body d-flex flex-column text-start">
                <h6>Chinese General Hospital College of Nursing</h6>
                <p>Duration: 5 years (2006 - 2011)</p>
                <p>Location: Manila, Philippines</p>

                <p>
                  Specialties: Orthopaedics, General Surgery, Obstetrics and
                  Gyneacology, Trauma
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default educationPage;
