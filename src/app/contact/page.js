import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
      <div className="p-8 bg-black text-white min-h-screen flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
          <ContactForm />
      </div>
  );
}
