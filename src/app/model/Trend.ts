
/**
 * Trends Model, Through The website any user can know 
 * the first 10 hashtags that users used widely
 */
export interface Trend {
    /** The Trend Id In The Database */
    id: string;
    /** The Trend Text (The Common Word in The Kweeks) */
    text: string;
    /** Number of Kweeks That Include That Trend */
    number_of_kweeks: number;
}
