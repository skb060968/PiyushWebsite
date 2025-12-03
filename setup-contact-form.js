#!/usr/bin/env node

/**
 * Contact Form Setup Script
 * Run this script to easily configure your contact form with Web3Forms
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🎯 Contact Form Setup for Piyush Bholla Fashion Website\n');
console.log('This script will help you configure Web3Forms for your contact form.\n');

console.log('📋 Steps to get your Web3Forms access key:');
console.log('1. Go to https://web3forms.com');
console.log('2. Click "Get Started Free"');
console.log('3. Enter your email address');
console.log('4. Verify your email');
console.log('5. Copy your Access Key\n');

rl.question('Enter your Web3Forms Access Key: ', (accessKey) => {
  if (!accessKey || accessKey.trim() === '') {
    console.log('❌ No access key provided. Exiting...');
    rl.close();
    return;
  }

  const contactPagePath = path.join(__dirname, 'app', 'contact', 'page.tsx');
  
  try {
    let content = fs.readFileSync(contactPagePath, 'utf8');
    
    // Replace the placeholder access key
    content = content.replace(
      'YOUR_WEB3FORMS_ACCESS_KEY',
      accessKey.trim()
    );
    
    fs.writeFileSync(contactPagePath, content);
    
    console.log('\n✅ Contact form configured successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Commit and push your changes');
    console.log('2. Wait for deployment');
    console.log('3. Test the contact form on your live site');
    console.log('\n🎉 Your contact form is now functional!');
    
  } catch (error) {
    console.log('❌ Error updating contact form:', error.message);
  }
  
  rl.close();
});