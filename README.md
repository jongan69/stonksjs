<img src="https://raw.githubusercontent.com/nielse63/stonksjs/main/docs/assets/logo.svg" align="right" width="100" />

# @jongan69/stonksjs

> Reliable algotrading utilities written in node - Updated and maintained fork

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/nielse63/stonksjs?style=flat-square)
![CI Tests](https://github.com/nielse63/stonksjs/workflows/CI%20Tests/badge.svg)
![Coveralls github](https://img.shields.io/coveralls/github/nielse63/stonksjs?style=flat-square)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/nielse63/stonksjs?style=flat-square)
![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/nielse63/stonksjs?style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

- [Features](#features)
  - [Goals](#goals)
- [Usage](#usage)
- [Development](#development)
  - [Setup](#setup)
  - [Testing](#testing)
  - [Release](#release)
- [Contributing](#contributing)
- [Roadmap](#roadmap)

## Features

- Custom screeners from finviz, msn, and finscreener
- Detailed ticker fundamentals
- Module and CommonJS compatible
- Light-weight - few to no dependencies

### Goals

**What stonksjs is:**

The primary objective of this project are:

- To provide a collection of reliable algotrading utilities written in
  typescript/node
- Take some of the guess-work out of the stock research process by using
  industry-tested, predefined screeners
- Provide more data-points for a given instrument than most packages currently
  available
- Enable algotrading programmers with diversified assets - not just the hottest
  options rumors on [r/wallstreetbets](https://reddit.com/r/wallstreetbets)

**What stonksjs is not:**

- stonksjs **is not** a roboadvisor or professional trading app - this is just a
  fun little side project
- stonksjs **is not** an unofficial API for Robinhood or any other brokerage. If
  that's what you're looking for, I'd recommend
  [algotrader](https://github.com/torreyleonard/algotrader)
- stonksjs **is not** a backtesting tool, although that might get added to the
  roadmap soon

## Usage

Installation, usage, and API docs can be found in each scoped package directory.

### Quick Start with Examples

The easiest way to get started is with our comprehensive examples:

```bash
# Run the interactive demo
./examples/run-demo.sh

# Or run directly
node examples/comprehensive-demo.js
```

This will demonstrate all the functionality across the stonksjs ecosystem,
including:

- 📊 Stock quote retrieval with detailed metrics
- 🔍 40+ pre-defined stock screeners
- 💾 Cached quote data for better performance
- 🚀 Advanced portfolio and sentiment analysis

| Name                                                                                               | Description                                                  | Version                                                                                                    |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [@stonksjs/core](https://github.com/nielse63/stonksjs/tree/main/packages/core)                     | Single point of entry for all stonksjs packages              | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/core?color=brightgreen&style=flat-square)           |
| [@stonksjs/quote](https://github.com/nielse63/stonksjs/tree/main/packages/quote)                   | Detailed, real-time stock quote data                         | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/quote?color=brightgreen&style=flat-square)          |
| [@stonksjs/finviz](https://github.com/nielse63/stonksjs/tree/main/packages/finviz)                 | Unofficial finviz API                                        | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/finviz?color=brightgreen&style=flat-square)         |
| [@stonksjs/stock-screener](https://github.com/nielse63/stonksjs/tree/main/packages/stock-screener) | Pre-defined industry standard stock screeners from MSN Money | ![npm (scoped)](https://img.shields.io/npm/v/@stonksjs/stock-screener?color=brightgreen&style=flat-square) |

## Development

### Setup

#### Prerequisites

This project requires node `v18.0.0` or higher.

#### Installation

Clone the repo and install the dependencies:

```bash
git clone http://github.com/nielse63/stonksjs.git
cd stonksjs
nvm use
npm ci
```

### Testing

Tests are run using `jest`, and can be run by executing:

```bash
npm test

# run with coverage
npm test -- --coverage
```

### Examples

Comprehensive examples are available in the `examples/` directory:

```bash
# Run the interactive demo script
./examples/run-demo.sh

# Or run examples directly
node examples/comprehensive-demo.js        # JavaScript version
npx ts-node examples/comprehensive-demo.ts # TypeScript version
```

The examples demonstrate:

- All package functionality with real-world usage
- Performance optimization techniques
- Advanced analysis patterns
- Error handling best practices

### Release

To release a new version, run:

```bash
npm run release
```

This executes `lerna publish` behind the scenes, and you'll be prompted with a
few questions before the package is deployed.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

## Roadmap

All new features and changes are being tracked in GitHub under the
[projects](https://github.com/nielse63/stonksjs/projects) and
[issues](https://github.com/nielse63/stonksjs/issues) tabs of this repo.
