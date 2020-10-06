build::
	docker build -t quay.io/jpacker/nodejs-pacman-app .

push:: build
	docker push quay.io/jpacker/nodejs-pacman-app

run::
	docker rm -f pacman || true
	docker run -d --name pacman -p 8000:8080 quay.io/jpacker/nodejs-pacman-app


build-green::
	docker build -t quay.io/jpacker/nodejs-pacman-app:green .

push-green:: build-green
	docker push quay.io/jpacker/nodejs-pacman-app:green

run-green:: build-green
	docker rm -f pacman || true
	docker run -d --name pacman -p 8000:8080 quay.io/jpacker/nodejs-pacman-app:green