import { MiniUser } from './mini-user';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
/**
 * we get a list of last conversations when openning messages
 */
export interface Conversation {
    user: MiniUser;
    lsat_message: Message;
}
