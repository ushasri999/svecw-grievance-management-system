/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/CheckBox.jsx',
    './src/components/CheckboxAlignment.jsx',
    './src/components/Sidenavbar.jsx',
    './src/components/Sidenavbarr.jsx',
    './src/components/UpperNavbar.jsx',
    './src/components/Complaint.jsx',
    './src/components/MyGrievances.js',
    './src/components/Dashboard.jsx',
    './src/components/Login.jsx',
    './src/components/Admin.jsx',
    './src/components/AdminPage.jsx',
    './src/components/AdminPage2.jsx',
    './src/components/WhichGreivance.jsx',
    './src/components/MessComplaint.jsx',
    './src/components/Contacts.jsx',
    './src/components/Home.jsx',
    './public/index.html',],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        terinary : '#435585',
        gray :{
          '200' : '#232931'
        },
        green: {
          '100': '#5C8374',
          '200' : '#9EC8B9',
          '300' : '#B2C8BA'
        }
      },
      fontFamily: {
        custom: ['Helvetica', 'Arial', 'sans-serif'],
      },
      margin: {
        '20percent': '20%',
      },
    },
  },
  plugins: [],
};
