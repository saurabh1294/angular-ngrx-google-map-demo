import { createAction, props, Action } from '@ngrx/store';

export enum StoreLocationActionTypes {
  FetchStores = 'FetchStores'
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class FetchAllStores implements ActionEx {
  readonly type = StoreLocationActionTypes.FetchStores;

  constructor(public payload: any) {
  }
}
