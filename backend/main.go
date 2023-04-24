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

func (s *server) ItemList(ctx context.Context, in *pb.Empty) (*pb.ItemList, error) {
	log.Printf("Get ItemList...")
	return &pb.ItemList{
		Items: []*pb.Item{
			{
				Title:       "aa",
				Description: "cc",
			},
			{
				Title:       "aa",
				Description: "cc",
			},
			{
				Title:       "aa",
				Description: "cc",
			},
			{
				Title:       "aa",
				Description: "cc",
			},
			{
				Title:       "aa",
				Description: "cc",
			},
			{
				Title:       "aa",
				Description: "cc",
			},
			{
				Title:       "aa",
				Description: "cc",
			},
			{
				Title:       "aa",
				Description: "cc",
			},
		},
	}, nil
}

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 50051))
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
