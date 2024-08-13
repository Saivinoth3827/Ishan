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
    marginRight: '20px',
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
    height: '80px',
    width: '80px',
    marginRight: '10px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    marginLeft: '20px',
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
  main: {
    padding: '20px',
    textAlign: 'center',
  },
  mainTitle: {
    fontFamily: "'Dancing Script', cursive",
    color: '#000000',
    fontSize: '36px',
    marginBottom: '20px',
  },
  giftContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  gift: {
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    width: '200px',
  },
  giftImage: {
    width: '100%',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  giftTitle: {
    fontSize: '18px',
    margin: '10px 0',
  },
  buyButton: {
    backgroundImage: 'linear-gradient(45deg, #7B68EE, #ADD8E6)',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px 0',
    width: '100%',
  },
  addToCartButton: {
    backgroundImage: 'linear-gradient(45deg, #7B68EE, #ADD8E6)',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px 0',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  headerButton: {
    backgroundColor: '#FF0000', // Red color for buttons
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bold',
  },
};

const Product = () => {
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
          <h1>Ishan Customised Gifts</h1>
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
                style={{ height: '20px', width: '20px' }}
              />
            </button>
          </div>
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
              alt="User"
            />
            <div style={styles.buttonContainer}>
              <a href='/addproduct'><button style={styles.headerButton} >Add Product</button></a>              
              <button style={styles.headerButton} onClick={()=>logout({ returnTo: window.location.origin })}>Logout</button>
            </div>
          </div>
        </div>
      </header>
      <main style={styles.main}>
        <h1 style={styles.mainTitle}>MY LOVE</h1>
        <div style={styles.giftContainer}>
          {[
            {
              src: "https://assets.winni.in/product/primary/2023/1/82069.jpeg?dpr=1&w=400",
              title: "Led Temperature Bottle",
              buyLink: "/payment",
            },
            {
              src: "https://assets.winni.in/product/primary/2024/1/92860.jpeg?dpr=1&w=400",
              title: "Love Story Caricalture",
              buyLink: "/payment1",
            },
            {
              src: "https://assets.winni.in/product/primary/2024/1/92900.jpeg?dpr=1&w=400",
              title: "Loyal Love Personalised LED Lamp",
              buyLink: "/payment2",
            },
            {
              src: "https://assets.winni.in/product/primary/2023/2/83065.jpeg?dpr=1&w=400",
              title: "2D Heart KeyChain",
              buyLink: "/payment3",
            },
          ].map((gift, index) => (
            <div style={styles.gift} key={index}>
              <img style={styles.giftImage} src={gift.src} alt={`Gift ${index + 1}`} />
              <h3 style={styles.giftTitle}>{gift.title}</h3>
              <a href={gift.buyLink}>
                <button style={styles.buyButton}>Buy Now</button>
              </a>
              <button style={styles.addToCartButton}>Add to cart</button>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div style={styles.giftContainer}>
          {[
            {
              src: "https://assets.winni.in/product/primary/2021/10/55075.png?dpr=1&w=400",
              title: "Signature Style Couple Necklace",
              buyLink: "/payment4",
            },
            {
              src: "https://assets.winni.in/product/primary/2023/1/81028.jpeg?dpr=1&w=400",
              title: "Photo Puzzle Frame",
              buyLink: "/payment5",
            },
            {
              src: "https://assets.winni.in/product/primary/2023/8/87997.jpeg?dpr=1&w=400",
              title: "Rose Radience Personalised Bracelet",
              buyLink: "/payment6",
            },
            {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNQL7pQPcj4tafYF4qKHce3EZk8hV0ja82w&s",
              title: "Show Piece",
              buyLink: "/payment7",
            },
          ].map((gift, index) => (
            <div style={styles.gift} key={index + 4}>
              <img style={styles.giftImage} src={gift.src} alt={`Gift ${index + 5}`} />
              <h3 style={styles.giftTitle}>{gift.title}</h3>
              <a href={gift.buyLink}>
                <button style={styles.buyButton}>Buy Now</button>
              </a>
              <button style={styles.addToCartButton}>Add to cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Product;
