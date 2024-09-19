import React from 'react';
import '../styles/Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Kabab Biryani Curry</h1>
          <p>Experience the finest Indian cuisine in town.</p>
          <a href="/menu" className="cta-button">Explore Our Menu</a>
        </div>
      </header>

      <section className="specialties">
        <h2>Our Specialties</h2>
        <div className="specialty-list">
          <div className="specialty-item">
            <img src="https://images4.alphacoders.com/963/thumb-1920-963599.jpg" alt="Grilled kababs with spices" />
            <h3>Kabab Delights</h3>
            <p>Succulent kababs grilled to perfection with aromatic spices.</p>
          </div>
          <div className="specialty-item">
            <img src="https://img.freepik.com/premium-photo/feast-your-eyes-biryani-extravaganza_636537-56987.jpg" alt="Biryani with colorful spices" />
            <h3>Biryani Extravaganza</h3>
            <p>Flavorful biryanis that capture the essence of traditional Indian cuisine.</p>
          </div>
          <div className="specialty-item">
            <img src="https://coursepick.com/wp-content/uploads/home-made-curry-dish.jpg" alt="Rich and creamy curry dish" />
            <h3>Curry Classics</h3>
            <p>A variety of rich and creamy curries that will tantalize your taste buds.</p>
          </div>
        </div>
      </section>

      <section className="restaurant-photos">
        <h2>Our Restaurant</h2>
        <div className="photo-gallery">
          <div className="photo-item">
            <img src="https://i0.wp.com/www.brandingidentitydesign.com/wp-content/uploads/2016/12/Restaurant-Interiors-01.jpg?resize=700%2C466" alt="Restaurant interior showing cozy seating" />
            <p>Cozy Seating Area</p>
          </div>
          <div className="photo-item">
            <img src="https://www.miamiherald.com/latest-news/7d003o/picture280120184/alternates/LANDSCAPE_768/patel3.jpg" alt="Restaurant interior with vibrant decor" />
            <p>Vibrant Decor</p>
          </div>
          <div className="photo-item">
            <img src="https://i.pinimg.com/originals/53/ec/ef/53ecefc3b422e027d3be9e0c5eb3ac49.jpg" alt="Restaurant setting with elegant table arrangements" />
            <p>Elegant Table Arrangements</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Kabab Biryani Curry. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
 