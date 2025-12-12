
export interface contentSection{
    h1: string,
    p: string
}

export interface BlogSection {
    id: string;
    image?: string;
    content: contentSection[];
}

export interface BlogPost {
    id: string;
    title: string;
    author: string;
    date: string;
    image: string;
    preview: string;
    tags: string[];
    sections: BlogSection[];
}
