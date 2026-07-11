const fs = require('fs');
const path = require('path');

// 1. Move/Rename unused_components to src/components
console.log('Restoring components folder...');
const unusedPath = 'e:\\potfolio\\unused_components';
const componentsPath = 'e:\\potfolio\\src\\components';

if (fs.existsSync(unusedPath)) {
  // If src/components already exists, delete it first
  if (fs.existsSync(componentsPath)) {
    console.log('src/components already exists, deleting it to overwrite...');
    fs.rmSync(componentsPath, { recursive: true, force: true });
  }
  fs.renameSync(unusedPath, componentsPath);
  console.log('Successfully moved unused_components to src/components!');
} else {
  console.log('unused_components directory not found or already moved.');
}

// 2. Recreate index.css
console.log('Restoring src/index.css...');
const originalCss = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
@import "tailwindcss";

@theme {
  --color-primary-gray: hsl(180, 8%, 98%);
  --color-card-white: hsl(0, 0%, 100%);
  --color-accent-green: hsl(160, 100%, 26%);
  --color-accent-green-light: hsl(152, 90%, 94%);
  --color-text-primary-navy: hsl(218, 76%, 15%);
  --color-text-secondary-gray: hsl(218, 15%, 45%);
  --color-border-light-gray: hsl(220, 10%, 89%);
  --color-grid-line-gray: hsl(220, 13%, 93%);
  
  --font-sans: "Plus Jakarta Sans", "Inter", sans-serif;
  --font-accent: "Outfit", sans-serif;
}

body {
  background-color: var(--color-primary-gray);
  color: var(--color-text-primary-navy);
  font-family: var(--font-sans);
  overflow-x: hidden;
  margin: 0;
}

/* Scrolling marquee animations */
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-scroll-left {
  animation: scroll-left 35s linear infinite;
}

.animate-scroll-right {
  animation: scroll-right 35s linear infinite;
}

/* Rotating badge keyframe */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-primary-gray);
}
::-webkit-scrollbar-thumb {
  background: var(--color-border-light-gray);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-secondary-gray);
}
`;

fs.writeFileSync('e:\\potfolio\\src\\index.css', originalCss);
console.log('src/index.css written successfully!');

// 3. Recreate index.html
console.log('Restoring index.html...');
const originalHtml = `<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22%23008552%22/><circle cx=%2250%22 cy=%2250%22 r=%2216%22 fill=%22%23FFFFFF%22/></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>Abdul Samad | Full Stack Developer</title>
    <meta name="description" content="Portfolio of Abdul Samad, a developer from Karachi, Pakistan, building high-performance products." />
    
    <!-- Google Fonts Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  </head>
  <body class="bg-primary-gray antialiased text-text-primary-navy">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

fs.writeFileSync('e:\\potfolio\\index.html', originalHtml);
console.log('index.html written successfully!');

// 4. Recover App.tsx from recovered txt file and strip line numbers
console.log('Restoring and patching src/App.tsx...');
const recoveredTxtPath = 'e:\\potfolio\\scratch\\recovered_app_step_1044.txt';
if (fs.existsSync(recoveredTxtPath)) {
  const lines = fs.readFileSync(recoveredTxtPath, 'utf8').split('\n');
  const codeLines = [];
  
  // We need to parse each line and strip the line number prefix (e.g. "8: 1: import ...")
  lines.forEach(line => {
    // Check if the line has the pattern "xx: yy: ..." (which is line number in the JSON log)
    // The format in the text file is: "8: 1: import { useLayoutEffect, ..."
    // Let's strip the prefix using a regex match
    const match = line.match(/^\d+:\s+\d+:\s*(.*)/);
    if (match) {
      codeLines.push(match[1]);
    } else {
      // Try single match just in case
      const match2 = line.match(/^\d+:\s*(.*)/);
      if (match2 && !line.includes('Created At') && !line.includes('Completed At') && !line.includes('File Path') && !line.includes('Total Lines') && !line.includes('Total Bytes') && !line.includes('Showing lines') && !line.includes('The following code')) {
        codeLines.push(match2[1]);
      }
    }
  });
  
  let appCode = codeLines.join('\n');
  
  // Apply final modifications
  // - Replace SocialProof with TechMarquee
  appCode = appCode.replace("import SocialProof from './components/SocialProof';", "import TechMarquee from './components/TechMarquee';");
  // - Remove LatestBlogs import
  appCode = appCode.replace("import LatestBlogs from './components/LatestBlogs';\n", "");
  appCode = appCode.replace("import LatestBlogs from './components/LatestBlogs';", "");
  
  // - Update layout order:
  //   <Navbar />
  //   <Hero />
  //   <AboutMe />
  //   <PortfolioGrid />
  //   <TweetsSection />
  //   <LatestBlogs />
  //   <SocialProof />
  //   <Tools />
  //   <ExperienceTimeline />
  //   <Footer />
  // to:
  //   <Navbar />
  //   <Hero />
  //   <AboutMe />
  //   <PortfolioGrid />
  //   <Tools />
  //   <ExperienceTimeline />
  //   <TechMarquee />
  //   <TweetsSection />
  //   <Footer />
  
  const targetRenderBlock = `        <Navbar />
        <Hero />
        <AboutMe />
        <PortfolioGrid />
        <TweetsSection />
        <LatestBlogs />
        <SocialProof />
        <Tools />
        <ExperienceTimeline />
        <Footer />`;
        
  const correctRenderBlock = `        <Navbar />
        <Hero />
        <AboutMe />
        <PortfolioGrid />
        <Tools />
        <ExperienceTimeline />
        <TechMarquee />
        <TweetsSection />
        <Footer />`;
        
  // Let's check if it matches, otherwise we can do a more robust replacement
  if (appCode.includes('<SocialProof />')) {
    appCode = appCode.replace('<SocialProof />', '<TechMarquee />');
  }
  if (appCode.includes('<LatestBlogs />')) {
    appCode = appCode.replace('<LatestBlogs />\r\n', '');
    appCode = appCode.replace('<LatestBlogs />\n', '');
    appCode = appCode.replace('<LatestBlogs />', '');
  }
  
  // Let's make sure overflow-x-hidden is removed from App wrapper:
  appCode = appCode.replace('className="relative min-h-screen bg-primary-gray overflow-x-hidden font-sans text-text-primary-navy"', 'className="relative min-h-screen bg-primary-gray font-sans text-text-primary-navy"');

  // Let's enforce the correct layout section sequence:
  const sectionSequenceSearch = `        <Navbar />
        <Hero />
        <AboutMe />
        <PortfolioGrid />
        <TweetsSection />
        <TechMarquee />
        <Tools />
        <ExperienceTimeline />
        <Footer />`;
        
  const finalSequence = `        <Navbar />
        <Hero />
        <AboutMe />
        <PortfolioGrid />
        <Tools />
        <ExperienceTimeline />
        <TechMarquee />
        <TweetsSection />
        <Footer />`;
        
  appCode = appCode.replace(sectionSequenceSearch, finalSequence);
  
  // Let's write the recovered App.tsx back to src/App.tsx
  fs.writeFileSync('e:\\potfolio\\src\\App.tsx', appCode);
  console.log('src/App.tsx successfully recovered and patched!');
} else {
  console.error('Recovered txt file not found at:', recoveredTxtPath);
}

// 5. Clean up App.css, founder.png, logo.png (they were COMPO specific)
console.log('Cleaning up COMPO specific files from src/...');
const filesToCleanup = [
  'e:\\potfolio\\src\\App.css',
  'e:\\potfolio\\src\\founder.png',
  'e:\\potfolio\\src\\logo.png'
];
filesToCleanup.forEach(f => {
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
    console.log(`Cleaned up: ${f}`);
  }
});

console.log('All files restored successfully!');
