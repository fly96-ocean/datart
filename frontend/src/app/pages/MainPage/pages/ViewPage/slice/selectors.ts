import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { listToTree } from 'utils/utils';
import { initialState } from '.';
import { ResourceTypes } from '../../PermissionPage/constants';
import {
  SelectViewFolderTreeProps,
  SelectViewTreeProps,
  ViewViewModel,
} from './types';

const selectDomain = (state: RootState) => state.view || initialState;

export const selectViews = createSelector(
  [selectDomain],
  viewState => viewState.views,
);

export const selectArchived = createSelector(
  [selectDomain],
  viewState => viewState.archived,
);

export const makeSelectViewTree = () =>
  createSelector(
    [
      selectViews,
      (_, props: SelectViewTreeProps) => props.getIcon,
      (_, props: SelectViewTreeProps) => props.getDisabled,
    ],
    (views, getIcon, getDisabled) =>
      listToTree(views, null, [ResourceTypes.View], { getIcon, getDisabled }),
  );

export const makeSelectViewFolderTree = () =>
  createSelector(
    [
      selectViews,
      (_, props: SelectViewFolderTreeProps) => props.id,
      (_, props: SelectViewFolderTreeProps) => props.getDisabled,
    ],
    (views, id, getDisabled) =>
      listToTree(
        views && views.filter(v => v.isFolder && v.id !== id),
        null,
        [ResourceTypes.View],
        { getDisabled },
      ),
  );

export const selectEditingViews = createSelector(
  [selectDomain],
  viewState => viewState.editingViews,
);

export const selectCurrentEditingViewKey = createSelector(
  [selectDomain],
  viewState => viewState.currentEditingView,
);

export const selectCurrentEditingView = createSelector(
  [selectEditingViews, selectCurrentEditingViewKey],
  (editingViews, key) => editingViews.find(v => v.id === key),
);

export const selectCurrentEditingViewAttr = createSelector(
  [
    selectCurrentEditingView,
    (_, props: { name: keyof ViewViewModel }) => props.name,
  ],
  (currentEditingView, name) => currentEditingView && currentEditingView[name],
);

export const selectSourceDatabases = createSelector(
  [selectDomain],
  viewState => viewState.sourceDatabases,
);

export const selectDatabases = createSelector(
  [selectSourceDatabases, (_, props: { name?: string }) => props.name],
  (sourceDatabases, name) => (name ? sourceDatabases[name] : void 0),
);

export const selectViewListLoading = createSelector(
  [selectDomain],
  viewState => viewState.viewListLoading,
);

export const selectArchivedListLoading = createSelector(
  [selectDomain],
  viewState => viewState.archivedListLoading,
);
