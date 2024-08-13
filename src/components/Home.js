import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f9f9f9',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    width: '400px',
    padding: '5px 10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '25px',
    marginRight: '20px', // Reduced margin to make space for buttons
  },
  searchInput: {
    border: 'none',
    background: 'none',
    outline: 'none',
    flexGrow: 1,
    padding: '10px',
    fontSize: '16px',
  },
  searchButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '100px',
    width: '100px',
    marginRight: '10px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    marginLeft: '100px',
  },
  navLink: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  iconImage: {
    height: '30px',
    width: '30px',
  },
  profileMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoutButton: {
    height: '40px',
    width: '100px',
    borderRadius: '25px',
    borderWidth: '0px',
    backgroundColor: '#f44336',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  firstSection: {
    backgroundColor: '#f8cece',
    display: 'flex',
    height: '250px',
    marginTop: '50px',
    alignItems: 'center',
    paddingLeft: '50px',
  },
  inner: {
    backgroundColor: 'rgb(232, 201, 201)',
    height: '200px',
    width: '400px',
    marginLeft: '50px',
    alignItems: 'center',
    display: 'flex',
    borderRadius: '10px',
  },
  images: {
    marginTop: '3px',
    backgroundColor: 'yellow',
    height: '180px',
    width: '170px',
    marginLeft: '10px',
  },
  wordings: {
    backgroundColor: 'rgb(232, 201, 201)',
    height: '180px',
    width: '200px',
    marginLeft: '10px',
    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    paddingLeft: '5px',
  },
  upbutton: {
    height: '30px',
    width: '80px',
    borderRadius: '10px',
    borderWidth: '0px',
    boxShadow: '9px',
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    backgroundColor: 'lightgoldenrodyellow',
    cursor: 'pointer',
  },
  secondSection: {
    height: '500px',
    display: 'inline-flex',
    margin: 0,
    padding: 0,
  },
  innerfour: {
    height: '400px',
    width: '650px',
    marginLeft: '50px',
    alignItems: 'center',
    display: 'flex',
    borderRadius: '10px',
  },
  images1: {
    width: '650px',
    height: '400px',
    borderRadius: '15px',
    opacity: 0.7,
  },
  container: {
    display: 'flex',
    gap: '20px',
    marginLeft: '50px',
    paddingLeft: '15px',
  },
  item: {
    width: '150px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    transition: 'transform 0.3s',
  },
  itemImage: {
    width: '100%',
    borderRadius: '10px',
    opacity: 0.7,
    transition: 'opacity 0.3s',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 0',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  footerColumn: {
    flex: 1,
    minWidth: '250px',
    margin: '20px',
  },
  footerColumnTitle: {
    borderBottom: '2px solid #444',
    paddingBottom: '10px',
    marginBottom: '15px',
    fontSize: '18px',
  },
  footerLink: {
    color: '#bbb',
    textDecoration: 'none',
    margin: '5px 0',
    display: 'block',
    transition: 'color 0.3s',
  },
  footerBottom: {
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#222',
    color: '#bbb',
    borderTop: '1px solid #444',
  },
};

const HomePage = () => {
  const { logout } = useAuth0();
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <img
            style={styles.logoImage}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasWFNdR6EJs6aVauyDcCTSXm9wk34vVIK8A&s"
            alt="Logo"
          />
          <h1>Ishan Customized Gifts</h1>
        </div>
        <nav style={styles.nav}>
          <a style={styles.navLink} href="#">Home</a>
          <a style={styles.navLink} href="#">Categories</a>
          <a style={styles.navLink} href="#">Promos</a>
        </nav>
        <div style={styles.searchBarContainer}>
          <div style={styles.searchBar}>
            <input
              style={styles.searchInput}
              type="text"
              placeholder="Search For Gifts..."
            />
            <button style={styles.searchButton} type="submit">
              <img
                className="icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8gwAjvSiT9R72FDYnDd3f8X2SSh8spT8Vqd-bFDd3eCRccnPJ6HiMJ61Ww&s"
                alt="Search Icon"
                style={{ width: '20px', height: '20px' }}
              />
            </button>
          </div>
          <div style={styles.profileMenu}>
            <div style={styles.icons}>
              <img
                style={styles.iconImage}
                src="https://en.pimg.jp/062/080/817/1/62080817.jpg"
                alt="Favorites"
              />
              <img
                style={styles.iconImage}
                src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg"
                alt="Cart"
              />
              <img
                style={styles.iconImage}
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="Profile"
              />
              <button style={styles.logoutButton} onClick={()=>logout({ returnTo: window.location.origin })}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div style={styles.firstSection}>
          {[
            {
              title: "Personal Gifts",
              description: "Take a lot of memories with Ishan",
              imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwN2aZ4sFjVNJMRPD0FwwPEwESVzyiclhZLDNZ7nvI8h3SrxJaE1k9l28CIkw1wuGtA5s&usqp=CAU",
            },
            {
              title: "Customized Gifts",
              description: "Create your memories with Ishan",
              imgSrc: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwxfHxnaWZ0c3xlbnwwfHx8fDE2OTM4MDcyMjd8MA&ixlib=rb-4.0.3&fm=jpg&w=6000&h=4000&fit=max",
            },
            {
              title: "Festive Gifts",
              description: "Celebrate this festive with Ishan",
              imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCWOBRPiWIChqaEqhTv4ZcRZvOHsqqsgNxw&s",
            },
          ].map((gift, index) => (
            <div style={styles.inner} key={index}>
              <div style={styles.wordings}>
                <h2>{gift.title}</h2>
                <p>{gift.description}</p>
                <a href="/product">
                  <button style={styles.upbutton}>Shop now</button>
                </a>
              </div>
              <div style={styles.images}>
                <img style={{ height: '180px', width: '170px' }} src={gift.imgSrc} alt={gift.title} />
              </div>
            </div>
          ))}
        </div>
        <br /><br />
        <div style={styles.secondSection}>
          {[
            "https://noraydesigns.com/cdn/shop/articles/birthday_gifts_for_girls.jpg?v=1605530067",
            "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2021/10/baby-shower-gift-ideas.jpg",
            "https://parentingpod.com/wp-content/uploads/2020/07/girls-with-gifts-768x513.jpg",
            "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt9d99c25259ef0e9b/6665eacf48c8be6802332e12/gifts_under_50-1.jpg",
          ].map((imageSrc, index) => (
            <div style={styles.innerfour} key={index}>
              <a href="/product">
                <img style={styles.images1} src={imageSrc} alt={`Gift ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
        <div style={styles.container}>
          {[
            { src: "https://www.fnp.com/images/pr/l/v20221102120744/personalized-led-cushion-yellow_1.jpg", title: "Cushions" },
            { src: "https://imgcdn.floweraura.com/personalised-bday-mug-9936170sd-C.jpg.jpg", title: "Mugs" },
            { src: "https://m.media-amazon.com/images/I/81Ky4X4gLNL._AC_UF1000,1000_QL80_.jpg", title: "Lamps" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWk8gLWE5aYRdO6-6I7_M1BbpV_mrqjidHLw&s", title: "Water Bottles" },
            { src: "https://www.indiagift.in/media/images/product/202104181618686015.jpg", title: "T-Shirt" },
            { src: "https://m.media-amazon.com/images/I/81gfdRtfoqL.jpg", title: "Photo to Art" },
            { src: "https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-cute-personalized-caricature-for-couples-110845-m.jpg", title: "Caricature" },
          ].map((item, index) => (
            <div style={styles.item} key={index}>
              <img style={styles.itemImage} src={item.src} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </main>
      <br /><br />
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerColumnTitle}>About Us</h3>
            <p>We are a leading company in providing the best quality products and services to our customers. Our mission is to enhance the lives of our customers through our offerings.</p>
          </div>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerColumnTitle}>Quick Links</h3>
            <a style={styles.footerLink} href="#home">Home</a>
            <a style={styles.footerLink} href="#about">About</a>
            <a style={styles.footerLink} href="#services">Services</a>
            <a style={styles.footerLink} href="#contact">Contact</a>
            <a style={styles.footerLink} href="#faq">FAQ</a>
          </div>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerColumnTitle}>Follow Us</h3>
            <div className="social-media">
              <a style={styles.footerLink} href="#facebook">Facebook</a>
              <a style={styles.footerLink} href="#twitter">Twitter</a>
              <a style={styles.footerLink} href="#instagram">Instagram</a>
              <a style={styles.footerLink} href="#linkedin">LinkedIn</a>
            </div>
          </div>
          <div style={styles.footerColumn}>
            <h3 style={styles.footerColumnTitle}>Subscribe to Our Newsletter</h3>
            <form className="subscription-form">
              <input type="email" placeholder="Enter your email" required style={{ padding: '10px', border: 'none', borderRadius: '5px', marginRight: '10px', marginTop: '10px', width: 'calc(100% - 120px)' }} />
              <button style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#444', color: '#fff', cursor: 'pointer', marginTop: '10px' }} type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

