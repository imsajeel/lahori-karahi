import { FiMenu } from "react-icons/fi";
import { GiClick, GiMeal, GiHotMeal } from "react-icons/gi";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import MenuHome from "./components/MenuHome/MenuHome";
import BookingForm from "./components/BookingForm/BookingForm";

function App() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="App">
      {/* <div className="top-notice">
        We're adding new stuff and updating our Menu that's why you may find
        some features are not working.
      </div> */}
      <div className="top-fold">
        <header>
          <div className="menuButton">
            <FiMenu size={"1.5rem"} />
          </div>
          <div className="logo">
            <img
              src="./images/Lahori-Logo-300x100-white.png"
              alt="Lahori Karahi"
            />
          </div>
        </header>
        <div className="main ">
          <h1>Welcome to Lahori</h1>
          <p>
            We offer food and cuisine from the city of <b>Lahore</b> in Punjab,
            Pakistan. People from Lahore are renowned and over the country for
            their <b>love</b> of food. Lahore is a city with an{" "}
            <b>extremely rich food culture</b> and a vast variety of{" "}
            <b>gastronomic delights</b>. At Lahori Karahi, our experienced chefs
            from Lahore make sure they prepare <b>Authentic Lahori Food</b>
          </p>
          <a href="#menu">
            <button
              className="red-glow"
              style={{ background: "red", color: "white" }}
            >
              Our Menu
            </button>
          </a>
        </div>
      </div>
      <div className="services">
        <div className="custom-shape-divider-top-1703117042">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="service">
          <div className="icon">
            <GiClick />
          </div>
          <div className="title">Order Your Food</div>
          <div className="discription">
            Satisfy your cravings with just a few clicks! Order your favorite
            cuisine from our menu, customized to your taste, and enjoy
            convenient pickup options. Indulge in a delightful dining
            experience, right at your fingertips.
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <GiMeal />
          </div>
          <div className="title">Pick Up</div>
          <div className="discription">
            Choose your preferred way to enjoy your meal! Opt for hassle-free
            quick and convenient pick-up, ensuring your culinary cravings are
            satisfied just the way you like.
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <GiHotMeal />
          </div>
          <div className="title">DELICIOUS RECIPES</div>
          <div className="discription">
            Discover a world of flavors with our delicious recipes! From gourmet
            delights to quick and easy meals, explore a diverse range of
            culinary creations that will tantalize your taste buds and inspire
            your inner chef.
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1703116984">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="speciality">
        <h2 className="title">Fresh from Lahori</h2>
        <h1 className="special">OUR SPECIALITY</h1>
        <div className="speciality-list">
          <div className="speciality-item">
            <img
              src="https://rookiewithacookie.com/wp-content/uploads/2020/03/IMG_2108-1.jpg"
              alt="karahi"
            />
            <h2>Lamb Karahi</h2>
          </div>
          <div className="speciality-item">
            <img
              src="https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_2093581276-750x500.jpg"
              alt="Chargha"
            />
            <h2>Deghi Chargha</h2>
          </div>
          <div className="speciality-item">
            <img
              src="https://i.pinimg.com/originals/4d/cc/f5/4dccf5ed052c5f1f6d8e626b3d82ec4e.jpg"
              alt="fish"
            />
            <h2>Lahori Fish</h2>
          </div>
        </div>
        <a href="#menu">
          <button className="secondary red-glow">View More</button>
        </a>
      </div>

      <div className="lahori-image">
        <div className="custom-shape-divider-top-1703116172">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div>
          <h1 className="special">Find us</h1>
          <h2 className="title">
            824 Stockport Rd, Levenshulme <br />
            Manchester M19 3AW <br />
            United Kingdom
            <br />
            <br />
            <br />
            <button
              className="secondary red-glow"
              onClick={() =>
                openInNewTab(
                  "https://www.google.com/maps/dir//824+Stockport+Rd,+Levenshulme,+Manchester+M19+3AW/@53.4483304,-2.2744931,12z"
                )
              }
            >
              Get Directions
            </button>
          </h2>
        </div>
        <img src="images/background.jpeg" alt="Lahori Pic" />
        <div className="custom-shape-divider-bottom-1703116588">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="delivery-homepage">
        <div>
          <h1 className="title">Get your meal delivered to you.</h1>
          <h1 className="special">Order Now!</h1>
        </div>
        <img
          src="images/fresheats.webp"
          alt="FreshEats"
          onClick={() =>
            openInNewTab(
              "https://fresh-eats.co.uk/lahori-karahi-chargha-manchester"
            )
          }
        />
      </div>
      <MenuHome />
      <div className="booking">
        <div className="booking-info">
          <h2 className="title">Fresh from Lahori</h2>
          <h1>BOOK ONLINE</h1>
          <p>
            Elevate your dining experience with ease! Reserve a table at our
            restaurant, where exquisite cuisine meets inviting ambiance. Enjoy
            impeccable service and create memorable moments with your loved
            ones, ensuring a delightful and unforgettable mealtime.
          </p>
          <a href="tel:01612493919">
            <h1 className="booking-phone">
              <FaPhoneAlt style={{ transform: "translateY(4px)" }} /> &nbsp;
              0161 249 3919
            </h1>
          </a>
        </div>
        <BookingForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;
