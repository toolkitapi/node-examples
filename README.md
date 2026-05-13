# ToolkitAPI — Node.js Examples

[![npm](https://img.shields.io/npm/v/@toolkitapi/node-sdk)](https://www.npmjs.com/package/@toolkitapi/node-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Runnable TypeScript examples for every [ToolkitAPI.io](https://toolkitapi.io) endpoint, using the official [`@toolkitapi/node-sdk`](https://www.npmjs.com/package/@toolkitapi/node-sdk).

## Prerequisites

- Node.js **18+**
- npm

## Setup

```bash
npm install
export TOOLKITAPI_KEY=tk_live_...
```

## Running an example

Each file is a self-contained TypeScript script. Run any one with `tsx`:

```bash
npx tsx dns/lookup.ts
npx tsx email/validate_email.ts
npx tsx auth/jwt_generate.ts
```

## Toolkits

| Toolkit | Folder |
|---------|--------|
| Authentication & security | [`auth/`](auth/) |
| Barcode & QR codes | [`barcode/`](barcode/) |
| File & data conversion | [`convert/`](convert/) |
| Developer utilities | [`devtools/`](devtools/) |
| DNS & domain tools | [`dns/`](dns/) |
| Email validation | [`email/`](email/) |
| Geo & IP | [`geo/`](geo/) |
| Image processing | [`image/`](image/) |
| Media extraction | [`media/`](media/) |
| PDF tools | [`pdf/`](pdf/) |
| Web scraping | [`scrape/`](scrape/) |
| Text analysis (AI) | [`textanalysis/`](textanalysis/) |
| Webhooks | [`webhook/`](webhook/) |

## Links

- [ToolkitAPI docs](https://toolkitapi.io/docs)
- [Node.js SDK on npm](https://www.npmjs.com/package/@toolkitapi/node-sdk)
- [bash examples](https://github.com/toolkitapi/bash-examples)
- [Python examples](https://github.com/toolkitapi/python-examples)
- [Go examples](https://github.com/toolkitapi/go-examples)
