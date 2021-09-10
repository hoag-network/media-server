const jwt = require("jsonwebtoken");

const config = global.gConfig;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({'error': 'A token is required for authentication'});
  }
  try {
    const decoded = jwt.verify(token, config.passphrase);
    req.token = decoded;
  } catch (err) {
    return res.status(401).json({'error': 'Invalid Token'});
  }
  return next();
};

const login = (req, res) => {
  try {
    // Get credentials
    const { user, password } = req.body;
    // Validate user input
    if (!(user && password)) {
      res.status(400).json({'error': "All input is required"});
    }
    if (user === global.gConfig.auth.api_user && password === global.gConfig.auth.api_pass) {
      // Create token
      const token = jwt.sign(
        { user: user},
        global.gConfig.passphrase,
        {
          expiresIn: "2h",
        }
      );

      response = {
        'token': token
      }

      // user
      res.json(response);
    }
    else{
      res.json({'error': "Invalid Credentials"});
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {verifyToken, login};
