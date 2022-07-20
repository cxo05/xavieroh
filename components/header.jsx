import config from "../config.json";

const Header = () => {
  return (
    <div className="h-24 flex items-center border-b-2 mb-4">
      <p className="px-3 text-2xl font-semibold">{config.name}</p>
    </div>
  );
};

export default Header;
