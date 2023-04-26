APP_BIN = app/build/app
PROTO_PATH = backend/proto


$(APP_BIN):
	go build -o $(APP_BIN) ./app/cmd/app/main.go

.PHONY: up
up:
	docker compose up --build

.PHONY: stop
stop:
	docker compose stop

.PHONY: go-proto
go-proto:
	@protoc -I=proto --go_out=backend/grpc_server --go_opt=paths=source_relative --go-grpc_out=backend/grpc_server --go-grpc_opt=paths=source_relative proto/*.proto


.PHONY: js-proto
js-proto:
	@protoc -I=proto proto/*.proto --js_out=import_style=commonjs:./frontend/src/api/grpc_client --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend/src/api/grpc_client


.PHONY: ts-proto
ts-proto:
	# Генерация через плагин @protobuf-ts/plugin
	cd frontend && npx protoc --ts_out src/api/grpc_client --proto_path ../proto ../proto/api.proto

.PHONY: ts-proto2
ts-proto2:
	# Генерация через плагин protoc
	@protoc -I=proto proto/*.proto \
	--js_out=import_style=commonjs,binary:./frontend/src/api/grpc_client \
	--grpc-web_out=import_style=typescript,mode=grpcwebtext:./frontend/src/api/grpc_client
