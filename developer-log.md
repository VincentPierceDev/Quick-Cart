
# Developer Log

This is a detailed list of the ways I integrated Ai as a tool throughout this project. It highlights some of my thought process throughout thje work as well. However, I included my planning.txt as well to fully showcase my broad ideas.

The Github commits also show a bit of detail as to what I got done each day as well.

Day 0 (received the challenge at 7:33PM on March 28, 2026)
Start Time: 8:12PM
End Time: 1:10AM

Day 1
Start Time: 10:17AM

## Strategies

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
Asked Copilot to provide me the details of how to convert my cart icon svg to be my tertiary-css color. It provided a working solution.

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

## Testing