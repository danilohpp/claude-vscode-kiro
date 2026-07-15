/**
 * Claude Code + VS Code + Kiro Integration
 * Entry point for the application
 */

import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('🚀 Claude Code + VS Code + Kiro');
console.log(`Environment: ${process.env.NODE_ENV}`);
console.log(`Kiro API: ${process.env.KIRO_API_URL}`);
console.log(`Debug: ${process.env.DEBUG}`);

// Your application code here
export default {
  name: 'claude-vscode-kiro',
  version: '1.1.0',
  ready: true,
};
