
### Docker to AWS UPDATE

    1. REMOVE service (first)
    2. Add new service with new/updated task

------------------------------------------------


## Docker

	### List Containers: 
		$ docker ps -a

	### List Images: 
		$ docker image ls -a

	### Remove images + Containers:
		$ docker rm -f $(docker ps -a -q) 
		$ docker rmi -f $(docker images -q)

	### Bash Session with running Container: 
		$ docker exec -it $container-id bash

		#### Update + View files: 
		 	$ apt-get update
			$ apt-get install vim

	### Run image
		$ docker run -i -t -p $port:$port $image-id

	### Build image 
		$ docker-compose up


##AWS:

### SSH
 	ssh -i ~/.ssh/EC2_personal.pem ec2-user@ec2-52-51-44-160.eu-west-1.compute.amazonaws.com


### Docker to AWS
	1. Find docker conatiner
		$ docker ps -a

	2. Commit container to new image 
		$ docker commit $container-id new_image

	3. Check image runs 
		$ docker run -i -t -p $port:$port $image-id

	3. Create ECR (Elastic Compute Cloud Resposity) 
            2.1. $ aws ecr get-login --region eu-west-2
		2.2. Copy and paste response into terminal 
		2.2.1 Might need to remove '-e none' flags 
		2.3. Follow Resposity tagging and push instructions 

	4. Create ECS Cluster (with correct security group, exposing correct ports to outside world)

	5. Use first run set up without "Deploy a sample application onto an Amazon ECS Cluster"
			https://eu-west-2.console.aws.amazon.com/ecs/home?region=eu-west-2#/firstRun





	## Links 

	https://aws.amazon.com/getting-started/tutorials/deploy-docker-containers/




### Docker to AWS cluster FRESH

1. Create Cluster
2. Upload image to aws repo
3. Create task which maps from 3000 in container : 80 on host
4. Create service with ELB which connects 80 on host : 80 on http outgoing connection
