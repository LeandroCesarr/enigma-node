const env = require('../config/env'); 

module.exports = {
  index(req, res, next) {
    res.render('admin.html');
  },

  dashboard(req, res) {
    res.render('dashboard.html');
  },

  auth(req, res, next) {
    if (req.session && req.session.user === "Admin" && req.session.admin) {
      return next();
    }

    return res.sendStatus(401);
  },

  login(req, res, next) {
    const user = req.params.username;
    const psw = req.params.password;

    if ((user === env('ADMIN_USER')) && (psw === env('ADMIN_PASSWORD'))) {
      req.session.user = "Admin";
      req.session.admin = true;
      req.session.save();
      res.send("login success!");
    } else {
      res.send('login failed');
    }
  },

  logout(req, res) {
    req.session.destroy();
    res.send("logout success!");
  }
};