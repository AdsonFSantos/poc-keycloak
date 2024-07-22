# Use the .NET 8 SDK image as the base image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# set the user 
ARG UNAME=devuser
ARG UID=1000
ARG GID=1000
RUN groupadd -g $GID -o $UNAME
RUN useradd -m -u $UID -g $GID -o -s /bin/bash $UNAME
USER $UNAME

WORKDIR /app

COPY . .
RUN dotnet restore

EXPOSE 5000
ENTRYPOINT [ "tail", "-f", "/dev/null" ]
