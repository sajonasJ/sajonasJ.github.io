import React from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";

const contactPage = () => {
  return (
    <main>
      <Navigation />
      <section className="container-fluid d-flex align-items-start">
        <div className="d-flex flex-column align-items-start mt-5">
          <h5 className="my-3">Contact:</h5>
          <p>Email: sajonasj.work@gmail</p>
          <p>LinkedIn: https://www.linkedin.com/in/sajonasj/</p>
          <p>GitHub: https://github.com/sajonasJ</p>
          <p>Send a Message: Button</p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default contactPage;
