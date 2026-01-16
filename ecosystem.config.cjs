module.exports = {
  apps: [
    {
      name: "zyka_landing",
      cwd: "./",
      script: "npm",
      args: "start",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      restart_delay: 3000,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      env: {
        PORT: 4008,
        NODE_ENV: "production",
      },
    },
  ],
};
