const axios = require('axios');

async function testLogin() {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      email: 'admin_gmc@test.com',
      password: 'hospital'
    });
    console.log("LOGIN SUCCESSFUL!");
    console.log(res.data);
  } catch (err) {
    console.error("LOGIN FAILED!");
    console.error(err.response ? err.response.data : err.message);
  }
}

testLogin();
