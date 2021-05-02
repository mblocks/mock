# Mock Server

Provide mock data to front-end

## Install

```bash

yarn

```

## Run

```bash

yarn start

```

## Usage

create a file like below, save it at `mocks` dir.

```ts
import { Request, Response} from 'express';

export default {
    'GET /heloo': (req: Request, res: Response) => {
        res.send({
            name: 'mock'
        });
    },
}

```

## Build
convert typescript to commonjs

```bash
yarn build

```