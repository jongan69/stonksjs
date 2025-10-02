#!/usr/bin/env node

/**
 * Comprehensive Demo of stonksjs Packages
 *
 * This example demonstrates all the functionality available in the stonksjs ecosystem:
 * - @stonksjs/core: Main entry point with all packages
 * - @stonksjs/finviz: Unofficial Finviz API for quotes and screeners
 * - @stonksjs/quote: Cached quote data retrieval
 * - @stonksjs/stock-screener: Pre-defined industry standard stock screeners
 */

import { finviz, quote, stockScreener } from '@stonksjs/core';
import type { Quote as QuoteType, Screener } from '@stonksjs/finviz';

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(color: keyof typeof colors, message: string) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSection(title: string) {
  console.log('\n' + '='.repeat(60));
  log('bright', `📊 ${title}`);
  console.log('='.repeat(60));
}

function logSubSection(title: string) {
  console.log('\n' + '-'.repeat(40));
  log('cyan', `🔍 ${title}`);
  console.log('-'.repeat(40));
}

async function demonstrateFinvizAPI() {
  logSection('FINVIZ API DEMONSTRATION');

  // 1. Get a single stock quote
  logSubSection('Single Stock Quote (AAPL)');
  try {
    const appleQuote = await finviz.getQuote('AAPL');
    log('green', '✅ Successfully retrieved AAPL quote');
    console.log('Key metrics:');
    console.log(`  Price: $${appleQuote.price}`);
    console.log(`  Change: ${appleQuote.change}`);
    console.log(`  Market Cap: ${appleQuote.marketCap}`);
    console.log(`  P/E Ratio: ${appleQuote.pE}`);
    console.log(`  Volume: ${appleQuote.volume.toLocaleString()}`);
    console.log(`  RSI(14): ${appleQuote.rsi14}`);
    console.log(`  Beta: ${appleQuote.beta}`);
  } catch (error) {
    log('red', `❌ Error getting AAPL quote: ${error}`);
  }

  // 2. Get multiple stock quotes
  logSubSection('Multiple Stock Quotes');
  const symbols = ['MSFT', 'GOOGL', 'TSLA', 'NVDA'];
  const quotes: { symbol: string; quote: QuoteType }[] = [];

  for (const symbol of symbols) {
    try {
      const quote = await finviz.getQuote(symbol);
      quotes.push({ symbol, quote });
      log('green', `✅ Retrieved ${symbol}: $${quote.price}`);
    } catch (error) {
      log('red', `❌ Error getting ${symbol}: ${error}`);
    }
  }

  // 3. Display comparison table
  if (quotes.length > 0) {
    console.log('\n📈 Stock Comparison:');
    console.log('Symbol | Price    | Change   | P/E  | Volume      | RSI');
    console.log('-------|----------|----------|------|-------------|-----');
    quotes.forEach(({ symbol, quote }) => {
      console.log(
        `${symbol.padEnd(6)} | $${quote.price
          .toString()
          .padEnd(8)} | ${quote.change.padEnd(8)} | ${quote.pE
          .toString()
          .padEnd(4)} | ${quote.volume.toLocaleString().padEnd(11)} | ${
          quote.rsi14
        }`,
      );
    });
  }

  // 4. Get available screeners
  logSubSection('Available Screeners');
  try {
    const screeners = await finviz.getScreenersList();
    log('green', `✅ Found ${screeners.length} available screeners`);

    // Show first 10 screeners
    console.log('\nTop 10 Available Screeners:');
    screeners.slice(0, 10).forEach((screener: Screener, index: number) => {
      console.log(`${index + 1}. ${screener.name} (ID: ${screener.id})`);
    });
  } catch (error) {
    log('red', `❌ Error getting screeners list: ${error}`);
  }

  // 5. Use a specific screener
  logSubSection('Top Gainers Screener');
  try {
    const topGainers = await finviz.getScreener('topgainers');
    log('green', `✅ Found ${topGainers.length} top gaining stocks`);

    console.log('\nTop 10 Gaining Stocks:');
    topGainers.slice(0, 10).forEach((symbol: string, index: number) => {
      console.log(`${index + 1}. ${symbol}`);
    });
  } catch (error) {
    log('red', `❌ Error getting top gainers: ${error}`);
  }
}

async function demonstrateQuotePackage() {
  logSection('QUOTE PACKAGE DEMONSTRATION');

  // The quote package provides cached access to stock quotes
  logSubSection('Cached Quote Retrieval');

  const quoteInstance = new quote.Quote();
  const symbols = ['AMZN', 'META', 'NFLX'];

  for (const symbol of symbols) {
    try {
      const startTime = Date.now();
      const quoteData = await quoteInstance.get(symbol);
      const endTime = Date.now();

      log('green', `✅ Retrieved ${symbol} in ${endTime - startTime}ms`);
      console.log(`  Price: $${quoteData.price}`);
      console.log(`  Market Cap: ${quoteData.marketCap}`);
      console.log(`  P/E: ${quoteData.pE}`);
    } catch (error) {
      log('red', `❌ Error getting ${symbol}: ${error}`);
    }
  }

  // Demonstrate caching by getting the same quote again
  logSubSection('Cache Performance Test');
  try {
    const symbol = 'AAPL';

    // First call (cache miss)
    const startTime1 = Date.now();
    await quoteInstance.get(symbol);
    const endTime1 = Date.now();

    // Second call (cache hit)
    const startTime2 = Date.now();
    await quoteInstance.get(symbol);
    const endTime2 = Date.now();

    log('green', `✅ First call (cache miss): ${endTime1 - startTime1}ms`);
    log('green', `✅ Second call (cache hit): ${endTime2 - startTime2}ms`);
    log(
      'yellow',
      `📈 Cache speedup: ${Math.round(
        (endTime1 - startTime1) / (endTime2 - startTime2),
      )}x faster`,
    );
  } catch (error) {
    log('red', `❌ Error in cache test: ${error}`);
  }
}

async function demonstrateStockScreener() {
  logSection('STOCK SCREENER DEMONSTRATION');

  const screener = new stockScreener.StockScreener();

  // 1. Get all available filters
  logSubSection('Available Filters');
  try {
    const filters = await screener.getFilters();
    log('green', `✅ Found ${filters.length} available filters`);

    console.log('\nSample Filters:');
    filters.slice(0, 15).forEach((filter: Screener, index: number) => {
      console.log(`${index + 1}. ${filter.name}`);
    });
  } catch (error) {
    log('red', `❌ Error getting filters: ${error}`);
  }

  // 2. Performance-based screeners
  logSubSection('Performance-Based Screeners');

  const performanceScreeners = [
    { name: 'Top Gainers', method: () => screener.getTopGainers() },
    { name: 'Top Losers', method: () => screener.getTopLosers() },
    { name: 'New Highs', method: () => screener.getNewHigh() },
    { name: 'New Lows', method: () => screener.getNewLow() },
    { name: 'Most Volatile', method: () => screener.getMostVolatile() },
    { name: 'Most Active', method: () => screener.getMostActive() },
  ];

  for (const { name, method } of performanceScreeners) {
    try {
      const results = await method();
      log('green', `✅ ${name}: ${results.length} stocks`);

      if (results.length > 0) {
        console.log(`  Top 5: ${results.slice(0, 5).join(', ')}`);
      }
    } catch (error) {
      log('red', `❌ Error getting ${name}: ${error}`);
    }
  }

  // 3. Technical analysis screeners
  logSubSection('Technical Analysis Screeners');

  const technicalScreeners = [
    { name: 'Oversold', method: () => screener.getOversold() },
    { name: 'Overbought', method: () => screener.getOverbought() },
    { name: 'Unusual Volume', method: () => screener.getUnusualVolume() },
    { name: 'Channel Up', method: () => screener.getChannelUp() },
    { name: 'Channel Down', method: () => screener.getChannelDown() },
    { name: 'Double Bottom', method: () => screener.getDoubleBottom() },
    { name: 'Double Top', method: () => screener.getDoubleTop() },
  ];

  for (const { name, method } of technicalScreeners) {
    try {
      const results = await method();
      log('green', `✅ ${name}: ${results.length} stocks`);

      if (results.length > 0 && results.length <= 10) {
        console.log(`  Stocks: ${results.join(', ')}`);
      } else if (results.length > 10) {
        console.log(`  Top 5: ${results.slice(0, 5).join(', ')}`);
      }
    } catch (error) {
      log('red', `❌ Error getting ${name}: ${error}`);
    }
  }

  // 4. News and events screeners
  logSubSection('News & Events Screeners');

  const newsScreeners = [
    { name: 'Major News', method: () => screener.getMajorNews() },
    { name: 'Upgrades', method: () => screener.getUpgrades() },
    { name: 'Downgrades', method: () => screener.getDowngrades() },
    { name: 'Earnings Before', method: () => screener.getEarningsBefore() },
    { name: 'Earnings After', method: () => screener.getEarningsAfter() },
    {
      name: 'Recent Insider Buying',
      method: () => screener.getRecentInsiderBuying(),
    },
    {
      name: 'Recent Insider Selling',
      method: () => screener.getRecentInsiderSelling(),
    },
  ];

  for (const { name, method } of newsScreeners) {
    try {
      const results = await method();
      log('green', `✅ ${name}: ${results.length} stocks`);

      if (results.length > 0 && results.length <= 8) {
        console.log(`  Stocks: ${results.join(', ')}`);
      } else if (results.length > 8) {
        console.log(`  Top 5: ${results.slice(0, 5).join(', ')}`);
      }
    } catch (error) {
      log('red', `❌ Error getting ${name}: ${error}`);
    }
  }
}

async function demonstrateAdvancedUsage() {
  logSection('ADVANCED USAGE EXAMPLES');

  // 1. Portfolio analysis
  logSubSection('Portfolio Analysis');
  const portfolio = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA'];

  try {
    const portfolioQuotes = await Promise.all(
      portfolio.map(async (symbol) => {
        const quote = await finviz.getQuote(symbol);
        return { symbol, quote };
      }),
    );

    log('green', `✅ Analyzed ${portfolio.length} stocks in portfolio`);

    // Calculate portfolio metrics
    const totalValue = portfolioQuotes.reduce(
      (sum, { quote }) => sum + quote.price,
      0,
    );
    const avgPE =
      portfolioQuotes.reduce((sum, { quote }) => sum + quote.pE, 0) /
      portfolioQuotes.length;
    const avgBeta =
      portfolioQuotes.reduce((sum, { quote }) => sum + quote.beta, 0) /
      portfolioQuotes.length;

    console.log('\n📊 Portfolio Summary:');
    console.log(`  Total Value: $${totalValue.toFixed(2)}`);
    console.log(`  Average P/E: ${avgPE.toFixed(2)}`);
    console.log(`  Average Beta: ${avgBeta.toFixed(2)}`);

    // Risk assessment
    const highBetaStocks = portfolioQuotes.filter(
      ({ quote }) => quote.beta > 1.5,
    );
    const lowPEStocks = portfolioQuotes.filter(({ quote }) => quote.pE < 20);

    console.log(
      `  High Beta Stocks (>1.5): ${highBetaStocks
        .map(({ symbol }) => symbol)
        .join(', ')}`,
    );
    console.log(
      `  Low P/E Stocks (<20): ${lowPEStocks
        .map(({ symbol }) => symbol)
        .join(', ')}`,
    );
  } catch (error) {
    log('red', `❌ Error in portfolio analysis: ${error}`);
  }

  // 2. Market sentiment analysis
  logSubSection('Market Sentiment Analysis');
  try {
    const [topGainers, topLosers, newHighs, newLows] = await Promise.all([
      stockScreener.default.getTopGainers(),
      stockScreener.default.getTopLosers(),
      stockScreener.default.getNewHigh(),
      stockScreener.default.getNewLow(),
    ]);

    const gainerCount = topGainers.length;
    const loserCount = topLosers.length;
    const newHighCount = newHighs.length;
    const newLowCount = newLows.length;

    log('green', '✅ Market sentiment data retrieved');

    console.log('\n📈 Market Sentiment:');
    console.log(`  Top Gainers: ${gainerCount} stocks`);
    console.log(`  Top Losers: ${loserCount} stocks`);
    console.log(`  New Highs: ${newHighCount} stocks`);
    console.log(`  New Lows: ${newLowCount} stocks`);

    // Simple sentiment score
    const sentimentScore =
      gainerCount + newHighCount - (loserCount + newLowCount);
    const sentiment =
      sentimentScore > 0
        ? 'Bullish'
        : sentimentScore < 0
        ? 'Bearish'
        : 'Neutral';

    console.log(`  Sentiment Score: ${sentimentScore} (${sentiment})`);
  } catch (error) {
    log('red', `❌ Error in sentiment analysis: ${error}`);
  }

  // 3. Custom screener combination
  logSubSection('Custom Screener Combination');
  try {
    // Find stocks that are both oversold and have unusual volume
    const [oversold, unusualVolume] = await Promise.all([
      stockScreener.default.getOversold(),
      stockScreener.default.getUnusualVolume(),
    ]);

    const oversoldSet = new Set(oversold);
    const unusualVolumeSet = new Set(unusualVolume);

    // Find intersection
    const combinedScreener = oversold.filter((symbol) =>
      unusualVolumeSet.has(symbol),
    );

    log(
      'green',
      `✅ Found ${combinedScreener.length} stocks that are both oversold and have unusual volume`,
    );

    if (combinedScreener.length > 0) {
      console.log('  Stocks: ' + combinedScreener.join(', '));
    }
  } catch (error) {
    log('red', `❌ Error in custom screener: ${error}`);
  }
}

async function main() {
  log('bright', '🚀 Starting stonksjs Comprehensive Demo');
  log(
    'yellow',
    'This demo showcases all functionality across the stonksjs ecosystem\n',
  );

  const startTime = Date.now();

  try {
    await demonstrateFinvizAPI();
    await demonstrateQuotePackage();
    await demonstrateStockScreener();
    await demonstrateAdvancedUsage();

    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;

    logSection('DEMO COMPLETED');
    log('green', `✅ All demonstrations completed successfully!`);
    log('yellow', `⏱️  Total execution time: ${duration.toFixed(2)} seconds`);

    console.log('\n📚 What you learned:');
    console.log('  • How to get individual stock quotes with detailed metrics');
    console.log('  • How to use cached quote retrieval for better performance');
    console.log('  • How to access 40+ pre-defined stock screeners');
    console.log('  • How to combine multiple screeners for advanced analysis');
    console.log('  • How to perform portfolio and sentiment analysis');

    console.log('\n🔗 Next steps:');
    console.log('  • Check out the individual package documentation');
    console.log('  • Build your own trading algorithms using these tools');
    console.log(
      '  • Combine with other financial APIs for comprehensive analysis',
    );
  } catch (error) {
    log('red', `❌ Demo failed: ${error}`);
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  log('red', `❌ Unhandled Rejection at: ${promise}, reason: ${reason}`);
  process.exit(1);
});

// Run the demo
if (require.main === module) {
  main().catch((error) => {
    log('red', `❌ Fatal error: ${error}`);
    process.exit(1);
  });
}

export { main as runDemo };
