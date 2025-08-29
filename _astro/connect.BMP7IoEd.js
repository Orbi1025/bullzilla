const h = "2.19.0",
  b = () => `@wagmi/core@${h}`;
var l = function (r, t, e, n) {
    if (e === "a" && !n)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? r !== t || !n : !t.has(r))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return e === "m" ? n : e === "a" ? n.call(r) : n ? n.value : t.get(r);
  },
  s,
  d;
class a extends Error {
  get docsBaseUrl() {
    return "https://wagmi.sh/core";
  }
  get version() {
    return b();
  }
  constructor(t, e = {}) {
    super(),
      s.add(this),
      Object.defineProperty(this, "details", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "docsPath", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "metaMessages", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "shortMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "WagmiCoreError",
      });
    const n =
        e.cause instanceof a
          ? e.cause.details
          : e.cause?.message
          ? e.cause.message
          : e.details,
      c = (e.cause instanceof a && e.cause.docsPath) || e.docsPath;
    (this.message = [
      t || "An error occurred.",
      "",
      ...(e.metaMessages ? [...e.metaMessages, ""] : []),
      ...(c
        ? [
            `Docs: ${this.docsBaseUrl}${c}.html${
              e.docsSlug ? `#${e.docsSlug}` : ""
            }`,
          ]
        : []),
      ...(n ? [`Details: ${n}`] : []),
      `Version: ${this.version}`,
    ].join(`
`)),
      e.cause && (this.cause = e.cause),
      (this.details = n),
      (this.docsPath = c),
      (this.metaMessages = e.metaMessages),
      (this.shortMessage = t);
  }
  walk(t) {
    return l(this, s, "m", d).call(this, this, t);
  }
}
(s = new WeakSet()),
  (d = function r(t, e) {
    return e?.(t) ? t : t.cause ? l(this, s, "m", r).call(this, t.cause, e) : t;
  });
class f extends a {
  constructor() {
    super("Chain not configured."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ChainNotConfiguredError",
      });
  }
}
class m extends a {
  constructor() {
    super("Connector already connected."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorAlreadyConnectedError",
      });
  }
}
class g extends a {
  constructor() {
    super("Connector not connected."),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorNotConnectedError",
      });
  }
}
class v extends a {
  constructor({ address: t, connector: e }) {
    super(`Account "${t}" not found for connector "${e.name}".`),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorAccountNotFoundError",
      });
  }
}
class w extends a {
  constructor({ connectionChainId: t, connectorChainId: e }) {
    super(
      `The current chain of the connector (id: ${e}) does not match the connection's chain (id: ${t}).`,
      { metaMessages: [`Current Chain ID:  ${e}`, `Expected Chain ID: ${t}`] }
    ),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorChainMismatchError",
      });
  }
}
class C extends a {
  constructor({ connector: t }) {
    super(`Connector "${t.name}" unavailable while reconnecting.`, {
      details: [
        "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.",
        "All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.",
        "This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
      ].join(" "),
    }),
      Object.defineProperty(this, "name", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "ConnectorUnavailableReconnectingError",
      });
  }
}
async function y(r, t) {
  let e;
  if (
    (typeof t.connector == "function"
      ? (e = r._internal.connectors.setup(t.connector))
      : (e = t.connector),
    e.uid === r.state.current)
  )
    throw new m();
  try {
    r.setState((o) => ({ ...o, status: "connecting" })),
      e.emitter.emit("message", { type: "connecting" });
    const { connector: n, ...c } = t,
      u = await e.connect(c),
      i = u.accounts;
    return (
      e.emitter.off("connect", r._internal.events.connect),
      e.emitter.on("change", r._internal.events.change),
      e.emitter.on("disconnect", r._internal.events.disconnect),
      await r.storage?.setItem("recentConnectorId", e.id),
      r.setState((o) => ({
        ...o,
        connections: new Map(o.connections).set(e.uid, {
          accounts: i,
          chainId: u.chainId,
          connector: e,
        }),
        current: e.uid,
        status: "connected",
      })),
      { accounts: i, chainId: u.chainId }
    );
  } catch (n) {
    throw (
      (r.setState((c) => ({
        ...c,
        status: c.current ? "connected" : "disconnected",
      })),
      n)
    );
  }
}
export { a as B, C, g as a, w as b, y as c, v as d, f as e, h as v };
