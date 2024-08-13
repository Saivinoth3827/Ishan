import React from 'react';
import { useLocation } from 'react-router-dom';

const styles = {
  // ... (styles remain unchanged)
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
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
    fontSize: '24px',
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

const PaymentP = () => {
  const location = useLocation();
  const product = location.state?.product || {}; // Ensure the product object is passed correctly

  const totalCost = parseFloat(product?.cost || '0');
  const deliveryCost = parseFloat(product?.deliveryCost || '0');
  const total = totalCost + deliveryCost;

  return (
    <div style={styles.body}>
      <header>
        <div style={styles.headerContainer}>
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
                  alt="Search Icon"
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
                    name="paymentMethod"
                    value="visa"
                    style={styles.paymentMethodRadio}
                  />
                  <img
                    style={styles.cardOptionImg}
                    src="https://img.icons8.com/ios-filled/50/visa.png"
                    alt="Visa"
                  />
                  Visa
                </label>
                <label style={styles.cardOption}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mastercard"
                    style={styles.paymentMethodRadio}
                  />
                  <img
                    style={styles.cardOptionImg}
                    src="https://img.icons8.com/ios-filled/50/mastercard.png"
                    alt="MasterCard"
                  />
                  MasterCard
                </label>
              </div>
            </div>
            <div style={styles.addMethodsContainer}>
              <div style={styles.addMethod}>
                <img
                  style={styles.addMethodImg}
                  src="https://img.icons8.com/ios-glyphs/30/add.png"
                  alt="Add"
                />
                Add Payment Method
              </div>
            </div>
          </div>
          <div style={styles.orderSummary}>
            <img
              style={styles.orderSummaryImg}
              src={product?.src || 'https://via.placeholder.com/150'}
              alt={product?.name || 'Product'}
            />
            <h2 style={styles.orderSummaryTitle}>{product?.name || 'Product Name'}</h2>
            <p>{product?.description || 'Product Description'}</p>
            <div style={styles.orderSummaryTotal}>
              Total: ${total.toFixed(2)}
            </div>
            <button style={styles.payNowButton}>Pay Now</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentP;
