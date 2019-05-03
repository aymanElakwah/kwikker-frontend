
/**
 * Rekweek Model, Kweeks can be Rekweeked By another Users
 * This model is used to keep track this process
 */

export interface Replied {
    reply_to_username: string;
    reply_to_kweek_id: string;
}
