import PropTypes from "prop-types";

export default function Event({ name, local, description, date }) {
  return (
    <div className="border-primary border w-full p-10 cursor-pointer hover:-translate-y-2 duration-150 shadow-lg rounded-md text-justify">
      <h1 className="font-bold text-xl">{name}</h1>
      <p>
        <b>Data:</b> {date}
      </p>
      <p>
        <b>Local:</b> {local}
      </p>

      <p className="mt-2">{description}</p>
    </div>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  local: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
