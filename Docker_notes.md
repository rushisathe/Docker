## Module 1

- what is docker ?
is open source platform where you can build ship and run any application anywhere

 #### Build + ship + Run = DOCKER

#### Docker Tools
1. Docker engine - builds and run the docker containers
2. Docker Hub - registry where all the docker images stored
3. Docker Machine - lets user to install docker engine
4. Docker Compose - is tool running multiple conrtainer docker application 

- Docker is not VM 
- Containers uses kernel on the host's OS

## Module 2- Architecture of Docker

- # componenets 
1. Client
   - docker build 
   - docker pull
   - docker run 
2. Docker Host
   - all request are come to docker daemon
   - containers and images hai
3. Registry 
   - from where we pull images 

- The instructions to create the docker container are stored in the docker file
- Docker reads this Docker file when you request the build image

### Docker images --> Docker Containers 
	(using docker file)


## Module 3 - Installation

## Module 4 - Docker images and Registry

- when image to container a thin layer of writable is added on top
- this layer is called container layer


## Module 5 - Working with docker container

- docker run do 2 things firstly create a container from image and then start it

` sudo docker run -ti ubuntu:latest /bin/bash`

- -t option for terminal
- -i option for intractive mode

` sudo docker run -ti -rm ubuntu:latest /bin/bash`

- --rm option will remove container

- we can also set hostname while starting container using 
` --hostname="rushi" `

### Storage volumes
- if we want to preserve data then use VOLUMES `-v `
### container stop rm pause

- we can stop , remove , unpause, the conatines
` sudo docker pause container_is `
` sudo docker unpause container_id `
` sudo docker rm container_id`


