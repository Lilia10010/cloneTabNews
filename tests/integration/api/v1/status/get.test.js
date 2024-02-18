test("GET to /api/v1/status should return 200", async () => {
  /* return request(app).get("/api/v1/status").expect(200); */
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
