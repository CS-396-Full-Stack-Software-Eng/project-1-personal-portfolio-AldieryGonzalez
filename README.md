## AldieryDotCom

Welcome to my small corner of the internet!

### Design Doc

#### Overview

I am a computer science student who has been trying to build small things here and there over the years. As a result, I have

#### Technical Problem Statement

#### Design Approach

I was heavily inspired by a notebook aesthetic for the landing page and wanted to be a small easter egg of interaction in it.

For the rest of the pages I was inspired by the new design trend of Glassmorphism and Neumorphism. The look of a lava lamp was towards what I was looking for.

For the code organization, I leveraged the module pattern for components wherever it could clean up my code. It also helped for the separation of concerns and removing repetition. I found myself always using /atoms first if I needed any subcompoments, and only molecules if I could create multi-atom components as it felt more natural than doing organisms->atoms

For Example, one component I used was the Grid Background, even though it is only used once. I made it a component because the complexity of the background is about as intense as any of the pages. Then I had moluecules (Grid Rows), made up of atoms(Grid Blocks, Grid Buttons). These all then became wrappers for layouts and functionality as needed.
This worked well because it did not need much prop drilling, I believe one level ws the worst it got, while the rest was derived state anyways, so the only thing that needed to be injected was the theme.

The theme was tough because of a tailwind issue I was getting, that is buggy from browser to browser. It lead to inconsistent behavior when automatically changing between system dark and light mode. Luckily tailwind has a flag class of dark that can remove all ambiguity and will set all children into dark mode. After that I used built in context providers to pull system preferences and store it in localstorage. This required a mix of CSR and SSR, mainly CSR with SSR handling all non interactive rendering.

I used outside help in general css formatters and ideators. For example I did not use any [ShadCN](https://ui.shadcn.com/docs/installation/manual) Components, but they do have a very good Globals.css and tailwind.config for light and darkmode. I used that template to create my tailwind classes in a way where I can specify instead of a color, a variable like foreground or background or primary, and they would convert to what I need without the dark: class.

I also used [vO.dev](https://v0.dev/) for looking at some modern styles but did not copy any of the code. This was mainly because it was fairly bad and not responsive. I do like using it though because it is free and introduces me to some tailwind patterns I did not know about previously.

EASTER EGG: Try to find the HELLO on the main page!
