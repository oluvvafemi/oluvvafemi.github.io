---
layout: post
title: "Client Case Study: Successful Migration of Infrastructure from Heroku to Digital Ocean"
image: "assets/images/heroku-do-migration/migration.png"
---

**Context:** During peak business period, a client, specialising in developing applications that augment Shopify's features for a vast array of stores and products faced the need for infrastructure migration. The switch from Heroku to Digital Ocean was driven by the goals of reducing operational costs and increasing both the flexibility and manageability of their infrastructure.

**Primary Task:** To execute a flawless migration process ensuring no data loss and minimal downtime, crucial for continuous business operations during this peak period.

![Heroku to Digital OCean migration]({{ site.baseurl }}/assets/images/heroku-do-migration/migration.png)

**Procedure:**

1. **Infrastructure Assessment:**

   - Conducted a thorough analysis of the existing Heroku infrastructure, encompassing both staging and production environments.
   - Prioritized extensive testing in the staging environment to pre-emptively address any issues before moving to the production phase.

2. **Migration Strategy:**

   - **Rails Application:** Transitioned from a Heroku buildpack framework to a Docker-based environment on Digital Ocean's App Platform, ensuring a smooth switch with equivalent functionality.
   - **Heroku Scheduler Replacement:** Substituted with Sidekiq-Cron to align with the existing Sidekiq Job configurations, integrating a web UI on the Sidekiq dashboard for enhanced monitoring and management.
   - **Redis Management:** Chose a self-managed Redis setup on a Docker-enabled droplet over a managed service, catering to specific needs for flexibility. Security was fortified by enabling TLS.
   - **Heroku Postgres:** Shifted to a Digital Ocean managed database cluster. The absence of superuser privileges on Heroku necessitated using pg-restore for the data migration. The final migration was tactically scheduled during a low-activity window, post-notification to store owners and enabling maintenance mode, to minimize impact on operations.

3. **Finalization Steps:**
   - Post-migration, performed comprehensive functionality checks.
   - Updated the DNS records to re-route to the new Digital Ocean application setup.

**Outcomes:**

- Realized a substantial reduction in costs: a 50% decrease for the staging environment and an 85% reduction for the production setup.

- Established a scalable framework for future expansion, offering the client a roadmap for transitioning to a self-managed infrastructure model on Digital Ocean, accommodating their growing business needs.
