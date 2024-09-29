import SubBanner from "../../components/shared/SubBanner";
import ContactUsForm from "./ContactUsForm";

const Contact = () => {
  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <SubBanner
        backgroundImage="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Contact Us"
        breadcrumb={breadcrumb}
      />
      <ContactUsForm />
    </>
  );
};

export default Contact;
