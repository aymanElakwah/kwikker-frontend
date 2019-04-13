import { MiniUser } from './mini-user';
import { Message } from '../model/message';
/**
 * we get a list of last conversations when openning messages
 */
export interface Conversation {
    user: MiniUser;
    last_message: Message;
}
