// Simple test to check if data.ts can be imported
try {
  const { content } = require('./lib/data.ts');
  console.log('✅ Data import successful');
  console.log('Available sections:', Object.keys(content));
} catch (error) {
  console.error('❌ Data import failed:', error.message);
}