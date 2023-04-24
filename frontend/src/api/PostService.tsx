import axios, {AxiosResponse} from "axios";
import {IPost} from "../models/models";

export default class PostService {
  static async getAll(limit: number = 10, page: number = 1): Promise<AxiosResponse<IPost[]>>{
    return await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: page,
      }
    })
  }

  static async getById(id: number):Promise<AxiosResponse<IPost>>{
    return await axios.get<IPost>("https://jsonplaceholder.typicode.com/posts/"  + id )
  }

  static async getCommentsByPostId(id: number):Promise<AxiosResponse<IPost>>{
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
