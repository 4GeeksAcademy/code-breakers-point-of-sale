import React, { useContext, useState, useEffect } from "react";
import { Grid, Typography, List, ListItem, ListItemText, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { useNavigate } from 'react-router-dom';

// Function to format date in EST
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    timeZone: 'America/New_York', // Set time zone to Eastern Standard Time
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };
  return date.toLocaleDateString(undefined, options);
};

export const Transactions = () => {
  const { store, actions } = useContext(Context);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [confirmRefundOpen, setConfirmRefundOpen] = useState(false);
  const [confirmRefundSecondOpen, setConfirmRefundSecondOpen] = useState(false);
  const [refundSuccessOpen, setRefundSuccessOpen] = useState(false);
  const [refundAmount, setRefundAmount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    actions.fetchUserTransactions().catch((error) => {
      console.error("Error fetching user transactions:", error);
    });
  }, []); // Empty dependency array to run once when component mounts

  const handleSelectTransaction = (transaction) => {
    console.log("Selected transaction:", transaction);
    setSelectedTransaction(transaction);
  };

  // Function to parse products string into JSON array
  const parseProducts = (products) => {
    try {
      return JSON.parse(products);
    } catch (error) {
      console.error("Error parsing products:", error);
      return [];
    }
  };

  const handleGoBack = () => {
    navigate('/regions');
  };

  const handleRefund = () => {
    setConfirmRefundOpen(true);
  };

  const handleConfirmRefund = () => {
    setConfirmRefundOpen(false);
    setConfirmRefundSecondOpen(true);
  };

  const handleCancelRefund = () => {
    setConfirmRefundOpen(false);
  };

  const handleConfirmSecondRefund = async () => {
    if (selectedTransaction) {
      try {
        await actions.refundTransaction(selectedTransaction.id);
        
        // Manually update the selectedTransaction state
        setSelectedTransaction({ ...selectedTransaction, is_refunded: true });
        
        // Set the refund amount and open the refund success modal
        setRefundAmount(selectedTransaction.total_price);
        setRefundSuccessOpen(true);
        
        setConfirmRefundSecondOpen(false);
      } catch (error) {
        console.error("Error refunding transaction:", error);
      }
    }
  };

  const handleCancelSecondRefund = () => {
    setConfirmRefundSecondOpen(false);
  };

  const handleCloseRefundSuccess = () => {
    setRefundSuccessOpen(false);
  };

  return (
    <>
      <Navbar />
      <Grid container spacing={2} style={{ marginTop: '10px' }}>
        <Grid item xs={6} style={{ backgroundColor: "lightgray", padding: "20px", height: "100%" }}>
          <div className="mt-5" style={{ paddingTop: '50px', height: '100%', paddingLeft: '20px' }}>
            <Typography variant="h2">Receipt</Typography>
            {selectedTransaction ? (
              <div>
                <Typography variant="h5">Transaction ID: {selectedTransaction.id}</Typography>
                <Typography variant="h5">Date: {formatDate(selectedTransaction.created)}</Typography> {/* Format date using formatDate function */}
                <Typography variant="h5">Products:</Typography>
                <div>
                  {parseProducts(selectedTransaction.products).map((product, index) => (
                    <Typography key={index}>{product.name} - ${product.price.toFixed(2)}</Typography>
                  ))}
                </div>
                <Typography variant="h5" style={{ marginTop: '20px' }}>Total Price: ${selectedTransaction.total_price?.toFixed(2)}</Typography>
                {selectedTransaction.is_refunded && (
                  <Typography variant="h5" style={{ color: "red", marginTop: '10px' }}>REFUNDED</Typography>
                )}
              </div>
            ) : (
              <Typography variant="body1">Select a transaction to view details</Typography>
            )}
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                onClick={handleRefund}
                style={{ backgroundColor: selectedTransaction && selectedTransaction.is_refunded ? "gray" : "red", color: "white", width: '200px' }}
                disabled={selectedTransaction && selectedTransaction.is_refunded}
              >
                Refund
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="mt-5" style={{ paddingTop: '50px' }}>
            <Typography variant="h2">Transactions</Typography>
            <TransactionList transactions={store.transactions} onSelectTransaction={handleSelectTransaction} />
          </div>
        </Grid>
      </Grid>
      <Dialog open={confirmRefundOpen} onClose={handleCancelRefund}>
        <DialogTitle>Confirm Refund</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Do you want to refund this transaction?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelRefund} style={{ color: "white", backgroundColor: "red", fontSize: "12px" }}>Cancel</Button>
          <Button onClick={handleConfirmRefund} style={{ color: "white", backgroundColor: "#2DB734", fontSize: "12px" }}>Yes</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={confirmRefundSecondOpen} onClose={handleCancelSecondRefund}>
        <DialogTitle>Confirm Refund</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Are you sure you want to refund this transaction?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelSecondRefund} style={{ color: "white", backgroundColor: "red", fontSize: "12px" }}>Cancel</Button>
          <Button onClick={handleConfirmSecondRefund} style={{ color: "white", backgroundColor: "#2DB734", fontSize: "12px" }}>Yes</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={refundSuccessOpen} onClose={handleCloseRefundSuccess}>
        <DialogTitle>Refund Successful</DialogTitle>
        <DialogContent>
          <Typography variant="body1">You have refunded ${refundAmount?.toFixed(2)}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRefundSuccess} style={{ color: "white", backgroundColor: "#2DB734", fontSize: "12px" }}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const TransactionList = ({ transactions, onSelectTransaction }) => {
  return (
    <List>
      {transactions && transactions.length > 0 ? (
        transactions.map((transaction) => (
          <ListItem button key={transaction.id} onClick={() => onSelectTransaction(transaction)}>
            <ListItemText
              primary={`Transaction ID: ${transaction.id} | ${formatDate(transaction.created)}`}
              secondary={`Total: $${transaction.total_price?.toFixed(2)}`}
            />
            {transaction.is_refunded && (
              <Typography variant="body1" style={{ color: "red", marginLeft: '10px' }}>REFUNDED</Typography>
            )}
          </ListItem>
        ))
      ) : (
        <Typography variant="body1">No transactions found.</Typography>
      )}
    </List>
  );
};
