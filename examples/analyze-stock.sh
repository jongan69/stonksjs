#!/bin/bash

# Single Stock Analysis Script
# 
# This script provides an easy way to analyze a single stock using stonksjs
# 
# Usage: ./examples/analyze-stock.sh [SYMBOL]
# Example: ./examples/analyze-stock.sh CAN

# Get the directory of this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Get stock symbol from command line or default to CAN
SYMBOL=${1:-CAN}

echo "🚀 Starting comprehensive analysis for $SYMBOL..."
echo "📁 Project directory: $PROJECT_DIR"
echo ""

# Change to project directory
cd "$PROJECT_DIR"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed or not in PATH"
    exit 1
fi

# Check if the example file exists
if [ ! -f "examples/single-stock-analysis.js" ]; then
    echo "❌ Example file not found: examples/single-stock-analysis.js"
    exit 1
fi

# Run the analysis
echo "🔍 Running stock analysis..."
node examples/single-stock-analysis.js "$SYMBOL"

# Check exit code
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Analysis completed successfully!"
else
    echo ""
    echo "❌ Analysis failed with errors"
    exit 1
fi
