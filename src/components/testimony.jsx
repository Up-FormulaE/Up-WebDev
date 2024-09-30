import PropTypes from "prop-types";

export default function Testimony({ author, description }) {
  return (
    <div className="border-l-4 bg-primary/10 w-full p-10 border-primary rounded-md">
      <blockquote className="italic">
        <p>&ldquo;{description.replace(/^"|"$/g, "")}&rdquo;</p>
      </blockquote>

      <p className="text-primary font-bold">{author}</p>
    </div>
  );
}

Testimony.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
