const getURL = require('../config/get-full-url');
const Secret = require('../models/Secret');

module.exports = {
  async index(req, res, next) {
    const index = req.params.id;
    const log = await Secret.find();

    if ((index <= parseInt(req.cookies['secret'])) && index <= (log.length - 1)) {
      try {
        const secretFinded = await Secret.findOne({ id: index });
        res.render('secret.html', { secretFinded, title: secretFinded.title });
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
    const { id, title, typeFile, answer, tip, fontFamily, text } = req.body;
    let image = null;

    if (req.file) image = req.file.filename;

    try {
      const create = await Secret.create({ id, title, typeFile, image, answer, tip, fontFamily, text});
      res.send({ create });
    } catch (error) {
      res.send(error);
    }
  }
};