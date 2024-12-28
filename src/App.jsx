import React from "react";

const Button = (props) => {
  const { children = "Button", variant = "bg-black" } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <Button variant="bg-red-700">Login</Button>
      <Button variant="bg-slate-700">Logout</Button>
      <Button></Button>
    </div>
  );
}

export default App;
