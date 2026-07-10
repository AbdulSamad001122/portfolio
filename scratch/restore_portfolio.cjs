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

  let stepCount = 0;
  for await (const line of rl) {
    stepCount++;
    try {
      const obj = JSON.parse(line);
      // Look for tool calls in the step
      if (obj.tool_calls) {
        obj.tool_calls.forEach(tc => {
          if (tc.name === 'default_api:replace_file_content' || tc.name === 'default_api:write_to_file' || tc.name === 'default_api:multi_replace_file_content') {
            const args = tc.args || {};
            const target = args.TargetFile || args.AbsolutePath || '';
            if (target.includes('App.tsx') || target.includes('index.html') || target.includes('App.css')) {
              console.log(`Step ${stepCount}: Tool ${tc.name} targeted ${target}`);
              console.log(`  Instruction: ${args.Instruction || args.Description || ''}`);
            }
          }
        });
      }
      // Also check tool responses if they are stored in the step
      if (obj.content && typeof obj.content === 'string' && (obj.content.includes('App.tsx') || obj.content.includes('index.html'))) {
        // Just print step index
        console.log(`Step ${stepCount} contains matching text in content`);
      }
    } catch(e) {}
  }
  console.log(`Finished scanning ${stepCount} steps.`);
}

run();
