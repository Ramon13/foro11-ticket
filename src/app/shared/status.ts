export interface Status {
    value: string,
    apiValue: string
}

export const statusValues: Status[] = [
    {value: 'All', apiValue: ''},
    {value: 'Pending', apiValue: 'pending'},
    {value: 'Closed', apiValue: 'closed'},
    {value: 'Not listed', apiValue: 'not_listed'},
]