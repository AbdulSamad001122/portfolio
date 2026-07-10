const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logFile = 'C:\\Users\\Abdul Samad\\.gemini\\antigravity\\brain\\090c8b91-291b-4c36-9853-15dfe1a645fc\\.system_generated\\logs\\transcript_full.jsonl';

async function run() {
  const fileStream = fs.createReadStream(logFile);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lines = [];
  for await (const line of rl) {
    lines.push(line);
    if (lines.length > 5) {
      lines.shift();
    }
  }

  lines.forEach((line, idx) => {
    try {
      const obj = JSON.parse(line);
      console.log(`Step index: ${obj.step_index}`);
      console.log(`Type: ${obj.type}`);
      if (obj.tool_calls) {
        console.log('Tool calls keys:', obj.tool_calls.map(tc => tc.name || tc.toolName));
        console.log('First tool call:', JSON.stringify(obj.tool_calls[0], null, 2));
      }
    } catch (e) {}
  });
}

run();
