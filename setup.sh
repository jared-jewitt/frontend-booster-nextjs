# Setup client host
if [ -n "$(grep client /etc/hosts)" ]
 then
  echo "client host already exists"
else
  sudo -- sh -c -e "echo 127.0.0.1'\t'client >> /etc/hosts";
fi

# Create .env.production.local file
cat > .env.production.local << EOF
APP_ENV=local
EOF

# Create .env.development.local file
cat > .env.development.local << EOF
APP_ENV=local
EOF

# Create .env.test.local file
cat > .env.test.local << EOF
APP_ENV=local
EOF
