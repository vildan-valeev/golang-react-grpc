import * as jspb from 'google-protobuf'



export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Post extends jspb.Message {
  getId(): number;
  setId(value: number): Post;

  getTitle(): string;
  setTitle(value: string): Post;

  getBody(): string;
  setBody(value: string): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Post.AsObject;
  static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
  static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Post;
  static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
  export type AsObject = {
    id: number,
    title: string,
    body: string,
  }
}

export class PostID extends jspb.Message {
  getId(): number;
  setId(value: number): PostID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostID.AsObject;
  static toObject(includeInstance: boolean, msg: PostID): PostID.AsObject;
  static serializeBinaryToWriter(message: PostID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostID;
  static deserializeBinaryFromReader(message: PostID, reader: jspb.BinaryReader): PostID;
}

export namespace PostID {
  export type AsObject = {
    id: number,
  }
}

export class PostList extends jspb.Message {
  getItemsList(): Array<Post>;
  setItemsList(value: Array<Post>): PostList;
  clearItemsList(): PostList;
  addItems(value?: Post, index?: number): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostList.AsObject;
  static toObject(includeInstance: boolean, msg: PostList): PostList.AsObject;
  static serializeBinaryToWriter(message: PostList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostList;
  static deserializeBinaryFromReader(message: PostList, reader: jspb.BinaryReader): PostList;
}

export namespace PostList {
  export type AsObject = {
    itemsList: Array<Post.AsObject>,
  }
}

