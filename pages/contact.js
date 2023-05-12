import Nav from "../components/Nav";
import Footer from "../components/Footer"

export default function Contact() { 
    return (
    <div className="bg-black bg-cover bg-center h-screen">
     <Nav /> 
     <section className="justify-items-center pt-16 ">
        <div className="bg-second-bg-image bg-[length:1750px_210px] py-24" alt="city"></div>

        <section className="bg-black">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md text-electric-blue">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-electric-blue">Reach Out Below</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">I will get back to you as soon as possible.</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required ></input>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Optional" ></input>
          </div>
          <div className="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-electric-blue sm:w-fit hover:bg-electric-blue focus:ring-4 focus:outline-none focus:ring-electric-blue dark:bg-dark-blue dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:hover:text-black">Send message</button>
      </form>
  </div>
</section>

      </section>
     
    
    <Footer />
  </div>
    )
};