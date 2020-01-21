import classNames from "classnames";

export default ({ fluid, children, className, ...rest }) => {
  return (
    <div
      className={classNames(fluid ? "container-fluid" : "container", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
