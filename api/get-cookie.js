module.exports = (req, res) => {
  console.log(req.cookies);
  res.send("Cookie: "+ req.cookies.ck);
}
