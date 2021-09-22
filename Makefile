export COMPOSE_FILE ?= docker/docker-compose.yml:docker/docker-compose.local.yml
export COMPOSE_PROJECT_NAME ?= frontend-booster-nextjs

up:
	$(info Launching the client...)
	@docker-compose up

down:
	$(info Removing the client containers...)
	@docker-compose down

nuke:
	$(info Purging all client containers, images, networks, volumes...)
	@docker-compose down -v --rmi all

bash:
	$(info Shelling into the client...)
	@docker-compose exec client bash
