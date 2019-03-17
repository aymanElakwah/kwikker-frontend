import { MiniUser } from './mini-user';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export interface Conversation {
    user: MiniUser;
    lsat_message: Message;
}
