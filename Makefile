.PHONY: mvn-package docker-build docker-run

mvn-package:
	mvn clean package


docker-dev: mvn-package
	docker-compose up --build; rm -rf ./target
