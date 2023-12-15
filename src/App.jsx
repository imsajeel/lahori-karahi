import { FiMenu } from "react-icons/fi";
import { GiClick, GiMeal, GiHotMeal } from "react-icons/gi";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import MenuHome from "./components/MenuHome/MenuHome";

function App() {
  return (
    <div className="App">
      <div className="top-notice">
        We're adding new stuff and updating our Menu that's why you may find
        some features are not working.
      </div>
      <header>
        <div className="menuButton">
          <FiMenu size={"1.5rem"} />
        </div>
        <div className="logo">
          <img src="./images/Lahori-Logo-300x100.png" alt="Lahori Karahi" />
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
        <button>Our Menu</button>
      </div>
      <div className="services">
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
        <button className="secondary">View More</button>
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
        <div className="booking-input">
          <h2>BOOK A TABLE</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="How Many Persons?" />
          <input type="date" placeholder="Date" defaultValue="2023-12-18" />
          <input
            type="time"
            placeholder="Time"
            defaultValue="13:32"
            min="13:00"
            max="23:30"
          />
          <button className="secondary">Book Now!</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
