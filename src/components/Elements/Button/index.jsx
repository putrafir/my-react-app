const MyButton = (props) => {
  const {
    children = "Button",
    variant,
    textColor = "text-white",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    // <button
    //   className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
    //   type="submit"
    // >
    //   {children}
    // </button>
    <button
      className={`${textColor} ${variant}  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2focus:outline-none`}
      onClick={() => onClick()}
      type={type}
    >
      {children}
    </button>
  );
};

export default MyButton;
