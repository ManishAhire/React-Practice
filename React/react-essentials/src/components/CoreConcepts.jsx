import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept';

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* {CORE_CONCEPTS.map((item) => (
              <CoreConcepts
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))} */}

        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
