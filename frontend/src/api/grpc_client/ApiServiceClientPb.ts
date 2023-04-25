/**
 * @fileoverview gRPC-Web generated client stub for generated
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.6.1
// source: api.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_pb from './api_pb';


export class APIServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreatePost = new grpcWeb.MethodDescriptor(
    '/generated.APIService/CreatePost',
    grpcWeb.MethodType.UNARY,
    api_pb.Post,
    api_pb.Empty,
    (request: api_pb.Post) => {
      return request.serializeBinary();
    },
    api_pb.Empty.deserializeBinary
  );

  createPost(
    request: api_pb.Post,
    metadata: grpcWeb.Metadata | null): Promise<api_pb.Empty>;

  createPost(
    request: api_pb.Post,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_pb.Empty) => void): grpcWeb.ClientReadableStream<api_pb.Empty>;

  createPost(
    request: api_pb.Post,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/generated.APIService/CreatePost',
        request,
        metadata || {},
        this.methodDescriptorCreatePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/generated.APIService/CreatePost',
    request,
    metadata || {},
    this.methodDescriptorCreatePost);
  }

  methodDescriptorGetPostDetail = new grpcWeb.MethodDescriptor(
    '/generated.APIService/GetPostDetail',
    grpcWeb.MethodType.UNARY,
    api_pb.PostID,
    api_pb.Post,
    (request: api_pb.PostID) => {
      return request.serializeBinary();
    },
    api_pb.Post.deserializeBinary
  );

  getPostDetail(
    request: api_pb.PostID,
    metadata: grpcWeb.Metadata | null): Promise<api_pb.Post>;

  getPostDetail(
    request: api_pb.PostID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_pb.Post) => void): grpcWeb.ClientReadableStream<api_pb.Post>;

  getPostDetail(
    request: api_pb.PostID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_pb.Post) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/generated.APIService/GetPostDetail',
        request,
        metadata || {},
        this.methodDescriptorGetPostDetail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/generated.APIService/GetPostDetail',
    request,
    metadata || {},
    this.methodDescriptorGetPostDetail);
  }

  methodDescriptorGetPostList = new grpcWeb.MethodDescriptor(
    '/generated.APIService/GetPostList',
    grpcWeb.MethodType.UNARY,
    api_pb.Empty,
    api_pb.PostList,
    (request: api_pb.Empty) => {
      return request.serializeBinary();
    },
    api_pb.PostList.deserializeBinary
  );

  getPostList(
    request: api_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<api_pb.PostList>;

  getPostList(
    request: api_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_pb.PostList) => void): grpcWeb.ClientReadableStream<api_pb.PostList>;

  getPostList(
    request: api_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_pb.PostList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/generated.APIService/GetPostList',
        request,
        metadata || {},
        this.methodDescriptorGetPostList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/generated.APIService/GetPostList',
    request,
    metadata || {},
    this.methodDescriptorGetPostList);
  }

  methodDescriptorDeletePost = new grpcWeb.MethodDescriptor(
    '/generated.APIService/DeletePost',
    grpcWeb.MethodType.UNARY,
    api_pb.PostID,
    api_pb.Empty,
    (request: api_pb.PostID) => {
      return request.serializeBinary();
    },
    api_pb.Empty.deserializeBinary
  );

  deletePost(
    request: api_pb.PostID,
    metadata: grpcWeb.Metadata | null): Promise<api_pb.Empty>;

  deletePost(
    request: api_pb.PostID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: api_pb.Empty) => void): grpcWeb.ClientReadableStream<api_pb.Empty>;

  deletePost(
    request: api_pb.PostID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: api_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/generated.APIService/DeletePost',
        request,
        metadata || {},
        this.methodDescriptorDeletePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/generated.APIService/DeletePost',
    request,
    metadata || {},
    this.methodDescriptorDeletePost);
  }

}

