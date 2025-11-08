# it defines linux os, bun runtime, and pre-installed tools
FROM oven/bun:1 

WORKDIR /app

COPY ./package.json ./bun.lock ./

RUN bun install

COPY ./index.ts ./tsconfig.json ./

EXPOSE 3000

CMD ["bun", "run", "index.ts"]
