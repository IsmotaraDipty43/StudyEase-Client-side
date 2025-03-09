import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Collagecard from "./Collagecard";

const CollegesSection = () => {
    const [colleges, setColleges] = useState([]);
    const axiossecure = useAxiosPublic();
  
    useEffect(() => {
      axiossecure.get("/allcollage")
        .then((res) => setColleges(res.data.slice(0, 3))) 
        .catch((error) => console.error("Error fetching colleges:", error));
    }, [axiossecure]);
  
    return (
      <section className="p-10 ">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Featured Colleges</h1>
        <p className="text-lg mb-6 text-center px-5">
          Discover the top-rated colleges offering excellent academic programs and
          opportunities for student growth.<br></br> Explore these featured institutions 
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <Collagecard key={college._id} college={college} />
          ))}
        </div>
      </section>
    );
  };
  
  export default CollegesSection;