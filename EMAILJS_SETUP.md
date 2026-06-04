# EmailJS Setup Guide

To enable the contact form on your portfolio, follow these steps:

## 1. Sign up on EmailJS

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## 2. Get Your Credentials

### Public Key
- In EmailJS dashboard, go to **Account Settings** → **API Keys**
- Copy your **Public Key**

### Service ID
- Go to **Email Services** in the left sidebar
- Select your email provider (Gmail, Outlook, etc.) or create a new service
- Copy the **Service ID**

### Template ID
1. Go to **Email Templates** in the sidebar
2. Create a new template with these variables:
   - `from_name` - Visitor's name
   - `from_email` - Visitor's email
   - `subject` - Message subject
   - `message` - Message content
   - `to_email` - Your email (jitinkumarchak@gmail.com)

3. Copy the **Template ID**

## 3. Update Contact Component

Open `src/components/Contact.jsx` and replace:

```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE");
```

with your actual public key, and:

```javascript
await emailjs.send(
  "YOUR_SERVICE_ID_HERE",
  "YOUR_TEMPLATE_ID_HERE",
```

with your service and template IDs.

## 4. Test It

1. Run `npm run dev`
2. Scroll to the contact section
3. Fill out the form and submit
4. You should receive an email

## Security Note

- Don't commit your credentials to Git
- Consider using environment variables for production:

```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

Then create a `.env` file:

```
VITE_EMAILJS_PUBLIC_KEY=your_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

And add `.env` to your `.gitignore`.
