include help.mk

init:
	make build
	make app/install

build:
	docker-compose build

up: app/install
	docker-compose up

down:
	docker-compose down

app/install:
	docker-compose run --rm node make -f app.mk install

ssh/node:
	docker-compose run --rm node bash
