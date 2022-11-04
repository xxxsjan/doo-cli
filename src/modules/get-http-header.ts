import axios, { AxiosResponse } from 'axios';
import ora from 'ora';
// setTimeout(() => {
//   spinner.color = 'yellow';
//   spinner.text = 'Loading rainbows';
// }, 1000);
const IPV4: string = 'https://api.ipify.org';
export default async function getHttpHeader(options) {
  const { url = IPV4 } = options;
  const spinner = ora('http 请求中').start();
  const res = await axios.get(url);
  spinner.stop();
  console.log(res.headers);
}
