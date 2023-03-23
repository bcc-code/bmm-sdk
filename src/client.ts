import { BaseAPI, Configuration, Middleware } from "./runtime"

export type Token = {
    type: "bearer"
    value: string
}

type TokenFactory = () => Promise<Token | null>

export class Client {
    constructor(tokenFactory: TokenFactory) {
        this.middleware = {
            pre: async (ctx) => {
                const token = await tokenFactory()
                const headers = new Headers(ctx.init.headers)

                let authHeader: string | null= null
                if (token) {
                    switch (token.type) {
                        case "bearer":
                            authHeader = "Bearer " + token.value
                    }
                }
                if (authHeader) {
                    headers.set("Authorization", authHeader)
                }

                ctx.init.headers = headers

                return ctx
            }
        }
    }

    private middleware: Middleware

    public attach<T extends BaseAPI>(api: {
        new (configuration: Configuration): T
    }) {
        return new api(new Configuration({
            middleware: [this.middleware]
        }))
    }
}
