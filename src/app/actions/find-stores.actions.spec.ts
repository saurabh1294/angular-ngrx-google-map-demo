import * as fromFindStores from './find-stores.actions';

describe('loadFindStoress', () => {
  it('should return an action', () => {
    expect(fromFindStores.loadFindStoress().type).toBe('[FindStores] Load FindStoress');
  });
});
