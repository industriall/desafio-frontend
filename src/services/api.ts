import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-iall.azurewebsites.net/api/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MWY5YzI1Ny0wMDBlLTRjZTctOTY1YS01N2I3ZmExNTRiOGUiLCJ1bmlxdWVfbmFtZSI6InVzdWFyaW82QHRlc3RlLmNvbSIsInN1YiI6IjciLCJlbWFpbCI6InVzdWFyaW82QHRlc3RlLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiR0lOVDVRRzRUVFBYNVNERlFPQ01JS1BYSEdBTDJERlIiLCJleHAiOjE2NTYzNjY0ODJ9.NL8VTDHTkDH2kZwCF4DiMG2mfoU3i6-8-UFSxHPcV3o`,
  },
});

export default api;
