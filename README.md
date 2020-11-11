# Start in dev mode

### Run in docker

```bash
$ yarn start
```
Debugger port 9229

### Run seeds adding
run in container command
```bash
$ yarn seed:run
```

#Start in product mode
- Replace in docker-compose.yml
```
dockerfile: Dockerfile -> dockerfile: Dockerfile.prod
```
- Check and sync .env and ormconfig.json
