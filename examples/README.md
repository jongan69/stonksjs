# StonksJS Examples

This directory contains comprehensive examples demonstrating how to use the
stonksjs ecosystem for stock analysis and screening.

## 📁 Available Examples

### 1. Comprehensive Demo (`comprehensive-demo.js` & `comprehensive-demo.ts`)

**Purpose**: Demonstrates all functionality across the stonksjs ecosystem

- 📊 Stock quote retrieval with detailed metrics
- 🔍 40+ pre-defined stock screeners
- 💾 Cached quote data for better performance
- 🚀 Advanced portfolio and sentiment analysis

**Usage**:

```bash
# JavaScript version
node examples/comprehensive-demo.js

# TypeScript version
npx ts-node examples/comprehensive-demo.ts
```

### 2. Single Stock Analysis (`single-stock-analysis.js` & `single-stock-analysis.ts`)

**Purpose**: Comprehensive analysis of a single stock

- 📈 Detailed quote information and financial metrics
- 📊 Technical indicators and performance analysis
- 🔍 Screener analysis (which screeners the stock appears in)
- 🏭 Sector and industry analysis
- 💡 Investment considerations and recommendations

**Usage**:

```bash
# JavaScript version
node examples/single-stock-analysis.js [SYMBOL]

# TypeScript version
npx ts-node examples/single-stock-analysis.ts [SYMBOL]

# Examples
node examples/single-stock-analysis.js AAPL
node examples/single-stock-analysis.js TSLA
node examples/single-stock-analysis.js CAN
```

### 3. Easy-to-Use Shell Script (`analyze-stock.sh`)

**Purpose**: Simple command-line interface for single stock analysis

**Usage**:

```bash
# Make executable (first time only)
chmod +x examples/analyze-stock.sh

# Analyze any stock
./examples/analyze-stock.sh [SYMBOL]

# Examples
./examples/analyze-stock.sh AAPL
./examples/analyze-stock.sh TSLA
./examples/analyze-stock.sh CAN
```

## 🚀 Quick Start

### Option 1: Run the Interactive Demo

```bash
# Run the comprehensive demo showing all features
node examples/comprehensive-demo.js
```

### Option 2: Analyze a Specific Stock

```bash
# Analyze Apple stock
node examples/single-stock-analysis.js AAPL

# Or use the shell script
./examples/analyze-stock.sh AAPL
```

## 📊 What You'll Get

### Comprehensive Demo Output

- **33 different stock screeners** with real-time data
- **Performance-based screeners** (top gainers, losers, most volatile)
- **Fundamental screeners** (undervalued, overvalued, high growth)
- **Technical screeners** (overbought, oversold, unusual volume)
- **News & events screeners** (earnings, insider trading, upgrades)
- **Sector-specific screeners** (technology, healthcare, financial, etc.)

### Single Stock Analysis Output

- **Basic Information**: Symbol, company, sector, industry, market cap
- **Financial Metrics**: P/E ratio, EPS, ROE, ROA, debt/equity, current ratio
- **Technical Indicators**: RSI, SMA (20/50/200), 52-week high/low
- **Performance Analysis**: Price movement, volume analysis, momentum
- **Screener Analysis**: Which screeners the stock appears in
- **Investment Considerations**: Valuation analysis, dividend yield, market cap
  classification

## 🔧 Prerequisites

- Node.js 18.14.0 or higher
- npm or bun package manager
- Internet connection (for real-time data from Finviz)

## 📦 Installation

```bash
# Install dependencies
npm install

# Build all packages
npm run build
```

## 🎯 Example Output

### Single Stock Analysis for AAPL

```
============================================================
📊 COMPREHENSIVE ANALYSIS FOR $AAPL
============================================================

📈 BASIC QUOTE INFORMATION
────────────────────────────────────────
Symbol: AAPL
Company: Apple Inc.
Sector: Technology
Industry: Consumer Electronics
Market Cap: 3790.98B
P/E Ratio: 28.45
Price: $255.45
Change: +0.32%
Volume: 48,713,940

💰 FINANCIAL METRICS
────────────────────────────────────────
EPS (TTM): 8.97
ROE: 149.81%
ROA: 29.94%
Current Ratio: 0.87
Quick Ratio: 0.83

📊 TECHNICAL INDICATORS
────────────────────────────────────────
RSI (14): 65.2
SMA 20: 4.70%
SMA 50: 10.59%
SMA 200: 15.02%

🔍 SCREENER ANALYSIS
────────────────────────────────────────
✅ AAPL appears in 3 screeners:
   • large cap
   • technology
   • high volume

💡 INVESTMENT CONSIDERATIONS
────────────────────────────────────────
🏢 Large cap stock
ℹ️  Moderate P/E ratio
ℹ️  Neutral RSI levels
```

## 🛠️ Customization

You can easily modify these examples to:

- Add more screeners to check
- Include additional financial metrics
- Customize the analysis criteria
- Add more technical indicators
- Integrate with other data sources

## 📝 Notes

- All examples use real-time data from Finviz
- Rate limiting is built-in to respect Finviz's servers
- Data is cached for better performance
- Examples handle missing data gracefully
- Both JavaScript and TypeScript versions are available

## 🤝 Contributing

Feel free to submit issues or pull requests to improve these examples or add new
ones!
