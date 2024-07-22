FROM node:22.0.0

# set the user 
ARG UNAME=devuser
ARG UID=1000
ARG GID=1000
RUN groupadd -g $GID -o $UNAME
RUN useradd -m -u $UID -g $GID -o -s /bin/bash $UNAME
USER $UNAME

WORKDIR /app

COPY . .
RUN npm install

ENTRYPOINT [ "tail", "-f", "/dev/null" ]
