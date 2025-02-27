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

import { Form, FormInstance, Input, Radio, Select } from 'antd';
import { ChartDataViewFieldType } from 'app/pages/ChartWorkbenchPage/models/ChartDataView';
import { VISIBILITY_TYPE_OPTION } from 'app/pages/DashBoardPage/constants';
import { Widget } from 'app/pages/DashBoardPage/slice/types';
import { FilterSqlOperator } from 'globalConstants';
import { FC, memo, useCallback } from 'react';
import styled from 'styled-components/macro';

const FilterVisibility: FC<{
  form: FormInstance<any> | undefined;
  otherStrFilterWidgets: Widget[];
  fieldValueType: ChartDataViewFieldType;
}> = memo(({ form, fieldValueType, otherStrFilterWidgets }) => {
  const showVisibilityCondition = useCallback(() => {
    const visibilityType = form?.getFieldValue([
      'widgetFilter',
      'filterVisibility',
      'visibility',
    ]);
    if (visibilityType === 'condition') {
      return true;
    }
    return false;
  }, [form]);

  return (
    <Form.Item label="是否显示" shouldUpdate rules={[{ required: true }]}>
      {() => {
        return (
          <>
            <Form.Item
              name={['widgetFilter', 'filterVisibility', 'visibility']}
              noStyle
              rules={[{ required: true }]}
            >
              <Radio.Group>
                {VISIBILITY_TYPE_OPTION.map(ele => {
                  return (
                    <Radio.Button key={ele.value} value={ele.value}>
                      {ele.name}
                    </Radio.Button>
                  );
                })}
              </Radio.Group>
            </Form.Item>
            {showVisibilityCondition() && (
              <Form.Item noStyle>
                <StyledWarp>
                  <Form.Item
                    name={[
                      'widgetFilter',
                      'filterVisibility',
                      'condition',
                      'dependentFilterId',
                    ]}
                    noStyle
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="过滤器名称" style={{ width: '160px' }}>
                      {otherStrFilterWidgets.map(ele => {
                        return (
                          <Select.Option key={ele.id} value={ele.id}>
                            {ele.config.name}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                  {' - '}
                  <Form.Item
                    name={[
                      'widgetFilter',
                      'filterVisibility',
                      'condition',
                      'relation',
                    ]}
                    noStyle
                    rules={[{ required: true }]}
                  >
                    <Select placeholder="viewField" style={{ width: '100px' }}>
                      <Select.Option key={1} value={FilterSqlOperator.Equal}>
                        {'等于'}
                      </Select.Option>
                      <Select.Option key={2} value={FilterSqlOperator.NotEqual}>
                        {'不等于'}
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  {' - '}
                  <Form.Item
                    name={[
                      'widgetFilter',
                      'filterVisibility',
                      'condition',
                      'value',
                    ]}
                    noStyle
                    rules={[{ required: true }]}
                  >
                    <Input style={{ width: '140px' }} />
                  </Form.Item>
                </StyledWarp>
              </Form.Item>
            )}
          </>
        );
      }}
    </Form.Item>
  );
});

export default FilterVisibility;
const StyledWarp = styled(Form.Item)`
  display: block;
  margin-top: 6px;
  &.ant-form-item {
    margin-bottom: 0;
  }
`;
