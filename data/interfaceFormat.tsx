export interface UserFormat {
    name: string;
    age: string;
    imgAddress: string;
}

export interface BlogPostFormat {
    id: number;
    title: string;
    character: string;
    imgAddress: any;
    readTime: string;
    uploadDate: Date;
    detail: BlogPostDetailFormat;
}

export interface BlogPostDetailFormat {
    timeHappen: String;
    context: String;
    mainStory: String;
    result: String;
    image: any[];
    links: string[];
}

export interface PostCartFormat {
    id: number;
    title: string;
    numEps: number;
    imgAddress: any;
    uploadDate: Date;
    detail: PostCartEpsFormat[];
}

export interface PostCartEpsFormat {
    id: number;
    title: string;
    imgAddress: any;
    link: string;
}

export interface ThisDayThatYearFormat {
    id: number;
    title: string;
    timePoint: Date;
    content: string;
    detail: BlogPostDetailFormat;
}

export interface HistoryPersonFormat {
    id: number;
    name: string;
    nickName: string;
    imgAddress: any;
    detail: {
        bio: string;
        mainStory: string[];
    }
}