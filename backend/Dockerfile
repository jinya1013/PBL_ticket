FROM pgrouting/pgrouting:latest

# Set the working directory inside the container
WORKDIR /docker-entrypoint-initdb.d

# Copy initialization scripts and data into the container
COPY ./data /docker-entrypoint-initdb.d/

# Install the H3 extension
RUN apt-get update && \
    apt-get install -y postgresql-16-h3

# Adjust permissions to ensure Postgres can access the copied files
RUN chown -R postgres:postgres /docker-entrypoint-initdb.d

# Expose PostgreSQL's default port
EXPOSE 5432
