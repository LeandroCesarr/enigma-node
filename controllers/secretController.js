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
    const { id, title, typeFile, answer, tip, fontFamily, text, hiddenCode } = req.body;
    let image = null;

    if (req.file) image = req.file.filename;

    try {
      const create = await Secret.create({ id, title, typeFile, image, answer, tip, fontFamily, text, hiddenCode});
      res.send({ create });
    } catch (error) {
      res.send(error);
    }
  },

  async update(req, res) {
    const payload = req.body;
    const obj = {};

    if (req.file) {
      obj['image'] = req.file.filename;
    } else {
      obj[req.body.type] = req.body.value
    }

    try {
      const response = await Secret.findOneAndUpdate({ id: payload.id }, obj);
      if (response) res.sendStatus(204).end();
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  },

  async delete(req, res) {
    const payload = req.body;

    try {
      const response = await Secret.findOneAndDelete({ id: payload.id });
      if (response) res.sendStatus(204).end();
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  }
};