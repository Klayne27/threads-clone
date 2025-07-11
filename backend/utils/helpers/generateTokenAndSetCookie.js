import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("threads_jwt", token, {
    httpOnly: true, // more secure
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });

  return token
};

export default generateTokenAndSetCookie;
