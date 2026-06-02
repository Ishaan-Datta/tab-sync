type JsonRpcId = string | number | null;

type JsonRpcSuccess<T> = {
  jsonrpc: "2.0";
  id: JsonRpcId;
  result: T;
};

type JsonRpcError = {
  jsonrpc: "2.0";
  id: JsonRpcId;
  error: {
    code: number;
    message: string;
    data?: unknown;
  };
};

type JsonRpcResponse<T> = JsonRpcSuccess<T> | JsonRpcError;

export class RpcClient {
  constructor(
    private endpoint: string,
    private getAuthToken?: () => Promise<string | null>,
  ) {}

  async call<T>(
    method: string,
    params?: Record<string, unknown> | unknown[],
    signal?: AbortSignal,
  ): Promise<T> {
    const id = crypto.randomUUID();
    const token = this.getAuthToken ? await this.getAuthToken() : null;

    const res = await fetch(this.endpoint, {
      method: "POST",
      signal,
      headers: {
        "content-type": "application/json",
        ...(token ? { authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id,
        method,
        params,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const payload = (await res.json()) as JsonRpcResponse<T>;

    if ("error" in payload) {
      throw new Error(`${payload.error.code}: ${payload.error.message}`);
    }

    return payload.result;
  }
}

export const rpc = new RpcClient("https://api.example.com/rpc");
