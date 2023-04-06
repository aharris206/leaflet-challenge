# leaflet-challenge  • `2023-04-06T15:30−07:00 (PDT)`
## Module_15
- Note: The entire HTML portion comes from our starter code for this assignment. ***I commented out*** the API key segment as I did not need to use an API key for this assignment.
- I also opted to pull a full month of data, as it paints a clearer picture of the types of earthquakes at verious techtonic boundries. This is explained more in depth below!

## Thoughts and Analysis
- I really enjoyed this assignment! This data source is actually one I have looked at a number of times in the past!
- This assignment has also given me a deeper understanding in reguards to earthquakes and tectonic movement in the requirement that we color code the data points based on the `depth of the epicenter of the earthquake`.
- **I chose to represent this with fading key** from green to yellow to red with *several* catagories to show what is happening at *different types* of techtonic boundries! The deepest end of the data represents streaches out more *(80-150, 150-250, & 250+)*, as these earthquakes are happening in the [`Lithosphere`](https://en.wikipedia.org/wiki/Lithosphere) and [`Asthenosphere`](https://en.wikipedia.org/wiki/Asthenosphere) and even deeper, pushing into the `Mantle`. This also goes along perfactly with the color coding of orange and red!

# Different Types of Plate Boundries.
### Convergent Boundries [are where two techtonic plates are moving into one another](https://en.wikipedia.org/wiki/Convergent_boundary) 
##### Oceanic - Contenental Convergent Boundaries • `Nasca Plate` & `South American Plate`
- Oceanic Crust is denser than Contenental Crust, which causes it to sink under the Contenental Crust. We see this at the subduction zone off the west coast of South America where there are ***deeper*** earthquakes as the `Nasca Plate` subducts ***under*** the `South American Plate`. On our 2-dimensional map, this appears as deeper earthquakes as you travel inland!
[Nasca Plate & South American Plate](Images/(Oceanic-Contenental-Convergent).PNG)
##### Oceanic - Oceanic Convergent Boundaries • `Australian Plate` & `Pacific Plate`
- Oceanic plates differ in density depending on age, which means the older of the two converging plates sinks under the younger one. We see an example of two ocean plates converging just north on New Zelend where it appears the Pacific Plate is subducting under the Australian Plate, as the earthquakes in that region have deeper earthquakes West of the others.
[Australian Plate & Pacific Plate](Images/(Oceanic-Oceanic-Convergent).PNG)

### Divergent Boundaries [are where two techtonic plates are pulling apart.](https://en.wikipedia.org/wiki/Divergent_boundary)  
##### Oceanic - Oceanic Divergent Boundaries • `South American Plate` & `African Plate`
- We can see that these boundries create earthquakes at a much lower frequency, and all of them fairly close to the surface. This makes sense, as the two plates are pulling apart from one another instead of one subducting *(being pushed down)* under another.
[South American Plate & African Plate](Images/(Oceanic-Oceanic-Divergent).PNG)
##### Contenental - Contenental Divergent Boundaries • `East African Rift Vally`
- We see an example of two Contenental Plates diverging along the rift vally in East Africa. In our data, we can again see a couple earthquakes around Tanzania and Uganda, all *again* higher up near the surface *(as no plates are being being subducted)*.
[East African Rift Vally](Images/(Contenental-Contenental-Divergent).PNG)

### Transform Boundaries • `North American Plate` & `Pacific Plate` at `San Andreas Fault`
- Transform boundries [are where two techtonic plates scrape by one another.](https://en.wikipedia.org/wiki/Transform_fault)
- We can see an example of this along the San Andreas Fault along the Central / Southern California Coast as the North American Plate is scraping along the Pacific Plate. Again, as no crust is being pushed underneath other crust, these earthquakes are all are higher up near the surface.
[San Andreas Fault](Images/(Transform-Boundaries).PNG)