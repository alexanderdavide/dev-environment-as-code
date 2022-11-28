FROM mcr.microsoft.com/devcontainers/javascript-node:18-bullseye

RUN apt-get update && apt-get -y install --no-install-recommends \
    postgresql-client && \
    rm -rf /var/lib/apt/lists/*
