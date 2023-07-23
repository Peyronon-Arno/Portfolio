import React from "react";
import { PageHeader } from "../components/js/PageHeader";
import { ContactForm } from "../components/js/contact/ContactForm";
import { NavBar } from "../components/js/navbar/NavBar";
import { Footer } from "../components/js/footer/Footer";

export const Contact = (props) => {
  const { theme } = props;
  return (
    <div>
      <NavBar theme={theme} />
      <PageHeader heading="Contactez-moi !" text="Ayons une discussion" />
      <ContactForm />
      <Footer />
    </div>
  );
};
