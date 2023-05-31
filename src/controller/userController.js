import userService from "../services/userService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input",
    });
  }

  let userdata = await userService.handleUserLogin(email, password);
  console.log(userdata);
  //check email exist
  //compare password
  //return userInfor
  //accept_token: validate user: JWT: json web token
  return res.status(200).json({
    errCode: userdata.errCode,
    message: userdata.errMessage,
    user: userdata.user ? userdata.user : {},
  });
};
let handleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  console.log(message);
  return res.status(200).json(message);
};
let handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await userService.EditUser(data);

  return res.status(200).json(message);
};
let handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      message: "missing require parameter",
    });
  }
  let message = await userService.DeleteUser(req.body.id);
  console.log(message);
  return res.status(200).json(message);
};
let getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCodeService(req.query.type);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Get allcode error: ", e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error connection",
    });
  }
};
let handleGetAllUsers = async (req, res) => {
  let id = "ALL"; //req.query.id; //get all or id

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      users: {},
    });
  }

  let users = await userService.getAllUsers(id);

  return res.status(200).json({
    // errCode: 0,
    // errMessage: "ok",
    users,
  });
};

let searchClinicByName = async (req, res) => {
  let keyword = req.query.keyword;

  if (!keyword) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      clinics: {},
    });
  }
  let clinics = await userService.searchClinicByName(keyword);

  return res.status(200).json({
    errCode: 0,
    errMessage: "ok",
    clinics,
  });
};

let searchSDTBenhnhan = async (req, res) => {
  // let Dienthoai = "ALL"; //req.query.id; //get all or id
  let Dienthoai = req.query.keyword

  if (!Dienthoai) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      thongtinbenhnhans: {},
    });
  }

  let thongtinbenhnhans = await userService.searchSDTBenhnhan(Dienthoai);

  return res.status(200).json({
    // errCode: 0,
    // errMessage: "ok",
    thongtinbenhnhans,
  });
};
let searchIdBenhnhan = async (req, res) => {
  // let Dienthoai = "ALL"; //req.query.id; //get all or id
  let id = req.query.keyword

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      thongtinbenhnhans: {},
    });
  }

  let thongtinbenhnhans = await userService.searchIdBenhnhan(id);

  return res.status(200).json({
    // errCode: 0,
    // errMessage: "ok",
    thongtinbenhnhans,
  });
};
let searchSDTLichkham = async (req, res) => {
  // let Dienthoai = "ALL"; //req.query.id; //get all or id
  let ngay = req.query.keyword

  if (!ngay) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      lichkhams: {},
    });
  }

  let lichkhams = await userService.searchSDTLichkham(ngay);

  return res.status(200).json({
    // errCode: 0,
    // errMessage: "ok",
    lichkhams,
  });
};

let searchBooking = async (req, res) => {
  // let Dienthoai = "ALL"; //req.query.id; //get all or id
  let id = req.query.keyword

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      bookings: {},
    });
  }

  let bookings = await userService.searchBooking(id);

  return res.status(200).json({
    // errCode: 0,
    // errMessage: "ok",
    bookings,
  });
};
let createAppoinment = async (req, res) => {
  try {
    let infor = await userService.createAppoinment(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};
let searchHosodv = async (req, res) => {
  // let Dienthoai = "ALL"; //req.query.id; //get all or id
  // let iddv = "ALL"; 
  let id = req.query.keyword


  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing require parameters",
      hosodonvis: {},
    });
  }

  let hosodonvis = await userService.searchHosodv(id);

  return res.status(200).json({
    // errCode: 0,
    // errMessage: "ok",
    hosodonvis,
  });
};
``
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
  getAllCode: getAllCode,
  searchClinicByName: searchClinicByName,
  searchSDTBenhnhan: searchSDTBenhnhan,
  searchIdBenhnhan: searchIdBenhnhan,
  searchSDTLichkham: searchSDTLichkham,
  searchBooking: searchBooking,
  createAppoinment: createAppoinment,
  searchHosodv: searchHosodv,
};
