/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import BasicBarChart from '../BasicBarChart';
import Config from './config';

class PercentageStackBarChart extends BasicBarChart {
  config = Config;

  isHorizionDisplay = true;
  isStackMode = true;
  isPercentageYAxis = true;

  constructor() {
    super({
      id: 'percentage-stack-bar-chart',
      name: '百分比堆叠条形图',
      icon: 'fsux_tubiao_baifenbiduijitiaoxingtu',
    });
  }
}

export default PercentageStackBarChart;
