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
          const name = tc.name || '';
          if (name === 'write_to_file' || name === 'replace_file_content' || name === 'multi_replace_file_content') {
            const args = tc.args || {};
            const target = args.TargetFile || args.AbsolutePath || '';
            if (target.includes('App.tsx') || target.includes('index.html') || target.includes('index.css') || target.includes('App.css')) {
              console.log(`Step ${stepCount}: Tool ${name} targeted ${target}`);
              console.log(`  Description: ${args.Description || args.Instruction || ''}`);
              if (args.CodeContent) {
                console.log(`  CodeContent Length: ${args.CodeContent.length}`);
              }
              if (args.ReplacementContent) {
                console.log(`  ReplacementContent Length: ${args.ReplacementContent.length}`);
              }
            }
          }
        });
      }
    } catch(e) {}
  }
}

run();
