const { serialize } = require('cookie')

module.exports = (req, res) => {
  const cookie = serialize('ck', 'value', {httpOnly: true, maxAge: 1000 * 60}) // 1 minute
  res.setHeader('Set-Cookie', [cookie]);
  res.end('It worked, check your cookies in devtools');
}
