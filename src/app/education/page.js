import React from 'react'
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";

const educationPage = () => {
  return (
    <main>
    <Navigation />
    <section className="container-fluid d-flex flex-column justify-content-around">
      <div className="container-fluid d-flex mb-4">
        <h1>Education</h1>
      </div>

      <div className="d-flex container-fluid flex-column align-items-center mb-4">
        <h3 className="align-self-start mb-4">Software Development</h3>
        <div className="card w-100">
          <div className="card-header d-flex">
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
          <div className="card-header d-flex">
            <h4>Bachelor of Nursing</h4>
          </div>
          <div className="card-body d-flex flex-column text-start">
            <h5>Edith Cowan University</h5>
            <h6>Role: Operating Theatre Nurse</h6>
            <p>Duration: 1 year (2015 - 2016)</p>
            <p>Location: Gold Coast, Queensland, Australia</p>
            <p>
              Description: Scrub / Scout Nurse: Assists in preparing pre,
              during, post surgery of patients, including preparation, giving
              medication, positioning
            </p>
            <p>
              Specialties: Orthopaedics, General Surgery, Obstetrics and
              Gyneacology, Trauma
            </p>
          </div>
        </div>
        <div className="card w-100">
          <div className="card-header d-flex">
            <h5>Sandringham Hospital (Alfred Health)</h5>
          </div>
          <div className="card-body d-flex flex-column text-start">
            <h6>Role: Operating Theatre Nurse</h6>
            <p>Duration: 3 years (2017 - 2020)</p>
            <p>Location: Melbourne, Victoria, Australia</p>
            <p>
              Description: Scrub / Scout Nurse: Assists in preparing pre,
              during, post surgery of patients, including preparation, giving
              medication, positioning
            </p>
            <p>
              Specialties: Orthopaedics, General Surgery, Obstetrics and
              Gyneacology, Trauma
            </p>
          </div>
        </div>
        <div className="card w-100">
          <div className="card-header d-flex">
            <h5>Glenferrie Private Hospital (Ramsay Health)</h5>
          </div>
          <div className="card-body d-flex flex-column text-start">
            <h6>Role: Operating Theatre Nurse</h6>
            <p>Duration: 3 years (2016 - 2017)</p>
            <p>Location: Melbourne, Victoria, Australia</p>
            <p>
              Description: Scrub / Scout Nurse: Assists in preparing pre,
              during, post surgery of patients, including preparation, giving
              medication, positioning
            </p>
            <p>
              Specialties: Orthopaedics, General Surgery, Obstetrics and
              Gyneacology, Trauma
            </p>
          </div>
        </div>
        <div className="card w-100">
          <div className="card-header d-flex">
            <h5>Makati Medical Center</h5>
          </div>
          <div className="card-body d-flex flex-column text-start">
            <h6>Role: Operating Theatre Nurse</h6>
            <p>Duration: 3 years (2012 - 2015)</p>
            <p>Location: Makati, Metro Manila, Philippines</p>
            <p>
              Description: Scrub / Scout Nurse: Assists in preparing pre,
              during, post surgery of patients, including preparation, giving
              medication, positioning
            </p>
            <p>
              Specialties: Orthopaedics, General Surgery, Obstetrics and
              Gyneacology, Trauma
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
  )
}

export default educationPage