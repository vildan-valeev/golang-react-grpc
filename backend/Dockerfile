# build stage
FROM golang:1.20 as builder

ENV GO111MODULE=on

WORKDIR /backend

COPY backend/ ./
RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /main ./main.go

FROM ubuntu:20.04

WORKDIR /

COPY --from=builder /main /main

ENTRYPOINT ["./main"]
