import PropTypes from "prop-types";
import Navbar from "./navbar";
import Footer from "./footer";

export default function PageWrapper(props) {
  return (
    <>
      <Navbar />
      <section className="flex-1 flex justify-center">
        <div className="bg-white max-w-4xl shadow-lg m-10 flex-1 rounded-xl text-lg p-16">
          {props.children}
        </div>
      </section>
      <Footer />
    </>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
