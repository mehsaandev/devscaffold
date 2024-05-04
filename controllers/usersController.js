const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require('../models/userModel.js')
const saltRounds = 12;


const register = async (req, res) => {
  console.log(req.body);
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.send({ message: "User already exists." });
    if (password !== confirmPassword)
      return res.send({ message: "Password doesn't match." });

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({token:token} );
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser == null)
      return res.status(200).json({ message: "User does not exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(200).json({ message: "Invalid Credentials." });
    } else {
      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        "test",
        { expiresIn: "1h" }
      );
        res
          .status(200)
          .json({ result: {firstName: existingUser?.firstName, lastName: existingUser?.lastName, email: existingUser?.email,token }, response: "Login Successfull" });
      }
    }
   catch (error) {
    res.status(404).json({ message: "Something Went Wrong." });
  }
};


const confirmMail = async (req, res) => {
  try {
    // console.log(req.params.token)

    const userData = jwt.verify(req.params.token, "test"); //decoding the jwt token
    console.log(userData);
    await User.updateOne(
      //if the user exists, then confirm your email
      { _id: userData.id },
      { $set: { isEmailVerified: true } }
    );
    // res.status(200).json({ message: "Email Confirmed" });
    // alert("Email Verification Successful")
    res.status(200).send("<div style='text-align: center; '><h1 >Email Confirmation Successful</h1><br><p style='font-family: Roboto,Helvetica,Arial,sans-serif'>Go to Login Page <a href= 'http://localhost:3000/auth'>Click here</a> </p></div>" );

    // res.redirect("http://localhost:3000/auth");

    //NOTE: here we need to redirect to a new url or the sign up page.
  } catch (err) {
    console.log(err);
    res.status(400).send("<div style='text-align: center; '><h1>Verification Link Expired</h1><br><p style='font-family: Roboto,Helvetica,Arial,sans-serif'>Go to Home Page <a href= 'http://localhost:3000/auth'>Click here</a> </p></div>" );

    //NOTE: here we need to redirect to a new page
  }
};

 const verifyToken = async (req, res) => {
  try {
    console.log(req.params.token)
    const userData = jwt.verify(req.params.token, "test"); //decoding the jwt token
    console.log(userData)
    if(userData.id){

      res.status(200).json({ token: true });
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Something Went Wrong" });
  }
};




 const verifyEmail = async (req, res) => {

  const email  =req.params.email
  console.log(email)
  try {
    const existingUser = await User.findOne({ email: email });
    console.log("Existing user is : "+ existingUser);
    if (existingUser == null)
      return res.status(200).json({ message: "User does not exist" });

      else{
        const token = jwt.sign(
          { email: existingUser.email, id: existingUser._id },
          "test",
          { expiresIn: "1h" }
        );
  
          console.log(token);
          let url = `http://localhost:3000/auth/changepassword/${token}`;
  
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "fypsystem.uet@gmail.com",
              pass: "peofivwdnsyxhcuf",
            },
          });
  
          const mailOptions = {
            from: "fypsystem.uet@gmail.com",
            to: existingUser.email,
            subject: "Forget Your Password?",
            html: `Hi ${
              existingUser.firstName + " " + existingUser.lastName
            },<br>Please click on the link to change your Password. <a href="${url}">Click Here</a>`,
          };
  
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              res.status(200).json({ message: "Email sending failed" });

            } else {
              console.log("Email sent: " + info.response);
              res.status(200).json({ response: "Email sent Successfully" });
            }
          });

      }
      }
  catch (error) {
    res.status(404).json({ message: "Something Went Wrong." });
  }
};




 const changePassword = async (req, res) => {
  try {
    // console.log(req.params.token)
    const passwordData = req.body
    console.log(passwordData)

    const userData = jwt.verify(req.params.token, "test"); //decoding the jwt token
    

  if(passwordData.password != passwordData.confirmPassword)
    return res.status(200).json({ message: "New Password and Confirm Password should be same" });
  else
  {
    const hashedPassword = await bcrypt.hash(passwordData.password, 12);
   console.log(hashedPassword)
    await User.updateOne(
      //if the user exists, then confirm your email
      { _id: userData.id },
      { $set: { password: hashedPassword } }
    )
    
     
    res.status(200).send({response: "Password Changed Successfully"});
  
  }


    


    // res.status(200).json({ message: "Email Confirmed" });
    // alert("Email Verification Successful")

    // res.redirect("http://localhost:3000/auth");

    //NOTE: here we need to redirect to a new url or the sign up page.
  } catch (err) {
    console.log(err);
    res.status(400).send({message: "Something Went Wrong"});

    //NOTE: here we need to redirect to a new page
  }
};

module.exports = {register,login,changePassword,verifyEmail,verifyToken,confirmMail}







