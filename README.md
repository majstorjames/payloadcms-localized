# Payload Localization Example with Recipes Collection

This site was originally cloned from the payload localized template

## What this repos has:

- Complete localization (i18n) 
- Collections:
    - Users
    - Posts
    - Recipes

- Other Features
    - Uses Supabase DB and S3 torage
    - Contact forms and submissions
    - Search including the posts and recipes collections
    - Customizable Locale switcher
    - Fixed header with Modal Menu

- The current locales are `en` and `hr`, but you maybe change in the localization folder.

# Instructions 

```sh
git clone https://github.com/majstorjames/payloadcms-localized.git
```

Copy `.env.example` and paste into new `.env` file with properly defined variables.


## To Do

- Implement access control for authors
- Implement Resend for emailing
- Implement Logo upload, Site Title, Theme color selector in global admin