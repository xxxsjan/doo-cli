import { Command } from 'commander';
import pkg from '../package.json';
import tools from './modules/index';

const { getIP, folderPrint, getSystemInfo, getTimeNode, npdel, getHttpHeader } = tools;
const { version, name } = pkg;

const program = new Command(name);
program.alias('ct').description('A cli tool-set.').version(version, '-v, --version, -V');
program.command('npdel').description('remove node_modules dir').action(npdel);
program
  .command('ip')
  .description('Get the local external network i p address')
  .option('-i,--intranet,--in', 'Get ip for intranet')
  .option('-o,--extranet,--out', 'Get ip for extranet')
  .action(getIP);
program
  .command('system')
  .alias('sys')
  .description('Get system information ')
  .option('-v, --visual', 'Rendering in a visual way')
  .action(getSystemInfo);
program.command('time').description('Get system information ').action(getTimeNode);
program
  .command('folder-print')
  .alias('fp')
  .option('-d, --depth <type>', 'Set the depth of the folder to be traversed', '10')
  .option('-p, --print', 'Generate a markdown file')
  .description('Print directory structure')
  .action(folderPrint);

program
  .command('http')
  .description('Get http header')
  .option('-u,--url <char>', 'http url', 'https://api.ipify.org')
  .option('-h,--header', 'show header')
  .action(getHttpHeader);
program.parse();
