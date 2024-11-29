---

# Docker Environment Setup

This guide provides step-by-step instructions for setting up and running the Dockerized environment for the frontend application.

---

## Prerequisites

Before proceeding, ensure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)

---

## Project Structure

The project directory should follow this structure:

```
project/
├── docker-compose.yaml
├── Dockerfile
└── frontend/
    ├── package.json
    ├── package-lock.json
    └── app/
```

- `docker-compose.yaml`: Configuration for running the Docker containers.
- `Dockerfile`: Defines how the Docker image is built.
- `frontend/`: Contains the Next.js frontend application, including `package.json`.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/jinya1013/PBL_ticket.git
cd project
```

### 2. Build and Start the Docker Containers

Run the following commands to build and start the Docker environment:

```bash
docker-compose build
docker-compose up
```

- **`docker-compose build`**: Builds the Docker images.
- **`docker-compose up`**: Starts the containers.

The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## Development Workflow

### Restart the Containers

If you need to restart the containers:

```bash
docker-compose down
docker-compose up
```

### Access the Container Shell

To access the shell of the running container:

```bash
docker exec -it frontend sh
```

### Check Logs

View logs for the frontend container:

```bash
docker logs frontend
```

---

## Troubleshooting

### Common Issues

#### 1. **`ENOENT: no such file or directory`**
   - Ensure the `docker-compose.yaml` correctly maps the `frontend` directory.
   - Confirm the project structure matches the expected format.

#### 2. **Changes Are Not Reflected**
   - Ensure the `volumes` section in `docker-compose.yaml` is correctly configured for live updates during development.

#### 3. **Port Conflicts**
   - Check if another application is using port `3000`. Stop the conflicting service or change the exposed port in `docker-compose.yaml`.

---

## Clean Up

To stop and remove all running containers:

```bash
docker-compose down
```

To remove unused images, volumes, and containers:

```bash
docker system prune
```

---

> [!TIP]
> This setup is optimized for development. For production, consider optimizing the `Dockerfile` and setting up a reverse proxy like Nginx.
> Refer to Docker's [official documentation](https://docs.docker.com/) for advanced configuration options.

