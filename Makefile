APP_BIN = app/build/app
PROTO_PATH = backend/proto


$(APP_BIN):
	go build -o $(APP_BIN) ./app/cmd/app/main.go

.PHONY: up
up:
	docker-compose up --build

.PHONY: stop
stop:
	docker-compose stop

.PHONY: go-proto
go-proto:
	@protoc -I=proto --go_out=backend/grpc_server --go_opt=paths=source_relative --go-grpc_out=backend/grpc_server --go-grpc_opt=paths=source_relative proto/*.proto


.PHONY: js-proto
js-proto:
	@protoc -I=proto proto/*.proto --js_out=import_style=commonjs:./frontend/grpc_client --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend/grpc_client

.PHONY: ts-proto
ts-proto:
	@protoc -I=proto proto/*.proto --js_out=import_style=commonjs,binary:./frontend/grpc_client --grpc-web_out=import_style=typescript,mode=grpcwebtext:./frontend/grpc_client
