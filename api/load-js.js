module.exports = (req, res) => {
  console.log(req.cookies);
  
  res.setHeader('Content-Type', 'application/javascript');
  
  if(req.cookies.mycookie){
    
    fetch('https://editscreen.vercel.app/assets/index.js')
    .then((response) => response.text())
    .then((data) => {

      res.send(data)

      });

    
  }else{
    res.send("");
  }
}
