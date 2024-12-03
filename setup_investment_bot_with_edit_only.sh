#!/bin/bash

# Update and Upgrade the System
echo "Updating and upgrading the system..."
sudo apt update && sudo apt upgrade -y

# Set Timezone to IST
echo "Setting system timezone to IST..."
sudo timedatectl set-timezone Asia/Kolkata

# Confirm the timezone change
echo "Current system time and timezone:"
timedatectl

# Install necessary tools and Python 3.10 with pip
echo "Installing Python 3.10 and pip..."
sudo apt install -y software-properties-common
sudo apt install -y python3-pip

# Set up the project directory
BOT_DIR="/root/BINANCE_SPOT_INVESTMENT"
echo "Setting up the project directory..."
mkdir -p $BOT_DIR
cd $BOT_DIR

# Download the bot script tarball
echo "Downloading bot script..."
curl -L -o BINANCE_SPOT_INVESTMENT.v1.tar.gz https://github.com/bindmisson/Crypto-Bot/raw/master/BINANCE_SPOT_INVESTMENT.v1.tar.gz

# Extract the tarball
echo "Extracting bot script..."
tar -xzvf BINANCE_SPOT_INVESTMENT.v1.tar.gz

# Check if nested directory exists and move files to $BOT_DIR
if [ -d "$BOT_DIR/BINANCE_SPOT_INVESTMENT" ]; then
    echo "Found nested BINANCE_SPOT_INVESTMENT directory. Moving contents..."
    mv $BOT_DIR/BINANCE_SPOT_INVESTMENT/* $BOT_DIR/
    rm -rf $BOT_DIR/BINANCE_SPOT_INVESTMENT
fi

# Create requirements.txt with the specified dependencies
echo "Creating requirements.txt..."
cat > requirements.txt <<EOL
binance
ccxt
flask
numpy
pandas
requests
schedule
EOL

# Install Python dependencies
echo "Installing Python dependencies..."
pip3 install -r requirements.txt

# Locate the config.json file
CONFIG_FILE="$BOT_DIR/config.json"
if [ ! -f "$CONFIG_FILE" ]; then
    echo "Error: config.json file not found in $BOT_DIR!"
    exit 1
fi

echo "config.json file found at $CONFIG_FILE."
read -p "Do you want to edit the config.json file? (yes/no): " EDIT_CHOICE
if [ "$EDIT_CHOICE" = "yes" ]; then
    nano "$CONFIG_FILE"
else
    echo "Skipping config.json editing."
fi

# Create a systemd service file
SERVICE_FILE="/etc/systemd/system/investment_bot.service"
echo "Creating systemd service..."
sudo bash -c "cat > $SERVICE_FILE" <<EOL
[Unit]
Description=Investment Bot
After=network.target

[Service]
ExecStart=/usr/bin/python3 $BOT_DIR/bitcoin.py
WorkingDirectory=$BOT_DIR
Restart=always

[Install]
WantedBy=multi-user.target
EOL

# Enable and start the service
echo "Enabling and starting the service..."
sudo systemctl daemon-reload
sudo systemctl enable investment_bot.service
sudo systemctl start investment_bot.service

# Verify the service status
echo "Checking service status..."
sudo systemctl status investment_bot.service

echo "Setup and deployment completed successfully!"
