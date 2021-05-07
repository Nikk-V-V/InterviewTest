export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Post {
  userID: number;
  id: number;
  title: string;
  body: string;
}
