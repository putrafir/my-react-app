import React from "react";
import Button from "./components/Elements/Button";

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
