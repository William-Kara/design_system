FROM registry.gitlab.com/vigigloo/tools/pnpm:latest as build
WORKDIR /app
COPY package.json pnpm-lock.yaml /app
RUN pnpm install
COPY . /app
RUN pnpm run storybook:build

FROM docker.io/nginx:alpine
RUN sed -i 's/ js;/ js mjs;/' /etc/nginx/mime.types # Serve .mjs files with right content-type
COPY --from=build /app/storybook-static /usr/share/nginx/html
