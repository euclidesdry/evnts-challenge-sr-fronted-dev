CURRENT_DIR := $(patsubst %/,%,$(dir $(realpath $(firstword $(MAKEFILE_LIST)))))
ROOT_DIR := $(CURRENT_DIR)
CURRENT_USER :=
DOCKER_NAME := app
DOCKER_COMPOSE := docker-compose
DOCKER_EXEC_TOOLS_APP := $(CURRENT_USER) docker exec -it $(DOCKER_NAME) sh
NPM_INSTALL := "npm install -g npm@latest"
NODE_INSTALL := "npm i"
SERVER_RUN := "npm run dev"
LINT_RUN := "npm run lint"
LINT_FIX_RUN := "npm run lint:fix"
LINT_FORMAT_RUN := "npm run lint:format"
TEST_RUN := "npm run test"
TEST_WATCH_RUN := "npm run test --watch"

.PHONY: build install dev up start setup stop restart clear lint test

build:
	$(DOCKER_COMPOSE) up --build --no-recreate -d

npm-update:
	$(DOCKER_EXEC_TOOLS_APP) -c $(NODE_INSTALL)

install:
	$(DOCKER_EXEC_TOOLS_APP) -c $(NODE_INSTALL)

dev:
	$(DOCKER_EXEC_TOOLS_APP) -c $(SERVER_RUN)

lint:
	$(DOCKER_EXEC_TOOLS_APP) -c $(LINT_RUN)

lint-fix:
	$(DOCKER_EXEC_TOOLS_APP) -c $(LINT_FIX_RUN)

lint-format:
	$(DOCKER_EXEC_TOOLS_APP) -c $(LINT_FORMAT_RUN)

test:
	$(DOCKER_EXEC_TOOLS_APP) -c $(TEST_RUN)

test-watch:
	$(DOCKER_EXEC_TOOLS_APP) -c $(TEST_WATCH_RUN)

up:
	$(DOCKER_COMPOSE) up -d

start: up dev
	# This will up the docker env and run the npm run dev command

setup: build npm-update install dev
	# This will build the env, up it and run the npm install and then run npm run dev command

stop:
	$(DOCKER_COMPOSE) kill || true
	$(DOCKER_COMPOSE) rm --force || true

restart: stop start dev

clear: stop
	$(DOCKER_COMPOSE) down -v --remove-orphans || true
