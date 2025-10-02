#!/bin/bash

# Serve documentation locally for development
# This script builds the docs and serves them locally

set -e

echo "🚀 Building and serving stonksjs documentation locally..."

# Get the directory of this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Change to project directory
cd "$PROJECT_DIR"

echo "📁 Project directory: $PROJECT_DIR"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed or not in PATH"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build packages
echo "🔨 Building packages..."
npm run build

# Generate documentation
echo "📚 Generating documentation..."
npm run docs

# Create custom index page
echo "🎨 Creating custom index page..."
cat > docs/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@jongan69/stonksjs - Documentation</title>
    <link rel="stylesheet" href="assets/style.css">
    <link rel="stylesheet" href="assets/highlight.css">
    <link rel="stylesheet" href="assets/custom.css">
</head>
<body>
    <div class="container">
        <header>
            <img src="assets/logo.svg" alt="stonksjs" class="logo">
            <h1>@jongan69/stonksjs</h1>
            <p class="subtitle">Reliable algotrading utilities written in node</p>
        </header>
        
        <main>
            <section class="hero">
                <h2>📊 Comprehensive Stock Analysis Tools</h2>
                <p>Access real-time stock data, screeners, and financial metrics through our powerful Node.js ecosystem.</p>
            </section>

            <section class="packages">
                <h2>📦 Available Packages</h2>
                <div class="package-grid">
                    <div class="package-card">
                        <h3>@jongan69/stonksjs-core</h3>
                        <p>Single point of entry for all stonksjs packages</p>
                        <a href="modules/_stonksjs_core.html" class="btn">View API</a>
                    </div>
                    <div class="package-card">
                        <h3>@jongan69/stonksjs-finviz</h3>
                        <p>Unofficial Finviz API for stock data</p>
                        <a href="modules/_stonksjs_finviz.html" class="btn">View API</a>
                    </div>
                    <div class="package-card">
                        <h3>@jongan69/stonksjs-quote</h3>
                        <p>Detailed, real-time stock quote data</p>
                        <a href="modules/_stonksjs_quote.html" class="btn">View API</a>
                    </div>
                    <div class="package-card">
                        <h3>@jongan69/stonksjs-stock-screener</h3>
                        <p>Pre-defined industry standard stock screeners</p>
                        <a href="modules/_stonksjs_stock_screener.html" class="btn">View API</a>
                    </div>
                </div>
            </section>

            <section class="quick-start">
                <h2>🚀 Quick Start</h2>
                <div class="code-block">
                    <pre><code>npm install @jongan69/stonksjs-core

# JavaScript
const { finviz, quote, stockScreener } = require('@jongan69/stonksjs-core');

# TypeScript
import { finviz, quote, stockScreener } from '@jongan69/stonksjs-core';</code></pre>
                </div>
            </section>

            <section class="examples">
                <h2>📚 Examples</h2>
                <div class="example-links">
                    <a href="https://github.com/jongan69/stonksjs/tree/main/examples" class="btn btn-secondary">
                        📊 Comprehensive Demo
                    </a>
                    <a href="https://github.com/jongan69/stonksjs/tree/main/examples" class="btn btn-secondary">
                        🔍 Single Stock Analysis
                    </a>
                </div>
            </section>

            <section class="features">
                <h2>✨ Features</h2>
                <ul class="feature-list">
                    <li>📈 Real-time stock quotes and financial data</li>
                    <li>🔍 40+ pre-defined stock screeners</li>
                    <li>📊 Technical indicators and analysis</li>
                    <li>🏭 Sector and industry analysis</li>
                    <li>💾 Cached data for better performance</li>
                    <li>🚀 TypeScript support</li>
                    <li>📱 Cross-platform compatibility</li>
                </ul>
            </section>
        </main>

        <footer>
            <p>Built with ❤️ by <a href="https://github.com/jongan69">@jongan69</a></p>
            <p>
                <a href="https://github.com/jongan69/stonksjs">GitHub</a> |
                <a href="https://www.npmjs.com/org/jongan69">npm</a> |
                <a href="https://github.com/jongan69/stonksjs/issues">Issues</a>
            </p>
        </footer>
    </div>
</body>
</html>
EOF

# Check if serve is available
if command -v serve &> /dev/null; then
    echo "🌐 Starting local server..."
    echo "📖 Documentation available at: http://localhost:3000"
    echo "🛑 Press Ctrl+C to stop the server"
    serve docs -p 3000
elif command -v python3 &> /dev/null; then
    echo "🌐 Starting Python HTTP server..."
    echo "📖 Documentation available at: http://localhost:8000"
    echo "🛑 Press Ctrl+C to stop the server"
    cd docs && python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "🌐 Starting Python HTTP server..."
    echo "📖 Documentation available at: http://localhost:8000"
    echo "🛑 Press Ctrl+C to stop the server"
    cd docs && python -m SimpleHTTPServer 8000
else
    echo "✅ Documentation built successfully!"
    echo "📁 Open docs/index.html in your browser to view the documentation"
    echo "💡 Tip: Install 'serve' for a better local development experience:"
    echo "   npm install -g serve"
    echo "   Then run: serve docs"
fi
