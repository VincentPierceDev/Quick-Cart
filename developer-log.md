
# Developer Log

All of the ways I integrated Ai as a tool throughout this project.

## Strategies

3/28/2026 8:53PM
I provided CoPilot a sample item data from the api so it could quickly construct a interface type for me. I instructed it to read all the data that will be receiving and build the interface from there. It tried putting everything into a single ItemData. Meanwhile, the ratings are two seperate values. It also did not export, which it probably did not understand I needed to. I also removed a few values from the data that I would not need.

3/28/2026 9:59PM
I needed a simple loading animation created. I asked CoPilot to provide me a bouncing dot animation that was snappy and simple. It provided me with an animation that expands and shrinks the dots. I converted it to use transform instead of scale, adjusted the timing, and it looks a lot better.

3/29/2026 12:40AM
The images were not loading with the shopping-items component. I gave Claude the long and confuscated error message I was receiving in the browser. It suggested I needed to add the host name for fakestoreapi.com for the images to load in my config.ts. I then asked copilot to integrate this for me since it is basic configuration. It added the entire images field in the file and the images work properly. I completely understand what this change is doing.


## Corrections:

3/28/2026 8:33PM
I asked Ai the best way to go about doing loading state, since I was slightly unsure with the amount of states. It suggested tanstack. This felt a bit much, because I wanted to maintain simplicity and try to do server fetching. Decided to go with a simple Suspense component that Next provides for fetching and rolling my own component inside it. 

3/28/2026 10:32PM
I had a importing issue where my shop-services would not import at all. Copilot suggested to use relative routing or changing my package.json. It took me a minute to figure out, but I simply restarted VSCode and when it relaunched the file was an unnamed file. I added the ts extension and eveything is back to working as normal.

3/28/2026 10:58PM
I asked Copilot if it could please create me a simple button component that has a boolean to control accessibility (for out of stock, empty cart, etc) and callback function for params. It did not provide the props the way I prefer, so I readjusted them to be an interface as well as changed the 


## Testing