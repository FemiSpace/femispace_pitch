# FemiSpace Azure Deployment Instructions

## 1. Required Files for Deployment

### Core Application Files
- All files from the `src` directory
- All files from the `public` directory
- Configuration files:
  - `next.config.js`
  - `package.json`
  - `package-lock.json`
  - `tailwind.config.ts`
  - `tsconfig.json`
  - `next-env.d.ts`

### Azure-Specific Files (from deployment_files folder)
- `web.config` - IIS configuration
- `.env.production` - Production environment variables
- `azure-pipelines.yml` - Azure DevOps pipeline configuration

## 2. Deployment Steps

### A. Azure Portal Setup
1. Create a new Web App in Azure Portal
   - Runtime stack: Node.js 18 LTS
   - Operating System: Linux
   - Region: Choose nearest to target audience
   - SKU and size: At least P1v2 (for production)

2. Configure Application Settings in Azure Portal
   - Add environment variables from `.env.production`
   - Set `WEBSITE_NODE_DEFAULT_VERSION` to `18.x`
   - Enable `SCM_DO_BUILD_DURING_DEPLOYMENT`

### B. File Upload Process
1. Copy all core application files maintaining the directory structure
2. Copy Azure-specific files to their locations:
   - `web.config` → root directory
   - `.env.production` → root directory
   - `azure-pipelines.yml` → root directory (if using Azure DevOps)

### C. Build and Deploy
1. Local Build (Optional pre-check)
   ```bash
   npm install
   npm run build
   ```

2. Azure DevOps Pipeline
   - Create new pipeline using `azure-pipelines.yml`
   - Connect to your Azure Web App
   - Run the pipeline

### D. Post-Deployment Verification
1. Check Application Logs
2. Verify Environment Variables
3. Test all routes and functionality
4. Monitor performance metrics

## 3. Important Notes

### Environment Variables
Make sure these are set in Azure Portal:
```
NEXT_PUBLIC_BASE_URL=https://femispace-pitch.azurewebsites.net
NODE_ENV=production
```

### File Structure Check
Ensure these directories are present and complete:
```
/
├── src/
│   ├── app/
│   ├── components/
│   ├── config/
│   ├── content/
│   ├── hooks/
│   ├── images/
│   ├── lib/
│   └── types/
├── public/
├── web.config
├── .env.production
├── next.config.js
├── package.json
└── other config files...
```

### Common Issues and Solutions
1. If site shows 502 error:
   - Check application logs
   - Verify Node.js version
   - Check memory allocation

2. If static assets don't load:
   - Verify public folder upload
   - Check web.config configuration
   - Verify build output

3. If routes don't work:
   - Check web.config rewrite rules
   - Verify next.config.js settings
   - Check Azure routing configuration

## 4. Support and Maintenance

### Monitoring
- Set up Azure Application Insights
- Configure alerts for:
  - Response time
  - Failed requests
  - Memory usage

### Backup
- Enable automatic backups
- Store deployment files securely
- Document any custom configurations

### Updates
- Keep Node.js version updated
- Regularly update npm packages
- Monitor Azure service updates
