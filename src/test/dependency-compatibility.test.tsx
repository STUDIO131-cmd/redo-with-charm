import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Bar, BarChart } from "recharts";

afterEach(cleanup);

function RouteProbe() {
  const navigate = useNavigate();
  const location = useLocation();
  return <a href="/" onClick={(event) => { event.preventDefault(); navigate("/"); }} data-path={location.pathname}>Home</a>;
}

describe("dependency upgrade compatibility", () => {
  it("preserves the root route, wildcard fallback and return navigation", () => {
    render(<MemoryRouter initialEntries={["/missing-route"]}><Routes>
      <Route path="/" element={<RouteProbe />} />
      <Route path="*" element={<RouteProbe />} />
    </Routes></MemoryRouter>);
    expect(screen.getByRole("link").getAttribute("data-path")).toBe("/missing-route");
    fireEvent.click(screen.getByRole("link"));
    expect(screen.getByRole("link").getAttribute("data-path")).toBe("/");
  });

  it("keeps the chart engine rendering supplied numeric data", () => {
    const { container } = render(<BarChart width={400} height={240} data={[{ value: 10 }, { value: 20 }]}>
      <Bar dataKey="value" isAnimationActive={false} />
    </BarChart>);
    expect(container.querySelectorAll(".recharts-bar-rectangle")).toHaveLength(2);
  });
});