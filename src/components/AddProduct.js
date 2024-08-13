import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DropboxChooser from "react-dropbox-chooser";

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f9f9f9",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "10px 20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  searchBarContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    width: "400px",
    padding: "5px 10px",
    backgroundColor: "#f1f1f1",
    borderRadius: "25px",
    marginRight: "20px",
  },
  searchInput: {
    border: "none",
    background: "none",
    outline: "none",
    flexGrow: 1,
    padding: "10px",
    fontSize: "16px",
  },
  searchButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "5px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    height: "80px",
    width: "80px",
    marginRight: "10px",
  },
  nav: {
    display: "flex",
    gap: "20px",
    marginLeft: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  iconImage: {
    height: "30px",
    width: "30px",
  },
  main: {
    padding: "20px",
    textAlign: "center",
  },
  mainTitle: {
    fontFamily: "'Dancing Script', cursive",
    color: "#000000",
    fontSize: "36px",
    marginBottom: "20px",
  },
  giftContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  gift: {
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    position: "relative",
  },
  giftImage: {
    width: "100%",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    marginBottom: "10px",
  },
  giftTitle: {
    fontSize: "18px",
    margin: "10px 0",
  },
  buyButton: {
    backgroundImage: "linear-gradient(45deg, #7B68EE, #ADD8E6)",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px 0",
    width: "100%",
  },
  addToCartButton: {
    backgroundImage: "linear-gradient(45deg, #7B68EE, #ADD8E6)",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px 0",
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  headerButton: {
    backgroundColor: "#FF0000", // Red color for buttons
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
  },
  addProductButton: {
    backgroundColor: "#007bff", // Blue color for "Add Product" button
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    margin: "20px 0",
  },
  formContainer: {
    marginTop: "20px",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  formInput: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  formButton: {
    backgroundColor: "#FF0000",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    margin: "10px 0",
  },
  formImagePreview: {
    marginTop: "10px",
    maxWidth: "300px",
    maxHeight: "300px",
    objectFit: "contain",
    display: "block",
    margin: "10px auto",
  },
  deleteButton: {
    backgroundColor: "#FF6347", // Tomato color for delete button
    border: "none",
    padding: "5px",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: "10px",
    right: "10px",
  },
};

const AddProduct = () => {
  const { logout } = useAuth0();
  const [products, setProducts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({
    imageFile: null,
    description: "",
  });

  useEffect(() => {
    // Load products from local storage when the component mounts
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    // Save products to local storage whenever the products array changes
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProductClick = () => {
    setIsFormVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleDropboxFiles = (files) => {
    console.log("Selected files from Dropbox:", files); // Debugging output
    if (files.length > 0) {
      const fileUrl = files[0].link;
      console.log("File URL:", fileUrl); // Debugging output
      setNewProduct({
        ...newProduct,
        imageFile: fileUrl.replace(/dl=0$/, "dl=1"),
      });
    }
  };

  const handleSubmit = () => {
    if (newProduct.imageFile && newProduct.description) {
      // Add the new product to the products array
      const updatedProducts = [
        ...products,
        {
          src: newProduct.imageFile,
          title: newProduct.description,
          buyLink: "/payment",
        },
      ];
      setProducts(updatedProducts);

      // Hide the form and reset the new product state
      setIsFormVisible(false);
      setNewProduct({ imageFile: null, description: "" });
    } else {
      alert("Please provide both an image and a description.");
    }
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

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
          <a style={styles.navLink} href="#">
            Home
          </a>
          <a style={styles.navLink} href="#">
            Categories
          </a>
          <a style={styles.navLink} href="#">
            Promos
          </a>
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
                style={{ height: "20px", width: "20px" }}
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
              <button
                style={styles.headerButton}
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      <main style={styles.main}>
        <h1 style={styles.mainTitle}>MY LOVE</h1>
        <div style={styles.giftContainer}>
          {products.map((gift, index) => (
            <div style={styles.gift} key={index}>
              <button
                style={styles.deleteButton}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <img
                style={styles.giftImage}
                src={gift.src}
                alt={`Gift ${index + 1}`}
              />
              <h3 style={styles.giftTitle}>{gift.title}</h3>
              <a href={gift.buyLink}>
                <button style={styles.buyButton}>Buy Now</button>
              </a>
              <button style={styles.addToCartButton}>Add to cart</button>
            </div>
          ))}
        </div>
        {!isFormVisible ? (
          <button
            style={styles.addProductButton}
            onClick={handleAddProductClick}
          >
            Add Product
          </button>
        ) : (
          <div style={styles.formContainer}>
            <DropboxChooser
              appKey={"ikpmovuujef1i31"}
              success={(files) => handleDropboxFiles(files)} // Update the state with the selected file
              cancel={() => console.log("cancel")}
              multiselect={false}
            >
              <button style={styles.formButton}>
                Choose Image from Dropbox
              </button>
            </DropboxChooser>

            {newProduct.imageFile && (
              <img
                src={newProduct.imageFile}
                alt="Preview"
                style={styles.formImagePreview}
              />
            )}
            <input
              type="text"
              name="description"
              placeholder="Enter product description"
              value={newProduct.description}
              onChange={handleInputChange}
              style={styles.formInput}
            />
            <button style={styles.formButton} onClick={handleSubmit}>
              Add Product
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AddProduct;
