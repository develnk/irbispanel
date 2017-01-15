import { join } from 'path';

import { SeedConfig } from './seed.config';
import { InjectableDependency, ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'Irbis Panel';
    this.ENABLE_SCSS = true;

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'font-awesome/css/font-awesome.css', inject: true},
      { src: 'jquery/dist/jquery.js', inject: 'libs' },
      { src: 'highcharts/highcharts.js', inject: 'libs' },
      { src: 'highcharts/modules/exporting.js', inject: 'libs' },
      { src: 'ng2-bootstrap/*.js', inject: 'libs'},
      { src: 'moment/moment.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    let additionalPackages: ExtendPackages[] = [
      // required for dev build
      {
        name:'ng2-bootstrap',
        path:'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.min.js'
      },

      // required for prod build
      {
        name:'ng2-bootstrap/*',
        path:'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.umd.min.js'
      },

      // mandatory dependency for ng2-bootstrap datepicker
      {
        name:'moment',
        path:'node_modules/moment',
        packageMeta:{
          main: 'moment.js',
          defaultExtension: 'js'
        }
      }
    ];

    this.addPackagesBundles(additionalPackages);

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      {src: `${this.CSS_SRC}/app.css`, inject: true, vendor: false}
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
