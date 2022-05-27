export interface ITicket {
	id: number;
	title: string;
	createdAt: Date;
	tags: string[];
}

export const tickets = [
	{ 
		id: 1,
		title: 'Acesso apenas à intranet',
		createdAt: new Date('1997-07-16T19:20:30-03:00'),
		tags: [ "aker", "rede", "intranet" ]
	},
	{ 
		id: 2,
		title: 'Token não reconhecido',
		createdAt: new Date('1997-07-16T19:20:30-03:00'),
		tags: [ "seeu", "token", "soluti" ]
	},
	{ 
		id: 3,
		title: 'Impressora samsung. impressão com mancha',
		createdAt: new Date('1997-07-16T19:20:30-03:00'),
		tags: [ "samsung-mancha", "impressora" ]
	}
]