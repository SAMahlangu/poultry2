import React, { useRef } from 'react'; // Import useRef if using refs
import './Broiler.css'; // Import the CSS file
import chickenImage from '../assets/chickens.png'; // Adjust the path to point to your image
import concreteImage from '../assets/mason.png'; // Add the path to your concrete image
import corrugatedImage from '../assets/iron.png'; // Add the path to your corrugated iron image
import floorplanImage from '../assets/floorplan.png'; // Add the path to your corrugated iron image
import elevationImage from '../assets/elevation.png'; // Add the path to your corrugated iron image
import sectionalImage from '../assets/sectional.png'; // Add the path to your corrugated iron image
import feedersImage from '../assets/feeder.png'; // Add the path to your corrugated iron image
import jumboImage from '../assets/jumbo.png'; // Add the path to your corrugated iron image
import drinker1Image from '../assets/drinker1.png'; // Add the path to your corrugated iron image
import drinker2Image from '../assets/drinker2.png'; // Add the path to your corrugated iron image
import heating1Image from '../assets/heater1.png'; // Add the path to your corrugated iron image
import heating2Image from '../assets/heater2.png'; // Add the path to your corrugated iron image
import heating3Image from '../assets/heater3.png'; // Add the path to your corrugated iron image
import heating4Image from '../assets/heater4.png'; // Add the path to your corrugated iron image
import broodingImage from '../assets/brooding.png'; // Add the path to your corrugated iron image
import ventilationImage from '../assets/ventilation.png'; // Add the path to your corrugated iron image





function BroilerPage() {
  // Create references for the introduction and infrastructure sections
  // Create references for each section
  const introductionRef = useRef(null);
  const infrastructureRef = useRef(null);
  const equipmentRef = useRef(null);
  const lightingRef = useRef(null);
  const stockingRef = useRef(null);
  const feedingRef = useRef(null);
  const hygieneRef = useRef(null);
  const healthRef = useRef(null);
  const productionRef = useRef(null);
  const marketingRef = useRef(null);
  const stepByStepRef = useRef(null);

  // Scroll handlers for each section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll handler to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="broiler-container">
      <h1 className="broiler-title">Broiler Production Guide</h1>
      
      <ol className="broiler-list">
        <li onClick={() => scrollToSection(introductionRef)} style={{ cursor: 'pointer' }}>
          Introduction to Broiler Production
        </li>
        <li onClick={() => scrollToSection(infrastructureRef)} style={{ cursor: 'pointer' }}>
          Building a Broiler House: Infrastructure
        </li>
        <li onClick={() => scrollToSection(equipmentRef)} style={{ cursor: 'pointer' }}>
          Equipment Needed
        </li>
        <li onClick={() => scrollToSection(lightingRef)} style={{ cursor: 'pointer' }}>
          Lighting
        </li>
        <li onClick={() => scrollToSection(stockingRef)} style={{ cursor: 'pointer' }}>
          Stocking/Flock Density: How many chicks can fit
        </li>
        <li onClick={() => scrollToSection(feedingRef)} style={{ cursor: 'pointer' }}>
          Feeding
        </li>
        <li onClick={() => scrollToSection(hygieneRef)} style={{ cursor: 'pointer' }}>
          Hygiene Practices
        </li>
        <li onClick={() => scrollToSection(healthRef)} style={{ cursor: 'pointer' }}>
          Broiler Health and Diseases
        </li>
        <li onClick={() => scrollToSection(productionRef)} style={{ cursor: 'pointer' }}>
          Broiler Production and Management Practices
        </li>
        <li onClick={() => scrollToSection(marketingRef)} style={{ cursor: 'pointer' }}>
          Marketing and Selling
        </li>
        <li onClick={() => scrollToSection(stepByStepRef)} style={{ cursor: 'pointer' }}>
          Step by Step Process of Putting Everything You’ve Learned Together
        </li>
      </ol>

      {/* The Introduction section */}
      <div className="broiler-section" ref={introductionRef}>
        <h2>Introduction to Broiler Production</h2>
        <p><strong>Definition and Purpose</strong></p>
        <p>Broiler Production involves the raising of chickens for meat consumption, with the chickens being sold from 5-7 weeks of care.</p>

        <p><strong>Why Broiler Farming?</strong></p>
        <p>
          a) Profitability - When done right, broiler farming is highly profitable.<br />
          b) High demand - Chicken is not only considered the cheapest meat type in South Africa but also the most consumed meat type in S.A.<br />
          c) Contribution to food security.
        </p>

        {/* Add the chicken image */}
        <img src={chickenImage} alt="Broiler Chickens" className="broiler-image" />
      </div>

      {/* The Infrastructure section */}
      <div className="broiler-section" ref={infrastructureRef}>
        <h2>Building a Broiler House: Infrastructure</h2>
        <p>
          Building a broiler house is the most expensive part of the entire process to becoming a broiler farmer. Depending on the size of your house, the material you use, infrastructure can either be really affordable or really expensive.
        </p>
        <p>
          But remember!! Since the purpose of this hand guide is to get you started, we’ll be looking at basic structure designs using 2 different affordable materials, namely:
        </p>
        <ul>
          <li>Concrete Bricks</li>
          <li>Corrugated Iron</li>
        </ul>

        <h3>Factors of Building a Broiler House:</h3>

        <h4>2.1. Choosing a Location</h4>
        <ul>
          <li>Accessibility to Water</li>
          <li>Accessibility to Electricity (this optional), cause we can use Gas or Paraffin as alternative heating and light sources plus they're the cheaper options.</li>
          <li>
            It is important to position your Broiler house in such a way that the sun is never directly hitting the longer sides of the house, i.e. The sun should rise and set facing the shorter sides of the house.
          </li>
        </ul>

        <h4>2.2. Fundamentals Criteria for Broiler Houses</h4>
        <ul>
          <li>Be rain Proof</li>
          <li>Not be prone to Flooding</li>
          <li>Protect Chickens from direct Sunlight</li>
          <li>Be wild bird proof</li>
          <li>Have enough Space</li>
          <li>Be Easy to clean out</li>
          <li>Have a solid door (with a lock)</li>
          <li>Have sufficient light to support production</li>
        </ul>

        <h4>2.3. Broiler House Design</h4>
        <p>
          Chicken housing size can vary in respect of the quantity of birds one wants to breed or farm. Keeping that in mind, this explains that for a particular number of birds, one needs certain dimensions that will take into account the number that needs to be accommodated for.
        </p>

        <p>
          Below is a table that gives guidance to the size of the house in connection to the number of birds that can be placed in them.
        </p>

        {/* Table Section */}
        <table className="broiler-table">
          <thead>
            <tr>
              <th>Number of Birds</th>
              <th>Housing Dimension (m)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-180</td>
              <td>4 x 3</td>
            </tr>
            <tr>
              <td>200-300</td>
              <td>5 x 3</td>
            </tr>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <td>400-600</td>
              <td>8 x 4</td>
            </tr>
            <tr>
              <td>1000</td>
              <td>14 x 5</td>
            </tr>
          </tbody>
        </table>

        {/* Side-by-Side Images Section */}
        <div className="broiler-images">
          <div className="broiler-image-container">
            <img src={concreteImage} alt="Concrete Mason Structure" className="broiler-structure-image" />
            <p>Image: Concrete Mason Structure</p>
          </div>
          <div className="broiler-image-container">
            <img src={corrugatedImage} alt="Corrugated Iron Structure" className="broiler-structure-image" />
            <p>Image: Corrugated Iron Structure</p>
          </div>
        </div>

        <p>
          With the above mentioned it is advised that when choosing to use the concrete mason structure, some form of degree of consulting with someone who has knowledge or some extent of understanding in the construction to be present at some stages of construct.
        </p>
        <h4>Floor Plan: Housing</h4>
      <p>The following gives focus to the corrugated iron structure as it most accessible and easier to construct for anyone who follows the plans presented below, and the drafts below gives one a lay out and parameter section on how to establish the structure with clear demonstrated sectional drawing as well as a typical floor plan.</p>
      <div className="broiler-images">   
          <div><img src={floorplanImage} alt="Concrete Mason Structure" className="broiler-structure-image" />
            <p>Image: Typical floor for chicken housing</p>
            <h4>Note:</h4>
        <ul>
          <li>1.Wall material are subject to environment and site specific.</li>
          <li>2.Size of house is depended Material used with concrete Wall left to Eng. Spec</li>
          <li>3. Foundation subject to engineering spec</li>          
        </ul>
          </div>
       </div> 
       <h4>Elevations</h4>  
       <p>Below are the drawings that show how one can construct their own chicken housing with the simplest form of application using corrugated iron option of built to reach and find good result in housing with the instruction of layout as demonstrated below.</p>
       <div className="broiler-images">   
          <div><img src={elevationImage} alt="Concrete Mason Structure" className="broiler-structure-image" />
            <p>Image: Elevation East, west, south and north</p>
            </div>
       </div>  
       <h4>Sectional Drawing</h4>
       <p>With the following, a sectional parameter or how to build the structure is displayed below with basic instruction on how the structure should be constructed keeping the complexity out whilst catering for anyone to be able to build this without difficulty.</p>
       <div className="broiler-images">   
          <div><img src={sectionalImage} alt="Concrete Mason Structure" className="broiler-structure-image" />
            <p>Image: Sectional Drawing</p>
            </div>
       </div>




      </div>

      <div className="broiler-section" ref={equipmentRef}>
        <h2>Equipment Needed</h2>
        
        <p>Below is a list of equipment and tools required to run an effective/efficient operation:</p>
        <p>(The number of instruments required will be guided by the number of chicks one decides to have)</p>

        <ul>
          <li>Feeders</li>
          <li>Drinkers</li>
          <li>Heating Equipment</li>
          <li>Lighting</li>
          <li>LED Bulbs (If using Electricity as a power source)</li>
          <li>Brooding Guard/Boards</li>
          <li>Bedding/Litter material</li>
          <li>Newspaper</li>
          <li>20 liter Bucket</li>
          <li>Pallet</li>
          <li>Foot Dipping tray</li>
          <li>Fork and Plastic Rake</li>
          <li>Long Plastic Sheet</li>
        </ul>

        <h3>Feeders</h3>
        <p>
          Chickens will require different sized feeders at different growth stages. It is advised that one does not 
          use the same sized feeder throughout. From Day 1 to Day 14, we use the “Small feeder”, and from Day 14 to market, we use the “Jumbo/Large feeders.”
        </p>
        <p>
          Feeders can be hung from the roof or placed on the ground. However, when on the ground, they should be elevated from the bedding. 
          (Some feeders have stands/legs, but if yours don’t, you can use standard bricks.)
        </p>

        <h3>Types of Feeders for Different Stages</h3>
        
        <div className="broiler-images">   
          <div><img src={feedersImage} alt="Concrete Mason Structure" className="broiler-structure-image" />
            
            </div>
       </div>
       <div className="broiler-images">   
          <div><img src={jumboImage} alt="Concrete Mason Structure" className="broiler-structure-image" />
            
            </div>
       </div>
        <h4>Drinkers</h4>      
        <p>Broilers should always have access to clean drinking water (from the day your chicks arrive - to the day they are sold).  A reduction in water intake will lead to reduction in feed intake and hence reduction in growth performance, therefore it is essential to re-fill drinkers before they are empty.</p>
        <ul>
          <li>	Young chicks up to 3 Weeks old, require 3 x Four-litre founts with a diameter of 100mm per 100 birds.
            (With a linear troughs, allow 1cm of trough space per bird covering both sides
            i.e. 100 chicks = 0.5m)
            </li>
            <li>For 100 broilers at 3 – 6 Weeks old, require 2 fount-type drinkers with the capacity of 10-30 litres and a diameter of 300mm would be required.</li>
          </ul>
          <p>NB!! Anti-drown rings should always be should always be inserted into founts, if not available some famers use stones to prevent Chicks from drowning.</p>
          <h4>Type of Drinkers:</h4>
          {/* Side-by-Side Images Section */}
          <div className="broiler-images">
            <div className="broiler-image-container">
              <img src={drinker1Image} alt="Concrete Mason Structure" className="broiler-structure-image" />
              <p>Image: 4lt Water Fount</p>
            </div>
            <div className="broiler-image-container">
              <img src={drinker2Image} alt="Corrugated Iron Structure" className="broiler-structure-image" />
              <p>Image: 10lt Water Fount</p>
            </div>
          </div>
        <h4>Heating Equipment</h4>
        <p>Chicks cannot regulate their own body temperature until they are about a week old. Therefore, the poultry house must be kept warm at all times during this period and as close as possible to the optimum of 32 C and preferably not lower than 28 C.</p>
        <p>Preheating the house before arrival of the chicks is vital as floor temperature at chick placement is as important as air temperature. Temperature and relative humidity should be stabilised at least 24 hours prior to chick arrival. </p>
        <p>After seven days of growth, the part of the chick’s brain that controls its body temperature matures as a result of digestion of feed, supplemental heat and exercise. As a result, the optimum temperature for growth (and the need for heating) is gradually reduced.</p>
        
        
        <h2>Optimal Temperature of Growing Area in Accordance to Chick/Bird Age</h2>
        <table className="broiler-table">
          <thead>
            <tr>
              <th>Age (in days)</th>
              <th>Temperature (°C)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 – 7</td>
              <td>32</td>
            </tr>
            <tr>
              <td>8 – 14</td>
              <td>29</td>
            </tr>
            <tr>
              <td>15 – 21</td>
              <td>27</td>
            </tr>
            <tr>
              <td>22 – 28</td>
              <td>24</td>
            </tr>
            <tr>
              <td>29 - Sold</td>
              <td>21/20</td>
            </tr>
          </tbody>
        </table>
        <h3>NB!!! It is important to remember that heating can be done via electricity, gas or even paraffin. Since this manual is structure for people just starting, gas will be the power source we focus on. </h3>
        <h4>Types of heating equipment:</h4>
        {/* Side-by-Side Images Section */}
        <div className="broiler-images">
            <div className="broiler-image-container">
              <img src={heating1Image} alt="Concrete Mason Structure" className="broiler-structure-image" />
              <p>Image: Normal Theromemter</p>
            </div>
            <div className="broiler-image-container">
              <img src={heating2Image} alt="Corrugated Iron Structure" className="broiler-structure-image" />
              <p>Image: Gas Brooder </p>
              <ul>
                <li>Application: From 1 – 21 day old chicks</li>
                <li>Consumption Max: 130g per hour at 300mm</li>
                <li>Heat Capacity: 600 Chicks</li>
                <li>Installation: 117cm from ground level</li>
              </ul>
            </div>
          </div>
          {/* Side-by-Side Images Section */}
        <div className="broiler-images">
            <div className="broiler-image-container">
              <img src={heating3Image} alt="Concrete Mason Structure" className="broiler-structure-image" />
              <p>Image: High Pressure Regulator</p>
            </div>
            <div className="broiler-image-container">
              <img src={heating4Image} alt="Corrugated Iron Structure" className="broiler-structure-image" />
              <p>Image: Low Pressure Regulator</p>
            </div>
          </div>
          <p>Maintaining the correct Environmental Temperature will result in chicks expending energy on growth rather than on just surviving.</p>
          <p>NB!!! Since Gas will be used as an Energy source it is important to make sure it doesn’t run out in the middle of the night, during brooding or on cold days.  </p>
          <h4>Brooding Guard/Boards</h4>
          <p>Brooding guards/boards help keep chicks within the brooder and help protect them from predators. There are many different types of brooder guards on the market. Most brooder guards are corrugated boards that are used together with brooder guard stands. </p>
          <div className="broiler-images">   
          <div><img src={broodingImage} alt="Concrete Mason Structure" className="broiler-structure-image" />
            
            </div>
          </div>
          <p>Depending on the number of chicks one decides to grow that will determine the size of your brooding guard/ board.</p>
          <p>Whatever material you decide to use, as long as it insolates heat, generally people use 2 wooden doors but in some cases Cardboard can be used.</p>
          <div class="brooding-preparation">
              <h2>Preparation of the Brooding House</h2>
              
              <p><strong>a.</strong> The brooder house should be cleaned and disinfected or fumigated at least two weeks before the chicks arrive. If this is not done, the chicks may be exposed to certain poultry diseases, which can lead to mortality and poor results.</p>
              
              <p><strong>b.</strong> First, sweep or wash down cobwebs, dirt, and dust, then use a good disinfectant. There are several effective commercial disinfectants available. They should be used according to the manufacturers’ recommendations. Some of them require that the house stand idle for a period of time and be thoroughly aired before the chicks arrive. Failure to observe these precautions may cause the chicks to have severely burned feet and eyes.</p>
              
              <p><strong>c.</strong> After the brooder house has been cleaned and disinfected, it should be allowed to dry thoroughly before putting in the new litter. When the floor is dry, cover it with 2-4 cm of litter material. The litter material serves to absorb moisture and insulate the floor for the comfort of the birds. Several different materials may be used for litter, with wood shavings being among the most commonly used whenever available.</p>
              
              <p><strong>d.</strong> When chicks are extremely hungry upon arrival, they may try to eat the litter before learning to eat feed. If you have reason to believe that the chicks have been hatched for two or three days when they arrive, it may be a good idea to put paper over the litter for the first three or four days until they learn to eat. When chicks are received soon after hatching, it is not necessary to do this.</p>
              
              <p><strong>e.</strong> The gas brooders should be started several hours before the chicks are due to arrive. This will ensure that the equipment is operating properly and is adjusted to the correct temperature.</p>
              
              <p><strong>f.</strong> Use a brooding guard/board to confine the chicks to the source of heat. The brooding guard/board keeps the chicks confined to a given brooder or heater and also prevents migration and overcrowding of some brooders if more than one brooder is used in the brooding facility. It will also help to prevent drafts on the chicks under the brooder.</p>
              
              <p><strong>g.</strong> A corrugated cardboard guard, approximately knee-high, is suitable for this purpose during cool weather. For warm-weather brooding, the brooding guard/board may be made of poultry netting. It should form a circle around the brooder about 3 feet in diameter. The brooding guard/board can be extended outward after 14 days.</p>
              
              <p><strong>h.</strong> Fill the feeders and waterers several hours before the chicks arrive. The water will be at room temperature when the chicks arrive, encouraging them to drink. The feed trays and water fountains should be spaced uniformly around the brooder and close to the hover.</p>
          </div>
          <div className="broiler-images">   
          <div><img src={ventilationImage} alt="Concrete Mason Structure" className="broiler-structure-image" />
            
            </div>
          </div>
          <h4>NB!!!  Ventilation of the brooder house is restricted for the first 1-2 weeks.</h4>
          <p>For the first four days of brooding, the chicks are supplied feed in shallow feeders like feed trays or thick sheets of paper. Freshwater is supplied every day.</p>
          <p>Apart from managing the chicks by regulating temperature, ventilation and providing feed, there are certain routine daily operations that must be followed in the same sequence from morning to evening:</p>
          <ul>
            <li>Remove all dead chicks from the flock to prevent cannibalism and possible infection by pathogenic organisms.</li>
            <li>Fresh feed is supplied and constantly spread by hand.</li>
            <li>Drinkers are taken out and washed thoroughly before being filled with clean cool water.</li>
          </ul>

      
      
      </div>

      <div className="broiler-section" ref={lightingRef}>
        <h2>Lighting</h2>
        <div class="light-program">
            <p><strong>The following general light program is recommended for feeding:</strong></p>
            
            <table border="1" cellpadding="10" cellspacing="0">
                <thead>
                    <tr>
                        <th>Age in days</th>
                        <th>Hours of light provided per day for feeding</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0 - 7 days</td>
                        <td>23 hours</td>
                    </tr>
                    <tr>
                        <td>From 8 days old to slaughter</td>
                        <td>16 - 18 hours</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>Because gut development is of utmost importance during the first few days it is critical that the birds only sleep for 1 hour during the first seven days. Feeding non-stop causes wastage and can cause organ failure during later stages of the cycle. Remember, above lighting program only provides a general guideline and other factors such as seven-day mortalities and weight etc. also needs to be considered</p>

      </div>

      <div className="broiler-section" ref={stockingRef}>
        <h2>Stocking/Flock Density: How many chicks can fit</h2>
        <div class="brooder-info">
            <ul>
                <li>Initially day-old chicks require <strong>45 square centimeters per chick</strong> under brooder (plus minus 7cm by 6.5cm)</li>
            </ul>
            
            <p><strong>Brooder</strong> – is just a fancy word used in poultry to describe a demarcated/designated place (usually within your broiler house) to keep baby chicks until they are big enough for a coop/house.</p>
            
            <p><strong>Formula:</strong></p>
            <p>Diameter of Brooder = √58 × no. of chicks</p>
            
            <p>or</p>
            
            <p>No. of chicks = <sup>0.25 π D<sup>2</sup></sup> / 45cm<sup>2</sup></p>
        </div>

      </div>

      <div className="broiler-section" ref={feedingRef}>
        <h2>Feeding</h2>
        <p>Feeding Space, feeder height and the provision of good quality feed is important to ensure efficient feed intake and to avoid feed spillage. As a rule of thumb for amount of feeders – all chicks should to be able to feed at once.</p>
        <p>Broilers require more than fifty nutritional elements in balanced and adequate quantities to maintain the various biological processes necessary for life, growth and health.</p>
        <p>Feed requirements change as the chicks grow and that is why the use of phased diets is recommended. Each diet is formulated specifically to meet the nutrient requirements of broilers at a particular stage in their growth. </p>
        <p>(In large-scale broiler enterprises as many as five different diets are used during a production cycle but the use of three different diets is common practice in small-scale broiler production.)</p>
        <h4>NB!!! Trying to save money on feed will end up costing the farmer more in the end. It is as important as purchasing the highest quality chicks from the start.</h4>
        <div class="light-program">
            <p><strong>Typical quantities of feed required are as follows:</strong></p>
            
            <table border="1" cellpadding="10" cellspacing="0">
                <thead>
                    <tr>
                        <th>Diet Type/ Phase (Age in Days)</th>
                        <th>Feed required per 100 Chicks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Starter (Day 1 – 21)</td>
                        <td>100 kg</td>
                    </tr>
                    <tr>
                        <td>Grower (Day 22 – 35)</td>
                        <td>150 kg</td>
                    </tr>
                    <tr>
                        <td>Finisher (Day 36 – 42)</td>
                        <td>100 – 150 kg</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <h3>Feed Form:</h3>
            <ul>
                <li>
                    <strong>Starter Phase:</strong> Crumble/Mash<br />
                    <span style={{ marginLeft: '20px' }}>Particle size between 1-3mm (Majority)</span>
                </li>
                <li>
                    <strong>Grower Phase:</strong> Pelleted<br />
                    <span style={{ marginLeft: '20px' }}>Pellet diameter between 3.5 and 5mm</span>
                </li>
                <li>
                    <strong>Finisher/Post Finisher:</strong> Pelleted<br />
                    <span style={{ marginLeft: '20px' }}>Pellet diameter between 3.5 and 5mm</span>
                </li>
            </ul>
        </div>
        <p>Benefit of crumbling/pelleting, Ease of intake, Reduced wastage, Degree of processing due to high temperature (starch gelatinization). </p>


      </div>

      <div className="broiler-section" ref={hygieneRef}>
        <h2>Hygiene Practices</h2>
        {/* Add content */}
      </div>

      <div className="broiler-section" ref={healthRef}>
        <h2>Broiler Health and Diseases</h2>
        {/* Add content */}
      </div>

      <div className="broiler-section" ref={productionRef}>
        <h2>Broiler Production and Management Practices</h2>
        {/* Add content */}
      </div>

      <div className="broiler-section" ref={marketingRef}>
        <h2>Marketing and Selling</h2>
        {/* Add content */}
      </div>

      <div className="broiler-section" ref={stepByStepRef}>
        <h2>Step by Step Process of Putting Everything You’ve Learned Together</h2>
        {/* Add content */}
      </div>

      
      {/* Scroll Up Button */}
      <button className="scroll-up-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
}

export default BroilerPage;
