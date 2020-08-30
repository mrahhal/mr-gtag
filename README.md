# mr-gtag

[![npm](https://img.shields.io/npm/v/mr-gtag.svg)](https://www.npmjs.com/package/mr-gtag)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Easy, strong typed, and a modern way to use google analytics gtag lib.

Both umd and es bundles are produced, along with type definitions.

## Install

```
npm i --save mr-gtag
```

## Usage

First, installing gtag injects the lib:
```ts
import { installGtag } from 'mr-gtag';

installGtag(trackingId);
```

This is equivalent to `gtag('config', trackingId, ...);`.

Some options are available here:
```ts
import { installGtag } from 'mr-gtag';

installGtag(trackingId, {
  sendDefaultPageView: false, // If set to false, tells gtag to not send the default pageview event. Default is true.
});
```

From here on, use any of the gtag functions available.

Set a value:
```ts
import { gtag } from 'mr-gtag';

gtag('set', { ... })
```

Send an event:
```ts
import { gtag } from 'mr-gtag';

gtag('event', 'page_view', { ... });
```

Refer to the [google docs](https://developers.google.com/analytics/devguides/collection/gtagjs/pages) for more info and to see the different kinds of events you can send.

## Development

```
npm i -g rollup
npm i
```
