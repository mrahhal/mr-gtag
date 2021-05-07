# mr-gtag

[![npm](https://img.shields.io/npm/v/mr-gtag.svg)](https://www.npmjs.com/package/mr-gtag)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Easy, strong typed, and a modern way to use google analytics gtag lib.

Both umd and es bundles are produced, along with type definitions.

## Install

```
npm i mr-gtag
```

## Usage

First, calling `installGtag` injects the lib:
```ts
import { installGtag } from 'mr-gtag';

installGtag(trackingId);
```

This injects the lib and then calls what is equivalent to `gtag('config', trackingId, ...);`.

Some options are available here:
```ts
import { installGtag } from 'mr-gtag';

installGtag(trackingId, {
  send_page_view: false, // If set to false, tells gtag to not send the default pageview event. Default is true.
  user_id: 'USER_ID', // You can set the user_id like this
  // Or any other option supported by the google gtag lib
});
```

From here on, use any of the gtag functions available.

Send an event:
```ts
import { gtag } from 'mr-gtag';

gtag('event', 'page_view', { ... });
```

Refer to the [google docs](https://developers.google.com/analytics/devguides/collection/gtagjs/pages) for more info and to see the different kinds of events you can send.

## Release notes

### 2.0.0

- BREAKING CHANGE: Options that `installGtag` accepts were renamed to be the exact same as the gtag ones. Be sure to update those.
- We now correctly handle registering more than one tracking id.

### 1.0.0

Initial version.
