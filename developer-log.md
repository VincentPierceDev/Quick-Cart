
# Developer Log

This is a detailed list of the ways I integrated Ai as a tool throughout this project. It highlights some of my thought process throughout thje work as well. However, I included my planning.txt as well to fully showcase my broad ideas.

The Github commits also show a bit of detail as to what I got done each day as well.

Day 0 (received the challenge at 7:33PM on March 28, 2026)
Start Time: 8:12PM
End Time: 1:10AM

Day 1
Start Time: 10:17AM
End Time:  11:59PM

Day 2 (finished the challenege at 12:10AM on April 1, 2026)
Start Time: 10:02AM
Break: 2:45PM - 7:04PM
End Time: 12:08AM

## Overall Strategy (writing this after the fact)
Throughout the development of Quick Cart, I used various AI tools such as GitHub Copilot, Claude (browser), and ChatGPT as an assistant to accelerate debugging, brainstorm solutions, and help with test cases. My overall strategy focused on providing context by copy/pasting code to the model, providing file "ask" context, or explaining various issues in detail. Through this process I verified solutions and used my knowledge to go with my best decisions. I docummented almost all of these contexts below, following this strategy, of course I can't provide every prompt but the provided info should suffice.

### Context Provisions
Provided sample mock API data, component structure, css examples, and ideas to guide Ai models into generating Typescript, layout solutions, and debugging suggestions.

### Assisted Development
Used Ai for initial component scaffolding. While I did not blindly copy and paste, I let the various Ai tools provide their input and utilized this to speed up the thinking process. I had to heavily alter details to get stuff to match up, but like I said it was very good for scaffolding to get the initial component on the page.

### Test Case Generation
This is where the Ai generation heavily picked up. I utilized the Ai to provide additional details about the best test cases. Utilized a list of cases and chose cases aligning with the direction it went with. All AI generated tests were hand written to ensure accuracy and software development best practices. For example, the models sort of forget that variables exist and different things, so you have to refactor stuff anyways.

### Human Oversight
I reviewed, corrected, and improved everything. I am still at an entry level software engineering level so maybe my decisions are not up to perfect par with enterprise systems, but everything character of code was typed and reviewed by me.

## Details of AI Uses

## Processess

3/28/2026 8:53PM
I provided CoPilot a sample item data from the api so it could quickly construct a interface type for me. I instructed it to read all the data that will be receiving and build the interface from there. It tried putting everything into a single ItemData. Meanwhile, the ratings are two seperate values. It also did not export, which it probably did not understand I needed to. I also removed a few values from the data that I would not need.

3/28/2026 9:59PM
I needed a simple loading animation created. I asked CoPilot to provide me a bouncing dot animation that was snappy and simple. It provided me with an animation that expands and shrinks the dots. I converted it to use transform instead of scale, adjusted the timing, and it looks a lot better to my liking.

3/29/2026 12:40AM
The images were not loading with the shopping-items component. I gave Claude the long and confuscated error message I was receiving in the browser. It suggested I needed to add the host name for fakestoreapi.com for the images to load in my config.ts. I then asked copilot to integrate this for me since it is basic configuration. It added the entire images field in the file and the images work properly. I completely understand what this change is doing.

3/29/2026 10:43AM
I needed a bit of guidance on how to structure my providers. I know I need a state for all the items, and a state to store the cart data and quantities of each item. However, I was unsure if this should be implemented as a single provider for the entire shop or make two seperate providers. Have one handle the overall shop data and the other one catered specifically for the cart. For this app a cart provider is not really neccessary for the simplicity, but I am trying to structure for scalability. A cart provider could be useful for routes and what not if a shop had several pages.

3/29/2026 11:41AM
I needed some assistance making the product images be object fit cover and allowing the text to take up space on the card. In plain css I could do it easily, but I just was not getting it working with tailwind. I gave Copilot my plain css and told it to do that in tailwind. It gave the proper results.

3/29/2026 1:08PM
Had an issue where my images where pushing my item data down (like the title, description, price, button) and causing a weird overflow issue. The issue was I had my bottom content div container as h-full, Copilot suggested changing to flex-grow which I had overlooked. So, fixed the issue in less than a second after trying to figure it out for a minute.

3/29/2026 1:50PM
I did some lighthouse page speed optimizations for the images. The LCP is still a slight issue on mobile, but I speed the load times up significantly. Anyways, requested Copilot to provide the optiomizations for me that would preload images, lazy and eager load, etc. It provided the details that were sort of correct, but hard coded and would not work for my component.

3/29/2026 2:04PM
Requested Claude to create me a css star pattern for the ratings. It created it successfully.

3/29/2026 3:12PM
Asked Copilot to provide me the details of how to convert my cart icon svg to be completely black. I always forget the filters. It provided a working solution.

3/29/2026 4:40PM
Debugged the cart provider using CoPilot. It was reading undefined when adding a new item that already existed. The issue was I was not returning anything from the map. Just added the return and now the cart is printing correct json when adding items. Time to implement the UI for it!

3/29/2026 5:57PM
Had some structure issues I was dealing with. Was struggling to figure out how to get the menu opening flag from the button in the navbar to the actual menu on my page. However, discussing with GPT and filtering off beat suggestions, I came to the conclusion I need to make another generalized context that handles opening and closing the menu. GPT provided a solution for managing all menus in the app by receiving an id, but I translated it to work with just one. It is just a bit too much scalability for the project.

3/29/2026 6:31PM
Alright, the project is pretty much complete at this point. I will be doing a few prompts to figure out tailwind issues with the cart ui. Besides that I have everything working and it is just a matter of polishing and finishing the cart ui. So, just docummenting these minor prompts. After I finish this, then tomorrow I plan on utilizing Ai to write all the test cases in Jest to make sure everything works, write the docs, and then host it. It should be ready to turn in tomorrow (3/30/2026).

3/30/2026 12:46PM
I have been going round and round trying to get the deployment working. First I was getting a 404 error which I fixed by specifying the project type in Vercel. Now I am having an issue where the server is passing an empty array to my Shop Provider. So, trying to figure out what is causing this issue, using various resources.

3/30/2026 1:56PM
After doing some digging, I discovered that fakestoreapi.com may block common serverless fetches from stuff like Vercel, Netlify, AWS, etc. So, I am adjusting the products fetch to be client only. This will remove the loading from working since that is server only. However, I am leaving all the server fetching as well so it can be swapped around easily. The page.tsx is the only file that should be affected by the change.

## Corrections:

3/28/2026 8:33PM
I asked Ai the best way to go about doing loading state, since I was slightly unsure with the amount of states. It suggested tanstack. This felt a bit much, because I wanted to maintain simplicity and try to do server fetching. I am also unfamiliar with the Tanstack, although searching google it seems failrly simple. Decided to stick with what I know and go with contexts out of the box that Next provides for fetching and prop drilling, and rolling with it. 

3/28/2026 10:32PM
I had a importing issue where my shop-services would not import at all. Copilot suggested to use relative routing or changing my package.json. It took me a minute to figure out, but I simply restarted VSCode and when it relaunched the file was an unnamed file. I added the ts extension and eveything is back to working as normal.

3/28/2026 10:58PM
I asked Copilot if it could please create me a simple button component that has a boolean to control accessibility (for out of stock, empty cart, etc) and callback function for params. It did not provide the props the way I prefer, so I readjusted them to be an interface as well as added the aria boolean to also actually disable the button.

3/29/2026 12:22PM
My Buttons were not spacing right on the item cards. They were hanging off the page. I was trying to figure out why this was happening with the css (again, not super experienced with tailwind). Copilot kept analyzing and suggesting I do absolute positioning which is obviously not what I want. Asking claude, the issue ended up being I was using w-100 on accident in the price and button wrapper, which isn't even a tailwind class.

3/29/2026 1:50PM
I took the data that was wrong, and set it up to utilize the id's of the item to determine if it is above the fold or not. Mobile loads 2 that are not on the screen, but with the time crunch that will just have to do. Since the shopping grid is a client component, I could make it to where it reads the screen size to determine how many images are above the fold.

3/29/2026 2:40PM
Had issues with the star pattern not filling. I then finally realized the Ai had set the React css property variable in the actual css. I removed the variable that was set to 0 and then the star display immediately worked. 

3/29/2026 3:46PM
Asked Claude to create me a cart provider similar to my shop provider to handle drilling. It did not meet the requirements I needed and I spent time trying to have it fix it. It failed still, and so I just tackled the cart-provider myself while referencing the shop-provider, docs, and Ai.

3/29/2026 11:15PM
I have to add this log. I have a big issue on IOS mobile that is causing none of my buttons to work. I have tried everything, asked Claude, GPT, CoPilot, looked up answers, searched and debugged on my own for several hours. Hopefully I can figure this out tomorrow and I won't take too much time away from building test cases. I still have a couple more styles to touch up on, but the app is complete.

3/30/2026 10:26AM
I fixed the issue with my buttons not working on IOS. I had to enabled allowedDevOrigins for the network host so the app would function across the network. Yea, all the Ai was way off and it took a little bit of testing to realize it was not an actual component blocking anything.

## Testing

3/30/2026 7:05PM
Started off by asking GPT about how many tests I should provide for each category to have a solid amount. I knew I needed a few unit and integration tests at a minimum for each component and the overall app. However, I am not sure where the line is for overkill and not enough. So, I asked Ai to do research and find the best amount of test cases for a project like this. It suggested having about 15 tests which I deemed satisfactory.

3/30/2026 7:44PM
Needed a jest config and had Copilot generate me a default and simple config that would work for this project. I have verified it works properly.

3/30/2026 8:31PM
Ai suggested testing for button clicking when disabled. It provided the test case and I went to test and my button ended up failing. I noticed I am setting disabled to a string rather than a actual boolean. Fixed the issue so the test case works properly now.

3/30/2026 9:14PM
Requested Claude to provide me with several test cases that I can use to test obfuscated features in the shopping-item. Looked over the code, adjusted a few things to get test to work and better fit what I want, then checked the tests for success.

3/30/2026 9:33PM
Have not mentioned it, but figured I would. I have been utilizing CoPilot throughout the entire testing to check the corresponding file for me in order to determine what alt text, title, name, or however I am labeling specific items or other data that intellisense doesn't show. Speeds up flipping around significantly.

3/30/2026 11:03PM
Utilized Calude to fix a bug in my shopping-grid-test that was calling all tests to fail in the add to cart adding proper id. I had to add a moduleNameMapper to the jest config so that I could use root paths that match the component import.

3/30/2026 11:47PM
Needed quite a bit of help with cart-item-test and shopping-grid-test to setup the mocks, could not get them to work for the life of me. I understand what they are doing though, simply making dummy data for the components and functions that are seperate from the actual components. I just needed help getting them setup to work, but finally got it!


## END OF LOGS