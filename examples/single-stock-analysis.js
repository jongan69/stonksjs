#!/usr/bin/env node

/**
 * Single Stock Analysis Example
 *
 * This script demonstrates how to pull all useful data for a single stock
 * using the stonksjs ecosystem. It shows comprehensive stock analysis
 * including quotes, screeners, and market data.
 *
 * Usage: node examples/single-stock-analysis.js [SYMBOL]
 * Example: node examples/single-stock-analysis.js CAN
 */

const { quote, stockScreener } = require('@jongan69/stonksjs-core');

// Get stock symbol from command line or default to CAN
const SYMBOL = process.argv[2]?.toUpperCase() || 'CAN';

async function analyzeSingleStock(symbol) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 COMPREHENSIVE ANALYSIS FOR $${symbol}`);
  console.log(`${'='.repeat(60)}\n`);

  try {
    // 1. Get detailed quote data
    console.log('🔍 Fetching detailed quote data...');
    const quoteData = await quote.getQuote(symbol);

    if (!quoteData) {
      console.log(`❌ No quote data found for ${symbol}`);
      return;
    }

    console.log(`✅ Quote data retrieved successfully\n`);

    // Display basic quote information
    console.log('📈 BASIC QUOTE INFORMATION');
    console.log('─'.repeat(40));
    console.log(`Symbol: ${quoteData.symbol || 'N/A'}`);
    console.log(`Company: ${quoteData.company || 'N/A'}`);
    console.log(`Sector: ${quoteData.sector || 'N/A'}`);
    console.log(`Industry: ${quoteData.industry || 'N/A'}`);
    console.log(`Country: ${quoteData.country || 'N/A'}`);
    console.log(`Market Cap: ${quoteData.marketCap || 'N/A'}`);
    console.log(`P/E Ratio: ${quoteData.pe || 'N/A'}`);
    console.log(`Price: ${quoteData.price || 'N/A'}`);
    console.log(
      `Change: ${quoteData.change || 'N/A'} (${
        quoteData.changePercent || 'N/A'
      })`,
    );
    console.log(`Volume: ${quoteData.volume?.toLocaleString() || 'N/A'}`);
    console.log('');

    // Display financial metrics
    console.log('💰 FINANCIAL METRICS');
    console.log('─'.repeat(40));
    console.log(`EPS (TTM): ${quoteData.eps || 'N/A'}`);
    console.log(`EPS Growth: ${quoteData.epsGrowth || 'N/A'}`);
    console.log(`Dividend: ${quoteData.dividend || 'N/A'}`);
    console.log(`Dividend Yield: ${quoteData.dividendYield || 'N/A'}`);
    console.log(`ROE: ${quoteData.roe || 'N/A'}`);
    console.log(`ROI: ${quoteData.roi || 'N/A'}`);
    console.log(`ROA: ${quoteData.roa || 'N/A'}`);
    console.log(`Current Ratio: ${quoteData.currentRatio || 'N/A'}`);
    console.log(`Quick Ratio: ${quoteData.quickRatio || 'N/A'}`);
    console.log(`Debt/Equity: ${quoteData.debtEquity || 'N/A'}`);
    console.log('');

    // Display technical indicators
    console.log('📊 TECHNICAL INDICATORS');
    console.log('─'.repeat(40));
    console.log(`RSI (14): ${quoteData.rsi || 'N/A'}`);
    console.log(`SMA 20: ${quoteData.sma20 || 'N/A'}`);
    console.log(`SMA 50: ${quoteData.sma50 || 'N/A'}`);
    console.log(`SMA 200: ${quoteData.sma200 || 'N/A'}`);
    console.log(`52W High: ${quoteData.high52w || 'N/A'}`);
    console.log(`52W Low: ${quoteData.low52w || 'N/A'}`);
    console.log(`52W Change: ${quoteData.change52w || 'N/A'}`);
    console.log('');

    // 2. Check which screeners this stock appears in
    console.log('🔍 SCREENER ANALYSIS');
    console.log('─'.repeat(40));

    const screenerMethods = [
      {
        name: 'topgainers',
        method: () => stockScreener.default.getTopGainers(),
      },
      { name: 'toplosers', method: () => stockScreener.default.getTopLosers() },
      {
        name: 'mostvolatile',
        method: () => stockScreener.default.getMostVolatile(),
      },
      {
        name: 'mostactive',
        method: () => stockScreener.default.getMostActive(),
      },
      {
        name: 'overbought',
        method: () => stockScreener.default.getOverbought(),
      },
      { name: 'oversold', method: () => stockScreener.default.getOversold() },
      {
        name: 'unusualvolume',
        method: () => stockScreener.default.getUnusualVolume(),
      },
      { name: 'newhigh', method: () => stockScreener.default.getNewHigh() },
      { name: 'newlow', method: () => stockScreener.default.getNewLow() },
      {
        name: 'earningsbefore',
        method: () => stockScreener.default.getEarningsBefore(),
      },
      {
        name: 'earningsafter',
        method: () => stockScreener.default.getEarningsAfter(),
      },
      {
        name: 'insiderbuying',
        method: () => stockScreener.default.getRecentInsiderBuying(),
      },
      {
        name: 'insiderselling',
        method: () => stockScreener.default.getRecentInsiderSelling(),
      },
      { name: 'majornews', method: () => stockScreener.default.getMajorNews() },
      { name: 'upgrades', method: () => stockScreener.default.getUpgrades() },
      {
        name: 'downgrades',
        method: () => stockScreener.default.getDowngrades(),
      },
    ];

    const stockInScreeners = [];

    for (const screener of screenerMethods) {
      try {
        const stocks = await screener.method();
        if (stocks.includes(symbol)) {
          stockInScreeners.push(screener.name);
        }
      } catch (error) {
        // Skip screeners that fail
        continue;
      }
    }

    if (stockInScreeners.length > 0) {
      console.log(
        `✅ ${symbol} appears in ${stockInScreeners.length} screeners:`,
      );
      stockInScreeners.forEach((screener) => {
        console.log(
          `   • ${screener
            .replace(/([A-Z])/g, ' $1')
            .toLowerCase()
            .trim()}`,
        );
      });
    } else {
      console.log(
        `ℹ️  ${symbol} does not appear in any of the checked screeners`,
      );
    }
    console.log('');

    // 3. Get sector and industry analysis
    console.log('🏭 SECTOR & INDUSTRY ANALYSIS');
    console.log('─'.repeat(40));

    if (quoteData.sector && quoteData.industry) {
      console.log(`Sector: ${quoteData.sector}`);
      console.log(`Industry: ${quoteData.industry}`);

      // Try to get sector performance screeners
      try {
        const sectorScreeners = [
          'sector_technology',
          'sector_healthcare',
          'sector_financial',
          'sector_consumer_cyclical',
          'sector_industrials',
          'sector_energy',
          'sector_utilities',
          'sector_real_estate',
          'sector_communication',
          'sector_consumer_defensive',
          'sector_materials',
        ];

        const matchingSector = sectorScreeners.find((screener) =>
          screener.includes(
            quoteData.sector.toLowerCase().replace(/\s+/g, '_'),
          ),
        );

        if (matchingSector) {
          // Note: Sector screeners would need to be implemented in StockScreener class
          console.log(`Sector screener: ${matchingSector}`);
          console.log(`ℹ️  Sector screener analysis not yet implemented`);
        }
      } catch (error) {
        console.log('ℹ️  Sector screener data not available');
      }
    }
    console.log('');

    // 4. Performance analysis
    console.log('📈 PERFORMANCE ANALYSIS');
    console.log('─'.repeat(40));

    const price = parseFloat(String(quoteData.price || '0').replace('$', ''));
    const changePercent = parseFloat(
      String(quoteData.changePercent || '0').replace('%', ''),
    );

    if (price > 0) {
      console.log(`Current Price: $${price.toFixed(2)}`);
      console.log(
        `Daily Change: ${changePercent > 0 ? '+' : ''}${changePercent.toFixed(
          2,
        )}%`,
      );

      if (changePercent > 5) {
        console.log('🚀 Strong positive momentum');
      } else if (changePercent > 2) {
        console.log('📈 Positive momentum');
      } else if (changePercent < -5) {
        console.log('📉 Strong negative momentum');
      } else if (changePercent < -2) {
        console.log('📉 Negative momentum');
      } else {
        console.log('➡️  Sideways movement');
      }

      // Volume analysis
      const volume = quoteData.volume;
      if (volume) {
        if (volume > 1000000) {
          console.log('🔥 High volume activity');
        } else if (volume > 500000) {
          console.log('📊 Moderate volume');
        } else {
          console.log('📉 Low volume');
        }
      }
    }
    console.log('');

    // 5. Investment considerations
    console.log('💡 INVESTMENT CONSIDERATIONS');
    console.log('─'.repeat(40));

    const considerations = [];

    // P/E analysis
    const pe = parseFloat(quoteData.pe || '0');
    if (pe > 0) {
      if (pe < 15) {
        considerations.push('✅ Low P/E ratio - potentially undervalued');
      } else if (pe > 30) {
        considerations.push('⚠️  High P/E ratio - may be overvalued');
      } else {
        considerations.push('ℹ️  Moderate P/E ratio');
      }
    }

    // Dividend analysis
    const dividendYield = parseFloat(
      String(quoteData.dividendYield || '0').replace('%', ''),
    );
    if (dividendYield > 0) {
      if (dividendYield > 4) {
        considerations.push('💰 High dividend yield');
      } else if (dividendYield > 2) {
        considerations.push('💵 Moderate dividend yield');
      } else {
        considerations.push('💸 Low dividend yield');
      }
    }

    // Market cap analysis
    const marketCap = quoteData.marketCap;
    if (marketCap) {
      if (marketCap.includes('B')) {
        considerations.push('🏢 Large cap stock');
      } else if (marketCap.includes('M')) {
        considerations.push('🏬 Mid cap stock');
      } else {
        considerations.push('🏪 Small cap stock');
      }
    }

    // RSI analysis
    const rsi = parseFloat(String(quoteData.rsi || '0'));
    if (rsi > 0) {
      if (rsi > 70) {
        considerations.push('⚠️  Overbought (RSI > 70)');
      } else if (rsi < 30) {
        considerations.push(
          '✅ Oversold (RSI < 30) - potential buying opportunity',
        );
      } else {
        considerations.push('ℹ️  Neutral RSI levels');
      }
    }

    if (considerations.length > 0) {
      considerations.forEach((consideration) => console.log(consideration));
    } else {
      console.log('ℹ️  Limited data available for analysis');
    }
    console.log('');

    // 6. Summary
    console.log('📋 SUMMARY');
    console.log('─'.repeat(40));
    console.log(`Stock: ${symbol} (${quoteData.company || 'N/A'})`);
    console.log(
      `Price: ${quoteData.price || 'N/A'} (${
        quoteData.changePercent || 'N/A'
      })`,
    );
    console.log(`Market Cap: ${quoteData.marketCap || 'N/A'}`);
    console.log(`Sector: ${quoteData.sector || 'N/A'}`);
    console.log(`Appears in ${stockInScreeners.length} screeners`);
    console.log(`Analysis completed at: ${new Date().toLocaleString()}`);
  } catch (error) {
    console.error(`❌ Error analyzing ${symbol}:`, error.message);
  }
}

// Run the analysis
analyzeSingleStock(SYMBOL);
