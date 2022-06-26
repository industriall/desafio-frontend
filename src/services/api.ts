import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-iall.azurewebsites.net/api/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNDA3NTFiZS0zNWIyLTQ2OTQtOGQzNi02YmZlNzQ3ZWIyMTgiLCJ1bmlxdWVfbmFtZSI6InVzdWFyaW82QHRlc3RlLmNvbSIsInN1YiI6IjciLCJlbWFpbCI6InVzdWFyaW82QHRlc3RlLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiR0lOVDVRRzRUVFBYNVNERlFPQ01JS1BYSEdBTDJERlIiLCJleHAiOjE2NTYyNjU2ODF9.aak-GVh7IqbAm_W_3sILuHYoai541_h0qgLHUSyuZ5A`,
  },
});

export default api;
