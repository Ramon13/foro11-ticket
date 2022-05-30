export interface ITicket {
  id: number;
  title: string;
  user: string,
  createdAt: Date;
  tags: string[];
  status: string;
  priority: string;
  comments: ITicketComment[] | undefined;
}

export interface ITicketComment {
  message: string,
  user: string,
  createdAt: Date
}

export const STATUS = {
  open: "open",
  finished: "finished",
  notListed: "not-listed"
}

export const ticketsDB = [
  {
    id: 1,
    title: 'Acesso apenas à intranet',
    user: 'John Doe',
    createdAt: new Date('1997-07-16T19:20:30-03:00'),
    tags: ["aker", "rede", "intranet"],
    status: STATUS.open,
    priority: "Urgente",
    comments: [
      {
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec turpis erat. 
         Maecenas dapibus, enim in gravida eleifend, ligula nibh interdum lorem, 
         a sodales felis urna vulputate risus. Aliquam feugiat facilisis felis, 
         nec ullamcorper nibh blandit in. `,
        user: 'Ramon Santos',
        createdAt: new Date('1997-07-16T19:20:30-03:00')
      }, 
      {
        message: `Fusce et ullamcorper dui. Maecenas imperdiet feugiat fermentum.
           Donec bibendum consectetur dignissim. Donec placerat lacinia accumsan. 
           Mauris eu faucibus enim, sed varius ligula. Maecenas ac ultrices risus. In accumsan enim nec mauris finibus, 
           et sodales nisi maximus.`,
        user: 'John Doe',
        createdAt: new Date('1997-07-16T19:20:30-03:00')
      }
    ]
  },
  {
    id: 2,
    title: 'Token não reconhecido',
    user: 'John Doe',
    createdAt: new Date('1997-07-16T19:20:30-03:00'),
    tags: ["seeu", "token", "soluti"],
    status: STATUS.finished,
    priority: "Urgente",
    comments: [
      {
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec turpis erat. 
         Maecenas dapibus, enim in gravida eleifend, ligula nibh interdum lorem, 
         a sodales felis urna vulputate risus. Aliquam feugiat facilisis felis, 
         nec ullamcorper nibh blandit in. `,
        user: 'Ramon Santos',
        createdAt: new Date('1997-07-16T19:20:30-03:00')
      } 
    ]
  },
  {
    id: 3,
    title: 'Impressora samsung. impressão com mancha',
    user: 'John Doe',
    createdAt: new Date('1997-07-16T19:20:30-03:00'),
    tags: ["samsung-mancha", "impressora"],
    status: STATUS.notListed,
    priority: "Normal",
    comments: [
      {
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec turpis erat. 
         Maecenas dapibus, enim in gravida eleifend, ligula nibh interdum lorem, 
         a sodales felis urna vulputate risus. Aliquam feugiat facilisis felis, 
         nec ullamcorper nibh blandit in. `,
        user: 'John Doe',
        createdAt: new Date('1997-07-16T19:20:30-03:00')
      } 
    ]
  },
  {
    id: 4,
    title: 'Erro ao logar no AD',
    user: 'John Doe',
    createdAt: new Date('1997-07-16T19:20:30-03:00'),
    tags: ["rede", "intranet", "active-directory"],
    status: STATUS.open,
    priority: "Urgente",
    comments: [
      {
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec turpis erat. 
         Maecenas dapibus, enim in gravida eleifend, ligula nibh interdum lorem, 
         a sodales felis urna vulputate risus. Aliquam feugiat facilisis felis, 
         nec ullamcorper nibh blandit in. `,
        user: 'Ramon Santos',
        createdAt: new Date('1997-07-16T19:20:30-03:00')
      }, 
      {
        message: `Fusce et ullamcorper dui. Maecenas imperdiet feugiat fermentum.
           Donec bibendum consectetur dignissim. Donec placerat lacinia accumsan. 
           Mauris eu faucibus enim, sed varius ligula. Maecenas ac ultrices risus. In accumsan enim nec mauris finibus, 
           et sodales nisi maximus.`,
        user: 'John Doe',
        createdAt: new Date('1997-07-16T19:20:30-03:00')
      }
    ]
  },
  {
    id: 5,
    title: 'Instalação de micro',
    user: 'John Doe',
    createdAt: new Date('1997-07-16T19:20:30-03:00'),
    tags: ["hardware", "patrimonio"],
    status: STATUS.notListed,
    priority: "Urgente",
    comments: [
      {
        message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec turpis erat. 
         Maecenas dapibus, enim in gravida eleifend, ligula nibh interdum lorem, 
         a sodales felis urna vulputate risus. Aliquam feugiat facilisis felis, 
         nec ullamcorper nibh blandit in. `,
        user: 'Ramon Santos',
        createdAt: new Date('1997-07-16T19:20:30-03:00')
      }, 
      {
        message: `Fusce et ullamcorper dui. Maecenas imperdiet feugiat fermentum.
           Donec bibendum consectetur dignissim. Donec placerat lacinia accumsan. 
           Mauris eu faucibus enim, sed varius ligula. Maecenas ac ultrices risus. In accumsan enim nec mauris finibus, 
           et sodales nisi maximus.`,
        user: 'John Doe',
        createdAt: new Date('1997-07-16T19:20:30-03:00')
      }
    ]
  }
]