const getURL = require('../config/get-full-url');
const Secret = require('../models/Secret');

module.exports = {
  async index(req, res, next) {
    const index = req.params.id;

    if (index <= parseInt(req.cookies['secret'])) {
      try {
        const secretFinded = await Secret.findOne({ id: index });
        res.render('secret.html', { secretFinded });
      } catch (error) {
        res.send(error);
      }
    } else {
      next();
    }

  },

  async check(req, res) {
    const question = req.query.id;
    const answer = req.query.answer;
    let aceppt = false;
    
    try {
      const secretFinded = await Secret.findOne({ id: question });

      if (secretFinded.answer === answer) aceppt = true;
      res.send({ "result": aceppt });

    } catch (error) {
      res.send(error);
    }
  },

  async create(req, res) {
    const { id, legend, answer } = req.body;
    const { filename: image } = req.file;

    try {
      const create = await Secret.create({ id, legend, image, answer });
      res.send({ create });
    } catch (error) {
      res.send(error);
    }
  }
};