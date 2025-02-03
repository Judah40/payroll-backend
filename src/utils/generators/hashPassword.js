import bcrypt from "bcrypt"
 const handleHashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};


export default handleHashPassword
