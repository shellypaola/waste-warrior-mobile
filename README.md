# Waste Warrior - Expo Mobile App

This is the React Native version of Waste Warrior built with Expo.

## 🚀 Quick Start (For Testing on Your Phone)

### Step 1: Install Expo Go
1. Download **Expo Go** app on your phone:
   - **iPhone**: https://apps.apple.com/app/expo-go/id982107779
   - **Android**: https://play.google.com/store/apps/details?id=host.exp.exponent

### Step 2: Upload to GitHub
1. Create a new repository called `waste-warrior-mobile` on GitHub
2. Upload ALL the files from this folder to the repository
3. Make sure the folder structure looks like this:
   ```
   waste-warrior-mobile/
   ├── App.js
   ├── app.json
   ├── package.json
   ├── src/
   │   ├── colors.js
   │   └── screens/
   │       └── SplashScreen.js
   ```

### Step 3: Test with Expo
You have 2 options:

#### Option A: Use Expo's Free Hosting (Easiest)
1. Go to https://snack.expo.dev
2. Click "Import" → "Import from GitHub"
3. Enter your GitHub repository URL
4. Scan the QR code with Expo Go app
5. See your app running!

#### Option B: Run Locally (Requires Computer Setup)
1. Install Node.js from https://nodejs.org
2. Open Terminal/Command Prompt
3. Navigate to your project folder
4. Run: `npm install -g expo-cli`
5. Run: `npm install`
6. Run: `npx expo start`
7. Scan the QR code with Expo Go

## 📁 Project Structure

```
waste-warrior-mobile/
├── App.js                    # Main app entry point
├── app.json                  # Expo configuration
├── package.json              # Dependencies
├── src/
│   ├── colors.js            # ⭐ MASTER COLOR FILE (never modify)
│   ├── screens/             # All app screens
│   │   └── SplashScreen.js  # ✅ COMPLETED
│   └── components/          # Reusable components (coming next)
```

## ✅ Current Progress

- [x] Project setup
- [x] Color system (colors.js)
- [x] SplashScreen (converted from web)
- [ ] SignUpScreen (next)
- [ ] Dashboard
- [ ] Inventory
- [ ] Analytics
- [ ] Rewards
- [ ] Navigation

## 🎨 Design System

All colors are imported from `src/colors.js`:
- ✅ Classic Blue (#3B82F6) as primary
- ✅ Semantic colors (critical, warning, fresh)
- ✅ Gradients converted to React Native arrays
- ✅ Shadows converted to React Native format

## 📱 Next Steps

1. Test SplashScreen on your phone using Expo Go
2. Once confirmed working, we'll convert SignUpScreen
3. Then Dashboard, and so on...

## 🆘 Need Help?

If you see any errors or need assistance:
1. Take a screenshot
2. Copy the error message
3. Send it to me and I'll help fix it

## 🔧 Common Issues

### "Module not found" errors
- Run `npm install` in the project folder

### QR code won't scan
- Make sure Expo Go is installed
- Try using Option A (Expo Snack) instead

### Colors look wrong
- Check that `src/colors.js` file exists
- Verify imports at top of screen files

---

**Ready to test?** Upload to GitHub and use Expo Snack to see it on your phone! 📱✨
