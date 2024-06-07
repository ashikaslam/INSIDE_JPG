import React from "react";
import Banner_Pic from "../assets/images/banner_pic.png";
import Click_img from "../assets/images/check-circle.png";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
const Home = () => {
  // course
  const courses1 = ["Competitive Programmer"];
  const courses2 = ["Backend Developer"];
  const courses3 = ["Frontend Developer"];
  const courses4 = ["DevOps Engineer"];
  const courses5 = ["Database Engineer"];
  // course end
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  if (isVideoPlaying === true) {
    const banner_image = document.getElementById("banner_PI_of_coding");
    const videoContainer = document.getElementById("videoContainer");
    const playButton = document.getElementById("playButton");
    const closeButton = document.getElementById("closeButton");
    const videoIframe = document.getElementById("videoIframe");
    banner_image.classList.add("hidden");
    videoContainer.classList.remove("hidden");
    playButton.classList.add("hidden");
    closeButton.classList.remove("hidden");
    // Autoplay the video
    videoIframe.src += "?autoplay=1";
  } else {
    const banner_image = document.getElementById("banner_PI_of_coding");
    const videoContainer = document.getElementById("videoContainer");
    const playButton = document.getElementById("playButton");
    const closeButton = document.getElementById("closeButton");
    const videoIframe = document.getElementById("videoIframe");

    if (banner_image && banner_image.classList.contains("hidden")) {
      banner_image.classList.remove("hidden");
    }
    if (videoContainer && !videoContainer.classList.contains("hidden")) {
      videoContainer.classList.add("hidden");
    }
    if (playButton && playButton.classList.contains("hidden")) {
      playButton.classList.remove("hidden");
    }
    if (closeButton && !closeButton.classList.contains("hidden")) {
      closeButton.classList.add("hidden");
    }

    // Stop the video and remove autoplay parameter
    try {
      videoIframe.src = videoIframe.src.split("?")[0];
    } catch (error) {
      console.error("Error resetting video iframe source:", error);
    }
  }
  //  fro stu caroserll
  const [index, setIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
      name: "Shamim Ulla",
      jop_title: "React Devoloper At Brain station 23",
      link: "#",
      description:
        "Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.",
    },
    // Add more cards as needed
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Ellias Hosain",
      jop_title: "jr Sqa At Google",
      link: "#",
      description:
        "Discover the best office setups to increase productivity and comfort for your team.",
    },
    {
      id: 3,
      image:
        "https://www.mantotman.nl/files/styles/tile_small/public/2023-09/jayden%2024%20rolstoelgebruiker02_1.png?h=8a8233ee&itok=iq9jU2sC",
      name: "Niloy Mia",
      jop_title: "Sr Programmer At Meta",
      link: "#",
      description:
        "Discover the best office setups to increase productivity and comfort for your team.",
    },
  ];

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  //
  return (
    <div>
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Practice</a>
                </li>
                <li>
                  <a>Courses</a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">WeCode</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <main className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <h1 className="text-3xl text-white text-center">
          A smart way to become a better{" "}
          <span className="font-bold text-Progrmar text-4xl">Programmer</span>.
        </h1>

        <div className="flex justify-center grid grid-cols-12">
          <div className="left col-span-3 min-h-full  font-bold text-Progrmar text-2xl     ">
            <br />
            <br />
            <br />
            <h1 className="inline mt-20 text-center">
              {" "}
              <img
                id="banner_PIc"
                className="w-7 h-7 inline"
                src={Click_img}
                alt="banner picture"
              />{" "}
            </h1>
            <Typewriter
              className=""
              words={courses1}
              loop={true}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />{" "}
            <br />
            <h1 className="inline mt-20 text-center">
              {" "}
              <img
                id="banner_PIc"
                className="w-7 h-7 inline"
                src={Click_img}
                alt="banner picture"
              />{" "}
            </h1>
            <Typewriter
              className=""
              words={courses2}
              loop={true}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
            <br />
            <h1 className="inline mt-20 text-center">
              {" "}
              <img
                id="banner_PIc"
                className="w-7 h-7 inline"
                src={Click_img}
                alt="banner picture"
              />{" "}
            </h1>
            <Typewriter
              className=""
              words={courses3}
              loop={true}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
            <br />
            <h1 className="inline mt-20 text-center">
              {" "}
              <img
                id="banner_PIc"
                className="w-7 h-7 inline"
                src={Click_img}
                alt="banner picture"
              />{" "}
            </h1>
            <Typewriter
              className=""
              words={courses4}
              loop={true}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
            <br />
            <h1 className="inline mt-20 text-center">
              {" "}
              <img
                id="banner_PIc"
                className="w-7 h-7 inline"
                src={Click_img}
                alt="banner picture"
              />{" "}
            </h1>
            <Typewriter
              className=""
              words={courses5}
              loop={true}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
            <br />
          </div>
          <div className="midd col-span-6">
            <img
              id="banner_PI_of_coding"
              className="align-center"
              src={Banner_Pic}
              alt="banner picture"
            />
            {/* video strt */}
            <div id="videoContainer" class="hidden mt-2">
              <iframe
                id="videoIframe"
                className="w-full mt-5 rounded-2xl if_problem_with_bg"
                height="315"
                src="https://www.youtube.com/embed/_0D5lXDjNpw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            {/* video end */}
          </div>
          {/* write div start */}
          <div className="right col-span-3 min-h-full flex justify-center">
            <div>
              {" "}
              <button
                id="playButton"
                onClick={() => setIsVideoPlaying(true)}
                className="btn btn-accent if_problem_with_bg  mt-40 "
              >
                About Premium
              </button>
              <button
                id="closeButton"
                onClick={() => setIsVideoPlaying(false)}
                className="btn btn-accent if_problem_with_bg  mt-40 hidden "
              >
                Close Video
              </button>
            </div>
          </div>
          {/* write div end */}
        </div>
        <h1 className="text-3xl text-white text-center mt-2">
          Get the Perfect Planfor yourself
        </h1>

        {/*  price card */}

        <div className="py-16 area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                  <img
                    className="object-cover w-full h-[220px]"
                    src="https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/10/Programming-languages-for-kids-learn-to-code-from-scratch.png"
                    alt="Product"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300 ">
                      View Plan
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Free</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-900 font-bold text-lg">
                    $0.00/month
                  </span>
                  <button className="btn btn-accent if_problem_with_bg text-white py-2 px-4 rounded-full font-bold ">
                    Choose your plan
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                  <img
                    className="object-cover w-full h-[220px]"
                    src="https://img.freepik.com/free-vector/programmer-working-flat-style_52683-15041.jpg?t=st=1717757120~exp=1717760720~hmac=bcef95c05b08795e8192e40dd31af8e98c2df5203ce5512fef0b209a0d00fd39&w=740"
                    alt="Product"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                      View Plan
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Basic</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-900 font-bold text-lg">
                    $9.90/month
                  </span>
                  <button className="btn btn-accent if_problem_with_bg text-white py-2 px-4 rounded-full font-bold ">
                    Choose your plan
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                  <img
                    className="object-cover w-full h-[220px]"
                    src="https://www.springboard.com/blog/wp-content/uploads/2020/07/what-are-data-structures-and-algorithms.png"
                    alt="Product"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                      View Plan
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Pro</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-900 font-bold text-lg">
                    $19.99/month
                  </span>
                  <button className="btn btn-accent if_problem_with_bg text-white py-2 px-4 rounded-full font-bold ">
                    Choose your plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="area1 mt-[-10px]">
          <h1 className="text-3xl text-white text-center mb-2">
            Some of our successfull students
          </h1>
          {/* stu show start */}

          <div className="relative max-w-2xl mx-auto ">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(${-index * 100}%)` }}
              >
                {cards.map((card) => (
                  <div className="min-w-full" key={card.id}>
                    <div className="flex flex-col md:flex-row rounded-xl shadow-md overflow-hidden bg-white">
                      <div className="md:flex-shrink-0">
                        <img
                          className="h-48 w-full object-cover  md:w-48"
                          src={card.image}
                          alt={card.title}
                        />
                      </div>
                      <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                          {card.name}
                        </div>
                        <a
                          href={card.link}
                          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                        >
                          {card.jop_title}
                        </a>
                        <p className="mt-2 text-slate-500">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handlePrevClick}
              className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-Progrmar text-white px-3 py-1 rounded-full"
            >
              Prev
            </button>
            <button
              onClick={handleNextClick}
              className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-Progrmar text-white px-3 py-1 rounded-full"
            >
              Next
            </button>
          </div>
        </div>

        

        <footer className="footer p-10 bg-base-200 text-base-content ">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            WeCode Ltd.
            <br />
            Providing reliable tech since 2020
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">IT jobs</a>
          <a className="link link-hover">CP Management</a>
          <a className="link link-hover">Progamming</a>
          <a className="link link-hover">Sdlc</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      </main>

      {/* footer */}

      

      {/*  */}
    </div>
  );
};

export default Home;
