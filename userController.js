const User = require('./userModel');
const catchAsync = require('./catchAsync');
const AppError = require('./appError');



exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});


exports.getUser = (req, res) => {


  
  // SEND RESPONSE
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};

exports.createUser =catchAsync(async (req, res, next) => {

  const newUser = await User.create(req.body);

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    data: {
      user: newUser
    }
  });
});
