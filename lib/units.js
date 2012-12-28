var _ = require('underscore');
var data;

exports.getUnitDescription = function getUnitDescription (uuid) {
  var unit, unitlist;

  if (_.isArray(uuid)) {
    unitlist = [];
    _.each(uuid, function (u) {
      unitlist.push(getUnitDescription(u));
    });
    return unitlist;
  } 
    
  unit = _.where(data, {id: uuid});
  return unit[0].description || '';
}

data = [
  {
   "id": "urn:uuid:c2a18c35-f4e7-4297-b8de-1e0f1bd16cfb",
   "description": "Teaspoon"
  },
  {
   "id": "urn:uuid:1c8d43b3-6b19-43ab-95f0-803a37fdf4f1",
   "description": "Tablespoon"
  },
  {
   "id": "urn:uuid:dfad1d25-17ff-4201-bba0-0711e8b88c65",
   "description": "Cup"
  },
  {
   "id": "urn:uuid:33379b7d-cf8d-4fda-b99d-40372492aafd",
   "description": "Piece"
  },
  {
   "id": "urn:uuid:85562e85-ba37-4e4a-8400-da43170204a7",
   "description": "Each"
  },
  {
   "id": "urn:uuid:e0ad190a-d48b-443e-b637-e1cf05db2cdb",
   "description": "Ounce-weight"
  },
  {
   "id": "urn:uuid:3e8384f0-ea47-4fde-b7e1-a12747b28a30",
   "description": "Pound"
  },
  {
   "id": "urn:uuid:d3be684c-ebfa-4861-924f-8840600d1e84",
   "description": "Gram"
  },
  {
   "id": "urn:uuid:0e5f4dd2-3353-477f-9773-0ed116c93e2e",
   "description": "Kilogram"
  },
  {
   "id": "urn:uuid:20346378-1e1f-4d65-8833-6119228e8639",
   "description": "Fluid ounce"
  },
  {
   "id": "urn:uuid:a5b9f8c0-77fb-40c0-9018-43678710f8e7",
   "description": "Milliliter"
  },
  {
   "id": "urn:uuid:96b8744b-6db7-4448-b1fb-63a2c8695a0e",
   "description": "Liter"
  },
  {
   "id": "urn:uuid:4579233c-4dcd-46f6-a0ec-e2ff289068e4",
   "description": "Gallon"
  },
  {
   "id": "urn:uuid:3f2f0bb4-d5b2-4edd-be04-5371c666c3c2",
   "description": "Pint"
  },
  {
   "id": "urn:uuid:7c43861a-2df6-46bc-ab49-e831f767d69e",
   "description": "Quart"
  },
  {
   "id": "urn:uuid:9eda6d41-4fbb-4a97-b046-46aee8a086de",
   "description": "Milligram"
  },
  {
   "id": "urn:uuid:e1d79375-15db-4ed7-8ead-f64dc2319091",
   "description": "Microgram"
  },
  {
   "id": "urn:uuid:48aab0ea-2133-49bc-b516-3f33bc156a44",
   "description": "Intake"
  },
  {
   "id": "urn:uuid:e08f6190-c3a2-43ea-a109-8a5d819d3e99",
   "description": "Individual Cup"
  },
  {
   "id": "urn:uuid:c23f5be0-7cb4-4912-a008-ec21970cded8",
   "description": "Bottle"
  },
  {
   "id": "urn:uuid:ad6cbe95-5d48-440d-858d-d51261d983b5",
   "description": "Box"
  },
  {
   "id": "urn:uuid:89863254-21e1-4df0-8c1f-7960384d31f1",
   "description": "Can"
  },
  {
   "id": "urn:uuid:23c08c16-b29e-4132-bb8e-c4c6050fd590",
   "description": "Individual Bag"
  },
  {
   "id": "urn:uuid:e50ea8fe-7b89-442d-a715-1d5328e05b6d",
   "description": "Cube"
  },
  {
   "id": "urn:uuid:413fb89e-78d1-4a31-bdca-b5c67a6c1f5e",
   "description": "Jar"
  },
  {
   "id": "urn:uuid:6bac9dab-275f-4aac-95ba-e0a76d0d481b",
   "description": "Stick"
  },
  {
   "id": "urn:uuid:e5cdc689-9d9c-4042-918e-7fc6fd072c00",
   "description": "Tablet"
  },
  {
   "id": "urn:uuid:a2f86cff-af4a-4830-b2cb-4127502ce8c0",
   "description": "Bowl"
  },
  {
   "id": "urn:uuid:a7c3f08d-e9a9-43d1-b19b-f6c9077c06b0",
   "description": "Meal"
  },
  {
   "id": "urn:uuid:3340624b-f24d-4997-9ca6-11221b22008e",
   "description": "Slice"
  },
  {
   "id": "urn:uuid:c7b277ed-2059-4c33-940b-8e5c7aa5c922",
   "description": "Serving"
  },
  {
   "id": "urn:uuid:3c653ceb-bab8-48ba-b5b6-abf3abf8ff7b",
   "description": "300 Can"
  },
  {
   "id": "urn:uuid:a5e6af43-d9f0-4111-8ed3-7f3c200b2adf",
   "description": "303 Can"
  },
  {
   "id": "urn:uuid:ba454276-ad4e-4978-97bb-b14eab7de24c",
   "description": "401 Can"
  },
  {
   "id": "urn:uuid:1976182f-e999-4a85-ae82-57e8bccadaf9",
   "description": "404 Can"
  },
  {
   "id": "urn:uuid:3e82fd97-bb64-47b9-9f20-5343c9b8e766",
   "description": "Individual Packet"
  },
  {
   "id": "urn:uuid:f9218e61-ec72-438a-a5b4-95da706d1384",
   "description": "Scoop"
  },
  {
   "id": "urn:uuid:ea8e7aa6-1cfe-4ca8-860a-5475cdb34c8d",
   "description": "Junior"
  },
  {
   "id": "urn:uuid:1de2997f-41e6-42be-9dd8-dc56e15866b9",
   "description": "Regular"
  },
  {
   "id": "urn:uuid:17c776ff-ebfd-4c70-b614-af69ec4c3027",
   "description": "Senior"
  },
  {
   "id": "urn:uuid:f9295b4e-9fdf-4a95-b4aa-8137bc6b5a97",
   "description": "Small"
  },
  {
   "id": "urn:uuid:594f5eb0-2594-43b5-b8d2-71980820aa51",
   "description": "Medium"
  },
  {
   "id": "urn:uuid:e8403434-fd64-4151-bf26-0a55943f5ee8",
   "description": "Large"
  },
  {
   "id": "urn:uuid:6542699c-dd38-44b8-8f53-aacf0a5ab9e4",
   "description": "Extra Large"
  },
  {
   "id": "urn:uuid:1e0adab4-3bf6-41ff-b0c4-df2d565579b4",
   "description": "King"
  },
  {
   "id": "urn:uuid:7f50c842-5b10-472b-ad0e-ac2fb12e49d5",
   "description": "Value"
  },
  {
   "id": "urn:uuid:9950871e-8c0d-4011-8ecb-cc5c7ea651ea",
   "description": "Short"
  },
  {
   "id": "urn:uuid:efae2a6b-0889-40a4-aee5-067b1f84e2f4",
   "description": "Tall"
  },
  {
   "id": "urn:uuid:25d846da-ee7d-461e-ac48-879b4121ac90",
   "description": "Grande"
  },
  {
   "id": "urn:uuid:4c56a5e1-b4a1-418a-9c51-6252c308fc73",
   "description": "Venti"
  },
  {
   "id": "urn:uuid:7a5f5a69-72de-4cb2-a03e-3c6509334a50",
   "description": "Individual"
  },
  {
   "id": "urn:uuid:8e401dd0-52db-42ea-b83a-cb92ece93d25",
   "description": "Side"
  },
  {
   "id": "urn:uuid:73c72be2-a791-4c3d-a569-bb1161c8661b",
   "description": "Appetizer"
  },
  {
   "id": "urn:uuid:1c535625-8f2b-4531-95dd-28f91239d40c",
   "description": "Entree"
  },
  {
   "id": "urn:uuid:04ed21cc-a5b7-4b2c-a2c8-46ec62afa2cd",
   "description": "Capsule"
  },
  {
   "id": "urn:uuid:bd6d5072-27d2-4696-b1ad-9dba640c2da1",
   "description": "Kid"
  },
  {
   "id": "urn:uuid:198149f8-4499-487b-9761-2028cdae404f",
   "description": "Whole"
  },
  {
   "id": "urn:uuid:7a6b3fad-1d09-41bf-9399-f4fb91bbf9d4",
   "description": "Like It"
  },
  {
   "id": "urn:uuid:2885b7f4-c882-4e96-a816-93e2268f89a6",
   "description": "Love It"
  },
  {
   "id": "urn:uuid:d79c3502-8aa9-4759-a8be-c0a42b4056d2",
   "description": "Gotta Have It"
  },
  {
   "id": "urn:uuid:dc2c5b20-121b-431a-8fe7-9b857ab13d4f",
   "description": "Pat"
  },
  {
   "id": "urn:uuid:1a279ab6-e402-4e48-8084-9082f901f979",
   "description": "Pouch"
  },
  {
   "id": "urn:uuid:bac1c341-500f-49db-8b28-4dd17e979cfa",
   "description": "Drop"
  },
  {
   "id": "urn:uuid:c48cb6bc-b234-4eab-82a6-5e9a1a0b391d",
   "description": "Jumbo"
  },
  {
   "id": "urn:uuid:b0a23361-07e1-4dfd-9efd-0a4b8d4223fb",
   "description": "Super"
  },
  {
   "id": "urn:uuid:2f802335-65c6-45dd-869a-29cbeb32ff0b",
   "description": "Almost Jumbo"
  },
  {
   "id": "urn:uuid:8077bfbf-f4a8-4186-8111-e55ebadcea0d",
   "description": "Almost Super"
  },
  {
   "id": "urn:uuid:53ee7789-0f16-49d7-a5ac-18ba2e67fa75",
   "description": "Spray"
  },
  {
   "id": "urn:uuid:efacb809-36ef-49aa-913b-8fcc0f38fe4b",
   "description": "Second Spray"
  },
  {
   "id": "urn:uuid:52ffe29b-91f1-4e61-b89d-71306aca0bbb",
   "description": "Giant"
  },
  {
   "id": "urn:uuid:649a830e-76c1-404d-acd5-9ca82d9bfdb6",
   "description": "Overstuffed"
  },
  {
   "id": "urn:uuid:ad22c3fe-1db1-45f1-9c0a-bdf00569e02b",
   "description": "Topping"
  },
  {
   "id": "urn:uuid:6954ef62-e196-4824-8b70-9de685d75b72",
   "description": "Portion Cup"
  },
  {
   "id": "urn:uuid:fea6bc70-a915-4329-95f5-8e3d50cbbb92",
   "description": "Caplet"
  },
  {
   "id": "urn:uuid:c302bf3b-b918-4f27-abab-dee15ecd2814",
   "description": "Traditional"
  },
  {
   "id": "urn:uuid:02ecc423-96fe-4cc3-a726-e255bcbfeda6",
   "description": "Inches"
  },
  {
   "id": "urn:uuid:0b8713d3-6b0e-4445-ac33-f5743c588322",
   "description": "Trenta"
  },
  {
   "id": "urn:uuid:5206f518-a749-49f0-b1c6-d55ba44d822f",
   "description": "Snack"
  },
  {
   "id": "urn:uuid:4cbd7196-69c9-403f-940c-f6f567b7b7f8",
   "description": "Mini"
  },
  {
   "id": "urn:uuid:002e9ff0-2e9a-4c81-b034-b522140956c5",
   "description": "Wacky Pack"
  },
  {
   "id": "urn:uuid:0a926951-4559-46fa-add2-838850cbec9e",
   "description": "RT 44"
  },
  {
   "id": "urn:uuid:ce0140e7-92aa-4bb5-8548-71ed36738056",
   "description": "Cubic Inch"
  },
  {
   "id": "urn:uuid:2daae0db-ebad-423a-a747-8d8c33958ada",
   "description": "Thin Slice"
  },
  {
   "id": "urn:uuid:173ba519-00ec-42c0-a650-62b8771c1864",
   "description": "Ounce Package"
  },
  {
   "id": "urn:uuid:39d736b4-935e-4416-9c30-766819fff807",
   "description": "Ounce Jar"
  },
  {
   "id": "urn:uuid:34d94870-e715-4cf3-9d66-326dd5945a67",
   "description": "1\" sq x 1\/3\" Pat"
  },
  {
   "id": "urn:uuid:cd70ea89-2e0e-4309-b4c9-4ce7f9549c6f",
   "description": "Sheet"
  },
  {
   "id": "urn:uuid:5a1bbc90-afde-40bd-bddd-6e7fa692b372",
   "description": "Wedge"
  },
  {
   "id": "urn:uuid:de6d4b43-7bb8-47c3-83e0-c7cf3814a19b",
   "description": "Inch Slice"
  },
  {
   "id": "urn:uuid:fabdfe3f-dc58-44d8-b66d-e5090ff945c1",
   "description": "Basket"
  },
  {
   "id": "urn:uuid:7dc9f4a0-e593-4dfb-b20c-a355aa396fa7",
   "description": "Family"
  },
  {
   "id": "urn:uuid:9dcc3542-62b6-4cc4-bf6d-304435883870",
   "description": "Fluid Ounce Can"
  },
  {
   "id": "urn:uuid:40496220-90f4-4617-89c7-97226995edb4",
   "description": "#10 Can"
  },
  {
   "id": "urn:uuid:c675cf6c-23b1-4ace-9355-4e4d4e40ba88",
   "description": "3\" x 3\/4\" Slice"
  },
  {
   "id": "urn:uuid:74c89fbc-c754-405a-a214-4bbc27185cdb",
   "description": "As Entered"
  },
  {
   "id": "urn:uuid:0ac22aea-8d00-4d3f-868f-68e05a35513c",
   "description": "Soft Gel"
  },
  {
   "id": "urn:uuid:4e3e17e8-d011-489f-aeca-610615a94caf",
   "description": "Order"
  },
  {
   "id": "urn:uuid:c4b9e764-0808-4bce-b432-fde5001755d7",
   "description": "Thick Slice"
  },
  {
   "id": "urn:uuid:41a37ba8-5340-4273-9a67-fe8af5f9de93",
   "description": "Bag"
  },
  {
   "id": "urn:uuid:10e1a529-5e18-4aee-a6ce-48d413a86cea",
   "description": "Barrel"
  },
  {
   "id": "urn:uuid:d829f7df-b73a-4d0f-b8a2-babf1bd8995d",
   "description": "Carton"
  },
  {
   "id": "urn:uuid:96661bf9-faa2-422f-ac88-89949af181f6",
   "description": "Case"
  },
  {
   "id": "urn:uuid:1eab77c8-fc3e-4bbc-a796-3351dabb8fd6",
   "description": "Container"
  },
  {
   "id": "urn:uuid:f408b012-817d-42ce-aa25-b7ebb2e9116d",
   "description": "Dozen"
  },
  {
   "id": "urn:uuid:811c7133-12da-4369-98b5-3350bde3ac30",
   "description": "Package"
  },
  {
   "id": "urn:uuid:1f22031a-66d1-4fe9-98b4-71b2ee9968f8",
   "description": "Sack"
  },
  {
   "id": "urn:uuid:357d0527-c9af-4d67-8596-dd6fe8b8daba",
   "description": "Can\/Jar"
  },
  {
   "id": "urn:uuid:19ac8fe0-000d-4f38-acee-d43b25ae0974",
   "description": "Jar\/Bottle"
  },
  {
   "id": "urn:uuid:79330a43-126c-44e8-be16-115fac6b9fd6",
   "description": "2.25 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:ba51e1f3-44e8-444e-8a96-be8c8e6e690d",
   "description": "3.8 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:3ba65e49-7271-4cca-8054-7a267e951a54",
   "description": "4.25 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:293512c2-d70b-4ff2-9963-569cdc85342b",
   "description": "5 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:235f86f2-988f-4a61-94b1-05fa681a0719",
   "description": "5.75 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:d2250530-cb29-4e05-9165-2121a34b5568",
   "description": "6 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:b4f7c7e7-80b3-47fe-bdd7-a7fd1dab3f06",
   "description": "6.5 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:913e4106-b0bd-498d-ba8f-8ec1d0118772",
   "description": "7 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:5cb70d5e-fa5e-4464-869d-7df82c17dd8c",
   "description": "7.5 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:c42209ef-bc30-4709-b1a2-888a3d713216",
   "description": "8 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:f5b6205e-a3a3-485f-b4f0-49fd618f55a2",
   "description": "8.5 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:52d69a5c-9b3f-458c-b83f-ad84d42cf756",
   "description": "9 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:a586bde7-1931-479b-bd59-1559103d01c9",
   "description": "9.5 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:77eda0e9-fafc-45b6-ba9e-02197c60e23f",
   "description": "10 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:0b455778-3c70-48d6-8e2a-4099f80d67ce",
   "description": "10.5 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:c921f7d2-624f-4734-be2f-462cbccd726d",
   "description": "10.75 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:722e3fd8-2ce3-4506-8546-efde6c47b073",
   "description": "11 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:dfb90eea-cf05-4cf3-afed-ade6a1cfc6b8",
   "description": "12 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:2779ccde-1eb5-4aa6-a81b-dfaca73c797b",
   "description": "13 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:c5582f57-f14e-40de-ac24-2d633d5e1d40",
   "description": "14 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:96372192-f2e1-41c3-8275-743665184645",
   "description": "14.5 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:6eb92a36-699e-4486-8c7e-0a127ecb6e71",
   "description": "15 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:f73fd838-8f35-4fa9-a47f-803a782018b5",
   "description": "16 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:44cc1257-5f09-4ddb-a5f3-51d42676e587",
   "description": "17 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:18ec1298-29c1-4e22-8dd0-58a5ce97d9d8",
   "description": "18 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:e0a98963-4ced-4707-9ed6-f76866e78c56",
   "description": "19 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:62ffe5a6-c105-4cf1-8c20-8a1f53bea281",
   "description": "20 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:b3be2848-0c98-4391-9072-a099bd661273",
   "description": "21 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:98fe1659-0ac1-43a3-90c4-7e6108523183",
   "description": "22 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:4ad9ea44-ef07-4513-8c74-df75225e63cf",
   "description": "23 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:26099eab-5924-4637-892d-e6642e32aebd",
   "description": "24 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:c7d38ed5-bf9f-4d2f-9977-80894dfe9f52",
   "description": "25 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:84524a4d-69b6-47e6-a8a9-1b4b82385c7d",
   "description": "26 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:beb86ca1-7164-4373-a44d-0dd8f2fecc06",
   "description": "27 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:8d90f3e1-cf79-468c-9d75-5ff9f0fadf68",
   "description": "28 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:a59d5711-211c-4eaa-b873-38a5732a0884",
   "description": "29 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:7e9f8156-22a9-408c-b4f6-6f9b81ce79fb",
   "description": "30 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:d868427e-6342-462a-8bfd-c9747a3da055",
   "description": "31 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:cc1ac093-a455-4afb-a78c-70d762ba81fd",
   "description": "32 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:b515a4d6-7c97-45eb-880a-035f95a94403",
   "description": "36 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:7dd71318-ac26-478e-bd4f-a10c1a321c25",
   "description": "40 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:20752a03-44af-4400-9b45-050e18199e9e",
   "description": "50 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:d1de8121-57fc-46a3-bca3-443043e73116",
   "description": "6 lb 8 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:75670750-ffda-4069-befe-772076168365",
   "description": "6 lb 10 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:2d5833ef-8d2e-432b-9b23-ac88605f3cfe",
   "description": "6 lb 12 oz Can\/Jar"
  },
  {
   "id": "urn:uuid:8c9cbcad-f227-4ab6-8fb4-fdde7a6f3a06",
   "description": "8 fl oz Can\/Jar"
  },
  {
   "id": "urn:uuid:d579abb8-f478-4f7e-90de-ffc79ed95d74",
   "description": "10 fl oz Can\/Jar"
  },
  {
   "id": "urn:uuid:478a8423-7dcf-4c53-a042-a8fb0a93b868",
   "description": "12 fl oz Can\/Jar"
  },
  {
   "id": "urn:uuid:a277eed9-aaa8-4a3b-a94f-c8f3bfb85c7e",
   "description": "16 fl oz Can\/Jar"
  },
  {
   "id": "urn:uuid:92cb0145-2f48-4296-baf2-745b104b7bfe",
   "description": "46 fl oz Can\/Jar"
  },
  {
   "id": "urn:uuid:aa7f24c8-70a9-44ea-9b04-a7f1d5c7ccd3",
   "description": "1 Liter Can\/Jar"
  }
];