import Nav from "../components/Nav";
import Footer from "../components/Footer"
import Image from "next/image";
import btat2 from "../public/assets/projects/beenthereatethat.png"

export default function btat() { 
    return (
    <div className="bg-black bg-cover bg-center h-screen">
     <Nav /> 
     <section className="justify-items-center pt-16 ">
        <div className="bg-second-bg-image bg-[length:1750px_210px] py-24" alt="city"></div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <p className="py-10 mb-3 pl-2"><Image src={btat2}></Image></p>
            <p className="py-10 mb-3 text-gray-500 dark:text-gray-400">Collaborated with group members to create a social media esque website. Users can login and interact (post, comment, delete, edit) with other users. In this scenario it served as a food recommendation app, similar to Yelp. Skills we used include React JS, Handlebars, Materialize CSS</p>
        </div>
        
      </section>
      
    
    <Footer />
  </div>
    )
};