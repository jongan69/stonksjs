# stonksjs Examples

This directory contains comprehensive examples demonstrating all the
functionality available in the stonksjs ecosystem.

## Quick Start

### TypeScript/ESM Version

```bash
# Run the comprehensive demo
npx ts-node examples/comprehensive-demo.ts

# Or if you have the project built
node examples/comprehensive-demo.ts
```

### JavaScript/CommonJS Version

```bash
# Run the comprehensive demo
node examples/comprehensive-demo.js
```

## What the Examples Demonstrate

### 📊 **Finviz API (`@stonksjs/finviz`)**

- **Single Stock Quotes**: Get detailed financial metrics for individual stocks
- **Multiple Stock Quotes**: Batch retrieval and comparison of multiple stocks
- **Available Screeners**: List all 40+ pre-defined screeners from Finviz
- **Custom Screeners**: Use specific screener URLs or names

### 💾 **Quote Package (`@stonksjs/quote`)**

- **Cached Retrieval**: Automatic caching for improved performance
- **Performance Testing**: Demonstrate cache speedup benefits
- **Memory Management**: Efficient quote data storage

### 🔍 **Stock Screener (`@stonksjs/stock-screener`)**

- **Performance Screeners**: Top gainers, losers, new highs/lows, most
  active/volatile
- **Technical Analysis**: Oversold/overbought, chart patterns,
  support/resistance
- **News & Events**: Earnings, upgrades/downgrades, insider trading, major news
- **Custom Combinations**: Combine multiple screeners for advanced analysis

### 🚀 **Advanced Usage**

- **Portfolio Analysis**: Analyze multiple stocks with key metrics
- **Market Sentiment**: Calculate market sentiment from screener data
- **Custom Strategies**: Build your own screening combinations

## Example Output

The comprehensive demo will show:

```
🚀 Starting stonksjs Comprehensive Demo
This demo showcases all functionality across the stonksjs ecosystem

============================================================
📊 FINVIZ API DEMONSTRATION
============================================================

----------------------------------------
🔍 Single Stock Quote (AAPL)
----------------------------------------
✅ Successfully retrieved AAPL quote
Key metrics:
  Price: $150.25
  Change: +2.15%
  Market Cap: $2.4T
  P/E Ratio: 28.5
  Volume: 45,234,567
  RSI(14): 65.2
  Beta: 1.2

📈 Stock Comparison:
Symbol | Price    | Change   | P/E  | Volume      | RSI
-------|----------|----------|------|-------------|-----
MSFT   | $350.45  | +1.25%   | 25.3 | 23,456,789  | 58.7
GOOGL  | $2,850.12| +0.85%   | 22.1 | 1,234,567   | 62.1
TSLA   | $245.67  | +3.45%   | 45.2 | 67,890,123  | 71.3
NVDA   | $425.89  | +2.15%   | 35.7 | 45,678,901  | 68.9
```

## Individual Package Examples

Each package also has its own examples:

- **`packages/finviz/examples/`**: Basic Finviz API usage
- **`packages/quote/examples/`**: Simple quote retrieval
- **`packages/stock-screener/examples/`**: Basic screener usage

## Building Your Own Examples

### Basic Quote Retrieval

```typescript
import { finviz } from '@stonksjs/core';

const quote = await finviz.getQuote('AAPL');
console.log(`AAPL is trading at $${quote.price}`);
```

### Using Screeners

```typescript
import { stockScreener } from '@stonksjs/core';

const screener = new stockScreener.StockScreener();
const topGainers = await screener.getTopGainers();
console.log('Top gaining stocks:', topGainers);
```

### Cached Quotes

```typescript
import { quote } from '@stonksjs/core';

const quoteInstance = new quote.Quote();
const data = await quoteInstance.get('MSFT'); // Cached on subsequent calls
```

## Performance Tips

1. **Use Caching**: The quote package automatically caches results
2. **Batch Operations**: Use `Promise.all()` for multiple simultaneous requests
3. **Screener Combinations**: Combine multiple screeners for complex analysis
4. **Error Handling**: Always wrap API calls in try-catch blocks

## Troubleshooting

### Common Issues

1. **Network Errors**: Ensure you have internet connectivity
2. **Rate Limiting**: Finviz may rate limit requests; add delays between calls
3. **Invalid Symbols**: Verify stock symbols are correct (e.g., 'AAPL' not
   'apple')

### Getting Help

- Check the [main README](../README.md) for installation instructions
- Review individual package documentation in `packages/*/README.md`
- Open an issue on GitHub for bugs or feature requests

## Contributing

Want to add your own example? Create a new file in this directory and update
this README!

Examples should:

- Be well-commented and documented
- Handle errors gracefully
- Demonstrate real-world usage patterns
- Include both TypeScript and JavaScript versions when possible
