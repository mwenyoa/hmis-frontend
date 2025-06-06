module.exports = {
    plugins: ["import"],
    rules: {
      "import/no-cycle": ["error", { maxDepth: 1 }],
    },
    settings: {
      "import/resolver": {
        typescript: {} // Ensure it works with TypeScript
      }
    }
  };
  