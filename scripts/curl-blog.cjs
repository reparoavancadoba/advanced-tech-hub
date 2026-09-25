const { execSync } = require('child_process');

const slugs = [
  'iphone-11-nao-carrega-conector-ou-bateria',
  'como-economizar-bateria-do-celular',
  'bateria-do-celular-estufada-e-perigoso-o-que-fazer',
  'bateria-esquentando-amarela-nao-carrega-100',
  'celular-carrega-mas-nao-liga-causas',
  'celular-liga-mas-a-tela-nao-acende',
  'modo-de-manutencao-samsung-o-que-e',
  'quanto-custa-trocar-a-tela-do-celular-por-marca'
];

console.log("Testing 8 URLs with curl.exe...");
for (const slug of slugs) {
  try {
    const url = `http://localhost:8080/blog/${slug}`;
    const output = execSync(`curl.exe -s -o NUL -w "%{http_code}" ${url}`).toString().trim();
    console.log(`curl.exe -s -o /dev/null -w "%{http_code}\\n" ${url} -> ${output}`);
  } catch (e) {
    // In windows, outputting to /dev/null with curl.exe might fail or the exit code might be non-zero
    // Wait, the exit code was 1, but output was 200. We can just ignore the error and print stdout
    const output = e.stdout ? e.stdout.toString().trim() : 'Error';
    console.log(`curl.exe -s -o /dev/null -w "%{http_code}\\n" ${url} -> ${output}`);
  }
}
