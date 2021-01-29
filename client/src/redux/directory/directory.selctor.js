import { createSelector } from 'reselect';

const selcetDirecoty = state=> state.directory;

export const selectDirectorySection = createSelector(
[selcetDirecoty],
(directory)=>directory.section
);