
export interface GetPosts {
    response: Blog[];
}

export interface Blog {
    text:      string;
    timestamp: string;
    title:     string;
    id:        string;
}
