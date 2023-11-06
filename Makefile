.PHONY: mvn-package docker-build docker-run

mvn-package:
	mvn clean package


docker-build: mvn-package
	docker build --rm -t web-lab1 .

docker-run: docker-build
	docker run -it --rm -p 8080:8080 web-lab1
