.PHONY: mvn-package docker-build docker-run

frontend-build:
	cd frontend &&	npm run build


frontend-update: frontend-build
	/bin/cp -rf frontend/build/* backend/src/main/webapp


backend-build:
	cd backend && mvn clean package


full-build: frontend-update backend-build


docker-run:
	docker-compose up --build; rm -rf ./target


docker-dev: full-build docker-run
