module.exports = {
  apps: [
    {
      name: 'django',
      script: 'demoproject/manage.py',
      args: 'runserver 0.0.0.0:8000',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        DJANGO_SETTINGS_MODULE: 'demoproject.settings',
        PYTHONUNBUFFERED: '1',
      },
    },
  ],
};
