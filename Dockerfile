FROM hayd/alpine-deno:1.0.3

EXPOSE 8000

WORKDIR /app

USER deno

COPY deps.ts .
RUN deno cache --unstable deps.ts

RUN deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon@v2.0.2/denon.ts
ENV PATH="/home/deno/.deno/bin:${PATH}"

CMD ["run" ,"--allow-net", "--allow-read", "server.ts"]