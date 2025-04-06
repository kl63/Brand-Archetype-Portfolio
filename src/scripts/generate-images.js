// This script uses Replicate to generate images for the portfolio site
const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

// Ensure the public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Helper function to download an image
async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded image to ${filepath}`);
        resolve(filepath);
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

// Generate an image using Replicate via the Smithery CLI
async function generateImage(prompt, outputPath) {
  try {
    console.log(`Generating image for: "${prompt}"`);
    
    // Use the Smithery CLI to run the Replicate model
    const command = `npx -y @smithery/cli@latest run @awkoy/replicate-flux-mcp --client windsurf --input '{"prompt": "${prompt}", "width": 1024, "height": 768, "model": "stability-ai/sdxl"}'`;
    
    // Execute the command and get the output
    const output = execSync(command).toString();
    
    // Parse the JSON output to get the image URL
    const result = JSON.parse(output);
    const imageUrl = result.output[0];
    
    if (imageUrl) {
      // Download the image
      await downloadImage(imageUrl, outputPath);
      console.log(`Image saved to ${outputPath}`);
    } else {
      console.error('No image URL returned from Replicate');
    }
  } catch (error) {
    console.error(`Error generating image: ${error.message}`);
  }
}

// Generate all the images for the portfolio
async function generateAllImages() {
  try {
    // Project images
    const projectPrompts = [
      "A modern AI media generator dashboard with creative visuals and a sleek interface, dark theme with blue and purple gradients, high quality, photorealistic",
      "A creative portfolio website with animations and interactive elements, dark theme with blue accents, showing a design portfolio, high quality, photorealistic",
      "A brand archetype engine interface showing personality traits and visual identity elements, dark futuristic theme with glowing elements, high quality, photorealistic"
    ];

    for (let i = 0; i < projectPrompts.length; i++) {
      const outputPath = path.join(publicDir, `project-${i+1}.jpg`);
      await generateImage(projectPrompts[i], outputPath);
    }

    // Hero background image
    const heroPrompt = "Abstract digital art with flowing shapes and gradients in blue and purple on black background, minimalist, elegant, for website hero section, high quality";
    const heroOutputPath = path.join(publicDir, 'hero-bg.jpg');
    await generateImage(heroPrompt, heroOutputPath);

    console.log('All images generated successfully!');
  } catch (error) {
    console.error('Error in image generation process:', error);
  }
}

// Run the image generation
generateAllImages();
