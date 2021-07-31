import React, { useState } from 'react';

import './App.css';

import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
        <p>Hello Vite + React + Typescript!</p>
        <p>
          <Button onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
        </p>

        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>

        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>

      <div style={{ padding: '1em' }}>
        <h3 style={{ margin: '1em', textAlign: 'center' }}>Lorem Ipsum</h3>
        <span style={{ textAlign: 'center' }}>
          &quot;Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... There is
          no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...&quot;
        </span>
        <p style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla accumsan velit, in interdum nisl
          sagittis non. Vestibulum nulla erat, porta quis condimentum vitae, tempus at elit. Pellentesque porttitor elit
          ut enim facilisis vulputate. Praesent scelerisque congue sem eget feugiat. Ut at suscipit tortor, quis
          fermentum ligula. Nulla vestibulum dui leo, suscipit vulputate turpis sollicitudin id. Vivamus semper commodo
          facilisis. Fusce gravida auctor quam, sit amet fringilla nisi pellentesque ullamcorper. Donec aliquet justo
          turpis, vitae iaculis nibh hendrerit sed. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Aliquam purus neque, laoreet vitae dolor et, posuere viverra eros. Vestibulum tempor ligula quis massa
          euismod, id dignissim diam ornare. Phasellus rhoncus dictum auctor. Fusce dictum, massa non vestibulum
          porttitor, justo urna bibendum risus, ut efficitur sapien tellus at urna. Proin feugiat gravida purus, at
          bibendum nunc condimentum a. Aenean pretium risus eu diam rhoncus, quis lobortis augue gravida. Nulla eros
          lacus, aliquam ut diam vel, pulvinar fermentum lacus. Praesent lacinia nisi non libero imperdiet, vitae
          scelerisque libero gravida. Aenean aliquam, mauris ut iaculis porta, nisl tellus accumsan velit, eget
          consequat purus tortor id mi. Donec tincidunt nunc quis nibh varius iaculis ac vitae elit. Aliquam sed erat
          interdum est ultrices viverra et ut velit. Donec hendrerit porttitor dapibus. Suspendisse velit dui, tempus
          non nibh convallis, elementum laoreet tellus. Nam posuere ante sapien, quis rutrum massa mollis sed. Nulla
          dignissim nisi vitae odio semper tincidunt. Fusce fermentum orci odio, malesuada sagittis felis vestibulum sit
          amet. Cras consectetur dictum mauris, ut ultricies odio. Cras sit amet vestibulum nulla. Quisque aliquam
          mauris arcu. Nullam pellentesque urna iaculis nunc pulvinar, fermentum consequat urna convallis. Donec eros
          urna, bibendum eu ornare ac, mattis eget massa. Integer sit amet eros scelerisque, commodo velit dignissim,
          molestie arcu. Donec id pretium neque. Nulla sollicitudin ligula at pellentesque egestas. Maecenas sodales et
          enim ac tempus. Fusce a luctus lacus, eu tincidunt lacus. Proin efficitur ultrices porttitor. In cursus dui
          varius sollicitudin lacinia. Pellentesque lacus mi, molestie in sapien non, ornare dapibus lectus. Fusce leo
          augue, euismod et tincidunt vel, egestas in elit. Maecenas justo urna, viverra quis nibh eu, congue malesuada
          urna. Nam diam diam, vestibulum non iaculis vel, vestibulum nec velit. In hac habitasse platea dictumst.
          Vivamus non fermentum lectus, id auctor libero. Vestibulum tincidunt et arcu eu hendrerit. Integer in
          vulputate sapien. Cras libero turpis, vulputate ut arcu non, pellentesque mattis sapien. Maecenas sit amet
          posuere libero, imperdiet suscipit quam. Duis egestas turpis ut nunc volutpat suscipit. Mauris consequat
          vulputate justo. Vivamus ut odio maximus, condimentum turpis facilisis, dapibus velit. Suspendisse ac leo a
          tellus gravida finibus. Pellentesque ultrices sed leo id hendrerit. Donec ullamcorper ex at elit venenatis,
          laoreet tempus risus tincidunt. Nam vestibulum, nunc in pellentesque porttitor, nisi justo tristique lacus, in
          fermentum ipsum lorem nec urna. Maecenas aliquam felis urna, nec feugiat tellus elementum lacinia. Donec
          consequat ultrices fringilla. Aenean nisi purus, malesuada a mi at, sollicitudin feugiat massa. Sed cursus
          elit mauris, in cursus velit vulputate ac. Donec auctor quam vel mauris consequat malesuada. Curabitur luctus
          metus nulla, fermentum varius diam condimentum ornare. Duis eget mi vitae libero auctor accumsan. Quisque
          dictum arcu metus, quis venenatis ipsum dictum et. Vestibulum tristique lectus quis ex pretium, et sagittis
          nunc dictum. Fusce porta mollis erat ac tempor. Nulla gravida eros sit amet mauris porttitor pulvinar. Aenean
          commodo ante ut arcu luctus interdum. Fusce id lectus maximus, gravida augue in, ultrices neque. Fusce ac
          ligula interdum, blandit eros non, imperdiet turpis. Sed nec tincidunt arcu, a tempor risus. Suspendisse
          gravida convallis dignissim. Quisque in massa non nisi vestibulum cursus. Fusce vitae tincidunt erat.
          Suspendisse sit amet ex feugiat, sodales augue in, eleifend lectus. Suspendisse elit libero, gravida vitae
          bibendum eget, eleifend ac eros. Proin luctus a risus ut pellentesque. Etiam ultrices suscipit ullamcorper.
          Fusce tristique nunc mi. Quisque rutrum elit ac consequat condimentum. Fusce quam neque, condimentum quis nunc
          sit amet, cursus dictum nulla. Sed semper ornare dictum. Vestibulum suscipit lacus dui, efficitur pulvinar
          nulla tincidunt quis. Mauris volutpat, sem eget sodales vestibulum, odio dolor feugiat mi, sed ornare metus
          leo eu felis. Duis ornare et leo id vulputate. Morbi facilisis eu nisl sagittis ultrices. Maecenas convallis
          neque vel est euismod molestie. Suspendisse in risus bibendum, pulvinar eros eget, venenatis sapien. Mauris
          sed ipsum mollis, rhoncus ex a, ornare erat. Praesent tristique risus ac dui euismod ultrices. Nulla vel
          sollicitudin libero. In hac habitasse platea dictumst. Ut pellentesque velit sed odio pellentesque ornare.
          Pellentesque in magna ac magna mattis tempor. Sed vel luctus nulla, a condimentum diam. Ut sit amet iaculis
          ipsum. Cras gravida at erat sit amet volutpat. Quisque finibus leo ac tincidunt suscipit. Curabitur ex est,
          semper nec libero fermentum, vulputate aliquet libero. Vivamus vehicula semper elit, sit amet auctor elit
          elementum at. Nullam suscipit ac odio eu auctor. Pellentesque tempus quam justo, nec tincidunt dolor laoreet
          id. In nec semper nisl. Phasellus eu arcu tortor. Aliquam vehicula sapien non sapien aliquam pharetra. Proin a
          tortor sit amet est facilisis sollicitudin sit amet eget nulla. Nulla nec leo lobortis lectus dapibus
          sollicitudin et vulputate tortor. Duis facilisis finibus nisi eu volutpat. Nunc nec lorem laoreet, varius sem
          non, cursus mauris. Pellentesque interdum leo felis, eget aliquet tortor ultrices eu. Nam luctus mi euismod
          metus aliquet finibus. Vivamus lacinia sit amet erat a blandit. Generated 10 paragraphs, 879 words, 6051 bytes
          of Lorem Ipsum
        </p>
      </div>
    </div>
  );
}

export default App;
