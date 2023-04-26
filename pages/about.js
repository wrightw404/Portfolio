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
      <div className="flex items-stretch">
        <div className="bg-black">
            <h1 className="text-dark-blue text-3xl text-center font-bold tracking-widest pt-10 pb-5">Experience</h1>
            <div className="text-center pb-2">
              <button className="rounded-full bg-electric-blue"><a className="text-black text-xs px-2 hover:font-bold hover:text-md" target={"_blank"} href="assets/2023.04ResumePDF.pdf">Download PDF resume</a></button>
            </div>
            
            <section className="text-electric-blue px-10">
            <h4 className="tracking-widest font-bolder underline text-2xl">Education</h4>
            <ol className="text-cool-grey py-1">
                <li className="py-3"><p className="font-bold"> <a className="text-dark-blue">Michigan State University,</a></p><a className="hover:text-electric-blue hover:font-bold hover:underline pl-4" target={"_blank"} href='https://xa.cal.msu.edu/'>B.A. Experience Architecture</a></li>
                <li className="py-3"><p className="font-bold"> <a className="text-dark-blue">University of California at San Diego Extended Studies,</a></p><a className="hover:text-electric-blue hover:font-bold hover:underline pl-4" target={"_blank"} href='https://bootcamp.extension.ucsd.edu/coding/'>Full Stack Development Bootcamp</a></li>
            </ol>
            <h4 className="tracking-widest font-bolder underline py-1 pt-0 text-2xl">Work</h4>
            <ol className="text-cool-grey">
              <h3 className="font-bold pt-3 text-dark-blue">Sushi Chef <a className="text-cool-grey text-xs">Water Grill; San Diego, CA</a> </h3>
              <p className="py-2">Forecast daily demand and implement orders to maintain high standards and consistency in a fast-paced environment to ensure customer satisfaction.</p>
            </ol>
            
            </section>
        </div>
        <div className="relative bg-black">
        <div className='absolute inset-0 bg-gradient-30 from-[#972729] to-[#66fcf1] rounded-lg blur-2xl opacity-30'></div>
        <h1 className="relative text-dark-blue text-3xl pt-10 pb-6 px-32 font-bold tracking-widest">Skills</h1>
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
      <div className="bg-black bg-cover bg-center h-full min-h-screen">
        <section className="text-cool-grey px-10">
          <ol>
          <h3 className="font-bold pt-0 text-dark-blue">Jr. Sous Chef <a className="text-cool-grey text-xs">Nobu Chicago; Chicago, IL</a> </h3>
              <p className="py-2">Worked in collaboration with Executive Chef, Chef de Cuisine, and Sous Chefs to oversee staff and ensure the quality of final products. Communicated issues from staff to Sous Chefs and created adaptive solutions that would mitigate those issues. 
              </p>
          </ol>
          <ol>
          <h3 className="font-bold pt-3 text-dark-blue">Digital Intern (UX) <a className="text-cool-grey text-xs">Sydney Children's Hospitals Foundation; Sydney, Australia</a> </h3>
              <h4 className="py-1">Facilitated and coordinated the foundations recent expansion and curated the process from conception to publishing.</h4>
              <ul className="list-disc pl-4">
                <li>Designed, coded and implemented the redevelopment of the Foundations website in coordination with the Strategic Programs Director and Digital Product Manager that highlighted the benefits of the foundations recent expansion and importance of continued fundraising.</li>
                <li>Collaborated with Digital Producers across six different corporations to conduct usability testing of their respective websites.</li>
                <li>Identified obstacles in current web flow and applied UX methods to build mockups and prototypes that would implement efficient solutions to enhance user experience.</li>
                <li>Showcased weekly updates to board members and validated that the current updates work to streamline business processes.</li>
              </ul>
          </ol>
          <ol>
          <h3 className="font-bold pt-5 text-dark-blue">CSR / Assistant Manager <a className="text-cool-grey text-xs">Shore Thing Market; IRA, MI</a></h3>
              <ul className="list-disc pl-4 pt-2">
                <li>Co-managed the companys finances, paperwork, payroll and shift schedules that resulted in balanced and accurate books.</li>
                <li>Interviewed, hired, trained and led 7 employees across the company while balancing team cohesiveness.</li>
                <li>Forecasted seasonal demand of each line item to ensure optimal in-stock quantities.</li>
                <li>Built and managed vendor relationships, promotional programs, and instituted scan data resulting in higher profit margins and more value for the customer.</li>
                <li>Cultivated customer loyalty and return business through building trusted relationships, understanding the local buying behaviors and efficiently resolving customer relations opportunities.</li>
              </ul>
          </ol>
          <ol>
          <h3 className="font-bold pt-5 text-dark-blue">Image Consultant <a className="text-cool-grey text-xs">Barrick Enterprises; Royal Oak, MI</a></h3>
          <ul className="list-disc pl-4 pt-2">
                <li>Participated as a team member responsible for resolving customer, brand and mystery shopper feedback that prioritized the most impact while balancing the time to implement the change with cost.</li>
                <li>Maximized revenue opportunities through individually designed plans for each contracted account. Consulted with the dealers on-site on how best to fulfill the image requirements while maximizing score improvement across all brands that Barrick represents to drive desired consumer shopping behavior while satisfying brand requirements.</li>
                <li>Project managed image enhancements through scheduling vendors, ordering materials, helping with installation and ensuring timelines were met within budget</li>
              </ul>
          </ol>
          
          </section>
          <section className="bg-black bg-cover bg-center h-full min-h-screen">
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
