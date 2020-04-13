const clients = [
	'lisa',
	'lucas',
	'maria',
	'aline'
];

const printClients = client => console.log(client);

const passClients = (...clients) => clients.map(printClients);

passClients(clients);
