const generateOTP = () => {
    // Generate a random number between 0 and 999999
    const randomNumber = Math.floor(Math.random() * 1000000);
  
    // Ensure it is a 6-digit number with leading zeros if necessary
    const formattedOTP = String(randomNumber).padStart(6, "0");
  
    return formattedOTP;
  };
  
 export default  generateOTP
  