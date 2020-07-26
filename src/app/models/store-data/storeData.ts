export const storeLocData = [{
    lat: -33.870380,
    lng: 151.224970,
    label: 'A',
    draggable: true,
    zip: 2011,
    address: `81 Macleay Street, Sydney, New South Wales, 2011
    Potts Point Sydney Australia`
},
{
    lat: -33.816330,
    lng: 151.003372,
    label: 'B',
    draggable: false,
    zip: 2150,
    address: `182-184 Church Street, Sydney, New South Wales, 2150
    Parramatta Sydney Australia`
},
{
    lat: -33.42626,
    lng: 151.3436,
    label: 'C',
    draggable: true,
    zip: 2250,
    address: `42 William Street, Central Coast, New South Wales, 2250
    Gosford Central Coast Australia`
}
] as any;

// export default storeData;

export interface StoreData {
    storeData?: object;
    storeLocData?: any;
    error?: any;
}

