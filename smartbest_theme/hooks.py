from . import __version__ as app_version

app_name = "smartbest_theme"
app_title = "SmartBest Theme"
app_publisher = "SmartBest"
app_description = "Standard, minimal ERPNext theme (light/dark) with clean typography"
app_email = "support@smartbest.co"
app_license = "MIT"
required_apps = ["frappe", "erpnext"]

# Include built bundles (generated from build.json)
app_include_css = ["/assets/smartbest_theme/css/smartbest_theme.bundle.css"]
app_include_js  = []

# Feed SCSS vars into Website Theme builder too (optional)
website_theme_scss = "public/scss/variables.scss"
