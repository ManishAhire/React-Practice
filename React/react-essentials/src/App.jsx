import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [tabContent, setTabContent] = useState();

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }
  return (
    // No need to add extra div, instead use <Fragment> element, shorter version is <>...</>
    // Fragment help you to avoid unnecessary HTML elements
    <>
      <Header />
      <main>
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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Componetns
            </TabButton>
            <TabButton
              isSelected={tabContent === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent === undefined ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
