export interface Content {
  type: string;
  title: string;
  properties: {
    categories: string[];
  };
}

export interface Page {
  title: string;
  icon: string;
  url: string;
  content: Content[];
}
