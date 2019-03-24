/**
 * Notification Model, All users should have their own notifications
 * To tell them if someone rekweek their kweeks or send them a message
 */
export interface Notification{
    id?: string;
    created_at?: Date;
    type?: string;
    usernmae?: string;
    screen_name?: string;
    kweek_id?: string;
    kweek_text?: string;
    profie_pic_URL?: string;
}