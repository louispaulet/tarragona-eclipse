SHELL := /bin/bash
.DEFAULT_GOAL := help

HOST ?= 127.0.0.1
PORT ?= 3000
DEV_STATE_DIR := .make
DEV_PID := $(DEV_STATE_DIR)/dev.pid
DEV_LOG := $(DEV_STATE_DIR)/dev.log
SITE_URL := https://eclipse-2026.thefrenchartist.dev/

.PHONY: help install up kill restart status logs build lint unit test deploy clean

help:
	@echo "Available commands:"
	@echo "  make install  Install locked dependencies"
	@echo "  make up       Start the local site at http://$(HOST):$(PORT)"
	@echo "  make kill     Stop the local site"
	@echo "  make restart  Restart the local site"
	@echo "  make status   Show local site status"
	@echo "  make logs     Follow the local development log"
	@echo "  make build    Create the static GitHub Pages export"
	@echo "  make lint     Run code-quality checks"
	@echo "  make unit     Run the regression test suite"
	@echo "  make test     Run lint, build, and all regression tests"
	@echo "  make deploy   Test and publish to GitHub Pages"
	@echo "  make clean    Stop the site and remove generated output"

install:
	npm ci

up:
	@if [[ ! -d node_modules ]]; then $(MAKE) install; fi
	@if [[ -f "$(DEV_PID)" ]] && kill -0 "$$(cat "$(DEV_PID)")" 2>/dev/null; then \
		echo "Site is already running at http://$(HOST):$(PORT)"; \
		exit 0; \
	fi
	@mkdir -p "$(DEV_STATE_DIR)"
	@nohup ./node_modules/.bin/next dev --hostname "$(HOST)" --port "$(PORT)" \
		< /dev/null > "$(DEV_LOG)" 2>&1 & echo $$! > "$(DEV_PID)"
	@for attempt in {1..30}; do \
		if curl --silent --fail --output /dev/null "http://$(HOST):$(PORT)"; then \
			echo "Site is running at http://$(HOST):$(PORT)"; \
			exit 0; \
		fi; \
		sleep 1; \
	done; \
	echo "Site did not start. Recent output:"; \
	tail -n 30 "$(DEV_LOG)"; \
	$(MAKE) kill; \
	exit 1

kill:
	@if [[ ! -f "$(DEV_PID)" ]]; then \
		echo "Site is not running"; \
		exit 0; \
	fi; \
	pid="$$(cat "$(DEV_PID)")"; \
	if kill -0 "$$pid" 2>/dev/null; then \
		kill "$$pid"; \
		for attempt in {1..10}; do \
			kill -0 "$$pid" 2>/dev/null || break; \
			sleep 1; \
		done; \
		if kill -0 "$$pid" 2>/dev/null; then kill -9 "$$pid"; fi; \
	fi; \
	rm -f "$(DEV_PID)"; \
	echo "Site stopped"

restart:
	$(MAKE) kill
	$(MAKE) up

status:
	@if [[ -f "$(DEV_PID)" ]] && kill -0 "$$(cat "$(DEV_PID)")" 2>/dev/null; then \
		echo "Site is running at http://$(HOST):$(PORT) (PID $$(cat "$(DEV_PID)"))"; \
	else \
		echo "Site is not running"; \
	fi

logs:
	@if [[ ! -f "$(DEV_LOG)" ]]; then echo "No development log yet"; exit 0; fi
	tail -f "$(DEV_LOG)"

build:
	npm run build

lint:
	npm run lint

unit:
	npm test

test:
	$(MAKE) lint
	$(MAKE) unit

deploy: test
	./node_modules/.bin/gh-pages -d out --nojekyll --cname eclipse-2026.thefrenchartist.dev
	@echo "Published $(SITE_URL)"

clean: kill
	rm -rf .next out
