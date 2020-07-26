import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { StoreData, storeLocData } from '../models/store-data/storeData';
import { StoreLocationActionTypes, ActionEx} from '../actions/find-stores.actions';


export interface State {
  storeData: StoreData | null;
  storeLocData: any;
  error?: any;
}

const initialStoreLocationsState : State = {
  storeData: null,
  storeLocData: null,
  error: null
};

export const reducers: ActionReducerMap<State> = {
  storeData: storeLocationReducer,
  storeLocData: storeLocData
};


export function storeLocationReducer(state: State = initialStoreLocationsState, action: ActionEx): State {
  switch (action.type) {
    case StoreLocationActionTypes.FetchStores:
      return {
        storeData: storeLocData as object,
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

export const selectStores = (state: State) => [state.storeData, ...state.storeLocData];

export const selectStoresError = (state: State) => state.storeData?.error;

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []; 

