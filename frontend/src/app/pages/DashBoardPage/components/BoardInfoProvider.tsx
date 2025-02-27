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

import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { BoardInfoContext } from '../contexts/BoardInfoContext';
import { boardInfoState } from '../pages/BoardEditor/slice/selectors';
import { selectBoardInfoById } from '../slice/selector';
import { BoardState } from '../slice/types';

export const BoardInfoProvider: FC<{ id: string; editing: boolean }> = memo(
  ({ id, editing, children }) => {
    const editBoardInfo = useSelector(boardInfoState);
    const viewBoardInfo = useSelector((state: { board: BoardState }) =>
      selectBoardInfoById(state, id),
    );
    const BoardInfo = editing ? editBoardInfo : viewBoardInfo;
    return (
      <BoardInfoContext.Provider value={BoardInfo}>
        {children}
      </BoardInfoContext.Provider>
    );
  },
);
