const axios = require("axios");
const BASE_URL =
  "https://transparencyreport.google.com/transparencyreport/api/v3/traffic/fraction";

exports.fetchNetworkTraffic = async (req, res) => {
  try {
    console.log(req.query);
    const start = req.query.start;
    const end = req.query.end;
    const region = req.query.region;
    const product = req.query.product;

    if (!start || !end || !region || !product) {
      res.status(400).json({ message: "Invald Query Parameters" });
      return;
    }

    const url =
      BASE_URL +
      "?start=" +
      start +
      "&end=" +
      end +
      "&region=" +
      region +
      "&product=" +
      product;

    let data = await axios.get(url);
    data = data.data;
    if (data.includes(")]}'")) {
      data = data.replace(")]}'", "");
    }

    data = JSON.parse(data);
    data = data[0][1];
    data = data.map((item) => [item[0], item[1][0][1]]);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
