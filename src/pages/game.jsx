import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function GamePage() {
  return (
    <>
      <Navbar />
      <iframe
        src="https://up-formulae.github.io/Up-WebDev/"
        className="w-full min-h-screen"
      ></iframe>
      <Footer />
    </>
  );
}
