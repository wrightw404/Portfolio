import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
// import Link from "next/link";
import fuelcure from "../public/assets/projects/newfuel.png";
import btat from "../public/assets/projects/beenthereatethat.png"
import FE from "../public/assets/projects/fantastic-ecommerce.png"
import schf from "../public/assets/projects/schf.png"
import stm from "../public/assets/projects/stm.png"
import recipe from "../public/assets/projects/recipe.png"

import ProjectItem from "../components/ProjectItem";


export default function Projects() {
  return (
    <div className="w-full bg-black">
      <Nav />
      <section className="justify-items-center pt-16 ">
        <div
          className="bg-second-bg-image bg-[length:1750px_210px] py-24"
          alt="city"
        ></div>
      </section>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-2xl tracking-wide uppercase text-electric-blue">
          Projects
        </p>
        <h2 className="text-cool-grey text-3xl font-bold py-4">
          
          What I've Built / Worked On
        </h2>
        <div className="slider-container">
   <Carousel className="py-5 m-auto  content-center justify-center flex rounded-xl" width='100%' centerMode={false} showThumbs={false} autoPlay={true} stopOnHover={false} interval={3000} infiniteLoop={true} showArrows={true} swipeable={true} dynamicHeight={false}>
              <div>
                <ProjectItem 
          title='Shore Thing Market' 
          backgroundImg={stm} 
          skills='Worked in collaboration with the store owner to really understand what they want to get out of having a website. Skills I used include Next JS, Tailwind CSS, and Vercel. CURRENTLY REBUILDING WITH NEW OWNER.' 
          projectUrl='https://shorethingmarket.vercel.app/'
          />
                </div>
                <div>
                <ProjectItem 
          title='Fueling For A Cure' 
          backgroundImg={fuelcure}
          skills='Created an effective and efficient website. I Communicate with other board members consistently to provide updates and new features that solve problems that arise.' 
          projectUrl='https://www.fuelforacure.org/'
          />
                </div>
                <div>
                <ProjectItem 
          title="Sydney Children's Hospitals Foundation" 
          backgroundImg={schf} 
          skills='Conducted usability testing to gauge web traffic across the different entities sites in order to build prototypes that would incorporate a user-friendly interface. Worked with Digital Producers to implement new features that would be fully compatible with the current sites back-end software.'
          projectUrl="https://www.schf.org.au"
          />
                </div>
                <div>
                <ProjectItem 
          title='Fantastic E-Commerce' 
          backgroundImg={FE} 
          skills='Worked with a group to create a fully functioning e-commerce website. We were able process payments by using a third party, Stripe. We also incorporated Magic Link, which is a security measure that doesnt allow people to access sensitive information in the case of leak or hack. Skills we used include Next JS, Tailwind CSS, Magic Link, Stripe, Vercel' 
          projectUrl='https://fantastic-ecomerce.vercel.app/'
          />
                </div>
                <div>
                <ProjectItem 
          title='Recipe Finder' 
          backgroundImg={recipe} 
          skills='Worked with a group to create functioning website that calls a third party API. We were able to successfully integrate the API and have it call up recipes based on what ingredient the user searches for.' 
          projectUrl='https://courtneycaputo.github.io/recipe-finder/'
          />
                </div>
                <div>
                <ProjectItem 
          title='Been There Ate That' 
          backgroundImg={btat} 
          skills='Collaborated with group members to create a social media esque website. Users can login and interact (post, comment, delete, edit) with other users. In this scenario it served as a food recommendation app, similar to Yelp. Skills we used include React JS, Handlebars, Materialize CSS' 
          projectUrl='https://github.com/ddangeles/BeenThere-AteThat'
          />
                </div>
            </Carousel>
            </div>



    <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

   
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a target="blank" href="https://shorethingmarket.vercel.app/">
                    <Image alt="Placeholder" className="block h-auto w-full hover:scale-75" src={stm}></Image>
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="font-semibold">
                        <a className="no-underline hover:underline text-electric-blue" target="blank" href="https://shorethingmarket.vercel.app/">
                            Shore Thing Market
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm text-dark-blue">
                        2023
                    </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center text-cool-grey">
                        <p className="ml-2 text-sm text-center">
                        Worked in collaboration with the store owner to really understand what they want to get out of having a website. Skills I used include Next JS, Tailwind CSS, and Vercel. CURRENTLY REBUILDING WITH NEW OWNER.
                        </p>
                    </a>
                </footer>
            </article>
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a target="blank" href="https://www.fuelforacure.org/">
                    <Image alt="Placeholder" className="block h-auto w-full hover:scale-75" src={fuelcure}></Image>
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="font-semibold">
                        <a className="no-underline hover:underline text-electric-blue" target="blank" href="https://www.fuelforacure.org/">
                            Fueling For A Cure
                        </a>
                    </h1>
                    <p className="text-dark-blue text-sm">
                        2021
                    </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center text-cool-grey">
                        <p className="ml-2 text-sm text-center">
                        Created an effective and efficient website. I Communicate with other board members consistently to provide updates and new features that solve problems that arise.
                        </p>
                    </a>
                </footer>
            </article>
        </div>


        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <Image alt="Placeholder" className="block h-auto w-full hover:scale-75" src={schf}></Image>
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="font-semibold hover:scale-75 text-electric-blue">
                        <a target="blank" href="https://www.schf.org.au">
                            Sydney Children's Hospitals Foundation
                        </a>
                    </h1>
                    <p className="text-dark-blue text-sm">
                        2019
                    </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-cool-grey" target="blank" href="https://www.schf.org.au">
                        <p className="ml-2 text-sm text-center">
                        Conducted usability testing to gauge web traffic across the different entities sites in order to build prototypes that would incorporate a user-friendly interface. Worked with Digital Producers to implement new features that would be fully compatible with the current sites back-end software.
                        </p>
                    </a>
                </footer>
            </article>
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <Image alt="Placeholder" className="block h-auto w-full hover:scale-75" src={FE}></Image>
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="font-semibold hover:scale-75 text-electric-blue">
                        <a className="no-underline hover:underline text-electric-blue" target="blank" href="https://fantastic-ecomerce.vercel.app/">
                            Fantastic E-Commerce 
                        </a>
                    </h1>
                    <p className="text-dark-blue text-sm">
                        2022
                    </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-cool-grey" target="blank" href="https://fantastic-ecomerce.vercel.app/">
                        <p className="ml-2 text-sm text-center">
                        Worked with a group to create a fully functioning e-commerce website. We were able process payments by using a third party, Stripe. We also incorporated Magic Link, which is a security measure that doesnt allow people to access sensitive information in the case of leak or hack. Skills we used include Next JS, Tailwind CSS, Magic Link, Stripe, Vercel
                        </p>
                    </a>
                </footer>
            </article>
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <Image alt="Placeholder" className="block h-auto w-full hover:scale-75" src={recipe}></Image>
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="font-semibold hover:scale-75 text-electric-blue">
                        <a className="no-underline hover:underline text-electric-blue" target="blank" href="https://courtneycaputo.github.io/recipe-finder/">
                            Recipe Finder
                        </a>
                    </h1>
                    <p className="text-dark-blue text-sm">
                        2022
                    </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-cool-grey" target="blank" href="https://courtneycaputo.github.io/recipe-finder/">
                        <p className="ml-2 text-sm text-center">
                        Worked with a group to create functioning website that calls a third party API. We were able to successfully integrate the API and have it call up recipes based on what ingredient the user searches for
                        </p>
                    </a>
                </footer>
            </article>
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <Image alt="Placeholder" className="block h-auto w-full hover:scale-75" src={btat}></Image>
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="font-semibold hover:scale-75 text-electric-blue">
                        <a className="no-underline hover:underline text-electric-blue" target="blank" href="https://github.com/ddangeles/BeenThere-AteThat">
                            Been There Ate That 
                        </a>
                    </h1>
                    <p className="text-dark-blue text-sm">
                       2022
                    </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-cool-grey" target="blank" href="https://github.com/ddangeles/BeenThere-AteThat">
                        <p className="ml-2 text-sm text-center">
                        Collaborated with group members to create a social media esque website. Users can login and interact (post, comment, delete, edit) with other users. In this scenario it served as a food recommendation app, similar to Yelp. Skills we used include React JS, Handlebars, Materialize CSS
                        </p>
                    </a>
                </footer>
            </article>
        </div>
   




    </div>
</div>



      </div>
      <Footer />
    </div>
  );
}
