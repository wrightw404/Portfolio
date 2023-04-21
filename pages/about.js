import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import node from "../public/assets/skills/node-js.png";
import react from "../public/assets/skills/react.png";
import next from "../public/assets/skills/next.png";
import java from "../public/assets/skills/java.png";
import tail from "../public/assets/skills/tailwind.png";
import mongo from "../public/assets/skills/mongodb.png";
import graph from "../public/assets/skills/graphql.png";
import mysql from "../public/assets/skills/mysql.png";

export default function About() {
  return (
    <div className="bg-black bg-cover bg-center h-screen relative">
      <Nav />
      <section className="justify-items-center pt-16 ">
        <div className="bg-second-bg-image bg-[length:1750px_210px] py-24" alt="city">
          
        </div>
      </section>
      <div className="grid md:grid-cols-3 pt-20 pr-10">
        <div className="col-span-2 bg-black">
            <h1 className="text-dark-blue text-3xl text-center font-bold tracking-widest py-10">Experience</h1>
            <section className="text-electric-blue px-10">
            <h4 className="tracking-widest font-bolder underline text-2xl">Education</h4>
            <ol className="text-cool-grey py-1">
                <li className="py-3"><p className="font-bold"> <a className="text-dark-blue">Michigan State University,</a></p><a className="hover:text-electric-blue hover:font-bold hover:underline pl-4" target={"_blank"} href='https://xa.cal.msu.edu/'>B.A. Experience Architecture</a></li>
                <li className="py-3"><p className="font-bold"> <a className="text-dark-blue">University of California at San Diego Extended Studies,</a></p><a className="hover:text-electric-blue hover:font-bold hover:underline pl-4" target={"_blank"} href='https://bootcamp.extension.ucsd.edu/coding/'>Full Stack Development Bootcamp</a></li>
            </ol>
            <h4 className="tracking-widest font-bolder underline py-1 pt-0 text-2xl">Work</h4>
            <ol className="text-cool-grey">
              <h3 className="font-bold pt-3 text-dark-blue">Water Grill; <a className="text-cool-grey text-xs">San Diego, CA</a> </h3>
              <h4 className="pl-4">Role: Sushi Chef</h4>
              <p className="py-2">Forecast daily demand and implement orders to maintain high standards and consistency in a fast-paced environment to ensure customer satisfaction.</p>
            </ol>
            
            </section>
        </div>
        <div className="relative bg-black">
        <div className='absolute inset-0 bg-gradient-30 from-[#972729] to-[#66fcf1] rounded-lg blur-2xl opacity-30'></div>
        <h1 className="relative text-dark-blue text-3xl py-10 px-32 font-bold tracking-widest">Skills</h1>
            <div className="grid md:grid-cols-2 items-center justify-center pl-20 py-2">
            <ul className="text-cool-grey px-8">
                <li><Image src={node} width='25' height='25' className="py-2"></Image>Node JS</li>
                <li><Image src={react} width='25' height='25' className="py-2"></Image>React JS</li>
                <li><Image src={next} width='25' height='25' className="py-2"></Image>Next JS</li>
                <li><Image src={java} width='30' height='35' className="py-2"></Image>Java</li>
                <li><Image src={tail} width='25' height='25' className="py-2"></Image>Tailwind</li>
            </ul>
            <ul className="text-cool-grey px-8">
                <li><Image src={mongo} width='25' height='25' className="py-2"></Image>MongoDB</li>
                <li><Image src={graph} width='25' height='25' className="py-2"></Image>Graphql</li>
                <li><Image src={mysql} width='40' height='30' className="py-2"></Image>mySQL</li>
                <li className="py-6">UI Prototyping</li>
                <li>Usability Testing</li>
                {/* <li><Image src={tail} width='25' height='25' className="py-2"></Image>Tailwind</li>
                <li><Image src={tail} width='25' height='25' className="py-2"></Image>Tailwind</li> */}
            </ul>
            </div>
        </div>

      </div>
      <div className="bg-black bg-cover bg-center h-screen">
        <section className="text-cool-grey px-10">
          <ol>
          <h3 className="font-bold pt-3 text-dark-blue">Nobu Chicago; <a className="text-cool-grey text-xs">Chicago, IL</a> </h3>
              <h4 className="pl-4">Role: Jr. Sous Chef</h4>
              <p className="py-2">Worked in collaboration with Executive Chef, Chef de Cuisine, and Sous Chefs to oversee staff and ensure the quality of final products. Communicated issues from staff to Sous Chefs and created adaptive solutions that would mitigate those issues. 
              </p>
          </ol>
          <ol>
          <h3 className="font-bold pt-3 text-dark-blue">Sydney Children's Hospitals Foundation; <a className="text-cool-grey text-xs">Sydney, Australia</a> </h3>
              <h4 className="pl-4">Role: Digital Intern</h4>
              <p className="py-2">Responsible for coordinating the redevelopment of the Foundations website to facilitate the recent expansion of entities in conjunction with a Digital Producer. Conducted usability testing to gauge web traffic across the different entities sites in order to build prototypes that would incorporate a user-friendly interface. Worked with Digital Producers to implement new features that would be fully compatible with the current sites back-end software. </p>
          </ol>
          <ol>
          <h3 className="font-bold pt-3 text-dark-blue">Barrick Enterprises; <a className="text-cool-grey text-xs">Royal Oak, MI</a> </h3>
              <h4 className="pl-4">Role: Image Consultant</h4>
              <p className="py-2">Built relationships with dealers to improve and maintain interior and exterior spaces. Executed necessary steps to successfully 
              pass all brand mystery shops and enhance consumer experience.
              </p>
          </ol>
          <div className="text-center pt-5">
          <button className="rounded-full bg-electric-blue"><a className="text-black text-xs px-2 hover:font-bold hover:text-md" target={"_blank"} href="assets/Resume.pdf">Download PDF resume</a></button>
          </div>
          
          </section>
          <section>
            <div className="text-center text-3xl text-dark-blue py-10">
              <h4 className="pt-10 font-bold tracking-widest">Extracurriculars & Volunteer Work</h4>
            </div>
            <div className="text-center text-cool-grey">
              <ul>
                <li className="py-7">Board Member for the Fueling For A Cure Annual Charity Golf Event</li>
                <li>Alumni Volunteer at University of Detroit Jesuit High School</li>
                <li className="py-7">Phi Kappa Psi Professional Development Conference</li>
                <li>Executive Board at Phi Kappa Psi Michigan Beta</li>
                <li className="py-7">Freelance Web Development</li>
              </ul>
            </div>

          </section>
      </div>
      <Footer />
    </div>
  );
}
