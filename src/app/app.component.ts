import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { StoreData } from './models/store-data/storeData';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs'; 
import { FetchAllStores } from './actions/find-stores.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  // google maps zoom level
  zoom: number = 8;
  // map pin markers
  markers: marker[] = []
  // initial center position for the map
  lat: number = -33.870380;
  lng: number = 151.224970;
  searchQuery: string = '';
  address: string = '';
  searchInitiated: boolean = false;

  storeData: Observable<StoreData[]>; 
  store: Store<{ storeData: StoreData[] }>;

  constructor(store: Store<{ storeData: StoreData[] }>) {
    this.store = store;
  }

  search(e) {
    this.searchQuery = (e) ? e.target.value : this.searchQuery;
    this.markers = [];
    this.searchInitiated = true;
    if(this.searchQuery) {
      console.log(this.searchQuery, e);
      this.store.dispatch(new FetchAllStores(this.searchQuery));
      const reducerManager = this.store.pipe(select('storeData'))['reducerManager'];
      const storeLocData = reducerManager?.reducers?.storeLocData;
      for (let key in storeLocData) {
        if (storeLocData[key].zip.toString() === this.searchQuery) {
          this.markers.push(storeLocData[key]);
          this.address = storeLocData[key].address;
        }
      }
    }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

