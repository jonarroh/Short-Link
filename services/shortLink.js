export const shortlinkServices = async url => {
	const resp = await fetch('../api/shortLink', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(url)
	});
	const data = await resp.json();
	return data;
};

// fetch('./api/shortLink', {
//   method: 'POST',
//   Headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(url)
// })
//   .then(res => res.json())

//   .then(data => {
//     setLink(`${process.env.BASE_URL}/${data.shortUrl}`);
//   });
