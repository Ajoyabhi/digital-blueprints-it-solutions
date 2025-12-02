# PM2 Setup Guide for PayzuTech

This guide explains how to run the PayzuTech application using PM2 process manager.

## Prerequisites

1. **Install PM2 globally:**
   ```bash
   npm install -g pm2
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

## PM2 Configuration

The PM2 configuration is stored in `ecosystem.config.cjs`. It includes:
- Application name: `payzutech`
- Entry point: `./dist/index.js`
- Environment variables
- Log file locations
- Auto-restart settings
- Memory limit (1GB)

## Available PM2 Commands

### Start the Application
```bash
npm run pm2:start
# or
pm2 start ecosystem.config.cjs
```

### Stop the Application
```bash
npm run pm2:stop
# or
pm2 stop payzutech
```

### Restart the Application
```bash
npm run pm2:restart
# or
pm2 restart payzutech
```

### View Logs
```bash
npm run pm2:logs
# or
pm2 logs payzutech
```

### View Application Status
```bash
npm run pm2:status
# or
pm2 status
```

### Monitor in Real-time
```bash
npm run pm2:monit
# or
pm2 monit
```

### Delete the Process
```bash
npm run pm2:delete
# or
pm2 delete payzutech
```

## Setup for Auto-Start on System Reboot

1. **Save the current PM2 process list:**
   ```bash
   npm run pm2:save
   ```

2. **Generate startup script:**
   ```bash
   npm run pm2:startup
   ```
   
   This will output a command like:
   ```bash
   sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u yourusername --hp /home/yourusername
   ```
   
   Copy and run the command it provides.

3. **Save again after setting up startup:**
   ```bash
   npm run pm2:save
   ```

Now PM2 will automatically restart your application on system reboot.

## Log Files

Logs are stored in the `logs/` directory:
- `logs/pm2-error.log` - Error logs
- `logs/pm2-out.log` - Standard output logs
- `logs/pm2-combined.log` - Combined logs

## Environment Variables

You can override environment variables in `ecosystem.config.cjs` or create environment-specific configs:

```javascript
env: {
  NODE_ENV: "production",
  PORT: 5001,
  DATABASE_URL: "your-database-url",
  SESSION_SECRET: "your-session-secret",
}
```

## Common PM2 Commands

### View all processes
```bash
pm2 list
```

### View detailed info
```bash
pm2 show payzutech
```

### Clear all logs
```bash
pm2 flush
```

### Reload (zero-downtime restart)
```bash
pm2 reload payzutech
```

### Stop all processes
```bash
pm2 stop all
```

### Delete all processes
```bash
pm2 delete all
```

## Troubleshooting

### Application won't start
1. Check if the build was successful: `ls -la dist/`
2. Check PM2 logs: `pm2 logs payzutech`
3. Verify environment variables are set correctly

### Port already in use
1. Check what's using the port: `lsof -i :5001`
2. Change the port in `ecosystem.config.cjs` or kill the process using the port

### Memory issues
1. Adjust `max_memory_restart` in `ecosystem.config.cjs`
2. Monitor memory usage: `pm2 monit`

### PM2 not persisting after reboot
1. Make sure you ran `pm2 startup` and followed the instructions
2. Run `pm2 save` after starting your application

## Quick Start Workflow

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start with PM2:**
   ```bash
   npm run pm2:start
   ```

3. **Check status:**
   ```bash
   npm run pm2:status
   ```

4. **View logs:**
   ```bash
   npm run pm2:logs
   ```

5. **Set up auto-start (optional):**
   ```bash
   npm run pm2:save
   npm run pm2:startup
   # Follow the instructions provided
   ```

That's it! Your application is now running with PM2. 🚀

