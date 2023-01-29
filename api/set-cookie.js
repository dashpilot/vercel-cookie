const { serialize } = require('cookie')

module.exports = (req, res) => {
  const cookie = serialize('mycookie', 'new value', {httpOnly: true, maxAge: 60}) // 60 seconds
  res.setHeader('Set-Cookie', [cookie]);
  res.end('It worked, check your cookies in devtools');
}
