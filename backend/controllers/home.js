// controllers/protectedController.js
const getProtectedData = (req, res) => {
  res.status(200).json({
    message: "🎉 This is protected data only for authenticated users!",
    user: req.user, // user info extracted by authenticateToken middleware
  });
};

export default getProtectedData;
