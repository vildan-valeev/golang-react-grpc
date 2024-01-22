package main

import (
	pb "backend/grpc_server"
	"context"
	"flag"
	"fmt"
	"google.golang.org/grpc"
	"log"
	"net"
)

type server struct {
	pb.UnimplementedAPIServiceServer
}

func (s *server) GetPostList(ctx context.Context, in *pb.Empty) (*pb.PostList, error) {
	log.Printf("Get ItemList...")
	return &pb.PostList{
		Items: []*pb.Post{
			{
				Id:    1,
				Title: "One",
				Body:  "cc",
			},
			{
				Id:    2,
				Title: "Two",
				Body:  "cc",
			},
			{
				Id:    3,
				Title: "aa",
				Body:  "cc",
			},
			{
				Id:    4,
				Title: "aa",
				Body:  "cc",
			},
			{
				Id:    5,
				Title: "aa",
				Body:  "cc",
			},
			{
				Id:    6,
				Title: "aa",
				Body:  "cc",
			},
			{
				Id:    7,
				Title: "aa",
				Body:  "cc",
			},
			{
				Id:    8,
				Title: "aa",
				Body:  "cc",
			},
			{
				Id:    9,
				Title: "aa",
				Body:  "cc",
			},
			{
				Id:    10,
				Title: "aa",
				Body:  "cc",
			},
			{
				Id:    11,
				Title: "aa",
				Body:  "cc",
			},
		},
	}, nil
}

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 9000))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	pb.RegisterAPIServiceServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
