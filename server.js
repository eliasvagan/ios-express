const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const qs = require('query-string');
const config = require('./config')();

app.get('/lookup/:category/:name', (req, res) => {
	console.log(Object.entries(req));
	const { category, name } = req.params;
	const urlSucc = req.query['x-success'];
	res.redirect(`vlc-x-callback://x-callback-url/stream?url=${config.nas.rootUrl}/Movies/Gladiator.2000.REMASTERED.EXTENDED.1080p.BluRay.10bit.HEVC.6CH.MkvCage.ws.mkv`)

	res.redirect(`${urlSucc}?${qs.stringify({
		answer: true
	})}`);
});

app.get('/status', (req, res) => {

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});