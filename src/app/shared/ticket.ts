import { priorityValues } from './priority';
import { Tag } from './tag';
import { User } from './user';

export class Ticket {
    id: number | null = null;
    title: string = '';
    createdAt: Date = new Date();
    priority: string = priorityValues[0];
    status: string = '';
    tags: Tag[] = [];
    createdBy: User | null = null;
}

export interface TicketPage {
    content: Ticket[],
    size: number,
    totalElements: number,
    totalPages: number,
    pageNumber: number
}

export interface Comment {
    id: number;
    message: string;
    createdAt: Date;
    createdBy: User;
    images: CommentImage[];
}

export interface CommentImage {
    id: number;
    name: string;
    contentType: string;
    size: number;
}