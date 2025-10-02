#!/bin/bash

# stonksjs Comprehensive Demo Runner
# This script helps you run the comprehensive demo examples

echo "🚀 stonksjs Comprehensive Demo Runner"
echo "====================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the stonksjs root directory"
    echo "   cd /path/to/stonksjs && ./examples/run-demo.sh"
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Check if project is built
if [ ! -d "packages/core/dist" ]; then
    echo "🔨 Building project..."
    npm run build
    echo ""
fi

echo "Choose your demo version:"
echo "1) TypeScript/ESM version (comprehensive-demo.ts)"
echo "2) JavaScript/CommonJS version (comprehensive-demo.js)"
echo "3) Both versions"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Running TypeScript demo..."
        echo "=============================="
        npx ts-node examples/comprehensive-demo.ts
        ;;
    2)
        echo ""
        echo "🚀 Running JavaScript demo..."
        echo "=============================="
        node examples/comprehensive-demo.js
        ;;
    3)
        echo ""
        echo "🚀 Running TypeScript demo..."
        echo "=============================="
        npx ts-node examples/comprehensive-demo.ts
        echo ""
        echo "🚀 Running JavaScript demo..."
        echo "=============================="
        node examples/comprehensive-demo.js
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again and choose 1, 2, or 3."
        exit 1
        ;;
esac

echo ""
echo "✅ Demo completed!"
echo ""
echo "📚 Next steps:"
echo "  • Check out the examples/README.md for more information"
echo "  • Explore individual package examples in packages/*/examples/"
echo "  • Build your own trading algorithms using these tools"
