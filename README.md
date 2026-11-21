# BabyBites — Indian Baby Meal Planner

A responsive Next.js app for planning meals, browsing Indian home-style recipes, tracking food introductions, and creating a weekly grocery checklist.

## Included
- Weekly plan with five flexible meal ideas per day and meal swapping
- 30 sample recipes, including North Indian seasonal/winter ideas
- Recipe search, category/nutrition-tag filters, and favourites
- Baby profile with date-of-birth age calculation and dietary preference
- Food introduction diary with notes and observed-reaction field
- Grocery list generated from the current weekly plan, plus custom items
- Local browser persistence using `localStorage`
- Responsive desktop and mobile layouts

## Run locally

Requirements: Node.js 20.9+ and npm.

1. Extract the ZIP.
2. Open a terminal in the `babybites` folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Deploy with GitHub and Vercel

1. Create a new, empty repository on GitHub.
2. Extract this ZIP on your computer.
3. Upload the **contents** of the `babybites` folder to the repository root (so `package.json` is at the top level), then commit the files.
4. Sign in to Vercel and choose **Add New → Project**.
5. Import your GitHub repository and keep the detected Next.js settings.
6. Select **Deploy**. No environment variables are required.
7. When deployment finishes, open the Vercel URL.

Future pushes to the connected GitHub branch will trigger a new Vercel deployment.

## Data and privacy

This starter app stores profile details, meal-plan changes, favourites, food diary entries, and grocery checkboxes in the current browser's `localStorage`. It does not use an account, cloud database, analytics, or an external API. Data is not synced between devices. Clearing browser data may erase it. Do not enter sensitive medical information.

## Important safety note

Recipes and meal suggestions are general educational ideas, not individualized nutrition or medical advice. Children differ in developmental readiness, allergy risk, growth, and feeding skills. Adapt textures and portion sizes to the child and consult your pediatrician for individualized guidance. Always supervise eating while seated upright. Avoid choking hazards; prepare foods safely (for example, cook foods until soft, cut appropriately, and finely grind nuts/seeds rather than offering them whole). For possible allergic reactions, seek medical advice; breathing difficulty, tongue/facial swelling, or collapse requires emergency care.

The sample recipes are not a clinically validated meal plan. Review every ingredient against your child's allergies and foods already introduced before serving. The app does not calculate calories, nutrient adequacy, or individualized portions.
