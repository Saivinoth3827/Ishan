import React from 'react';

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '#f9f9f9',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
  },
  image: {
    height: '50px',
    width: '50px',
  },
  heading: {
    color: 'rgb(114, 114, 212)',
    margin: '0 20px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    margin: '0 10px',
    cursor: 'pointer',
  },
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    width: '400px',
    padding: '5px 10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '25px',
  },
  searchBarInput: {
    border: 'none',
    background: 'none',
    outline: 'none',
    flexGrow: 1,
    padding: '10px',
    fontSize: '16px',
  },
  searchBarButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px',
  },
  searchBarButtonImg: {
    width: '20px',
    height: '20px',
  },
  paymentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  paymentMethods: {
    flex: 1,
    marginRight: '20px',
  },
  paymentMethodsHeader: {
    marginBottom: '20px',
  },
  paymentMethod: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  paymentMethodButton: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '5px 0',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '16px',
    cursor: 'pointer',
  },
  paymentMethodButtonImg: {
    width: '20px',
    height: '20px',
  },
  paymentMethodRadio: {
    marginRight: '10px',
  },
  cardOption: {
    display: 'flex',
    alignItems: 'center',
  },
  cardOptionImg: {
    marginRight: '10px',
  },
  addMethodsContainer: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '10px',
    backgroundColor: '#f9f9f9',
  },
  addMethod: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#007bff',
    margin: '10px 0',
  },
  addMethodImg: {
    marginRight: '5px',
  },
  steps: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  step: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 10px',
    fontSize: '16px',
  },
  stepImg: {
    width: '20px',
    height: '20px',
    marginRight: '5px',
  },
  stepChecked: {
    color: '#4CAF50',
  },
  stepCurrent: {
    color: '#1E90FF',
  },
  orderSummary: {
    flex: 0.4,
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
  },
  orderSummaryImg: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  orderSummaryTitle: {
    marginTop: 0,
  },
  orderSummaryTotal: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  payNowButton: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    marginTop: '10px',
  },
};

const PaymentPage = () => {
  return (
    <div style={styles.body}>
      <header>
        <div style={styles.container}>
          <img
            style={styles.image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasWFNdR6EJs6aVauyDcCTSXm9wk34vVIK8A&s"
            alt="Logo"
          />
          <h1 style={styles.heading}>Ishan Customised Gifts</h1>
          <div style={styles.navLinks}>
            <h1 style={styles.navLink}>Home</h1>
            <h1 style={styles.navLink}>Categories</h1>
            <h1 style={styles.navLink}>Promos</h1>
          </div>
          <div style={styles.searchBarContainer}>
            <div style={styles.searchBar}>
              <input
                type="text"
                placeholder="Search For Gifts..."
                style={styles.searchBarInput}
              />
              <button type="submit" style={styles.searchBarButton}>
                <img
                  style={styles.searchBarButtonImg}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8gwAjvSiT9R72FDYnDd3f8X2SSh8spT8Vqd-bFDd3eCRccnPJ6HiMJ61Ww&s"
                  alt="Icon"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div style={styles.steps}>
        <div style={{ ...styles.step, ...styles.stepChecked }}>
          <img
            style={styles.stepImg}
            src="https://img.icons8.com/ios-glyphs/30/4CAF50/checked-checkbox.png"
            alt="Checked"
          />
          Cart
        </div>
        <div style={{ ...styles.step, ...styles.stepChecked }}>
          <img
            style={styles.stepImg}
            src="https://img.icons8.com/ios-glyphs/30/4CAF50/checked-checkbox.png"
            alt="Checked"
          />
          Shipping
        </div>
        <div style={{ ...styles.step, ...styles.stepCurrent }}>
          <img
            style={styles.stepImg}
            src="https://img.icons8.com/ios-glyphs/30/1E90FF/checked-checkbox.png"
            alt="Current"
          />
          Checkout
        </div>
      </div>
      <main>
        <div style={styles.paymentContainer}>
          <div style={styles.paymentMethods}>
            <h2 style={styles.paymentMethodsHeader}>Payment Method</h2>
            <div style={styles.paymentMethod}>
              <button style={styles.paymentMethodButton}>
                Google Pay
                <img
                  style={styles.paymentMethodButtonImg}
                  src="https://img.icons8.com/color/48/google-pay.png"
                  alt="Google Pay"
                />
              </button>
            </div>
            <div style={styles.paymentMethod}>
              <button style={styles.paymentMethodButton}>
                Debit Card
                <img
                  style={styles.paymentMethodButtonImg}
                  src="https://img.icons8.com/color/48/bank-card-back-side.png"
                  alt="Debit Card"
                />
              </button>
              <div>
                <label style={styles.cardOption}>
                  <input
                    type="radio"
                    name="debit-card"
                    value="axim-bank"
                    style={styles.paymentMethodRadio}
                  />
                  <img
                    style={styles.cardOptionImg}
                    src="https://img.icons8.com/color/48/mastercard-logo.png"
                    alt="MasterCard"
                  />
                  Axim Bank - **** 4578
                </label>
              </div>
              <div>
                <label style={styles.cardOption}>
                  <input
                    type="radio"
                    name="debit-card"
                    value="hdfc-bank"
                    style={styles.paymentMethodRadio}
                  />
                  <img
                    style={styles.cardOptionImg}
                    src="https://img.icons8.com/color/48/visa.png"
                    alt="Visa"
                  />
                  HDFC Bank - **** 4521
                </label>
              </div>
            </div>
            <div style={styles.addMethodsContainer}>
              <h3>New Payment Methods</h3>
              <div style={styles.addMethod}>
                <img
                  style={styles.addMethodImg}
                  src="https://img.icons8.com/ios-filled/50/000000/plus-math.png"
                  alt="Add New Card"
                />
                Add New Cards
              </div>
              <div style={styles.addMethod}>
                <img
                  style={styles.addMethodImg}
                  src="https://img.icons8.com/ios-filled/50/000000/plus-math.png"
                  alt="Add New Method"
                />
                Add New Method
              </div>
            </div>
          </div>
          <div style={styles.orderSummary}>
            <img
              style={styles.orderSummaryImg}
              src="https://assets.winni.in/product/primary/2023/8/87997.jpeg?dpr=1&w=400"
              alt="Product Image"
            />
            <h3 style={styles.orderSummaryTitle}>Photo Puzzle Frame</h3>
            <p>Offers <a href="#">Add Code</a></p>
            <p>Order: $55.00</p>
            <p>Delivery: $2.00</p>
            <p style={styles.orderSummaryTotal}>Total: $57.00</p>
            <p>
              Address: 12, WLS Regency <a href="#">Edit</a>
            </p>
            <button style={styles.payNowButton}>Pay Now</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
