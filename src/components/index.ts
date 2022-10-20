import { Footer } from '../../../../challenger/202210-W3CH4-Marcos-b/src/components/footer.js.js';
import { Header } from '../../../../challenger/202210-W3CH4-Marcos-b/src/components/header.js.js';
import { Main } from '../../../../challenger/202210-W3CH4-Marcos-b/src/components/main.js.js';
import { TaskList } from '../../../../challenger/202210-W3CH4-Marcos-b/src/components/task.list.js.js';
import { TASKS } from '../../../../challenger/202210-W3CH4-Marcos-b/src/components/models/data.js.js';

console.log('Loaded index');
console.log(TASKS);

new Header('body');
new Main('body');
new TaskList('main');
new Footer('body');
