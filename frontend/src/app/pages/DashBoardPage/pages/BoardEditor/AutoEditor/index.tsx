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

import { useSplitSizes } from 'app/hooks/useSplitSizes';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { dispatchResize } from 'utils/utils';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import SlideSetting from '../components/SlideSetting/SlideSetting';
import { editDashBoardInfoActions, editWidgetInfoActions } from '../slice';
import WorkSpace from './WorkSpace';
const AutoBoardEditor: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const clearSelectedWidgets = e => {
    e.stopPropagation();
    dispatch(editWidgetInfoActions.clearSelectedWidgets());
    dispatch(editDashBoardInfoActions.changeShowBlockMask(true));
  };

  const { sizes, setSizes } = useSplitSizes({
    limitedSide: 0,
    range: [200, Infinity],
  });
  const siderDragEnd = useCallback(
    sizes => {
      setSizes(sizes);
      dispatchResize();
    },

    [setSizes],
  );
  return (
    <Wrapper onClick={clearSelectedWidgets}>
      <HeaderBar />
      <Editor>
        <WorkSpace />
        <SlideSetting />
      </Editor>
    </Wrapper>
  );
};
export default AutoBoardEditor;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`;

const Editor = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
`;
