import axios, {AxiosResponse} from "axios";
import {IComment, IPost} from "../models/models";
import * as grpcWeb from 'grpc-web';
import {APIServiceClient} from './grpc_client/ApiServiceClientPb';
// @ts-ignore
import {Empty, PostList} from './grpc_client/api_pb';




export default class PostService {

  static async getAll(limit: number = 10, page: number = 1): Promise<AxiosResponse<IPost[]>>{


    const client = new APIServiceClient('http://localhost:8090', null, null);

    const request = new Empty()
    const call = client.getPostList(request, {'custom-header-1': 'value1'},
        (err: grpcWeb.RpcError, response: PostList) => {
          console.log(response.getItemsList());
        });
    call.on('status', (status: grpcWeb.Status) => {
      // ...
    });

    // client.getPostList(new Empty(), {}, function(err, response) {
    //   // ...
    // });


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

  static async getCommentsByPostId(id: number):Promise<AxiosResponse<IComment>>{
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
