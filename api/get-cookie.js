module.exports = (req, res) => {
  res.send("Cookie: ", req.cookies.ck);
}
