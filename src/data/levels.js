export const LEVELS = [
    {
        id: 1,
        title: 'Level 1: Plain Sight',
        description: 'The credentials are hidden in plain sight. Check the Inspector!',
        username: 'admin',
        password: 'password123',
        hint: 'Look at the HTML source. The answer is written in black text on black background.',
        difficulty: 'easy',
        challenge: `
      <div style="color: black; background-color: black; padding: 20px;">
        <p>Username: admin</p>
        <p>Password: password123</p>
      </div>
    `,
    },
    {
        id: 2,
        title: 'Level 2: CSS Hidden',
        description: 'Use DevTools Inspector to uncover hidden styles.',
        username: 'user',
        password: 'hacked2025',
        hint: 'The password might be hidden with CSS display: none or opacity: 0',
        difficulty: 'easy',
        challenge: `
      <div style="display: none;">
        Username: user | Password: hacked2025
      </div>
      <p style="opacity: 0; position: absolute;">Secret: hacked2025</p>
    `,
    },
    {
        id: 3,
        title: 'Level 3: DOM Manipulation',
        description: 'The JavaScript console has been used to hide the credentials.',
        username: 'hacker',
        password: 'console_log_me',
        hint: 'Check the Console tab - look for logged messages or variables.',
        difficulty: 'easy',
        challenge: `
      <script>
        const credentials = {
          user: 'hacker',
          pass: 'console_log_me'
        };
        console.log('%cCredentials:', 'color: #00ff41; font-size: 14px;', credentials);
        window.DEBUG_CREDENTIALS = credentials;
      </script>
      <p>Hint: Try typing 'DEBUG_CREDENTIALS' in the console...</p>
    `,
    },
    {
        id: 4,
        title: 'Level 4: HTML Attributes',
        description: 'Data is stored in HTML attributes. Inspect the elements!',
        username: 'data_ninja',
        password: 'attrs_are_fun',
        hint: 'Look for data-* attributes or hidden input fields.',
        difficulty: 'medium',
        challenge: `
      <input type="hidden" data-username="data_ninja" data-password="attrs_are_fun" />
      <div data-secret="True credentials are in data attributes">
        <span title="Username: data_ninja | Password: attrs_are_fun">Hover me</span>
      </div>
    `,
    },
    {
        id: 5,
        title: 'Level 5: Base64 Encoding',
        description: 'The credentials are encoded. Use the Console to decode.',
        username: 'coder',
        password: 'base64_magic',
        hint: 'Try using atob() function in the console: atob("encoded_string")',
        difficulty: 'medium',
        challenge: `
      <script>
        const encoded = btoa('coder:base64_magic');
        console.log('Encoded credentials:', encoded);
        window.decodeMe = encoded;
      </script>
      <p style="font-family: monospace; color: #00d4ff;">Try: atob(decodeMe) in console</p>
    `,
    },
    {
        id: 6,
        title: 'Level 6: CSS Injection',
        description: 'Find the password hidden in the CSS file.',
        username: 'admin2',
        password: 'stylesheet_secret',
        hint: 'Check the Network tab for CSS files, or look for inline styles with unusual content.',
        difficulty: 'medium',
        challenge: `
      <style>
        body::before {
          content: 'admin2:stylesheet_secret';
          display: none;
        }
        .secret-data {
          background: linear-gradient(to right, transparent, transparent);
        }
      </style>
      <script>
        const encoded = btoa('admin2:stylesheet_secret');
        document.styleSheets[0].addRule('.secret-data::after', 'content: "Hint: admin2:stylesheet_secret"; display: none;');
        console.log('CSS hidden data:', encoded);
      </script>
      <div class="secret-data"></div>
    `,
    },
    {
        id: 7,
        title: 'Level 7: JavaScript Minified',
        description: 'Deobfuscated JavaScript contains the password.',
        username: 'minify_me',
        password: 'obfuscated_pass',
        hint: 'Check the Console or beautify the JavaScript. Look for string concatenation.',
        difficulty: 'medium',
        challenge: `
      <script>
        const a='m',b='i',c='n',d='i',e='f',f='y',g='_',h='m',i='e';
        const u=a+b+c+d+e+f;
        const p='obfuscated_pass';
        console.log('Username parts:', a,b,c,d,e,f,g,h,i);
        window.creds = [u, p];
      </script>
    `,
    },
    {
        id: 8,
        title: 'Level 8: Local Storage Hunt',
        description: 'Check the Application/Storage tab for LocalStorage secrets.',
        username: 'storage_user',
        password: 'local_storage_key',
        hint: 'Right-click → Inspect → Application tab → LocalStorage. Look for stored values.',
        difficulty: 'hard',
        challenge: `
      <script>
        localStorage.setItem('username', 'storage_user');
        localStorage.setItem('credential_hint', 'Check the password variable');
        localStorage.setItem('password', 'local_storage_key');
        console.log('Data saved to LocalStorage');
      </script>
    `,
    },
    {
        id: 9,
        title: 'Level 9: Network Request',
        description: 'The credentials are fetched via XHR in the background.',
        username: 'xhr_user',
        password: 'network_request_pass',
        hint: 'Check the Network tab when the page loads. Look for API calls or data endpoints.',
        difficulty: 'hard',
        challenge: `
      <script>
        fetch('data:application/json,{"user":"xhr_user","pass":"network_request_pass"}')
          .then(r => r.json())
          .then(d => {
            console.log('Fetched credentials:', d);
            window.API_RESPONSE = d;
          });
      </script>
      <p>Hint: Network request made on page load...</p>
    `,
    },
    {
        id: 10,
        title: 'Level 10: Cookie Extraction',
        description: 'Look for credentials hidden in cookies or sessionStorage.',
        username: 'cookie_monster',
        password: 'cookie_jar_secret',
        hint: 'Console → document.cookie or check Application tab → Cookies.',
        difficulty: 'hard',
        challenge: `
      <script>
        document.cookie = 'username=cookie_monster; path=/';
        document.cookie = 'password=cookie_jar_secret; path=/';
        sessionStorage.setItem('backup_password', 'cookie_jar_secret');
        console.log('Cookies set:', document.cookie);
      </script>
    `,
    },
    {
        id: 11,
        title: 'Level 11: Regex Pattern Matching',
        description: 'The credentials are hidden in regex patterns. Decode them!',
        username: 'regex_master',
        password: 'pattern_recognition',
        hint: 'Open Console and check for regex patterns. Try evaluating them or looking in global variables.',
        difficulty: 'hard',
        challenge: `
      <script>
        const hiding = /regex_master/.toString() + '/' + /pattern_recognition/.toString();
        const parts = hiding.match(/[a-z_]+/g);
        window.REGEX_PARTS = parts;
        console.log('Regex parts stored:', parts);
      </script>
    `,
    },
    {
        id: 12,
        title: 'Level 12: Chained Base64',
        description: 'Multiple layers of Base64 encoding. Decode recursively!',
        username: 'layer_decoder',
        password: 'nested_secrets',
        hint: 'Use atob() multiple times. Try: atob(atob(atob(encoded_var)))',
        difficulty: 'hard',
        challenge: `
      <script>
        const data1 = btoa('layer_decoder');
        const data2 = btoa(btoa(data1));
        const data3 = btoa(btoa(btoa('nested_secrets')));
        window.LAYER_1 = data2;
        window.LAYER_2 = data3;
        console.log('Username (double encoded):', data2);
        console.log('Password (triple encoded):', data3);
      </script>
    `,
    },
    {
        id: 13,
        title: 'Level 13: CSS Custom Properties',
        description: 'Credentials stored in CSS custom properties (variables).',
        username: 'css_ninja',
        password: 'custom_prop_secret',
        hint: 'Inspect element styles. Look for --username and --password CSS variables. Get them via getComputedStyle().',
        difficulty: 'hard',
        challenge: `
      <style>
        :root {
          --username: 'css_ninja';
          --password: 'custom_prop_secret';
          --hint: var(--username) and var(--password) contain the answer;
        }
        body::before {
          content: var(--hint);
        }
      </style>
      <script>
        const root = getComputedStyle(document.documentElement);
        const username = root.getPropertyValue('--username').trim().replace(/['"]/g, '');
        const password = root.getPropertyValue('--password').trim().replace(/['"]/g, '');
        console.log('CSS Vars:', { username, password });
        window.CSS_CREDS = { username, password };
      </script>
    `,
    },
    {
        id: 14,
        title: 'Level 14: IndexedDB Storage',
        description: 'Credentials stored in IndexedDB database. Check Application tab!',
        username: 'db_admin',
        password: 'indexed_db_master',
        hint: 'DevTools → Application → IndexedDB. Open the "credentials" database and find the data.',
        difficulty: 'hard',
        challenge: `
      <script>
        const dbRequest = indexedDB.open('credentials', 1);
        
        dbRequest.onupgradeneeded = (e) => {
          const db = e.target.result;
          const store = db.createObjectStore('users', { keyPath: 'id' });
          store.add({ id: 1, username: 'db_admin', password: 'indexed_db_master' });
        };
        
        dbRequest.onsuccess = (e) => {
          console.log('IndexedDB opened. Check Application → IndexedDB → credentials');
          window.DB_READY = true;
        };
      </script>
    `,
    },
    {
        id: 15,
        title: 'Level 15: WebWorker Messages',
        description: 'Credentials transmitted via Web Worker. Intercept the message!',
        username: 'worker_user',
        password: 'web_worker_secret',
        hint: 'Check Console for worker messages. The credentials are passed to a Worker and logged back.',
        difficulty: 'hard',
        challenge: `
      <script>
        const workerCode = \`
          self.postMessage({
            user: 'worker_user',
            pass: 'web_worker_secret'
          });
        \`;
        
        const blob = new Blob([workerCode], { type: 'application/javascript' });
        const workerUrl = URL.createObjectURL(blob);
        const worker = new Worker(workerUrl);
        
        worker.onmessage = (e) => {
          console.log('Worker credentials:', e.data);
          window.WORKER_CREDS = e.data;
        };
      </script>
    `,
    },
    {
        id: 16,
        title: 'Level 16: Hexadecimal Encoding',
        description: 'Credentials encoded in hexadecimal. Decode them!',
        username: 'hex_master',
        password: 'hex_encoded_pass',
        hint: 'Convert hex strings to ASCII. Try: String.fromCharCode(...)',
        difficulty: 'insane',
        challenge: `
      <script>
        const hexUser = '68657830305f6d6173746572'.split('').reverse().join('');
        const hexPass = '7061787pha865735f656e636f646564'.split('').reverse().join('');
        const user = hexUser.match(/.{1,2}/g).map(x => String.fromCharCode(parseInt(x, 16))).join('');
        const pass = 'pass_encoded_via_hex'; // Simplified for demo
        
        window.HEX_CREDS = { user: 'hex_master', pass: 'hex_encoded_pass' };
        console.log('Hint: Check window.HEX_CREDS');
      </script>
    `,
    },
    {
        id: 17,
        title: 'Level 17: Binary Data',
        description: 'Credentials stored as binary data in an ArrayBuffer.',
        username: 'binary_seeker',
        password: 'binary_secrets',
        hint: 'Use the Console to read the ArrayBuffer. Try: new Uint8Array(window.BINARY_DATA)',
        difficulty: 'insane',
        challenge: `
      <script>
        const userBytes = new Uint8Array([98, 105, 110, 97, 114, 121, 95, 115, 101, 101, 107, 101, 114]);
        const passBytes = new Uint8Array([98, 105, 110, 97, 114, 121, 95, 115, 101, 99, 114, 101, 116, 115]);
        
        const user = String.fromCharCode(...userBytes);
        const pass = String.fromCharCode(...passBytes);
        
        window.BINARY_DATA = {
          userBytes: userBytes.buffer,
          passBytes: passBytes.buffer,
          user: user,
          pass: pass
        };
        
        console.log('Binary credentials stored. Check window.BINARY_DATA');
      </script>
    `,
    },
    {
        id: 18,
        title: 'Level 18: Shadow DOM Secrets',
        description: 'Credentials hidden in Shadow DOM. Inspect the DOM tree!',
        username: 'shadow_walker',
        password: 'shadow_dom_master',
        hint: 'Inspector shows Shadow DOM. Look for #shadow-root in the DOM tree.',
        difficulty: 'insane',
        challenge: `
      <div id="shadow-host"></div>
      <script>
        const host = document.getElementById('shadow-host');
        const shadow = host.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = \`
          <style>
            div { color: #00ff41; }
          </style>
          <div>
            Username: shadow_walker | Password: shadow_dom_master
          </div>
        \`;
      </script>
    `,
    },
    {
        id: 19,
        title: 'Level 19: Mixed Cipher',
        description: 'Credentials encoded with multiple layers: Hex + Base64 + ROT13',
        username: 'cipher_expert',
        password: 'triple_encrypted',
        hint: 'Decode step by step: Hex → Base64 → ROT13. Use online tools or JS functions.',
        difficulty: 'insane',
        challenge: `
      <script>
        function rot13(str) {
          return str.replace(/[a-zA-Z]/g, (c) => 
            String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
          );
        }
        
        const username = 'cipher_expert';
        const password = 'triple_encrypted';
        
        const base64User = btoa(username);
        const rot13User = rot13(base64User);
        const hexUser = Array.from(rot13User).map(c => c.charCodeAt(0).toString(16)).join('');
        
        window.CIPHER_USER = hexUser;
        window.CIPHER_PASS = 'triple_encrypted'; // Simplified
        
        console.log('Encoded username stored. Decode it!');
      </script>
    `,
    },
    {
        id: 20,
        title: 'Level 20: ULTIMATE CHALLENGE',
        description: 'All techniques combined. Full obfuscation and multiple encoding layers.',
        username: 'ultimate_hacker',
        password: 'master_of_security',
        hint: 'Use ALL your skills: Inspector, Console, Network, decode multiple formats, check all storage types.',
        difficulty: 'insane',
        challenge: `
      <script>
        // Multiple storage methods combined
        localStorage.setItem('hint1', btoa('Check sessionStorage'));
        sessionStorage.setItem('hint2', 'Check IndexedDB');
        
        // IndexedDB
        const dbReq = indexedDB.open('final_challenge', 1);
        dbReq.onupgradeneeded = (e) => {
          const store = e.target.result.createObjectStore('data');
          store.add('ultimate_hacker:master_of_security', 'key');
        };
        
        // Console confusion
        console.log('%c🔐 Challenge Data Stored', 'color: #00ff41; font-size: 14px;');
        console.log('localStorage:', 'Hint is Base64 encoded');
        console.log('sessionStorage:', 'Secondary hint');
        console.log('IndexedDB:', 'Final challenge database');
        
        // Hidden in DOM
        const div = document.createElement('div');
        div.style.display = 'none';
        div.textContent = 'ultimate_hacker|master_of_security';
        div.dataset.secret = 'true';
        document.body.appendChild(div);
        
        window.DEBUG = {
          user: 'ultimate_hacker',
          pass: 'master_of_security',
          hint: 'All methods: localStorage, sessionStorage, IndexedDB, Hidden DOM'
        };
      </script>
      <p style="font-size: 0.5px; opacity: 0.01;">Ultimate: ultimate_hacker / master_of_security</p>
    `,
    },
];
//# sourceMappingURL=levels.js.map