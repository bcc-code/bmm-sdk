# bmm-sdk

This repository contains an SDK generated from the BMM API using OpenAPI tools.

Currently only `typescript-fetch` is used. If more are needed, the structure of the project might need to adjust, too.

## Running

```sh
pnpm i
pnpm generate
# You might have to do some code changes - currently https://github.com/OpenAPITools/openapi-generator/issues/14792
pnpm publish
```
