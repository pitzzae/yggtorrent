/// <reference types="node" />
// Created by navispeed

type action = "get_categories" | "get_torrent" | "get_info" | "search" | "get_nfo" | "auth" | "get_top_day" |
    "get_top_week" | "get_top_month" | "get_mostseeded" | "get_mostcompleted";

declare class YggtorrentClient {

    constructor(API_HOST: string);


    /**
     * Get action
     * @param action Method called
     * @param query HTTP verb
     * @param callback Function that take string as parameters
     */
    get(action: action, query: string, callback: (result: string) => void): void;

    /**
     * Fetch all categories
     * @param callback Callback funtion that take {CategoryResults} parameter
     */
    get_categories(callback: (result: CategoryResults) => void): void;

    /**
     * Fetch torrent info as html
     * @param callback Callback function that take string (text) as parameter
     * @param id torrent id
     */
    get_info(callback: (result: string) => void, id: any): void;

    /**
     * Get most completed torrents
     * @param callback Callback function that take torrents as parameter.
     */
    get_mostcompleted(callback: (result: Torrent[], error: string | undefined) => void): void;

    /**
     * Get most seeded torrents
     * @param callback Callback function that take torrents as parameter.
     */
    get_mostseeded(callback: (result: Torrent[], error: string | undefined) => void): void;

    /**
     * Fetch torrent associated nfo
     * @param callback Callback function that take string (text) as parameter
     * @param id torrent id
     */
    get_nfo(callback: (result: string) => void, id: any): void;

    /**
     * Get mostseeded torrents of day
     * @param callback Callback function that take torrents as parameter.
     */
    get_top_day(callback: (result: Torrent[], error: string | undefined) => void): void;

    /**
     * Get mostseeded torrents of month
     * @param callback Callback function that take torrents as parameter.
     */
    get_top_month(callback: (result: Torrent[], error: string | undefined) => void): void;

    /**
     * Get mostseeded torrents of week
     * @param callback Callback function that take torrents as parameter.
     */
    get_top_week(callback: (result: Torrent[], error: string | undefined) => void): void;

    /**
     * Get torrent as Buffer
     * @param callback Callback function that take torrents as parameter.
     * @param id The torrent id
     */
    get_torrent(callback: (buffer: Buffer, error: string | undefined) => void, id: number): void;

    search(callback: (result: Torrent[]) => void, search: string | '',
           category: number | undefined, subcategory: number | undefined,
           page: number | undefined): void;

    set_credential(user: string, password: string): void;

}

declare interface Category {
    value: string;
    'data-categorie': string;
}

declare interface CategoryResults {
    value: string;
    selected: string;
    'data-categorie': string;
    cats: Category[];
}

declare interface Torrent {
    type_id: string;
    type: string;
    torrent: string;
    id: string;
    compl: string;
    age: string;
    size: string;
    s: string;
    l: string;
}
