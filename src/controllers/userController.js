const User = require("../models/User");
const Corprate = require("../models/Corprate");
const Roles = require("../models/Roles");

/** Get all users list */
const listUsers = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured!",
  };

  try {
    let foundUsers = await User.find({});

    returnMessage.isError = false;

    if (foundUsers.length === 0) {
      returnMessage.message = "No Records found";
    } else {
      returnMessage.message = "Records found";
      returnMessage.data = foundUsers;
    }

    return res.json(returnMessage);
  } catch (error) {
    return res.status(400).json(returnMessage);
  }
};

/** Create new user  */
const createUser = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured!",
  };

  try {
    const newUser = new User({...req.body });
    await newUser.save((err) => {
      if (err) return handleError(err);
      let corprate = new Corprate({ companyName: "Google", companyId: newUser._id });
      corprate.save((err) => { 
        if (err) return handleError(err);
          let role =new Roles({ superAdmin: "Super Admin", admin: "Admin", user: "User",corprateId: newUser._id });
         role.save();
      });
    
    });

    returnMessage.isError = false;
    returnMessage.message = "New user created successfully";
    returnMessage.data = newUser.toObject();

    return res.json(returnMessage);
  } catch (error) {
    return res.status(400).json(returnMessage);
  }
};

// bob.save(function (err) {
//   if (err) return handleError(err);

//   //Bob now exists, so lets create a story
//   var story = new Story({
//     title: "Bob goes sledding",
//     author: bob._id    // assign the _id from the our author Bob. This ID is created by default!
//   });

//   story.save(function (err) {
//     if (err) return handleError(err);
//     // Bob now has his story
//   });
// });

/** Update user */
const updateUser = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured!",
  };

  const userID = req.params.id;

  try {
    const foundUser = await User.findOne({ _id: userID });

    if (!foundUser) {
      returnMessage.message =
        "There is no User with this id. Please create one!";
    } else {
      req.body.updated = new Date();
      await User.updateOne({ _id: userID }, { $set: req.body });

      returnMessage.isError = false;
      returnMessage.message = "User has been updated successfully!";
    }

    return res.json(returnMessage);
  } catch (error) {
    return res.status(400).json(returnMessage);
  }
};

/** Get user details by id */
const getUserDetailsById = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured!",
  };

  try {
    let foundUser = await User.findById(req.params.id);

    returnMessage.isError = false;

    if (!foundUser) {
      returnMessage.message =
        "There is no User with this id. Please create one!";
    } else {
      returnMessage.message = "Record found";
      returnMessage.data = foundUser;
    }

    return res.json(returnMessage);
  } catch (error) {
    return res.status(400).json(returnMessage);
  }
};

/** Delete user  */
const deleteUser = async (req, res) => {
  const returnMessage = {
    isError: true,
    data: null,
    message: "Error occured!",
  };

  try {
    let foundUser = await User.findById(req.params.id);

    returnMessage.isError = false;

    if (!foundUser) {
      returnMessage.message =
        "There is no User with this id. Please create one!";
    } else {
      await User.remove({ _id: req.params.id });

      returnMessage.isError = false;
      returnMessage.message = "User deleted successfully!";
    }

    return res.json(returnMessage);
  } catch (error) {
    return res.status(400).json(returnMessage);
  }
};

module.exports = {
  listUsers,
  createUser,
  updateUser,
  getUserDetailsById,
  deleteUser,
};
