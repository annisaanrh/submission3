var dbPromised = idb.open("football-data", 1, function(upgradeDb) {
  var articlesObjectStore = upgradeDb.createObjectStore("teams", {
    keyPath: "id"
  });
  articlesObjectStore.createIndex("name", "website", { unique: false });
});