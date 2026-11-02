const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const mdPath = path.join(process.cwd(), 'index.md');
    const content = fs.readFileSync(mdPath, 'utf8');

    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    res.setHeader('Vary', 'Accept');
    res.setHeader('x-markdown-tokens', '650');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).send(content);
  } catch (err) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.status(500).send('Internal Server Error');
  }
};

