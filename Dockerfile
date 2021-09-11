FROM heroku/heroku:18-build AS builder
RUN gem install bundler:1.16.4
WORKDIR /app
COPY backend .

FROM heroku/heroku:18 AS production
RUN gem install bundler:1.16.4
COPY --from=builder /app /app
WORKDIR /app
CMD [ "bundle", "exec", "puma" ]