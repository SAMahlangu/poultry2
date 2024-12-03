import React, { useRef } from 'react'; // Import useRef if using refs
import './Layer.css'; // Import the CSS file
import layer1 from '../assets/layer1.png'; // Adjust the path to point to your image
import layer2 from '../assets/layer2.png'; // Adjust the path to point to your image
import layer3 from '../assets/layer3.png'; // Adjust the path to point to your image
import layer4 from '../assets/layer4.png'; // Adjust the path to point to your image
import layer5 from '../assets/layer5.png'; // Adjust the path to point to your image
import layer6 from '../assets/layer6.png'; // Adjust the path to point to your image
import layer7 from '../assets/layer7.png'; // Adjust the path to point to your image
import layer8 from '../assets/layer8.png'; // Adjust the path to point to your image
import layer9 from '../assets/layer9.png'; // Adjust the path to point to your image
import layer10 from '../assets/layer10.png'; // Adjust the path to point to your image
import layer11 from '../assets/layer11.png'; // Adjust the path to point to your image





function LayerPage() {
    // Create references for each section
    const introductionRef = useRef(null);
    const productionRef = useRef(null);
    const startingFarmingRef = useRef(null);
    const housingRef = useRef(null);
    const stockingRef = useRef(null);
    const healthRef = useRef(null);
    const vaccinationRef = useRef(null);
    const nutritionRef = useRef(null);
    const eggProductionRef = useRef(null);
  
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
      <div className="layer-container">
        <h1 className="layer-title">Layer Production Guide</h1>
        
        <ol className="layer-list">
          <li onClick={() => scrollToSection(introductionRef)} style={{ cursor: 'pointer' }}>
            Introduction to Layers
          </li>
          <li onClick={() => scrollToSection(productionRef)} style={{ cursor: 'pointer' }}>
            Production of Layers
          </li>
          <li onClick={() => scrollToSection(startingFarmingRef)} style={{ cursor: 'pointer' }}>
            Starting Your Poultry Farming
          </li>
          <li onClick={() => scrollToSection(housingRef)} style={{ cursor: 'pointer' }}>
            Housing for Poultry
          </li>
          <li onClick={() => scrollToSection(stockingRef)} style={{ cursor: 'pointer' }}>
            Stocking Density in Layer Cages
          </li>
          <li onClick={() => scrollToSection(healthRef)} style={{ cursor: 'pointer' }}>
            Flock Health and Hygiene
          </li>
          <li onClick={() => scrollToSection(vaccinationRef)} style={{ cursor: 'pointer' }}>
            Vaccination
          </li>
          <li onClick={() => scrollToSection(nutritionRef)} style={{ cursor: 'pointer' }}>
            Nutrition for Layer Hens
          </li>
          <li onClick={() => scrollToSection(eggProductionRef)} style={{ cursor: 'pointer' }}>
            Egg Production
          </li>
        </ol>
  
        {/* Sections */}
        <div ref={introductionRef} className="layer-section">
            <h2>Introduction to Layers</h2>
            <p>
                The layer industry has transformed dramatically since the 1950s, when 
                commercialized farming in battery cages first began. In pursuit of increased 
                efficiency, breeding companies, the feed industry, and equipment suppliers 
                have all played significant roles in continual improvements.
            </p>
            <p>
                Today’s egg layers can produce over 300 eggs per cycle until 72 weeks of age. 
                Effective layer house management focuses on maximizing this potential with 
                minimal feed, ensuring eggs meet grading and quality standards. Achieving 
                this requires well-maintained housing systems and equipment, and a deep 
                understanding of their functioning.
            </p>
            <p>
                Comprehensive knowledge of housing conditions, management techniques, and 
                handling common diseases are vital for successful egg production. This Guide 
                shares experiences managing commercial layers in Southern Africa and is a 
                guide to the commercial housing and management of layers, featuring written 
                text and photographic illustrations.
            </p>
        </div>


        <div ref={productionRef} className="layer-section">
            <h2>Production of Layers</h2>
            <div className="layer-image-container">
              <img src={layer1} alt="layer1" className="layer-structure-image" />
              <p><strong className="image-caption">Image: free Range (Choice 2015)</strong></p>
            </div>
            <p>
                Layer poultry production has seen significant advancements over the past five 
                decades. Numerous chicken breeds exist, but selective breeding for productivity 
                has led to specialized breeds for meat and egg production. The primary objective 
                of any layer farm is to maximize egg output while minimizing costs. Throughout 
                the pullet's growth, various management practices can impact its overall egg 
                production. Effective management and access to information are crucial for 
                successful egg production.
            </p>
            <p>
                To excel as an egg producer, one must master the daily operations of running a 
                layer farm, with a key focus on feed. Proper feed availability and application in 
                the layer house are essential, as feed accounts for roughly 60-75% of total 
                operating costs. Utilizing a balanced, cost-effective feed ration is vital.
            </p>
            <h3>2.1. Different Systems of Layer Farming</h3>
            <h4>2.1.1. Free-Range System</h4>
            <p>
                The free-range system allows hens to roam freely within a fenced outdoor area, 
                with minimal or partial housing. When deciding between free-range and battery 
                systems, considerations like animal welfare and the initial costs of setting up 
                a battery system play a crucial role.
            </p>
            <p>
                Typically, free-range systems result in a higher feed conversion ratio due to the 
                increased movement of hens, leading to greater energy expenditure and higher 
                production costs. This additional cost is a significant factor in determining the 
                economic viability of free-range production. Producers should also ensure they 
                receive a premium for their eggs to offset these expenses.
            </p>
            <h4>2.1.2. Factors to Consider When Farming with Layers on Free-Range System:</h4>
            <ul>
                <li>Hens tend to lay eggs in dark corners, so constructing nesting boxes will help minimize the time spent hunting for eggs.</li>
                <li>To prevent predation, bring the hens into a secure cage at night.</li>
                <li>Collect eggs daily to avoid hens becoming broody.</li>
                <li>Ensure water and feed are always accessible.</li>
                <li>Perform daily health checks on hens to maintain their well-being.</li>
                <li>Be prepared for an increased effort in cleaning eggs, as free-range systems often result in more dirty eggs.</li>
            </ul>

            <h4>2.2. Battery/Caged System</h4>
            <div className="layer-image-container">
              <img src={layer2} alt="layer2" className="layer-structure-image" />
              
            </div>
            <p>
                A battery-caged system involves housing numerous layers in elevated cages, 
                providing a controlled environment. This intensive system typically results in 
                higher egg yields due to reduced movement, better management of feed intake, 
                and stable environmental conditions such as temperature control compared to free-
                range systems.
            </p>
            <p>
                Despite the high startup costs, a battery system significantly lowers the risks 
                of salmonella contamination and parasite infestations.
            </p>
            <h4>2.2.1. Factors to Consider When Farming with Layers in Battery/Caged System:</h4>
            <ul>
                <li>Hens rely entirely on provided feed, which must always be available.</li>
                <li>Cage floors should be cleaned weekly to maintain hygiene.</li>
                <li>Chickens need monitoring to ensure they locate food and water.</li>
                <li>Enhancing production involves adding stress powder and vitamins to water bi-weekly.</li>
                <li>Choosing a system depends on market demands, personal preferences, available space, and financial resources.</li>
            </ul>
        </div>

        <div ref={startingFarmingRef} className="layer-section">
            <h2>Starting Your Poultry Farming</h2>
            <p>
                When beginning your poultry farming venture, you have two primary options to consider:
            </p>
            <ol>
                <li>
                    <strong>Point of Lay Hens:</strong> These are hens that are ready to begin laying eggs shortly after arrival on your farm. This option provides a quicker return on investment since the hens are already mature and prepared to lay eggs. They require less initial care and management compared to younger chicks, making them a suitable choice for those looking to minimize the start-up phase and immediately enter the egg production stage.
                </li>
                <li>
                    <strong>Day-Old Layer Chicks:</strong> Alternatively, you can start with day-old layer chicks. This option requires more time and effort as the chicks need to be raised until they reach the point of lay. However, it allows for greater control over their upbringing, including diet, health management, and environmental conditions. This can potentially lead to a more robust and productive flock in the long run. Starting with day-old chicks may also be more cost-effective initially, though it involves a longer period before seeing returns.
                </li>
            </ol>
            <p>
                Both options have their advantages and challenges, and the best choice depends on your resources, timeline, and experience level in poultry farming. Careful consideration of your specific circumstances and objectives will help you make the most informed decision for a successful start in poultry farming.
            </p>
            <h3>3.2. Day-Old Chicks</h3>
            <p><strong>Advantages:</strong></p>
            <ul>
                <li>Purchasing day-old chicks is more cost-effective compared to buying point-of-lay hens.</li>
                <li>Raising the chicks yourself allows for better control over the quality of the hens you produce.</li>
                <li>When raised properly, hens tend to stay productive for a longer period.</li>
                <li>You could manage their vaccination, ensuring they develop strong immunity against diseases.</li>
            </ul>
            <p><strong>Disadvantages:</strong></p>
            <ul>
                <li>Raising hens from day-old chicks to the point of lay carries the risk of higher mortality rates.</li>
                <li>A good cash flow is essential, as they do not produce eggs during the initial 18-week growing period.</li>
                <li>You will incur costs for vaccination and feed without immediate financial returns.</li>
                <li>Requires specific skills and knowledge in poultry farming to raise the chicks successfully.</li>
            </ul>
            <p>
                By understanding the pros and cons, you can make a well-informed decision on whether starting with day-old chicks suits your farming strategy and resources.
            </p>
            <h3>3.2.1. Point of Lay Hens</h3>
            <p><strong>Advantages:</strong></p>
            <ul>
                <li>Hens begin egg production immediately or shortly after purchase.</li>
                <li>There is no feed cost associated with raising chicks.</li>
                <li>Lower vaccination costs.</li>
                <li>Mortality rates are lower compared to day-old chicks.</li>
                <li>No roosters are included.</li>
            </ul>
            <p><strong>Disadvantages:</strong></p>
            <ul>
                <li>Point of lay hens are more expensive to purchase than day-old chicks.</li>
                <li>There is a risk of disease introduction if hens are not bought from a reputable supplier.</li>
                <li>Verified rearing programs may not be available to support future production claims.</li>
            </ul>
            <p>
                This overview helps to consider the pros and cons of starting your poultry farm with point of lay hens, providing a solid foundation for making an informed decision based on your specific needs and circumstances.
            </p>
        </div>


        <div ref={housingRef} className="layer-section">
            <h2>Housing for Poultry</h2>
            <div className="layer-image-container">
                <div className="image-wrapper">
                    <img src={layer3} alt="layer3" className="layer-structure-image" />
                    
                </div>
                
                <div className="image-wrapper">
                    <img src={layer4} alt="layer4" className="layer-structure-image" />
                    
                </div>
            </div>

            <h3>4.1. Orientation and Structure:</h3>
            <ul>
                <li><strong>East to West Alignment:</strong> Construct the poultry house with its shortest closed sides facing East to West. This orientation helps to minimize the exposure to direct sunlight and reduces heat stress.</li>
                <li><strong>Side Curtains:</strong> Install side curtains that open from the top to the bottom. This design enhances ventilation while preventing direct airflow on the hens, which can be uncomfortable or stressful for them.</li>
            </ul>
            
            <h3>Insulation and Temperature Control:</h3>
            <ul>
                <li><strong>Insulation:</strong> Insulating the house can help to stabilize temperatures by retaining heat during cooler nights and keeping the environment cool during the day.</li>
                <li><strong>Roof Overhang and Gutters:</strong> Extend the roof overhang to protect the hens from rain. Using gutters to divert and collect rainwater not only prevents waterlogging but also provides a sustainable water source for the farm.</li>
            </ul>

            <h3>Flooring:</h3>
            <ul>
                <li><strong>Concrete Floors:</strong> Concrete floors are preferred for their hygiene and ease of cleaning, although they are more expensive. All floors should be covered with appropriate bedding material to ensure comfort and hygiene for the hens.</li>
                <li><strong>Ground Floor Rearing:</strong> While ground floor rearing is the least costly option, it is not recommended due to increased risks of disease and difficulty in maintaining hygiene.</li>
            </ul>

            <p><strong>By adhering to these detailed guidelines, you can create a well-designed poultry house that ensures the health and productivity of your flock.</strong></p>
            <p><strong>When constructing, opt for metal and plastic materials. They are easy to clean and maintain.</strong></p>
            <p>Please refer to the broiler production section for a small homemade housing for your birds, as both layers and broilers typically use the same layout structure with partial differences in dimensions and cages installed for layer production with the structure.</p>

            <h3>4.2. Lighting Program for Layers</h3>
            <p>
                Layer hens are highly sensitive to changes in lighting. As days grow shorter from summer to winter, their production tends to decrease. This can be managed by artificial lighting, although it's important to include periods of darkness, which are naturally required by the birds. Implementing a lighting program can be more challenging in open houses and free-range systems.
            </p>

            <h3>4.2.1. Why is a Lighting Program Important?</h3>
            <ul>
                <li>Enhances egg production by conserving energy during resting periods.</li>
                <li>Reduces mortality rates and skeletal defects.</li>
                <li>Stimulates melatonin production, which is crucial for the development of the immune system.</li>
            </ul>

            <h3>4.2.2. Key Guidelines for Lighting Program:</h3>
            <ul>
                <li>Avoid increasing day length during the growth period.</li>
                <li>Determine the natural day length when birds are at least 16 weeks old.</li>
                <li>Ensure additional lighting so that the day length from 8 weeks matches the natural day length at 16 weeks and maintain this until it is time to stimulate production or sexual maturity.</li>
            </ul>

            <h3>4.3. Temperature Management for Egg Production</h3>
            <p>
                Temperature is crucial in egg production. Low temperatures during the first few weeks can impact a hen's productivity throughout her egg-laying cycle. While temperature has less effect in later stages, it is still important to avoid extremes. Free-range hens require shelter at night to protect them from significant temperature drops.
            </p>
            <table border="1" cellpadding="10" cellspacing="0">  
                <thead>
                    <tr >
                    <th>Age</th>
                    <th>Cage Rearing (°C)</th>
                    <th>Free Range Rearing (°C)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Week 5-72</td>
                    <td>18-20</td>
                    <td>18-20</td>
                    </tr>
                </tbody>
            </table>

            <p>NB! Chickens typically maintain a body temperature of about 40-41°C.</p>


            <h3>4.4. Ventilation</h3>
            <p>Ventilation serves several critical functions beyond providing an adequate oxygen supply. These functions include:</p>
            <ul>
                <li>Moisture removal</li>
                <li>Providing oxygen to meet the bird's metabolic demands</li>
                <li>Controlling relative humidity</li>
                <li>Maintaining good litter conditions</li>
            </ul>
            <p>
                Always ensure a consistent supply of fresh air while avoiding cold drafts in the brooding house, as chicks are particularly sensitive to cold. Proper maintenance of house curtains is necessary for battery-caged hens. Free-range chickens generally do not face ventilation issues.
            </p>
            <div className="layer-image-container">
              <img src={layer5} alt="layer5" className="layer-structure-image" />
              
            </div>
        </div>


        <div ref={stockingRef} className="layer-section">
            <h2>Stocking Density in Layer Cages</h2>
            <p>
                The dimensions of cage systems have evolved significantly over time. Initially, welfare regulations and practices accepted a density of 450 cm² per bird as the minimum norm, and this remains the recommended density in the South African Poultry Association's Code of Practice.
                This minimum density has been widely accepted for brown egg layers. However, welfare pressures in many countries have led to an increase in the recommended density to 550 cm² per bird and higher.
                Older cages with dimensions of 50 cm by 45 cm could house 5 birds, equating to 450 cm² per bird (50 x 45 = 2250 cm²; 2250 / 5 = 450 cm² per bird). Modern cages with dimensions of 60 cm by 55 cm can house 7 birds, providing 471 cm² per bird, or 6 birds, which meets the 550 cm² per bird regulation.
                Recent trends in layer cage design focus on addressing welfare concerns associated with battery cages, leading to the development of Enriched Cage Systems.
            </p>
            
            <table border="1" cellpadding="10" cellspacing="0">
                <thead>
                <tr>
                    <th>Cage Type</th>
                    <th>Dimensions (cm)</th>
                    <th>Number of Birds</th>
                    <th>Area per Bird (cm²)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Older Cages</td>
                    <td>50 x 45</td>
                    <td>5</td>
                    <td>450</td>
                </tr>
                <tr>
                    <td>Modern Cages</td>
                    <td>60 x 55</td>
                    <td>7</td>
                    <td>471</td>
                </tr>
                <tr>
                    <td>Modern Cages</td>
                    <td>60 x 55</td>
                    <td>6</td>
                    <td>550</td>
                </tr>
                </tbody>
            </table>
            
            <p>
                These dimensions and stocking densities reflect the ongoing efforts to balance production efficiency with animal welfare.
            </p>

            <h3>5.1. Flock Uniformity</h3>
            <p>
                Uniformity among hens is crucial. Equally sized hens indicate strong future production potential. Uniform hens reach sexual maturity simultaneously, reducing feed costs. They also remain productive longer, yielding more eggs per life cycle and increasing profits.
            </p>

            <h4>5.1.2. Calculating Flock Uniformity:</h4>
            <p>
                • Total weight of flock: 86,260g<br/>
                • Flock size: 95 hens<br/>
                • Average weight per hen: 86,260g ÷ 95 = 908g<br/>
                • 10% of average weight: 908g × 10% = 91g<br/>
                • Upper value: 908g + 91g = 999g<br/>
                • Lower value: 908g - 91g = 817g<br/>
                • Weight range for uniform flock: 817g - 999g
            </p>
            
            <p>
                For example, if 85 hens fall within this weight range:
            </p>
            <p>
                • Flock uniformity percentage: (85 hens ÷ 95 hens) × 100 = 85%<br/>
                • Uniformity ratings:<br/>
                o 85%+ is very good<br/>
                o 70%- is poor
            </p>

            <h4>5.1.3. Factors Influencing Flock Uniformity:</h4>
            <ul>
                <li>Stocking density</li>
                <li>Feed structure (to avoid selective feed intake)</li>
                <li>Trough/feeder length and height</li>
            </ul>
            </div>


        <div ref={healthRef} className="layer-section">
            <h2>Flock Health and Hygiene</h2>
            <div className="layer-image-container">
              <img src={layer6} alt="layer6" className="layer-structure-image" />              
            </div>
            <p>
                Disease manifestation in birds hinges on aggravating and mitigating factors. Aggravating factors assist in the emergence of the disease, while mitigating factors help the bird combat it. The presence of disease-causing agents such as viruses, bacteria, protozoa, or toxins is essential for the disease to occur. Without these agents, the disease will not manifest.
            </p>
            <p>
                Examples of aggravating factors include stress, low feed intake, malnutrition, underweight birds, and poor environmental conditions, all of which result from inadequate management. Conversely, well-nourished birds with high immunity levels (achieved through proper vaccination) serve as mitigating factors, reflecting effective flock management. Lapses in biosecurity measures elevate the risk of introducing disease-causing agents to the farm, thus heightening the likelihood of disease manifestation.
            </p>
            <p>
                Effective layer flock management necessitates understanding the difference in appearance between healthy and sick birds. Recognizing these differences is crucial for maintaining flock health and hygiene.
            </p>

            <h3>6.1. Biosecurity</h3>
            <p>
                Prevention is the most economical and effective method of disease control, best achieved through an effective biosecurity program paired with an appropriate vaccination regimen. Biosecurity practices aim to prevent the spread of disease on a farm by minimizing the movement of biological organisms (viruses, bacteria, rodents, etc.) across its boundaries. Here are key components of a successful biosecurity program:
            </p>
            
            <ul>
                <li>Fencing: Ensure farms are securely fenced.</li>
                <li>All-In/All-Out Principle: This method is optimal, preventing disease transmission from older to younger flocks.</li>
                <li>Visitor Restrictions: Limit non-essential visitors and maintain a logbook to document all visits.</li>
                <li>Vehicle Restrictions: Prohibit employee cars on the premises.</li>
                <li>Farm Supervisor Visits: Supervisors should visit the youngest flocks first, progressing to the oldest by the end of the day.</li>
                <li>Entrance Sanitation: Include pressure washing equipment at the farm entrance to clean truck tires and undercarriages.</li>
                <li>Foot Bath: Sanitize feet/shoes with a foot bath upon entering the cage or hen house.</li>
                <li>Disposal of Dead Birds: Remove dead birds immediately.</li>
                <li>Personnel Restrictions: Workers should not own birds or work on another poultry farm.</li>
                <li>Clean Clothes and Boots: Provide clean attire and boots for everyone entering the premises, ideally with shower-in/shower-out facilities available.</li>
            </ul>

            <h4>6.1.2. Biosecurity on Layer Farms</h4>
            <p>
                With the economy of scale favoring larger units, most layer sites are substantial. If a unit is part of a larger operation, these units typically are not depopulated and re-stocked on an all-in, all-out replacement basis. As a result, commercial layer production units in South Africa often have flocks of varying ages on the same site.
            </p>
            <p>
                Despite this, stringent biosecurity measures are essential on layer farms. The sheer size of some layer operations demands the highest security measures to ensure birds remain disease-free and can express their full genetic potential. Once a disease manifests in a multi-age site, eradicating it becomes incredibly challenging, regardless of the site's size. Diseases can be transmitted to a site either vertically or horizontally.
            </p>

            <h3>6.2. Vertical Transmission of Diseases</h3>
            <p>
                Vertical transmission of avian diseases occurs when pathogens are passed from parent flocks through hatcheries to offspring, eventually reaching layer farms. These diseases can also spread horizontally at any stage and then be transmitted vertically. To prevent this, it's recommended to source pullets from reputable suppliers with known disease statuses and avoid mixing pullets from different sources to prevent negative impacts on health and performance. Strict biosecurity measures are crucial in preventing disease spread within poultry operations.
            </p>

            <h3>6.2.1. Horizontal Transmission of Diseases</h3>
            <p>
                Pathogens can spread horizontally between farms, sites, and poultry sheds. Key factors to consider include implementing an all-in, all-out replacement cycle at the very least by shed, ensuring good separation between farms, sites, and sheds, controlling access of staff and visitors through showering and clean attire, regulating service vehicles' access, purchasing feed from companies practicing Salmonella control monitoring, and controlling vermin to prevent the spread of diseases.
            </p>

            <h3>6.2.2. Biosecurity Program Pillars: A Summary</h3>
            <p>
                A robust biosecurity program is built on several key pillars: flock separation, visitor and personnel access control, traffic management, sanitation and cleaning, and maintaining a strong immune status within the flock. These elements work together to prevent the introduction and spread of diseases.
            </p>
        </div>


        <div ref={vaccinationRef} className="layer-section">
            <h2>Vaccination</h2>
            <div className="layer-image-container">
              <img src={layer7} alt="layer7" className="layer-structure-image" />              
            </div>
            <p>
                Vaccination involves the controlled exposure of birds to a specific disease-causing agent (antigen), which can be a virus, mycoplasma, or bacteria. This antigen is altered in the laboratory so it can no longer harm or kill the bird. The vaccination process prepares the animal's body to combat the disease through immunity when exposed to the actual pathogen.
            </p>
            <p>
                Day-old chicks should receive vaccines against the following diseases at the hatchery for adequate protection:
            </p>
            
            <ul>
                <li>Infectious Bursal Disease (IBD)</li>
                <li>Newcastle Disease (ND)</li>
                <li>Infectious Bronchitis (IB)</li>
            </ul>

            <p>
                The following is a broader approach to a vaccination program that one can implement if they feel the major three vaccinations aren’t enough to accommodate the problems they face. This approach is based on the Layers Guide 2020:
            </p>

            <div className="layer-image-container">
              <img src={layer8} alt="layer8" className="layer-structure-image" />              
            </div>

            <h3>7.1. Vaccination Guidelines</h3>
            <p>
                These guidelines serve as a starting point. Each farm will ultimately create a vaccination schedule tailored to its specific needs and the type of vaccines used. It is essential to discuss your vaccination plans with a veterinarian before purchasing any vaccines.
            </p>
            <p>
                To ensure optimal health, a basic monitoring program should be implemented. This program should include regular visits from a professional, such as a poultry veterinarian, to diagnose any less common diseases. These professionals can provide valuable advice on adjustments and additions to the vaccination program as needed.
            </p>
            <p>
                By developing a customized vaccination schedule and maintaining ongoing veterinary support, farms can effectively manage the health and productivity of their flocks.
            </p>
            <p>
                It's essential to consult with a veterinarian before purchasing any vaccines. Additionally, implementing a basic monitoring program and scheduling regular visits from a poultry veterinarian are crucial for diagnosing less common diseases and making necessary adjustments to the vaccination program.
            </p>
            <p>
                Always change clothes before entering the farm and shoes before entering the house to maintain biosecurity.
            </p>
        </div>


        <div ref={nutritionRef} className="layer-section">
            <h2>Nutrition for Layer Hens</h2>
            <p>
                Layer diets are designed to supply the energy and nutrients crucial for both health and effective egg production. The essential nutritional components that birds require include water, amino acids, energy, vitamins, and minerals. Adequate calcium is particularly critical for shell production in our layer mash.
            </p>
            <p>
                Layer hens require constant access to fresh feed and water. Given that feed costs account for about 70% of a farm's total expenses, it's essential to provide hens with precisely what they need for production and maintenance. Overfeeding wastes money, while underfeeding impacts egg production.
            </p>
            <p>
                Point-of-lay hens need a balanced diet to support their egg production and maintenance needs. A 20-week-old layer still has significant maintenance needs due to ongoing growth. Using a scientifically formulated feed ensures all essential nutrients are provided, promoting optimal egg production, frame development, feathering, and plumage. It also supports the health of birds, enabling them to lay eggs up to and beyond 80 weeks of age.
            </p>
            <p>
                Ensuring the quality of raw materials and employing nutritionists to formulate diets with high-quality grains, proteins, and digestible energy sources is crucial for the well-being and productivity of layer hens.
            </p>
            <div className="layer-image-container">
              <img src={layer9} alt="layer9" className="layer-structure-image" />              
            </div>
            <h3>Lohman Brown Breed Standards (Guides, 2020)</h3>

            <h4>8.1. Feeding Program</h4>
            <p>
                The feeding program detailed here is aligned with the Lohman Brown breed standards. Transitioning from one phase to another is primarily dependent on the body weight of the hens.
            </p>

            <ul>
                <li>
                <strong>Pullet Grower Phase:</strong>
                <ul>
                    <li>This feed is provided until 5% of the flock begins laying eggs. For example, in a flock of 100 hens, this means at least 5 hens must be in lay before moving to the next phase.</li>
                    <li>The Pullet Grower feed ensures the birds receive the necessary nutrients for growth and development during this critical period.</li>
                </ul>
                </li>
                <li>
                <strong>Pullet Developer Phase:</strong>
                <ul>
                    <li>If available, Pullet Developer feed can be used until 5% of the flock is in lay. This feed is specifically formulated to support the hens as they approach the point of lay, ensuring they have the necessary nutrients for this transition.</li>
                </ul>
                </li>
                <li>
                <strong>Layer Mash:</strong>
                <ul>
                    <li>Once the flock reaches the laying phase, Layer Mash is given ad libitum daily, meaning it is always available for the hens to consume as needed.</li>
                    <li>Layer Mash 100 Larvadex is included in the feed to control parasites, promoting overall flock health and ensuring consistent egg production.</li>
                </ul>
                </li>
                <li>
                <strong>Feed Intake:</strong>
                <ul>
                    <li>During the laying period, the feed intake should range between 110 grams and 120 grams per hen per day. This intake ensures that the hens receive adequate nutrition to support their egg production and maintain their health.</li>
                </ul>
                </li>
            </ul>

            <p>
                By following these guidelines, you can ensure that your hens are well-fed and healthy, maximizing their egg production potential while maintaining their overall well-being.
            </p>

            <h4>8.2. Water Management</h4>
            <div className="layer-image-container">
              <img src={layer10} alt="layer10" className="layer-structure-image" />              
            </div>
            <ul>
                <li><strong>Water Quality:</strong> Ensure the water provided to hens meets high standards to maintain optimal egg quality and overall health.</li>
                <li><strong>Hydration:</strong> Chicks and pullets must have adequate water intake to support proper feed consumption and growth, impacting future egg production.</li>
                <li><strong>Regular Checks:</strong> Regularly check that drinkers are functioning correctly and are full.</li>
                <li><strong>Positioning and Pressure:</strong> Ensure drinkers are at crop level and that water pressure is appropriate.</li>
                <li><strong>Temperature and Health:</strong> Hens consume more water during high temperatures or when experiencing health issues to regulate their body temperature.</li>
                <li><strong>Sanitization:</strong> Add chlorine tablets to sanitize water and check pH levels, but avoid this during vaccination days.</li>
                <li><strong>Daily Intake:</strong> Under normal conditions, hens drink between 250 ml and 500 ml of water daily.</li>
                <li><strong>Water Source:</strong> Avoid supplying water directly from a borehole or large tank. Instead, divert it to a smaller catchment tank for easier medication and vaccination. A 500-liter tank is ideal for a setup of 100 hens.</li>
            </ul>
        </div>


        <div ref={eggProductionRef} className="layer-section">
            <h2>Egg Production</h2>
            <div className="layer-image-container">
              <img src={layer11} alt="layer11" className="layer-structure-image" />              
            </div>
            <p>
                Layer breeds typically produce eggs economically until about 72 weeks of age, with each hen potentially laying between 300 and 326 eggs under ideal conditions. Egg sizes tend to increase as hens grow older.
            </p>

            <h3>9.1. Key Points About Egg Production</h3>
            <ul>
                <li>Chickens with brown earlobes generally lay brown eggs, while those with white earlobes lay white eggs.</li>
                <li>At peak production, a healthy laying percentage ranges from 80% to 100%, meaning that 80% of the flock lays an egg each day.</li>
            </ul>

            <h4>9.1.2. Important Considerations</h4>
            <ul>
                <li>Eggs are delicate and should be handled with care. Using egg trays provides the best protection.</li>
                <li>Prioritize selling older eggs first, and do not keep eggs for more than 2 weeks before selling.</li>
                <li>Store eggs at room temperature between 18°C and 25°C. Refrigeration can cause condensation on shells, promoting bacterial growth such as salmonella.</li>
                <li>Remove eggs daily to prevent hens from eating them.</li>
                <li>Egg color or shape changes can indicate disease; consult a vet if abnormalities are noticed.</li>
                <li>If blood is found on an egg, check the hen for potential cannibalism.</li>
                <li>Count eggs daily to determine laying percentage and identify any potential flock issues.</li>
                <li>Do not wash eggs.</li>
            </ul>

            <p>
                Maintaining these practices helps ensure a healthy and productive egg-laying operation.
            </p>
        </div>


        {/* Scroll Up Button */}
      <button className="scroll-up-button" onClick={scrollToTop}>
        Scroll to Top
      </button>

      </div>
    );
  }
  
  export default LayerPage;
