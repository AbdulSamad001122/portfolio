const fs = require('fs');
const readline = require('readline');

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
      if (obj.tool_calls) {
        obj.tool_calls.forEach(tc => {
          if (tc.name === 'write_to_file' && tc.args && tc.args.TargetFile && tc.args.TargetFile.includes('index.html')) {
            console.log(`Step ${stepCount}: write_to_file on index.html:`);
            console.log(tc.args.CodeContent);
          }
        });
      }
    } catch(e) {}
  }
}

run();
