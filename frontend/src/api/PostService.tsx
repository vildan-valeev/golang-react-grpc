import axios, {AxiosResponse} from "axios";
import {IComment, IPost} from "../models/models";
import * as grpcWeb from 'grpc-web';
// import {APIServiceClient} from './grpc_client/ApiServiceClientPb';
// @ts-ignore
// import {Empty, PostList} from './grpc_client/api_pb';

import {GrpcWebFetchTransport} from "@protobuf-ts/grpcweb-transport";
import {APIServiceClient, IAPIServiceClient} from './grpc_client/api.client';
import {PostList} from "./grpc_client/api";

const transport: GrpcWebFetchTransport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:8090"
});


const client = new APIServiceClient(transport);

async function main() {

    await callUnary(client);

    // await callServerStream(client);

}


async function callUnary(client: IAPIServiceClient) {

    const call = client.getPostList({});

    console.log(`### calling method "${call.method.name}"...`)

    const headers = await call.headers;
    console.log("got response headers: ", headers)

    const response = await call.response;
    console.log("got response message: ", response)

    const status = await call.status;
    console.log("got status: ", status)

    const trailers = await call.trailers;
    console.log("got trailers: ", trailers)

    console.log();
}



export default class PostService {
  static async getAll(limit: number = 10, page: number = 1): Promise<PostList>{
      const call = client.getPostList({});

      return await call.response;

    // const client = new APIServiceClient('http://localhost:8090', null, null);
    //
    // const request = new Empty()
    // const call = client.getPostList(request, null,
    //     (err: grpcWeb.RpcError, response: PostList) => {
    //       if (response == null) {
    //         console.log(err)
    //       } else {
    //         const dd = response.getItemsList()
    //
    //         console.log(response.getItemsList());
    //         return response
    //       }
    //
    //     });
    // call.on('status', (status: grpcWeb.Status) => {
    //   // ...
    // });


    // return await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
    //   params: {
    //     _limit: limit,
    //     _page: page,
    //   }
    // })
  }
  // static async getAll(limit: number = 10, page: number = 1): Promise<AxiosResponse<IPost[]>>{
  //   return await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
  //     params: {
  //       _limit: limit,
  //       _page: page,
  //     }
  //   })
  // }

  static async getById(id: number):Promise<AxiosResponse<IPost>>{
    return await axios.get<IPost>("https://jsonplaceholder.typicode.com/posts/"  + id )
  }

  static async getCommentsByPostId(id: number):Promise<AxiosResponse<IComment>>{
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
