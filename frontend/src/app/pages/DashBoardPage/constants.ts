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
import {
  BackgroundConfig,
  BorderConfig,
  strEnumType,
} from 'app/pages/DashBoardPage/slice/types';
import { FilterSqlOperator } from 'globalConstants';
import { WHITE } from 'styles/StyleConstants';
import { WidgetType } from './slice/types';

export const RGL_DRAG_HANDLE = 'dashboard-draggableHandle';
export const STORAGE_BOARD_KEY_PREFIX = 'DATART_BOARD_DATA_';
export const STORAGE_IMAGE_KEY_PREFIX = 'DATART_IMAGE_';

/** lg: 12,md: 12,sm: 8,xs: 2,xxs: 2 */
export const LAYOUT_COLS = {
  lg: 12,
  md: 12,
  sm: 12,
  xs: 2,
  xxs: 2,
};
/** lg: 12,md: 10,sm: 6,xs: 4,xxs: 2 */

export const BREAK_POINTS = {
  lg: 1200,
  md: 996,
  sm: 768,
  xs: 480,
  xxs: 0,
};
export const INIT_COLS = 12;

// DASH_UNDO
export const BOARD_UNDO = {
  undo: 'EDITOR_UNDO',
  redo: 'EDITOR_REDO',
};

export const BackgroundDefault: BackgroundConfig = {
  color: 'transparent',
  image: '',
  size: '100% 100%', // 'auto' | 'contain' | 'cover'|,
  repeat: 'no-repeat', //'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat',
};

export const AutoBoardWidgetBackgroundDefault: BackgroundConfig = {
  ...BackgroundDefault,
  color: WHITE,
};

export const BorderDefault: BorderConfig = {
  radius: 1,
  width: 1,
  style: 'solid',
  color: 'transparent',
};
export const CanDropToWidgetTypes: WidgetType[] = ['chart', 'media'];
export const CanFullScreenWidgetTypes: WidgetType[] = ['chart', 'media'];

export const CONTAINER_TAB = 'containerTab';

//

// setting

export const TEXT_ALIGN_ENUM = strEnumType(['left', 'center', 'right']);
export type TextAlignType = keyof typeof TEXT_ALIGN_ENUM;

export const BORDER_STYLE_ENUM = strEnumType([
  'solid',
  'dashed',
  'dotted',
  'double',
  'none',
  'hidden',
  'ridge',
  'groove',
  'inset',
  'outset',
]);
export type BorderStyleType = keyof typeof BORDER_STYLE_ENUM;

export const BORDER_STYLE_OPTIONS = [
  { name: '无', value: BORDER_STYLE_ENUM.none },
  { name: '实线', value: BORDER_STYLE_ENUM.solid },
  { name: '虚线', value: BORDER_STYLE_ENUM.dashed },
  { name: '点线', value: BORDER_STYLE_ENUM.dotted },
  { name: '双线', value: BORDER_STYLE_ENUM.double },
  { name: '隐藏', value: BORDER_STYLE_ENUM.hidden },
  { name: '凹槽', value: BORDER_STYLE_ENUM.groove },
  { name: '垄状', value: BORDER_STYLE_ENUM.ridge },
  { name: 'inset', value: BORDER_STYLE_ENUM.inset },
  { name: 'outset', value: BORDER_STYLE_ENUM.outset },
];

export const SCALE_MODE_ENUM = strEnumType([
  'scaleWidth',
  'scaleHeight',
  'scaleFull',
  'noScale',
]);
export type ScaleModeType = keyof typeof SCALE_MODE_ENUM;
export const SCALE_MODE__OPTIONS = [
  { name: '等比宽度缩放', value: SCALE_MODE_ENUM.scaleWidth },
  { name: '等比高度缩放', value: SCALE_MODE_ENUM.scaleHeight },
  { name: '全屏铺满', value: SCALE_MODE_ENUM.scaleFull },
  { name: '实际尺寸', value: SCALE_MODE_ENUM.noScale },
];

export const OPERATOR_TYPE_ENUM = strEnumType([
  'common',
  'custom',
  'condition',
]);
export type FilterOperatorType = keyof typeof OPERATOR_TYPE_ENUM;
export const OPERATOR_TYPE_OPTION = [
  { name: '常规', value: OPERATOR_TYPE_ENUM.common },
  { name: '自定义', value: OPERATOR_TYPE_ENUM.custom },
  { name: '条件', value: OPERATOR_TYPE_ENUM.condition },
];
export const FilterVisibilityEnum = strEnumType(['hide', 'show', 'condition']);
export type FilterVisibilityType = keyof typeof FilterVisibilityEnum;
export const VISIBILITY_TYPE_OPTION = [
  { name: '显示', value: FilterVisibilityEnum.show },
  { name: '隐藏', value: FilterVisibilityEnum.hide },
  { name: '条件', value: FilterVisibilityEnum.condition },
];
export const SQL_OPERATOR_OPTIONS = {
  include: [
    { name: '前缀包含', value: FilterSqlOperator.PrefixContain },
    { name: '后缀包含', value: FilterSqlOperator.SuffixContain },
    { name: '等于', value: FilterSqlOperator.Equal },
    { name: '为空', value: FilterSqlOperator.Null },
  ],
  notInclude: [
    {
      name: '前缀不包含',
      value: FilterSqlOperator.NotPrefixContain,
      type: 'notInclude',
    },
    {
      name: '后缀不包含',
      value: FilterSqlOperator.NotSuffixContain,
      type: 'notInclude',
    },
    { name: '不相等', value: FilterSqlOperator.NotEqual, type: 'notInclude' },
    { name: '不为空', value: FilterSqlOperator.NotNull, type: 'notInclude' },
  ],
  compare: [
    { name: '区间', value: FilterSqlOperator.Between },
    { name: '等于', value: FilterSqlOperator.Equal },
    { name: '不相等', value: FilterSqlOperator.NotEqual },
    { name: '大于或等于', value: FilterSqlOperator.GreaterThanOrEqual },
    { name: '小于或等于', value: FilterSqlOperator.LessThanOrEqual },
    { name: '大于', value: FilterSqlOperator.GreaterThan },
    { name: '小于', value: FilterSqlOperator.LessThan },
    { name: '为空', value: FilterSqlOperator.Null },
    { name: '不为空', value: FilterSqlOperator.NotNull },
  ],
};
