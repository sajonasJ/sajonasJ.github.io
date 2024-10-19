import React from 'react'
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";

const contactPage = () => {
  return (
    <main>
      <Navigation />
      <section className="container-fluid d-flex flex-column justify-content-around">

        <h5>Contact Me:</h5>
        <p>email: jonas.sajonas@gmail</p>
      </section>
      <Footer />
    </main>
  )
}

export default contactPage