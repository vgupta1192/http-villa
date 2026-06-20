module.exports = {
  apps: [
    {
      name: 'murph-streams',
      script: './index.js',
      cwd: __dirname,
      instances: 1,            // single instance — stream caches are in-memory, don't cluster
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '600M',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.MURPH_PORT || 7861   // distinct from NuvioStreams' port
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      merge_logs: true,
      time: true,
      kill_timeout: 8000,       // allow in-flight proxy streams to drain
      listen_timeout: 8000
    }
  ]
};