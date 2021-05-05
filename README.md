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

create a file like below, save it at `mock` dir.

```ts
import { Request, Response} from 'express';

export default {
    'GET /hello': (req: Request, res: Response) => {
        res.send({
            name: 'mock'
        });
    },
    'GET /users/:id': (req: Request, res: Response) => {
        res.send({
            user_id: req.params.id
        });
    },
}

```

## Build
convert typescript to commonjs

```bash
yarn build

```
