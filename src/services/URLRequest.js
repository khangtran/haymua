export class URLRequest {
    constructor(url, method, body, header) {
        this.url = url
        this.method = method
        this.body = body
        this.header = header;
    }
}

export class NetRequest {
    constructor(req) {
        this.request = req
    }

    async excute() {
        let { url, method, body, headers } = this.request
        let raw = JSON.stringify(body)
        if (method === 'post') {
            let req = await fetch(url, {
                method: method,
                body: raw,
                headers: { 'content-type': 'application/json' }
            })
            console.log('>> net request', req)
            let result = await req.json()
            return result
        }

        let req = await fetch(url)
        let res = await req.json()
        return res
    }
}