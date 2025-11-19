#!/bin/bash

PROCESS_NAME='zyka_landing'
LOG_DIR="logs"
LOG_FILE="$LOG_DIR/deploy.log"
BUILD_DIR=".next"

# Create logs directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Start logging
echo "🚀 Starting deployment for '$PROCESS_NAME'..." | tee "$LOG_FILE"

# Install dependencies if node_modules doesn't exist
if [ ! -d 'node_modules' ]; then
  echo "📦 Installing dependencies..." | tee -a "$LOG_FILE"
  if ! npm install >> "$LOG_FILE" 2>&1; then
    echo "❌ Dependency installation failed! Check logs for details." | tee -a "$LOG_FILE"
    exit 1
  fi
fi

# Check if dist directory exists for zero-downtime deployment
if [ ! -d "$BUILD_DIR" ]; then
  echo "📂 Build directory not found, creating fresh build..." | tee -a "$LOG_FILE"

  if ! npm run build >> "$LOG_FILE" 2>&1; then
    echo "❌ Build failed! Check logs for details." | tee -a "$LOG_FILE"
    exit 1
  fi

  echo "🔄 Starting application with PM2..." | tee -a "$LOG_FILE"
  pm2 delete $PROCESS_NAME >> "$LOG_FILE" 2>&1 || true

  if ! pm2 start ecosystem.config.cjs --env production >> "$LOG_FILE" 2>&1; then
    echo "❌ Failed to start PM2 process." | tee -a "$LOG_FILE"
    exit 1
  fi

  echo "✅ Deployment completed successfully!" | tee -a "$LOG_FILE"
  exit 0
fi

# Create temp directory for new build
TEMP_BUILD_DIR="temp_build"
echo "📁 Creating temporary build directory..." | tee -a "$LOG_FILE"
if ! mkdir -p "$TEMP_BUILD_DIR" >> "$LOG_FILE" 2>&1; then
  echo "❌ Failed to create temp build directory" | tee -a "$LOG_FILE"
  exit 1
fi

echo "🛠️  Building application..." | tee -a "$LOG_FILE"
if ! npm run build >> "$LOG_FILE" 2>&1; then
  echo "❌ Build failed! Check logs for details." | tee -a "$LOG_FILE"
  # Clean up temp directory on failure
  rm -rf "$TEMP_BUILD_DIR" >> "$LOG_FILE" 2>&1 || true
  exit 1
fi

# Move new build to temp directory
echo "📦 Moving build to temp directory..." | tee -a "$LOG_FILE"
if ! mv "$BUILD_DIR" "$TEMP_BUILD_DIR/" >> "$LOG_FILE" 2>&1; then
  echo "❌ Failed to move build to temp directory" | tee -a "$LOG_FILE"
  rm -rf "$TEMP_BUILD_DIR" >> "$LOG_FILE" 2>&1 || true
  exit 1
fi

# Swap directories for zero-downtime deployment
echo "🔄 Swapping build directories..." | tee -a "$LOG_FILE"
if ! mv "$TEMP_BUILD_DIR/$BUILD_DIR" "$BUILD_DIR" >> "$LOG_FILE" 2>&1; then
  echo "❌ Failed to swap build directories" | tee -a "$LOG_FILE"
  # Attempt to restore original build
  mv "$TEMP_BUILD_DIR/$BUILD_DIR" "$BUILD_DIR" >> "$LOG_FILE" 2>&1 || true
  rm -rf "$TEMP_BUILD_DIR" >> "$LOG_FILE" 2>&1 || true
  exit 1
fi

# Clean up temp directory
rm -rf "$TEMP_BUILD_DIR" >> "$LOG_FILE" 2>&1 || true

# Reload or start PM2 process
echo "🔄 Updating PM2 process..." | tee -a "$LOG_FILE"
if pm2 list | grep -q "$PROCESS_NAME"; then
  if ! pm2 reload $PROCESS_NAME --update-env >> "$LOG_FILE" 2>&1 && ! pm2 reset $PROCESS_NAME >> "$LOG_FILE" 2>&1; then
    echo "❌ Failed to reload PM2 process" | tee -a "$LOG_FILE"
    exit 1
  fi
else
  if ! pm2 start ecosystem.config.cjs --env production >> "$LOG_FILE" 2>&1; then
    echo "❌ Failed to start PM2 process" | tee -a "$LOG_FILE"
    exit 1
  fi
fi

# Save PM2 state
pm2 save >> "$LOG_FILE" 2>&1
echo "💾 PM2 process list saved." | tee -a "$LOG_FILE"

echo "✅ Deployment completed successfully for $PROCESS_NAME!" | tee -a "$LOG_FILE"
echo "📜 Check logs with: pm2 logs $PROCESS_NAME"
echo "🌐 Application should be available at the configured port"
