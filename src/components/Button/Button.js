import { Link } from "react-router-dom";

const Button = ({ children, to, type }) => {
  let classType = "";

  if (type === "secondary") {
    classType = "secondary";
  } else {
    classType = "primary";
  }
  return (
    <div className="Button">
      <Link to={to} className={classType}>
        {children}
      </Link>
    </div>
  );
};

export default Button;
