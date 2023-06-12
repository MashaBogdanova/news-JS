export interface INewsRes {
  status: EnumStatus;
  totalResults: number;
  articles: Array<IArticle>;
}
export interface IArticle {
  source: {
    id: string;
    name: string;
  }
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ISourcesRes {
  status: EnumStatus;
  sources: Array<ISource>;
}
export interface ISource {
    category: "general" | "technology" | "sports" | "entertainment" | "business";
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

enum EnumStatus {
  ok = "ok",
  notOk = "notOk"
}
