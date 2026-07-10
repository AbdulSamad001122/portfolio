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
      // Check if this step is a tool response for view_file on App.tsx
      if (obj.tool_calls) {
        obj.tool_calls.forEach(tc => {
          if (tc.name === 'view_file' && tc.args && tc.args.AbsolutePath && tc.args.AbsolutePath.includes('App.tsx')) {
            console.log(`Step ${stepCount}: view_file tool call args:`, tc.args);
          }
        });
      }
      
      // Let's search inside obj.content or other response fields
      if (obj.content && typeof obj.content === 'string') {
        if (obj.content.includes('import PortfolioGrid') && obj.content.includes('ExperienceTimeline') && obj.content.includes('export default App')) {
          console.log(`Step ${stepCount} contains FULL App.tsx content! Length: ${obj.content.length}`);
          // Let's write this content to a temporary file so we can inspect it
          fs.writeFileSync(`e:\\potfolio\\scratch\\recovered_app_step_${stepCount}.txt`, obj.content);
        }
        if (obj.content.includes('Compo Capital Advisors') && obj.content.includes('index.html')) {
          console.log(`Step ${stepCount} contains index.html content`);
        }
      }
    } catch(e) {}
  }
}

run();
