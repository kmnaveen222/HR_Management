import { RouterProvider } from "react-router-dom";
import { route } from "./Routing/Route";
import { useEffect } from "react";
import Aos from "aos";

const App = () => {
  useEffect(()=>{
    Aos.init({duration : 1000});
    // Aos.init();
  })
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
