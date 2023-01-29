const { serialize } = require('cookie')

module.exports = (req, res) => {
  const cookie = serialize('ck', 'value', {httpOnly: true, expires: new Date('2023-12-01')})
  res.setHeader('Set-Cookie', [cookie]);
  res.end('It worked, check your cookies in devtools');
}
