import { Level } from '@/types/level';
import { useTranslation } from 'react-i18next';

export function getLEVELS() {
  const { t } = useTranslation();
  const LEVELS: Level[] = [
    {
      id: 1,
      title: t('levels.1.title'),
      description: t('levels.1.description'),
      username: 'admin',
      password: 'password123',
      hint: t('levels.1.hint'),
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
      title: t('levels.2.title'),
      description: t('levels.2.description'),
      username: 'user',
      password: 'hacked2025',
      hint: t('levels.2.hint'),
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
      title: t('levels.3.title'),
      description: t('levels.3.description'),
      username: 'hacker',
      password: 'console_log_me',
      hint: t('levels.3.hint'),
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
      title: t('levels.4.title'),
      description: t('levels.4.description'),
      username: 'data_ninja',
      password: 'attrs_are_fun',
      hint: t('levels.4.hint'),
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
      title: t('levels.5.title'),
      description: t('levels.5.description'),
      username: 'coder',
      password: 'base64_magic',
      hint: t('levels.5.hint'),
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
      title: t('levels.6.title'),
      description: t('levels.6.description'),
      username: 'admin2',
      password: 'stylesheet_secret',
      hint: t('levels.6.hint'),
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
      title: t('levels.7.title'),
      description: t('levels.7.description'),
      username: 'minify_me',
      password: 'obfuscated_pass',
      hint: t('levels.7.hint'),
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
      title: t('levels.8.title'),
      description: t('levels.8.description'),
      username: 'storage_user',
      password: 'local_storage_key',
      hint: t('levels.8.hint'),
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
      title: t('levels.9.title'),
      description: t('levels.9.description'),
      username: 'xhr_user',
      password: 'network_request_pass',
      hint: t('levels.9.hint'),
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
      title: t('levels.10.title'),
      description: t('levels.10.description'),
      username: 'cookie_monster',
      password: 'cookie_jar_secret',
      hint: t('levels.10.hint'),
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
      title: t('levels.11.title'),
      description: t('levels.11.description'),
      username: 'regex_master',
      password: 'pattern_recognition',
      hint: t('levels.11.hint'),
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
      title: t('levels.12.title'),
      description: t('levels.12.description'),
      username: 'layer_decoder',
      password: 'nested_secrets',
      hint: t('levels.12.hint'),
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
      title: t('levels.13.title'),
      description: t('levels.13.description'),
      username: 'css_ninja',
      password: 'custom_prop_secret',
      hint: t('levels.13.hint'),
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
      title: t('levels.14.title'),
      description: t('levels.14.description'),
      username: 'db_admin',
      password: 'indexed_db_master',
      hint: t('levels.14.hint'),
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
      title: t('levels.15.title'),
      description: t('levels.15.description'),
      username: 'worker_user',
      password: 'web_worker_secret',
      hint: t('levels.15.hint'),
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
      title: t('levels.16.title'),
      description: t('levels.16.description'),
      username: 'hex_master',
      password: 'hex_encoded_pass',
      hint: t('levels.16.hint'),
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
      title: t('levels.17.title'),
      description: t('levels.17.description'),
      username: 'binary_seeker',
      password: 'binary_secrets',
      hint: t('levels.17.hint'),
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
      title: t('levels.18.title'),
      description: t('levels.18.description'),
      username: 'shadow_walker',
      password: 'shadow_dom_master',
      hint: t('levels.18.hint'),
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
      title: t('levels.19.title'),
      description: t('levels.19.description'),
      username: 'cipher_expert',
      password: 'triple_encrypted',
      hint: t('levels.19.hint'),
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
      title: t('levels.20.title'),
      description: t('levels.20.description'),
      username: 'ultimate_hacker',
      password: 'master_of_security',
      hint: t('levels.20.hint'),
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
  return LEVELS;
}
