# Finn pokerhånden

## `install`

This command installs the packages that the project depends on.

```
npm install
```

or

```
yarn install
```

## `start:dev`

Start the server:

```
npm run start:dev
```

or

```
yarn start:dev
```

## `build`

Build for production:

```
npm run build
```

or

```
yarn build
```

## `start`

Run build:

```
npm run start
```

or

```
yarn start
```

## `test`

Run tests:

```
npm run test
```

or

```
yarn test
```

## Endpoints

### Server endpoints

| Name                | Request type | Endpoint                                |
| ------------------- | ------------ | --------------------------------------- |
| Deal cards          | GET          | http://localhost:3000/api/deal-cards    |
| Historical hands    | GET          | http://localhost:3000/api/hands/history |
| Find winner hand(S) | POST         | http://localhost:3000/api/hands/winner  |

#### Find winner example

Privde an array of two or more hands to determine the winner(s)

```
{
  "hands": [
    [
      { "card": "4r", "value": 4, "suit": "ruter" },
      { "card": "4k", "value": 4, "suit": "kløver" },
      { "card": "6r", "value": 5, "suit": "ruter" },
      { "card": "6k", "value": 6, "suit": "knekt" },
      { "card": "6h", "value": 7, "suit": "hjerte" }
    ],
     [
      { "card": "th", "value": 10, "suit": "hjerte" },
      { "card": "2s", "value": 2, "suit": "spar" },
      { "card": "7r", "value": 7, "suit": "ruter" },
      { "card": "8r", "value": 8, "suit": "ruter" },
      { "card": "9r", "value": 9, "suit": "ruter" }
    ]
  ]
}
```

### Client

```
http://localhost:3000/website
```
