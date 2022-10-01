# Migrating To Ghost

This last week I decided to move to a dynamically hosted solution for my website using [Ghost](https://ghost.org/) as my CMS and [Google Cloud Platform](https://cloud.google.com/) for my hosting. Originally I had planned on building my website as a web app using the MEAN stack for the experience, but the overhead of building out a whole new CMS for my personal site alone would not be worth the time so I used the time to review the modern tools necessary for development and deployment of modern web services.

## Docker
In looking at some of the hosting options I wanted to do a containerized deployment using [Docker](https://www.docker.com/) containers. It has been some time since I last used Docker so I ran through the Docker tutorials real quick as a refresher. Due to my original desire to build out a MEAN stack based web-app style website, I also did a quick refresher on the two most common container orchestration tools, [Docker Swarm](https://docs.docker.com/engine/swarm/) and [Kubernetes](https://kubernetes.io/). [Minikube](https://kubernetes.io/docs/setup/minikube/) can be used to implement a Kubernetes cluster locally while [VirtualBox](https://www.virtualbox.org/) can be used to implement a Docker Swarm locally. I ended up not implementing the full MEAN stack microservice architecture so I did not need to use a container orchestration tool.

## Hosting
Looking at some of the hosting options available, I had three main options: monolithic hosting, managed container orchestration, and serverless hosting.

### Monolithic Hosting
Monolithic hosting is more of a legacy method of hosting in which a single web server such as nginx or apache is installed and configured to serve all of the website files as well as any additional web services. This is the type of hosting I am most familiar with due to my previous experience with web development.

### Managed Container Orchestration
Managed containerized deployment is a common modern web app deployment option. Using a container orchestrator like Kubernetes allows the easy addition, modification, and scaling of individual web services. This allows for the development and deployment of web services following a microservices style architecture. My website currently only consists of this ghost blog so I ended up using docker without the need for any container orchestration.

### Serverless Hosting
I was previously unfamiliar with the concept of serverless hosting until I came across an article referencing [Google Cloud Run](https://cloud.google.com/run/) as a deployment option. The serverless option required the use of [KNative](https://knative.dev/), a kubernetes based serverless workload platform. Looking for the Amazon equivalent I found [AWS Serverless](https://aws.amazon.com/serverless/build-a-web-app/). In looking into a serverless implementation of Ghost, I came across [this thread](https://forum.ghost.org/t/serverless-ghost/6318/5) about the current work by the Ghost community. This led to my interest in JAMStack.

## JAMStack
During my research into modern web platforms and best practices I ran across the relatively new JAMstack with an interesting post on [implementing Ghost using JAMStack](https://blog.ghost.org/jamstack/). One of the central players in the JAMStack method of implementation and hosting is [Netlify](https://www.netlify.com/). Netlify has created a JAMStack-based CMS, development modules, and offers free hosting for any website that has been implemented using JAMStack.
