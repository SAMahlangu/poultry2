import React, { useRef } from 'react';
import './Incubation.css'; // Import the CSS file
import incub0 from '../assets/incub0.png'; // Adjust the path to point to your image
import incub1 from '../assets/incub1.png'; // Adjust the path to point to your image
import incub2 from '../assets/incub2.png'; // Adjust the path to point to your image
import incub3 from '../assets/incub3.png'; // Adjust the path to point to your image
import incub4 from '../assets/incub4.png'; // Adjust the path to point to your image
import incub5 from '../assets/incub5.png'; // Adjust the path to point to your image
import incub6 from '../assets/incub6.png'; // Adjust the path to point to your image
import incub7 from '../assets/incub7.png'; // Adjust the path to point to your image
import incub8 from '../assets/incub8.png'; // Adjust the path to point to your image
import incub9 from '../assets/incub9.png'; // Adjust the path to point to your image
import incub10 from '../assets/incub10.png'; // Adjust the path to point to your image


function IncubatorPage() {
  // Create references for each section
  const basicsRef = useRef(null);
  const diyIncubatorRef = useRef(null);
  const preparationRef = useRef(null);
  const hatchingProcessRef = useRef(null);
  const newbornCareRef = useRef(null);

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
    <div className="incubation-container">
      <h1 className="incubation-title">Egg Incubation Guide</h1>

      <ol className="incubation-list">
        <li onClick={() => scrollToSection(basicsRef)} style={{ cursor: 'pointer' }}>
          Understanding the Basics of Egg Incubation
          <ul>
            <li>Types of Incubators</li>
            <li>Incubation Period and Conditions</li>
          </ul>
        </li>
        <li onClick={() => scrollToSection(diyIncubatorRef)} style={{ cursor: 'pointer' }}>
          Make Your Own Incubator: DIY
          <ul>
            <li>Equipment Needed for DIY Incubator</li>
            <li>Step-by-Step: Assembling a DIY Incubator</li>
          </ul>
        </li>
        <li onClick={() => scrollToSection(preparationRef)} style={{ cursor: 'pointer' }}>
          Preparing for Hatching
          <ul>
            <li>Selecting Fertile Eggs</li>
            <li>Setting Up Incubator</li>
            <li>Candling the Eggs</li>
          </ul>
        </li>
        <li onClick={() => scrollToSection(hatchingProcessRef)} style={{ cursor: 'pointer' }}>
          The Hatching Process
          <ul>
            <li>Monitoring Temperature and Humidity</li>
            <li>Turning the Eggs</li>
            <li>Candling</li>
            <li>Pre-Hatching</li>
            <li>Baby Chicks Start Hatching</li>
          </ul>
        </li>
        <li onClick={() => scrollToSection(newbornCareRef)} style={{ cursor: 'pointer' }}>
          Caring for Newborn Chicks
        </li>
      </ol>

      <section ref={basicsRef} className="incubation-section">

      <p>
        <strong>Can one incubate store-bought eggs for hatching?</strong><br />
        The answer to that is <strong>NO</strong>. Store-bought eggs are usually not viable for incubation and hatching. 
        <ul>
        <li>Most eggs sold in grocery stores are unfertilized, as they come from hens that have not been in contact with a rooster.</li>
        <li>Even if the eggs are fertilized, they are typically refrigerated, drastically reducing the chances of successful incubation.</li>
        </ul>
        To hatch eggs, you need fertilized eggs from a farm or supplier that keeps both hens and roosters together. These eggs must be fresh and stored under proper conditions before incubation.
    </p>
    <div className="incubation-image-container">
              <img src={incub0} alt="incub0" className="incubation-structure-image" />              
            </div>
        <h2>Understanding the Basics of Egg Incubation</h2>
        
        <p>
            <strong>Incubation:</strong> An incubator is basically a box that holds eggs while maintaining the appropriate 
            temperature, humidity, and oxygen levels for hatching. Incubators come in various sizes and can be adapted for 
            eggs from different species (but our focus here is for chickens).
        </p>
        
        <h3>1.1 Types of Incubators</h3>
        <ul>
            <li>
            <strong>Still-air Incubators:</strong> These incubators have no fans and rely on natural air circulation to 
            keep the temperature and humidity consistent. They are simpler and less expensive but require more manual intervention.
            </li>
            <li>
            <strong>Forced-air Incubators:</strong> These incubators have fans that circulate air evenly throughout the 
            incubator, making temperature and humidity control easier and more precise. They are more expensive but 
            require less manual intervention.
            </li>
        </ul>
        
        <p>
            Most artificial incubators vary in size and depend on electricity as a power source. They use thermostatic 
            switching devices to monitor and maintain a constant temperature within one Celsius degree. The correct humidity 
            is usually maintained by having a pre-determined surface area of water appropriate for each incubator chamber.
        </p>
        
        <p>
            Turning the eggs several times each day is important to prevent the embryo from sticking to the shell membranes. 
            With hand-turning systems, an odd number of turns per day (5-7 times) ensures that during successive overnight 
            periods, the egg is always oriented opposite to the previous night.
        </p>
        
        <h3>1.2 Incubation Period and Conditions</h3>
        <p>
            The incubation period for chicken eggs is 20 to 21 days, increasing up to 30 days for other species. Initially, 
            eggs need very controlled heat input to maintain the optimal temperature of 38°C, as the embryo is microscopic 
            in size. As the embryo grows (especially after 18 days), it produces more heat than it requires and may even 
            need cooling.
        </p>
        
        <p>
            Moisture levels of 60 to 80% relative humidity (increasing during the incubation period) are crucial to prevent 
            excessive moisture loss from the eggshell and membranes.
        </p>
        </section>

      <section ref={diyIncubatorRef} className="incubation-section">
            <h2>Make Your Own Incubator: DIY</h2>

            <h3>Advantages of a DIY Incubator</h3>
            <ul>
                <li>It is cheaper.</li>
                <li>You can make it largely from recycled material found at home.</li>
            </ul>

            <h3>Disadvantages of a DIY Incubator</h3>
            <ul>
                <li>
                It is difficult to maintain proper temperature and humidity levels. 
                <strong>Note:</strong> These are the two most critical parts of incubation, and improper control can lead to poor hatch rates.
                </li>
                <li>DIY incubators tend not to work well in rooms with low or fluctuating temperatures.</li>
                <li>The average hatch rate for DIY incubators is generally around 33% to 50%.</li>
            </ul>

            <p>
                <strong>Note:</strong> In any clutch of eggs, some may not hatch due to reasons unrelated to the incubator, such as low fertility, 
                time of year, handling and transport issues, poor storage, or bacterial infections.
            </p>

            <h3>2.1 Equipment Needed for a DIY Incubator</h3>
            <ol>
                <li>
                <strong>The Container:</strong> It needs to be well-insulated to maintain constant heat and humidity levels. Examples include 
                a Styrofoam cooler box or a fish tank with a lid.
                </li>
                <div className="incubation-images-container">
                    <div className="incubation-image-container">
                        <img src={incub1} alt="incub1" className="incubation-structure-image" />
                        <p>Image: Styrofoam Cooler box</p>
                    </div>
                    <div className="incubation-image-container">
                        <img src={incub2} alt="incub2" className="incubation-structure-image" />
                        <p>Image: Fish tank with a Lid</p>
                    </div>
                </div>

                <li>
                <strong>Heating Element (Light Bulb):</strong> A standard 25-watt bulb attached to a lamp fitting can be used, or an electric 
                heating pad if available.
                </li>
                <div className="incubation-image-container">
                    <img src={incub3} alt="incub3" className="incubation-structure-image" />
                    <p>Image: Standard 25 Watt light bulb</p>
                </div>        
                <li>
                <strong>Pebbles/Stones:</strong> These help sustain a constant temperature by retaining heat at the bottom of the container.
                </li>
                <div className="incubation-image-container">
                    <img src={incub4} alt="incub4" className="incubation-structure-image" />
                    <p>Image: Rocks/ Pebbles</p>
                </div> 
                <li>
                <strong>Wire Mesh:</strong> This separates the heating element from the eggs and later the chicks, reducing the risk of burns 
                or other hazards.
                </li>
                <div className="incubation-image-container">
                    <img src={incub5} alt="incub5" className="incubation-structure-image" />
                    <p>Image: Wired Mesh</p>
                </div> 
                <li>
                <strong>Bowl and Sponge:</strong> These are used to hold water and maintain the correct humidity levels. Ensure the bowl is 
                placed securely to avoid any danger to hatching chicks.
                </li>
                <div className="incubation-images-container">
                    <div className="incubation-image-container">
                        <img src={incub6} alt="incub6" className="incubation-structure-image" />
                        <p>Image: Bowl</p>
                    </div>
                    <div className="incubation-image-container">
                        <img src={incub7} alt="incub7" className="incubation-structure-image" />
                        <p>Image: Sponge</p>
                    </div>
                </div>
                <li>
                <strong>Temperature and Humidity Monitor:</strong> A thermometer and a hygrometer are essential for monitoring temperature 
                and humidity near the eggs. Some setups may include a fan (e.g., a computer fan) for better air circulation.
                </li>
                <div className="incubation-image-container">
                        <img src={incub8} alt="incub8" className="incubation-structure-image" />
                        <p>Image: Themometer and Humidity Gadge</p>
                    </div>
                <li>
                <strong>Duct Tape:</strong> Used for insulation, sealing any gaps or holes that could affect temperature and humidity levels.
                </li>
                <div className="incubation-image-container">
                        <img src={incub9} alt="incub9" className="incubation-structure-image" />
                        <p>Image: Duct tape</p>
                    </div>
                <li>
                <strong>Picture Frame Glass:</strong> Used to create an observation hole in the incubator for monitoring without frequent 
                opening.
                </li>
                <div className="incubation-image-container">
                        <img src={incub10} alt="incub10" className="incubation-structure-image" />
                        <p>Image: Glass of the frame</p>
                    </div>
            </ol>

            <h3>2.2 Step-by-Step: Assembling a DIY Incubator</h3>
            <ol>
                <li>
                <strong>Step 1:</strong> Cut a hole in the lid of the Styrofoam cooler to fit the picture frame glass. This will serve as the 
                observation window. Seal any gaps with duct tape.
                </li>
                <li>
                <strong>Step 2:</strong> Use wire mesh to divide the cooler into two sections: one for the eggs and the bowl of water, and 
                another for the light bulb and pebbles. Bend the mesh into a "Z" shape.
                </li>
                <li>
                <strong>Step 3:</strong> Create a hole on one side of the cooler to fit the light bulb holder. Position the hole near the top 
                and ensure the bulb does not touch the sides to avoid fire hazards. Seal gaps with duct tape.
                </li>
                <li>
                <strong>Step 4:</strong> Insert the light bulb and place the bent mesh inside. Ensure the lower part of the "Z" is at the bottom 
                for the eggs and the higher part covers the bulb.
                </li>
                <li>
                <strong>Step 5:</strong> Test the incubator before placing eggs. Adjust temperature and humidity as needed. Use duct tape to 
                seal any excessive holes or add water to adjust humidity levels.
                </li>
                <li>
                <strong>Step 6:</strong> Place the eggs, thermometer, hygrometer, and water bowl with a sponge on the lower section of the 
                mesh. Add pebbles under the light bulb to help retain heat.
                </li>
                <li>
                <strong>Step 7:</strong> Use fertilized eggs obtained from a reliable farm for better hatching success.
                </li>
            </ol>
        </section>

        <section ref={preparationRef} className="incubation-section">
            <h2>Preparing for Hatching</h2>

            <h3>3.1 Selecting Fertile Eggs</h3>
            <ul>
                <li>Choose eggs from healthy, well-fed parent stock, ideally between 6 months and 2 years old. Store-bought eggs are not viable.</li>
                <li>Eggs should be medium-sized, regularly shaped, clean, and have smooth, undamaged shells. Irregularities can lead to poor hatch rates.</li>
                <li>Use fresh eggs no older than 7 days, stored at 12-15°C with 50-55% relative humidity, small end down, if not incubated immediately.</li>
                <li>Do not wash the eggs to preserve the natural protective layer; gently brushing off dirt is acceptable.</li>
                <li>Candling before incubation can help identify fertile eggs. Prefer eggs with a history of producing healthy chicks when possible.</li>
            </ul>

            <h3>3.2 Setting Up Incubator</h3>
            <p>Prepare the incubator a week before introducing the eggs:</p>
            <ul>
                <li>Clean the incubator with a 10% bleach solution, warm soapy water, and a thorough rinse. Ensure it is completely dry.</li>
                <li>Turn the incubator on and ensure it maintains a constant temperature and humidity.</li>
                <li>Place the incubator in a stable temperature environment with no drafts.</li>
            </ul>
            <p><strong>Temperature and Humidity Guidelines:</strong></p>
            <ul>
                <li>Optimum Temperature: 37.5–37.8°C</li>
                <li>Temperature Range: 37–38.5°C (Avoid drops below 37°C and prolonged periods above 38.5°C.)</li>
                <li>Relative Humidity, Day 1-17: 50-55% (Keep water channels full.)</li>
                <li>Relative Humidity, Day 18-21: 70% (Use a hydrometer to monitor.)</li>
                <li>Minimize opening the incubator to maintain heat and humidity.</li>
                <li>Increase ventilation as embryos grow, especially from days 18-21.</li>
            </ul>

            <h3>3.3 Candling the Egg</h3>
            <p>Candling involves shining a bright light through the egg to check fertility and embryo development. Here's how:</p>
            <ul>
                <li>Use a bright light source below the egg and hold it gently against the light source in a dark room.</li>
                <li>Observe the interior for signs of development.</li>
            </ul>

            <h4>3.3.1 Why is Candling Important?</h4>
            <ul>
                <li>Determines fertility and monitors embryo growth.</li>
                <li>Identifies abnormalities or defects.</li>
                <li>Allows removal of non-viable eggs to prevent contamination.</li>
            </ul>

            <h4>3.3.2 Duration and Frequency</h4>
            <ul>
                <li>Candle eggs once between days 7–10 and again on day 18.</li>
                <li>Keep sessions short, around 2–5 minutes per egg.</li>
            </ul>

            <h4>3.3.3 Positioning Eggs for Candling</h4>
            <ul>
                <li>Place eggs with the pointed end down on a flat surface.</li>
                <li>Hold gently or use an egg holder to stabilize.</li>
                <li>Rotate slowly to examine the entire shell.</li>
            </ul>

            <h4>3.3.4 Proper Lighting Conditions</h4>
            <ul>
                <li>Conduct candling in a dark room with minimal external light.</li>
                <li>Use a bright, focused light source like a candling lamp or LED flashlight.</li>
                <li>Position the light source directly above the egg.</li>
            </ul>

            <h4>3.3.5 Interpreting Candling Results</h4>
            <ul>
                <li>Fertile eggs: Signs of development, such as a dark spot or "blastoderm."</li>
                <li>Infertile eggs: Clear with no signs of development.</li>
                <li>Blood rings: Indicate embryo mortality and should be removed.</li>
            </ul>

            <h4>3.3.6 Recognizing and Addressing Abnormalities</h4>
            <ul>
                <li>Blood rings: Remove affected eggs to avoid contamination.</li>
                <li>Deformed embryos: Monitor incubator conditions and handle carefully.</li>
            </ul>
            </section>

      <section ref={hatchingProcessRef} className="incubation-section">
            <h2>The Hatching Process</h2>
            <p>
                <strong>DAY 1: Setting Eggs</strong><br />
                Once you have the incubator set up and have analyzed the settings to ensure accuracy, you are ready to place the eggs inside the incubator. This process is called “Setting the Eggs.”
                <ul>
                <li>Set a minimum of 6 eggs at one time. Fewer eggs often result in one or no hatching, especially if transported over long distances.</li>
                <li>Place the eggs in the incubator with the larger end facing up and the narrow end facing down.</li>
                <li>Set the temperature to 38°C with a humidity of 50-55%.</li>
                </ul>
            </p>

            <p>
                <strong>DAY 1-18: Turning the Eggs</strong><br />
                After setting the eggs, the incubation process begins. Turning, or rotating the eggs, is a critical part of this process.
                <ul>
                <li>Eggs must be turned a minimum of 3 times per day, ideally 5 times.</li>
                <li>If turning manually, use a pencil to mark the eggs for tracking purposes (avoid pens).</li>
                <li>Automatic incubators will handle this step for you.</li>
                <li>Wash hands or wear clean gloves before touching eggs to prevent contamination.</li>
                </ul>
            </p>

            <p>
                <strong>DAY 7-10: Candling Eggs</strong><br />
                Towards the middle of the incubation period (days 7-10), candle the eggs to monitor embryo development.
                <ul>
                <li>If the inside is clear, the egg is infertile or the embryo died early—remove this egg.</li>
                <li>A ring of red indicates a previously live embryo that has died—remove this egg.</li>
                <li>If blood vessels are visible, the embryo is alive and developing normally.</li>
                <li>Remove broken or leaking eggs to avoid contamination.</li>
                </ul>
            </p>

            <p>
                <strong>DAY 18-21: Pre-Hatching</strong><br />
                By day 18, embryos have developed into chicks. Adjust the incubator to support this phase:
                <ul>
                <li>Stop turning eggs at day 18 with the larger end facing up.</li>
                <li>Maintain a temperature of 38°C and increase humidity to 70%.</li>
                </ul>
            </p>

            <p>
                <strong>DAY 21: Baby Chicks Start Hatching</strong><br />
                Chicks typically hatch at day 21, but the process can take longer if the eggs were cooled prior to incubation. During this stage:
                <ul>
                <li>Let the chicks hatch on their own to avoid damaging blood vessels.</li>
                <li>Chicks may take up to 24 hours to hatch fully, although 5-7 hours is more common.</li>
                <li>The peeping of hatched chicks encourages unhatched eggs to start hatching.</li>
                <li>Lower the incubator temperature to 35°C after hatching, and transfer the dried chicks to a brooder with a temperature of 32-35°C.</li>
                </ul>
            </p>
            </section>

      <section ref={newbornCareRef}>
        <h2>Caring for Newborn Chicks</h2>
        {/* Content for newborn care */}
      </section>

      {/* Scroll Up Button */}
      <button className="scroll-up-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
}

export default IncubatorPage;
