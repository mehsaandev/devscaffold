// const Navbar = require('../models/navbarModel.js')

const fs = require('fs');
const path = require('path');
const {navbar} = require('../Components/components')

const createNavbar = async (req, res) => {
    const data = req.body
    console.log(data)
    // console.log(navbar)
    const content = navbar(data)

    fs.writeFile('Components/navbar.js', content, (err) => {
      if (err) {
          console.error('Error creating the file:', err);
      } else {
          console.log('File created successfully!');
      }
  });
    
    // const newNavbar = new Navbar(navbar)
    try {
        // await newNavbar.save()
        res.status(200).json({ message: "yesss" })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = {createNavbar}